import React, { useState, useRef } from 'react';
import styles from './SignupPage.module.css';

const SignupPage = () => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const selectedOptionRef = useRef(null);
  const termsAcceptedRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    selectedOption: '',
    termsAccepted: false,
  });

  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    console.log(e.target.value);

    setFormData((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming signup is successful
    setSignupSuccess(true);
  };

  const handleFocus = (ref) => {
    ref.current.focus();
  };

  return (
    <div>
      <div className={styles.signup_page}>
        <form className={styles.signup_form} onSubmit={handleSubmit}>
          <h2>Create an Account</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.signup_input}
            ref={nameInputRef}
            onFocus={() => handleFocus(nameInputRef)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.signup_input}
            ref={emailInputRef}
            onFocus={() => handleFocus(emailInputRef)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className={styles.signup_input}
            ref={passwordInputRef}
            onFocus={() => handleFocus(passwordInputRef)}
          />
          <select
            name="selectedOption"
            value={formData.selectedOption}
            onChange={handleChange}
            className={styles.signup_input}
            required
            ref={selectedOptionRef}
            onFocus={() => handleFocus(selectedOptionRef)}
          >
            <option value="">Select an option</option>
            <option value="option1">Batsman</option>
            <option value="option2">Bowler</option>
            <option value="option2">All Rounder</option>
          </select>
          <label className={styles.signup_checkbox_label}>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
              className={styles.signup_checkbox}
              ref={termsAcceptedRef}
              onFocus={() => handleFocus(termsAcceptedRef)}
            />
            Accept Terms and Conditions
          </label>
          <button type="submit" className={styles.signup_button}>
            Sign Up
          </button>
          {signupSuccess && <p className={styles.message}>Signed up successfully!</p>}
          
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
