import { useState } from 'react';

const useForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    let isValid = true;

    if (!firstName.trim()) {
      setError('First name cannot be empty');
      isValid = false;
    }

    if (!lastName.trim()) {
      setError('Last name cannot be empty');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email address');
      isValid = false;
    }

    if (password.length < 5 || !/[0-9%$@]/.test(password)) {
      setError('Password must be at least 5 characters long and contain at least one number or special character');
      isValid = false;
    }

    if (confirmPassword !== password) {
      setError('Passwords do not match');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');
    }
  };

  return {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    error,
    handleSubmit,
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setConfirmPassword,
  };
};

export default useForm;
