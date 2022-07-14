import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "components/common/Loading";

const HomePage = React.lazy(() => import("components/pages/HomePage"));
const QuizePage = React.lazy(() => import("components/pages/QuizPage"));
const ResultPage = React.lazy(() => import("components/pages/ResultPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes basename="/home">
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/quiz" element={<QuizePage />}></Route>
        <Route path="/result" element={<ResultPage />}></Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
