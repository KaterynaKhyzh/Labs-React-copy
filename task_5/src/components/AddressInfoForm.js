import React, { useState } from 'react';
import styles from '../styles/AddressInfoForm.module.css';
import useCountryCity from './useCountryCity';

const AddressInfoForm = ({ onSave, formData }) => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');
  const { countries, cities } = useCountryCity(country);

  const handleSave = () => {
    const addressData = {
      address,
      city,
      country,
      zipCode,
    };
    const allData = { ...formData, addressData };
    console.log(allData); 
    onSave(allData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.progressCircles}>
          <div className={styles.progressCircle}></div>
          <div className={styles.progressLine}></div>
          <div className={styles.progressCircle}></div>
          <div className={styles.progressLine}></div>
          <div className={styles.progressCircleActive}></div>
        </div>

        <h2 className={styles.title}>Profile info</h2>
        <p className={styles.description}>
          Fill in the data for profile. It will take a couple of minutes.
          <br />
          You only need a passport.
        </p>

        <div className={styles.borderedSection}>
        <h2 className={styles.title}>Delivery address</h2>
        <p className={styles.description}>Used for shipping orders</p>

        <div className={styles.inputGroup}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="city">City</label>
          <select id="city" value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">Select City</option>
            {cities &&
              cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="country">Country</label>
          <select id="country" value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.iso2} value={country.country}>
                {country.country}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="zipCode">Zip code</label>
          <input type="text" id="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
        </div>
        </div>

        <button className={styles.saveButton} onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AddressInfoForm;