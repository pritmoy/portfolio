"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import MainContainer from "../shared/Container/MainContainer";

export default function Footer() {
  return (
    <footer
      className="bg-[#0B0E1C] text-white py-12 px-6 md:px-20"
      style={{ background: "url(/footer.png)" }}
    >
      <MainContainer>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                F
              </div>
              <h2 className="text-xl font-semibold">fallow</h2>
            </div>
            <p className="text-sm text-gray-400">
              We work with a passion of taking challenges and creating new ones
              in advertising sector.
            </p>
            <div className="flex gap-4 mt-6 text-lg">
              <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="hover:text-blue-500 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaYoutube className="hover:text-red-500 cursor-pointer" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#">Contact & FAQ</a>
              </li>
              <li>
                <a href="#">Track Your Order</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Trade Program</a>
              </li>
            </ul>
          </div>

          {/* Official Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Official info:</h3>
            <div className="flex items-start gap-3 text-sm text-gray-300 mb-3">
              <FaMapMarkerAlt className="text-blue-400 mt-1" />
              <div>
                30 Commercial Road Fratton, <br />
                Australia
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300 mb-6">
              <FaPhoneAlt className="text-blue-400" />
              <span>1-888-452-1505</span>
            </div>

            <h4 className="text-base font-semibold mb-2">
              Subscribe Newsletter
            </h4>
          </div>
        </div>
      </MainContainer>
    </footer>
  );
}
