// import { useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
// import SurveyForm from "./components/SurveyForm/SurveyForm";
import NotFound from "./components/NotFound/NotFound";
import SurveyCreator from "./components/SurveyCreator/SurveyCreator";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surverys" />
        <Route path="/surveys/create" element={<SurveyCreator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
