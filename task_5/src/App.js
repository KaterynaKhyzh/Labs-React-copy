import React, { useState } from 'react';
import PhoneNumberForm from './components/PhoneNumberForm';
import ConfirmationCodeForm from './components/ConfirmationCodeForm';
import EmailPasswordForm from './components/EmailPasswordForm';
import ProfileInfoForm from './components/ProfileInfoForm';
import ContactInfoForm from './components/ContactInfoForm';
import AddressInfoForm from './components/AddressInfoForm';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleSave = (data) => {
    console.log(data); 
  };

  const renderStep = () => {
    switch (step) {
      case 1:
          return <PhoneNumberForm onNext={handleNext} />;
      case 2:
          return <ConfirmationCodeForm onNext={handleNext} formData={formData} />;
      case 3:
        return <EmailPasswordForm onNext={handleNext} formData={formData}  />;
      case 4:
        return <ProfileInfoForm onNext={handleNext} formData={formData} />;
      case 5:
        return <ContactInfoForm onNext={handleNext} formData={formData} />;
      case 6:
        return <AddressInfoForm onSave={handleSave} formData={formData} />;
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default App;