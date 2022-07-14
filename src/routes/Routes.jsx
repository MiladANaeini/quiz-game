import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "components/common/Loading";

const HomePage = React.lazy(() =>
  import("components/pages/homePage")
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes basename="/home">
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
