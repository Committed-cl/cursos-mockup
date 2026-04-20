import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import CourseView from './screens/CourseView';
import SlideView from './screens/SlideView';
import QuizView from './screens/QuizView';
import FinalResult from './screens/FinalResult';
import Certificates from './screens/Certificates';
import FinalExam from './screens/FinalExam';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course" element={<CourseView />} />
        <Route path="/slide/:slideId" element={<SlideView />} />
        <Route path="/quiz/:quizId" element={<QuizView />} />
        <Route path="/final-exam" element={<FinalExam />} />
        <Route path="/result" element={<FinalResult />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </BrowserRouter>
  );
}
