import React from "react";
import ContactInfo from "../Components/ContactInfo";
import ContactForm from "../Components/ContactForm";

function ContactPage() {
  return (
    <>
      <div className="text-center md:my-15 mt-4 mb-9">
        <h1 className="font-bold text-4xl mb-4 mt-7">Contact Us</h1>
        <p className="text-gray-500 font-semibold px-4">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:px-26 mb-10">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
}

export default ContactPage;
