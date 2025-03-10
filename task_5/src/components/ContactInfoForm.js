import React, { useState } from "react";
import styles from "../styles/ContactInfoForm.module.css";

const ContactInfoForm = ({ onNext, formData }) => {
  const [skype, setSkype] = useState(formData?.skype || "");
  const [facebook, setFacebook] = useState(formData?.facebook || "");

  const handleNext = () => {
    if (!validateSkype(skype) || !validateFacebook(facebook)) {
      alert("Please fill in all fields according to the template.");
      return;
    }

    const data = {
      email: formData.email,
      skype: skype,
      facebook: facebook,
    };

    onNext(data);
  };

  const validateSkype = (skype) => {
    return skype.startsWith("@");
  };

  const validateFacebook = (facebook) => {
    return facebook.startsWith("@");
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.progressCircles}>
          <div className={styles.progressCircle}></div>
          <div className={styles.progressLine}></div>
          <div className={styles.progressCircleActive}></div>
          <div className={styles.progressLine}></div>
          <div className={styles.progressCircle}></div>
          
        </div>
    
    <div>        
        <h2 className={styles.title}>Profile info</h2>
        <p className={styles.description}>
          Fill in the data for profile. It will take a couple of minutes.
          <br />
          You only need a passport.
        </p> 
        </div>

        <div className={styles.borderedSection}>
        <h2 className={styles.title}>Contacts</h2>
        <p className={styles.description}>
          These contacts are used to inform about orders
        </p>

        <div className={styles.contactItem}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="25" height="25">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v25a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75" />
          </svg>
          {formData.email}
        </div>

        <div className={styles.contactItem}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="25" height="25">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
          </svg>
          {formData.phoneNumber}
        </div>

        <h2 className={styles.title}>Social network</h2>
        <p className={styles.description}>
          Indicate the desired communication method
        </p>

        <div className={styles.socialItem}>
            <div className={styles.socialIcon}>S</div>
            <select className={styles.socialSelect} value="Skype">
              <option>Skype</option>
            </select>
            <input
              type="text"
              className={styles.socialInput}
              placeholder="@your_skype_name"
              value={skype}
              onChange={(e) => setSkype(e.target.value)}
            />
          </div>

          <div className={styles.socialItem}>
            <div className={styles.socialIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-5 h-5"
                width="25"
                height="25"
              >
                <path d="M279.1 288l14.2 92.6h-88.9V512h-74.8V380.6h-61.1V288h61.1V221c0-59.6 44.4-88.3 91.1-88.3 26.3 0 39.5 1.9 39.5 1.9v88.7h-22.1c-29.3 0-38.3 18.2-38.3 36.6v63.8H279.1z" />
              </svg>
            </div>
            <select className={styles.socialSelect} value="Facebook">
              <option>Facebook</option>
            </select>
            <input
              type="text"
              className={styles.socialInput}
              placeholder="@your_facebook_name"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
          </div>

        <button className={styles.addMoreButton}>+ Add More</button>
        </div>
      </div>
      
      <button className={styles.nextButton} onClick={handleNext}>Go Next →</button>
    </div>
  );
};

export default ContactInfoForm;