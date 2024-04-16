//legacy code
import { useState } from "react";
import "./SurveryFormStyle.css";

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    interests: [],
    comments: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
            ? [...prevData[name], value]
            : prevData[name].filter((item) => item !== value)
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="survey-container">
      <h1>Survey Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label>Gender:</label>
        <div className="genderChoices">
          <div className="gemderChoice">
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleInputChange}
            />
          </div>
          <div className="gemderChoice">
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleInputChange}
            />
          </div>
          <div className="gemderChoice">
            <label htmlFor="other">Other</label>
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              checked={formData.gender === "other"}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <label>Interests:</label>
        <div className="interests">
          <div className="interest">
            <label htmlFor="coding">Coding</label>
            <input
              type="checkbox"
              id="coding"
              name="interests"
              value="coding"
              checked={formData.interests.includes("coding")}
              onChange={handleInputChange}
            />
          </div>
          <div className="interest">
            <label htmlFor="reading">Reading</label>
            <input
              type="checkbox"
              id="reading"
              name="interests"
              value="reading"
              checked={formData.interests.includes("reading")}
              onChange={handleInputChange}
            />
          </div>
          <div className="interest">
            <label htmlFor="traveling">Traveling</label>
            <input
              type="checkbox"
              id="traveling"
              name="interests"
              value="traveling"
              checked={formData.interests.includes("traveling")}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <label htmlFor="comments">Comments:</label>
        <textarea
          id="comments"
          name="comments"
          rows="4"
          value={formData.comments}
          onChange={handleInputChange}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SurveyForm;
