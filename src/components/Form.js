import React from 'react';
import useForm from './hooks/useForm';

const Form = () => {
  const {
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
  } = useForm();

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      {error && <p>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
