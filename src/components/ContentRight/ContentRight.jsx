import { FaCheckCircle } from "react-icons/fa";
const ContentRight = () => {
  return (
    <div className="col-lg-4">
      <div className="bg-[#EFF3F3] border-2 rounded-t-lg p-8 mb-4 px-8 ml-2">
        <p className="text-lg font-medium text-gray-700">Your Plan</p>
        <hr className="my-2" />
        <div className="mb-4">
          <ul className="list-none pl-0">
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-700 text-sm font-normal flex items-center"
              >
                <FaCheckCircle className="mr-2 text-gray-700" />
                Lorem Ipsum Dolor
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-700 text-sm font-normal flex items-center"
              >
                <FaCheckCircle className="mr-2 text-gray-700" />
                Lorem Ipsum Dolor ipsum
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-700 text-sm font-normal flex items-center"
              >
                <FaCheckCircle className="mr-2 text-gray-700" />
                Lorem Ipsum Dolor ipsum omit
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-700 text-sm font-normal flex items-center"
              >
                <FaCheckCircle className="mr-2 text-gray-700" />
                Lorem Ipsum Dolor ipsum omit Notor Choose
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-orange-500 text-center py-2 md:py-3 rounded-b-lg ml-2 sm:py-48 lg:py-4">
        <a
          href="#"
          className="text-white text-base sm:text-lg font-semibold block w-full"
        >
          Contact Sales
        </a>
      </div>
    </div>
  );
};

export default ContentRight;
