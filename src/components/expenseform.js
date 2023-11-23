import React, { useState } from 'react';

const ExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement local storage logic to store expenses here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={handleAmountChange}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
