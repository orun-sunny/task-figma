import {
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaSkype,
  FaInstagram,
} from "react-icons/fa";
import logo from "../../assets/images/logo.png"; // Adjust path as needed

const Footer = () => {
  return (
    <section className="bg-[#253053] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap lg:flex-nowrap">
          {/* Footer Links */}
          <div className="lg:w-2/3 flex flex-wrap">
            {/* Software Links */}
            <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
              <div className="text-white">
                <span className="block text-lg font-normal mb-6">Software</span>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-white text-base">
                      Features overview
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-base">
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-base">
                      Free time tracking app
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-base">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-base">
                      Download app
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-base">
                      Demo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-base">
                      Time tracking API
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-base">
                      Request a feature
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Learning Center Links */}
            <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
              <div className="text-white">
                <span className="block text-lg font-normal mb-6">
                  Learning center
                </span>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-white text-base">
                      Time tracking resources
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-base">
                      Workforce management resources
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-base">
                      Business resources
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-base">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* More Links */}
            <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
              <div className="text-white">
                <span className="block text-lg font-normal mb-6">More</span>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-white text-base">
                      Help center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-base">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-base">
                      Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Company Links */}
            <div className="w-full lg:w-1/4">
              <div className="text-white">
                <span className="block text-lg font-normal mb-6">Company</span>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-white text-base">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-base">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-base">
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-base">
                      Customer stories
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-base">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-base">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Right Section */}
          <div className="w-full lg:w-1/3">
            <div className="text-white">
              <p className="text-2xl font-normal mb-6">Ready to get started?</p>
              <a
                href="#"
                className="bg-[#ff5e29] text-white py-3 px-8 rounded-lg text-lg font-normal inline-block mb-6"
              >
                Sign me up
              </a>
              <hr className="border-white my-6" />
              <span className="block text-xl font-normal mb-5">Follow us</span>
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-white text-2xl">
                    <FaYoutube />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-2xl">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-2xl">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-2xl">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-2xl">
                    <FaSkype />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-wrap mt-8">
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <img src={logo} alt="Logo" className="w-32" />
          </div>
          <div className="w-full lg:w-2/4 mb-4 lg:mb-0 text-white text-center lg:text-left">
            <span className="block text-sm font-medium">
              Copyright © 2024 Netsoft Holdings, LLC <br />
              11650 Olio Road, Suite #1000 - 193 Fishers, IN 46037
            </span>
          </div>
          <div className="w-full lg:w-1/4 text-center lg:text-right">
            <a href="#" className="text-white text-sm mr-6">
              Terms
            </a>
            <a href="#" className="text-white text-sm mr-6">
              Privacy
            </a>
            <a href="#" className="text-white text-sm">
              GDPR compliance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
