import { COURSE_SECTIONS } from '../data/courseContent';

// The course as one strict, linear sequence: every lámina, then the quiz that
// gates the next section (if any), then finally the prueba final. Nothing in
// this sequence is reachable until everything before it is completed —
// "no se pueden saltar los quiz, solo se habilita el siguiente módulo con el
// quiz aprobado".
export type FlowItem =
  | { type: 'slide'; id: number }
  | { type: 'quiz'; id: string }
  | { type: 'final-exam' };

function buildFlow(): FlowItem[] {
  const flow: FlowItem[] = [];
  for (const section of COURSE_SECTIONS) {
    for (const slideId of section.slides) flow.push({ type: 'slide', id: slideId });
    if (section.quizId) flow.push({ type: 'quiz', id: section.quizId });
  }
  flow.push({ type: 'final-exam' });
  return flow;
}

export const COURSE_FLOW: FlowItem[] = buildFlow();

interface ProgressCheck {
  isSlideRead: (slideId: number) => boolean;
  isQuizPassed: (quizId: string) => boolean;
  isFinalExamPassed: () => boolean;
}

function isItemDone(item: FlowItem, progress: ProgressCheck): boolean {
  if (item.type === 'slide') return progress.isSlideRead(item.id);
  if (item.type === 'quiz') return progress.isQuizPassed(item.id);
  return progress.isFinalExamPassed();
}

function isIndexUnlocked(index: number, progress: ProgressCheck): boolean {
  for (let i = 0; i < index; i++) {
    if (!isItemDone(COURSE_FLOW[i], progress)) return false;
  }
  return true;
}

export function isSlideUnlocked(slideId: number, progress: ProgressCheck): boolean {
  const index = COURSE_FLOW.findIndex((item) => item.type === 'slide' && item.id === slideId);
  return index === -1 ? false : isIndexUnlocked(index, progress);
}

export function isQuizUnlocked(quizId: string, progress: ProgressCheck): boolean {
  const index = COURSE_FLOW.findIndex((item) => item.type === 'quiz' && item.id === quizId);
  return index === -1 ? false : isIndexUnlocked(index, progress);
}

export function isFinalExamUnlocked(progress: ProgressCheck): boolean {
  const index = COURSE_FLOW.findIndex((item) => item.type === 'final-exam');
  return isIndexUnlocked(index, progress);
}

export function routeForFlowItem(item: FlowItem): string {
  if (item.type === 'slide') return `/slide/${item.id}`;
  if (item.type === 'quiz') return `/quiz/${item.id}`;
  return '/final-exam';
}

// What comes right after a given lámina — the next lámina, the quiz that
// gates the next section, or (after the very last lámina) the prueba final.
// Single source of truth so "Siguiente" can never skip a gate, including the
// one after the course's last lámina.
export function nextRouteAfterSlide(slideId: number): string | undefined {
  const index = COURSE_FLOW.findIndex((item) => item.type === 'slide' && item.id === slideId);
  if (index === -1 || index === COURSE_FLOW.length - 1) return undefined;
  return routeForFlowItem(COURSE_FLOW[index + 1]);
}

// The first thing the student hasn't finished yet — where "Continuar" should
// land. Once everything (including the prueba final) is done, there's
// nothing left to continue — send them to their certificate instead of back
// into the exam.
export function firstIncompleteRoute(progress: ProgressCheck): string {
  for (const item of COURSE_FLOW) {
    if (!isItemDone(item, progress)) {
      if (item.type === 'slide') return `/slide/${item.id}`;
      if (item.type === 'quiz') return `/quiz/${item.id}`;
      return '/final-exam';
    }
  }
  return '/certificates';
}

// Real "Progreso General": láminas leídas + quiz de módulo aprobados sobre
// el total del curso. La prueba final queda fuera — es la evaluación de
// cierre, no parte del contenido que se está "avanzando".
const COURSE_CONTENT_ITEMS = COURSE_FLOW.filter((item) => item.type !== 'final-exam');

export function courseProgressPercent(progress: ProgressCheck): number {
  const done = COURSE_CONTENT_ITEMS.filter((item) => isItemDone(item, progress)).length;
  return Math.round((done / COURSE_CONTENT_ITEMS.length) * 100);
}
