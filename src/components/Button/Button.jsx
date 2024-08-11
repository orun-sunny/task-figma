import { FaArrowLeft } from "react-icons/fa";

const Button = () => {
  const buttons = [
    { label: "Billed quarterly", className: "bg-blue-800 text-white" },
    { label: "Billed monthly", className: "bg-[#EFF5F5]" },
    { label: "Billed yearly", className: "bg-[#EFF5F5]" },
  ];

  return (
    <section>
      <div className="mx-auto px-4 py-8">
        <div className="lg:flex">
          <div className=" bg-white shadow-sm p-6 rounded mb-8">
            <div className="mb-4 flex items-center">
              <FaArrowLeft className="mr-2" />
              <p className="text-lg font-semibold">Customize Your Plan</p>
            </div>
            <hr className="mb-4" />
            <div className="mb-4">
              <span className="block text-xl font-medium">
                Choose Billing Type
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`btn btn-wide ${button.className} py-2 px-4 text-center`}
                >
                  {button.label}
                </button>
              ))}
            </div>
            {/* <h1 className="text-xl font-bold mb-4 py-2">
              Choosing Billing Type
            </h1> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Button;
