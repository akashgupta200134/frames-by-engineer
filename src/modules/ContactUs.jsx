 "use client"

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6bjaowx",
        "template_9o3g8su",
        form.current,
        "NcULCO2MwqMaY-D7N"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setSuccessMessage("Email sent successfully!");
          // Clear success message after a few seconds
          setTimeout(() => setSuccessMessage(null), 5000);
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div>
      {successMessage && (
        <div className="text-green-600 font-bold">{successMessage}</div>
      )}

      <form
      ref={form}
      onSubmit={sendEmail}
      action="#"
      method="POST"
      className="mx-auto mt-16 max-w-xl sm:mt-20"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            First name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Last name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="phone-number"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Phone number
          </label>
          <div className="relative ">
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              autoComplete="tel"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Message
          </label>
          <div>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="block w-full rounded-md border-0 p-3.5  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
        </div>
        
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-lightPrimary px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-lightPink bg-lightViolet p-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Let's talk
        </button>
      </div>
       
      </form>
    </div>
  );
};

export default ContactUs;