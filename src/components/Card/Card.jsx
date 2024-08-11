import { FaUsers } from "react-icons/fa";

const Card = ({ title, content, buttonText, Icon }) => {
  return (
    <div className="card bg-[#EFF5F5] text-[#474848] w-full h-20 p-6">
      <div className="flex items-start mb-2">
        <div className="flex-1">
          <span className="text-gray-700 text-sm font-medium flex items-center">
            <Icon className="text-2xl mr-2" />
            <h2 className="font-semibold">{title}</h2>
          </span>
          <p className="text-xs text-gray-600">{content}</p>
        </div>
        <div className="ml-4">
          <button className="px-4 py-2 text-white border flex">
            <input
              type="checkbox"
              id="employee-module"
              className="form-checkbox p-8"
            />
            <label
              htmlFor="employee-module"
              className="text-sm font-medium text-gray-700 ml-2"
            >
              Add Module
            </label>
          </button>
        </div>
      </div>
      {/* <div className=" p-6 rounded-lg shadow-lg">
        <div className="flex items-start">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <Icon className="text-2xl mr-2" />
              <h2 className="text-xl font-bold">{title}</h2>
            </div>
            <p>{content}</p>
          </div>
          <div className="flex-shrink-1">
            <button className="px-4 py-2 pb-4 mt-6 bg-blue-500 text-white rounded flex">
              <input type="checkbox" defaultChecked className="checkbox p-2" />
              <span>{buttonText}</span>
            </button>
          </div>
        </div>
        <p className="text-gray-700 mt-4">This is my cool new card!</p>
      </div> */}
    </div>
  );
};

export default Card;
