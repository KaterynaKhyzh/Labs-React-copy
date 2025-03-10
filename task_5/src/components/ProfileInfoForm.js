import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../styles/ProfileInfoForm.module.css";
import useCountryCity from "./useCountryCity";

const ProfileInfoForm = ({ onNext, formData }) => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [itin, setItin] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const { countries, cities } = useCountryCity(country);

  const formatItin = (value) => {
    const cleaned = value.replace(/\D/g, "");
    let formatted = "";
    if (cleaned.length > 0) {
      formatted += cleaned.substring(0, 3);
    }
    if (cleaned.length > 3) {
      formatted += "-" + cleaned.substring(3, 5);
    }
    if (cleaned.length > 5) {
      formatted += "-" + cleaned.substring(5, 9);
    }
    return formatted;
  };

  const handleItinChange = (e) => {
    const formattedItin = formatItin(e.target.value);
    setItin(formattedItin);
  };

  const handleNext = () => {
    if (
      !firstName ||
      !secondName ||
      !country ||
      !city ||
      !itin ||
      !termsChecked
    ) {
      alert("Please fill in all fields and agree to the Terms of Use.");
      return;
    }
    const data = {
      firstName,
      secondName,
      dateOfBirth,
      country,
      city,
      itin,
    };
    onNext(data);
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

        <h2 className={styles.title}>Profile info</h2>
        <p className={styles.description}>
          Fill in the data for profile. It will take a couple of minutes.
          <br />
          You only need a passport.
        </p>

        <div className={styles.agreeTerms}>
          <input
            type="checkbox"
            id="terms"
            checked={termsChecked}
            onChange={() => setTermsChecked(!termsChecked)}
          />
          <label htmlFor="terms">
            I agree with <a href="">Terms of use</a>
          </label>
        </div>

        <div className={styles.personalData}>
          <h3>Personal data</h3>
          <p>Specify exactly as in your passport</p>

          <div className={styles.inputGroup}>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Alexander"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="secondName">Second name</label>
            <input
              type="text"
              id="secondName"
              placeholder="Smith"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
            />
          </div>

          <div className={styles.datePlace}>
            <div className={styles.inputGroup}>
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <DatePicker
                selected={dateOfBirth}
                onChange={(date) => setDateOfBirth(date)}
                dateFormat="dd.MM.yyyy"
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="country">Country</label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.iso2} value={country.country}>
                    {country.country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="city">City</label>
            <select
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Select City</option>
              {cities &&
                cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>

          <label>Your ITIN</label>
          <div className={styles.itin}>
            <input
              type="text"
              placeholder="123-45-678"
              value={itin}
              onChange={handleItinChange}
            />
          </div>
        </div>

        <button className={styles.nextButton} onClick={handleNext}>
          Go Next →
        </button>
      </div>
    </div>
  );
};

export default ProfileInfoForm;