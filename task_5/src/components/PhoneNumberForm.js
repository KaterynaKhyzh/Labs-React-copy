import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from '../styles/PhoneNumberForm.module.css';

const PhoneNumberForm = ({ onNext }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [showPrivacyMessage, setShowPrivacyMessage] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryData = response.data.map(country => ({
          name: country.name.common,
          code: country.cca2,
          callingCode: country.idd.root + (country.idd.suffixes? country.idd.suffixes[0] : "")
        }));
        setCountries(countryData);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '');
    let formatted = '';

    if (cleaned.length > 0) {
      formatted += cleaned.substring(0, 3);
    }
    if (cleaned.length > 3) {
      formatted += ' ' + cleaned.substring(3, 6);
    }
    if (cleaned.length > 6) {
      formatted += '-' + cleaned.substring(6, 10);
    }

    return formatted;
  };

  const handleChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setValue('phoneNumber', formattedPhoneNumber);
  };

  const onSubmit = (data) => {
    onNext(data);
  };

  const handleClosePrivacyMessage = () => {
    setShowPrivacyMessage(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.progressCircles}>
          <div className={styles.progressCircleActive}></div>
          <div className={styles.progressLine}></div>
          <div className={styles.progressCircle}></div>
          <div className={styles.progressLine}></div>
          <div className={styles.progressCircle}></div>
        </div>
        <h2 className={styles.title}>Registration</h2>
        <p className={styles.description}>
          Fill in the registration data. It will take a couple of minutes.
          <br />
          All you need is a phone number and e-mail.
        </p>
        {showPrivacyMessage && (
          <div className={styles.privacyMessage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <p>
              We take privacy issues seriously. You can be sure that your personal data is securely protected.
            </p>
            <button onClick={handleClosePrivacyMessage} className={styles.closeButton}>
              ×
            </button>
          </div>
        )}

        <div className={styles.inputContainer}>
          <label className={styles.label}>Enter your phone number</label>
          <div className={styles.inputWrapper}>
            <select {...register('countryCode')} className={styles.select} defaultValue="+1">
              {countries.map(country => (
                <option key={country.code} value={country.callingCode}>
                  {country.name} ({country.callingCode})
                </option>
              ))}
            </select>
            <input
              {...register('phoneNumber', { required: 'Phone number is required' })}
              className={styles.input}
              placeholder="555 555-1234"
              onChange={handleChange}
            />
          </div>
          {errors.phoneNumber && <p className={styles.error}>{errors.phoneNumber.message}</p>}
        </div>
        <button type="submit" className={styles.button} onClick={handleSubmit(onSubmit)}>
          Send Code
        </button>
      </div>
    </div>
  );
};

export default PhoneNumberForm;