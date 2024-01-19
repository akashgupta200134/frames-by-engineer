"use client";
import React from "react";
import Logo from "@/assets/nav/logo.svg";
// import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="mx-auto px-4 sm:px-6 ">
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200 mt-36">
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <div className="flex flex-col cursor-pointer ">
                <div className="flex items-end w-15 mb-3 ml-5 ">
                  <svg
                    className="my-1.5 -mx-0.5"
                    width="28"
                    height="28"
                    viewBox="0 0 150 181"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="76"
                      y="69"
                      width="37"
                      height="112"
                      fill="#FFBCEF"
                    />
                    <rect
                      x="150"
                      y="69"
                      width="34"
                      height="74"
                      transform="rotate(90 150 69)"
                      fill="#FFBCEF"
                    />
                    <rect width="40" height="144" fill="#FFBCEF" />
                    <rect
                      x="113"
                      width="32"
                      height="113"
                      transform="rotate(90 113 0)"
                      fill="#FFBCEF"
                    />
                  </svg>
                  <p className=" -my-2 text-[2.3rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FEBBED] to-[#B977FE]">
                    ames </p>
                </div>
                <div className="ml-5">
                  <p className="text-xs leading-tight -mt-3 text-muted-foreground">
                    - by Half Engineers
                  </p>
                </div>
              </div>

              {/* Social as */}

              <div className="my-9">
                <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                  <li>
                    <a
                      href="#0"
                      className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Twitter"
                    >
                      <svg
                        className="w-8 h-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#0"
                      className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </a>
                  </li>

                  <li className="ml-4">
                    <a
                      href="#0"
                      className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Github"
                    >
                      <svg
                        className="w-8 h-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                      </svg>
                    </a>
                  </li>

                  <li className="ml-4">
                    <a
                      href="#0"
                      className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-8 h-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Quick Links</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Category
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Trendy
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-6 md:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Any Queries</h6>
            <p className="text-sm text-gray-600 mb-4">
              We will try to resolve,&nbsp; just enter your email here.
            </p>

            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text sm sr-only" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
                      placeholder="Your Email required"
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <span
                        className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* <p className="mt-2 text-green-400 text-sm">Thanks for subscribing!</p>  */}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center py-2 -my-4 md:py-8 border-t border-gray-300">
          <div className="text-sm text-center text-gray-600 mr-4">
            Thanks for visiting this website 😊. Sending love from our team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
