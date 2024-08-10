const Button = () => {
  const buttons = [
    { label: "Billed quarterly", className: "bg-blue-800 text-white" },
    { label: "Billed monthly", className: "bg-[#EFF5F5]" },
    { label: "Billed yearly", className: "bg-[#EFF5F5]" },
  ];

  return (
    <div className="mx-auto">
      <h1 className="text-2xl font-bold mb-4 ">Choosing Billing Type</h1>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {buttons.map((button, index) => (
          <button key={index} className={`btn btn-wide ${button.className}`}>
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Button;
