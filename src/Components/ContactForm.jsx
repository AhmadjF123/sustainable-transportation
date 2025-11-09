import React, { useState } from "react";

function ContactForm() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [writeMessage, setWriteMessage] = useState("");
  const [message, setMessage] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
  }

  function checkSend() {
    if (fName == "" || lName == "" || email == "" || phoneNumber == "") {
      setMessage("All Field Are Reuired");
    } else {
      setMessage("");
    }
  }
  return (
    <>
      <form className="md:mb-25 md:px-8 mt-15" onSubmit={handlesubmit}>
        <div className="grid md:grid-cols-2 gap-7 md:gap-15 mb-7 md:px-5">
          <input
            type="text"
            placeholder="First Name:"
            className="border-b outline-none pb-3"
            value={fName}
            onChange={(e) => setfName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name:"
            className="border-b outline-none pb-3"
            value={lName}
            onChange={(e) => setlName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email:"
            className="border-b outline-none pb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="phone"
            placeholder="Phone Number:"
            className="border-b outline-none pb-3"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <p className="text-red-500 text-3xl">{message}</p>
        </div>
        <h2 className=" font-semibold md:px-5">Select Subject?</h2>
        <div className="md:flex md:gap-7 mt-7">
          <div className="flex gap-2">
            <input type="radio" name="radios" id="General Inquiry" />
            <label htmlFor="General Inquiry">General Inquiry</label>
          </div>

          <div className="flex gap-2">
            <input type="radio" name="radios" id="Customer Support" />
            <label htmlFor="Customer Support">Customer Support</label>
          </div>

          <div className="flex gap-2">
            <input type="radio" name="radios" id="Partnerships" />
            <label htmlFor="Partnerships">Partnerships</label>
          </div>

          <div className="flex gap-2">
            <input type="radio" name="radios" id="Feedback and Suggestions" />
            <label htmlFor="Feedback and Suggestions">
              Feedback and Suggestions
            </label>
          </div>
        </div>

        <div className="px-5 mt-15">
          <input
            type="text"
            placeholder="Write your message..."
            className="border-b w-full outline-none border-2 bg-primary pb-18 pt-8 pl-5 rounded-3xl"
            value={writeMessage}
            onChange={(e) => setWriteMessage(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={checkSend}
            className="bg-black text-white px-8 py-3 rounded mt-4 cursor-pointer"
          >
            Send a Message
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
