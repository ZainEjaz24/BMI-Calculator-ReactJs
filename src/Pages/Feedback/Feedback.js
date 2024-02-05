import React, { useState } from "react";
import "./Feedback.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const submitFeedback = () => {
    const newFeedback = {
      name: name,
      email: email,
      feedback: feedbackText,
    };

    // Update feedback list state
    setFeedbackList((prevFeedbackList) => [...prevFeedbackList, newFeedback]);

    // Clear form fields
    setName("");
    setEmail("");
    setFeedbackText("");
  };

  return (
    <div>
      <Header />
      <form id="feedbackForm">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          name="feedback"
          rows="4"
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
          required
        ></textarea>

        <button type="button" onClick={submitFeedback}>
          Submit Feedback
        </button>
      </form>

      <h2>Previous Feedback</h2>
      <ul id="feedbackList">
        {feedbackList.map((feedback, index) => (
          <li key={index}>
            <strong>{feedback.name}</strong> ({feedback.email}):{" "}
            {feedback.feedback}
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default Feedback;
