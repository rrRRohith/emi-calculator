import React, { useState } from "react";

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [emi, setEmi] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const calculateEmi = () => {
    const P = parseFloat(principal);
    const R = parseFloat(interestRate) / 12 / 100; // Monthly interest rate
    const N = parseInt(loanTerm);

    // EMI formula
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(emi.toFixed(2));

    // Total amount paid over the loan term
    const totalPaid = emi * N;
    setTotalAmount(totalPaid.toFixed(2));

    // Total interest paid
    const totalInterestPaid = totalPaid - P;
    setTotalInterest(totalInterestPaid.toFixed(2));
  };

  // Disable button if any of the inputs is empty or zero
  const isButtonDisabled = !principal || !interestRate || !loanTerm;

  return (
    <div className="max-w-md w-full mx-auto mt-8 p-6 bg-white shadow-sm rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">EMI Calculator</h2>

      <div className="mb-4">
        <label htmlFor="principal" className="block text-sm font-medium text-gray-700">
          Loan Amount (₹)
        </label>
        <input
          type="number"
          id="principal"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          placeholder="Enter loan amount"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">
          Annual Interest Rate (%)
        </label>
        <input
          type="number"
          id="interestRate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          placeholder="Enter interest rate"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700">
          Loan Term (Months)
        </label>
        <input
          type="number"
          id="loanTerm"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          placeholder="Enter loan term in months"
        />
      </div>
      <button
        onClick={calculateEmi}
        className={`w-full py-2 mt-4 ${isButtonDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'} rounded-md`}
        disabled={isButtonDisabled}
      >
        Calculate EMI
      </button>
      {emi && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold">Loan Details</h3>
          <div className="mt-4">
            <p><strong>EMI:</strong> ₹ {emi}</p>
            <p><strong>Total Amount Paid:</strong> ₹ {totalAmount}</p>
            <p><strong>Total Interest Paid:</strong> ₹ {totalInterest}</p>
            <p><strong>Principal Amount:</strong> ₹ {principal}</p>
            <p><strong>Loan Term:</strong> {loanTerm} months</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmiCalculator;
