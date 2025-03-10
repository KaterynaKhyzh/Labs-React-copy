import React, { useState } from 'react';
import styles from '../styles/ConfirmationCodeForm.module.css';
import EmailPasswordForm from './EmailPasswordForm';

const ConfirmationCodeForm = ({ onNext, formData }) => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [showEmailPasswordForm, setShowEmailPasswordForm] = useState(false);

  const handleConfirm = () => {
    if (confirmationCode === '1234') {
      setShowEmailPasswordForm(true);
      onNext();
    } else {
      alert('Incorrect confirmation code');
    }
  };

  if (showEmailPasswordForm) {
    return <EmailPasswordForm />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.progressCircles}>
          <div className={styles.progressCircleActive}></div>
          <div className={styles.progressLine}></div>
          <div className={styles.progressCircleActive}></div>
          <div className={styles.progressLine}></div>
          <div className={styles.progressCircle}></div>
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
            Number not confirmed yet
          </div>
          <div className={styles.editIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.08-2.687a4.5 4.5 0 0 1 1.13-1.897l8.93-8.93Zm3.784 11.973a.75 75 0 0 1-.03 1.06l-1.25 1.25a.75.75 0 1 1-1.06-1.06l1.25-1.25a.75.75 0 0 1 1.06.03Z" />
            </svg>
          </div>
        </div>

         <div className={styles.confirmationCodeContainer}>
            <label className={styles.label}>Confirmation code</label>
            <p className={styles.confirmationMessage}>
            Confirm phone number with code from sms message
          </p>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.input}
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
          />
        </div>
          <div className={styles.resendCode}>
            Send again
          </div>
        </div>

        <button className={styles.confirmButton} onClick={handleConfirm}>
        Confirm
      </button>
      </div>
    </div>
  );
};

export default ConfirmationCodeForm;