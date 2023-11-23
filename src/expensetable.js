import React from 'react';

const ExpenseTable = ({ expenses }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.time.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
