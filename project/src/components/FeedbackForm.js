// components/FeedbackForm.js
import React from 'react';
import '../css/FeedbackForm.css';

const FeedbackForm = () => {
  return (
    <section className="feedback-form">
      <h2>Still have questions?</h2>
      <p>Fill out the form and we will contact you!</p>
      <form className="form">
        <input type="email" placeholder="Email" className="form-input" />
        <input type="text" placeholder="Comment or question" className="form-input" />
        <button type="submit" className="send-btn">Send</button>
      </form>
    </section>
  );
};

export default FeedbackForm;
