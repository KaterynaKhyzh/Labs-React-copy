import React, { useState } from 'react';
import styles from '../styles/EmailPasswordForm.module.css';
import ProfileInfoForm from './ProfileInfoForm';

const EmailPasswordForm = ({ onNext, formData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showProfileInfoForm, setShowProfileInfoForm] = useState(false);

  const handleRegister = () => {
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Email is required');
      return;
    }

    if (!password) {
      setPasswordError('Password is required');
      return;
    }

    const data = {
      email,
      password,
    };
    onNext(data);
    setShowProfileInfoForm(true);
  };

  if (showProfileInfoForm) {
    return <ProfileInfoForm onNext={onNext} formData={formData} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.progressCircles}>
          <div className={styles.progressCircleActive}></div>
          <div className={styles.progressLine}></div>
          <div className={styles.progressCircleActive}></div>
          <div className={styles.progressLine}></div>
          <div className={styles.progressCircleActive}></div>
        </div>

        <h2 className={styles.title}>Registration</h2>
        <p className={styles.description}>
          Fill in the registration data. It will take a couple of minutes.
          <br />
          All you need is a phone number and e-mail.
        </p>

        <div className={styles.phoneNumberContainer}>
          <div className={styles.phoneNumber}>
            {formData.countryCode} {formData.phoneNumber}
          </div>
          <div className={styles.phoneNumberStatus}>
            Number confirmed
          </div>
        </div>

        <div className={styles.emailContainer}>
          <label className={styles.label}>Enter your email</label>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              className={styles.input}
              placeholder="alex_manager@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {emailError && <p className={styles.error}>{emailError}</p>}
        </div>

        <div className={styles.passwordContainer}>
          <label className={styles.label}>Set a password</label>
          <div className={styles.inputWrapper}>
            <input
              type="password"
              className={styles.input}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.passwordToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.514 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.183a1.013 1.013 0 0 1 0 .639c-1.39 4.809-5.326 7.816-9.963 7.816C7.36 19.5 3.423 16.493 2.036 12.322Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
            </div>
          </div>
          {password && <div className={styles.passwordStatus}>Good password</div>}
          {passwordError && <p className={styles.error}>{passwordError}</p>}
        </div>

        <button className={styles.registerButton} onClick={handleRegister}>
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EmailPasswordForm;