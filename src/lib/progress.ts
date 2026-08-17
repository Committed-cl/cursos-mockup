import { useSyncExternalStore } from 'react';

// Client-side progress tracking for the demo (no backend). Persisted to
// localStorage so it survives navigation and page reloads, and seeded with
// the same "35% avanzado, hasta la Lámina 12" story used elsewhere in the
// demo (Dashboard, CourseView "Continuar donde lo dejé").
const STORAGE_KEY = 'soldadura-progress';
const EVENT_NAME = 'soldadura-progress-change';

const DEFAULT_READ_SLIDES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const DEFAULT_PASSED_QUIZZES = ['module-1'];
const DEFAULT_FINAL_EXAM_PASSED = false;

interface StoredProgress {
  readSlides: number[];
  passedQuizzes: string[];
  finalExamPassed: boolean;
}

function readStorage(): StoredProgress {
  if (typeof window === 'undefined') {
    return { readSlides: DEFAULT_READ_SLIDES, passedQuizzes: DEFAULT_PASSED_QUIZZES, finalExamPassed: DEFAULT_FINAL_EXAM_PASSED };
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { readSlides: DEFAULT_READ_SLIDES, passedQuizzes: DEFAULT_PASSED_QUIZZES, finalExamPassed: DEFAULT_FINAL_EXAM_PASSED };
    const parsed = JSON.parse(raw);
    return {
      readSlides: Array.isArray(parsed.readSlides) ? parsed.readSlides : DEFAULT_READ_SLIDES,
      passedQuizzes: Array.isArray(parsed.passedQuizzes) ? parsed.passedQuizzes : DEFAULT_PASSED_QUIZZES,
      finalExamPassed: typeof parsed.finalExamPassed === 'boolean' ? parsed.finalExamPassed : DEFAULT_FINAL_EXAM_PASSED
    };
  } catch {
    return { readSlides: DEFAULT_READ_SLIDES, passedQuizzes: DEFAULT_PASSED_QUIZZES, finalExamPassed: DEFAULT_FINAL_EXAM_PASSED };
  }
}

function writeStorage(data: StoredProgress) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  window.dispatchEvent(new Event(EVENT_NAME));
}

let cached: { readSlides: Set<number>; passedQuizzes: Set<string>; finalExamPassed: boolean } | null = null;

function getSnapshot() {
  if (!cached) {
    const stored = readStorage();
    cached = { readSlides: new Set(stored.readSlides), passedQuizzes: new Set(stored.passedQuizzes), finalExamPassed: stored.finalExamPassed };
  }
  return cached;
}

function subscribe(callback: () => void) {
  const handler = () => {
    cached = null;
    callback();
  };
  window.addEventListener(EVENT_NAME, handler);
  window.addEventListener('storage', handler);
  return () => {
    window.removeEventListener(EVENT_NAME, handler);
    window.removeEventListener('storage', handler);
  };
}

export function markSlideRead(slideId: number) {
  const stored = readStorage();
  if (stored.readSlides.includes(slideId)) return;
  writeStorage({ ...stored, readSlides: [...stored.readSlides, slideId] });
}

export function markQuizPassed(quizId: string) {
  const stored = readStorage();
  if (stored.passedQuizzes.includes(quizId)) return;
  writeStorage({ ...stored, passedQuizzes: [...stored.passedQuizzes, quizId] });
}

export function markFinalExamPassed() {
  const stored = readStorage();
  if (stored.finalExamPassed) return;
  writeStorage({ ...stored, finalExamPassed: true });
}

export function useProgress() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  return {
    isSlideRead: (slideId: number) => snapshot.readSlides.has(slideId),
    isQuizPassed: (quizId: string) => snapshot.passedQuizzes.has(quizId),
    isFinalExamPassed: () => snapshot.finalExamPassed
  };
}
