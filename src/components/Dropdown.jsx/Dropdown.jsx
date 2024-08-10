import React from "react";

const Dropdown = ({ label, options, defaultOption }) => {
  return (
    <div className="w-full max-w-xs mb-4">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <select className="select select-bordered w-full">
        <option disabled selected>
          {defaultOption}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const DropdownGroup = () => {
  const billingOptions = ["10", "10", "10"];
  const paymentOptions = ["Credit Card", "PayPal", "Bank Transfer"];
  const countryOptions = ["USA", "Canada", "UK", "Australia"];

  return (
    <div className="p-4 space-y-4">
      <Dropdown
        label="How many Manage do you want"
        options={billingOptions}
        defaultOption="10"
      />
      <Dropdown
        label="How many employeer do you need"
        options={paymentOptions}
        defaultOption="10"
      />
      <Dropdown
        label="How many storage do you need"
        options={countryOptions}
        defaultOption="10"
      />
    </div>
  );
};

export default DropdownGroup;
