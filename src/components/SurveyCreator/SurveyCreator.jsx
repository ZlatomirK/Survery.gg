import { useState } from "react";
import "./SurveryCreatorStyles.css";

const SurveyCreator = () => {
  const [surveyTitle, setSurveyTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    text: "",
    type: "text",
    options: [""], // Options for radio or checkbox type questions
  });

  const handleTitleChange = (e) => {
    setSurveyTitle(e.target.value);
  };

  const handleQuestionTextChange = (e) => {
    setCurrentQuestion((prevQuestion) => ({
      ...prevQuestion,
      text: e.target.value,
    }));
  };

  const handleQuestionTypeChange = (e) => {
    setCurrentQuestion((prevQuestion) => ({
      ...prevQuestion,
      type: e.target.value,
      options:
        e.target.value === "radio" || e.target.value === "checkbox" ? [""] : [],
    }));
  };

  const handleAddOption = () => {
    setCurrentQuestion((prevQuestion) => ({
      ...prevQuestion,
      options: [...prevQuestion.options, ""],
    }));
  };

  const handleOptionTextChange = (index, e) => {
    setCurrentQuestion((prevQuestion) => {
      const updatedOptions = [...prevQuestion.options];
      updatedOptions[index] = e.target.value;
      return { ...prevQuestion, options: updatedOptions };
    });
  };

  const handleAddQuestion = () => {
    setQuestions((prevQuestions) => [...prevQuestions, currentQuestion]);
    setCurrentQuestion({
      text: "",
      type: "text",
      options: [""],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the submitted survey data
    console.log("Survey Title:", surveyTitle);
    console.log("Survey Questions:", questions);
  };

  return (
    <div className="survey-container">
      <h2>Create Custom Survey</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="surveyTitle">Survey Title:</label>
        <input
          type="text"
          id="surveyTitle"
          value={surveyTitle}
          onChange={handleTitleChange}
          required
        />

        <div>
          <label htmlFor="questionText">Question Text:</label>
          <input
            type="text"
            id="questionText"
            value={currentQuestion.text}
            onChange={handleQuestionTextChange}
          />

          <label htmlFor="questionType">Select Question Type:</label>
          <select
            id="questionType"
            value={currentQuestion.type}
            onChange={handleQuestionTypeChange}
          >
            <option value="text">Text</option>
            <option value="checkbox">Checkbox</option>
            <option value="radio">Radio</option>
            <option value="textarea">Textarea</option>
          </select>

          {currentQuestion.type === "radio" ||
          currentQuestion.type === "checkbox" ? (
            <div>
              <label htmlFor="options">Options:</label>
              {currentQuestion.options.map((option, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionTextChange(index, e)}
                    placeholder={`Option ${index + 1}`}
                  />
                </div>
              ))}
              <button type="button" onClick={handleAddOption}>
                Add Option
              </button>
            </div>
          ) : null}

          <button type="button" onClick={handleAddQuestion}>
            Add Question
          </button>
        </div>

        <div>
          <h3>Survey Questions:</h3>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                {question.text} ({question.type})
              </li>
            ))}
          </ul>
        </div>

        <button type="submit">Submit Survey</button>
      </form>
    </div>
  );
};

export default SurveyCreator;
