import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
  e.preventDefault();
  setIsSending(true); 
  setStatusMessage("");

  emailjs
    .sendForm(
      "service_x6hpqnt",
      "template_8pb4p9c",
      formRef.current,
      "jGBU_3hhzE--V4xCS"
    )
    .then(() => {
      setStatusMessage("✅ Message sent successfully!");
      formRef.current.reset();
    })
    .catch(() => {
      setStatusMessage("❌ Failed to send message. Please try again.");
    })
    .finally(() => {
      setIsSending(false);
    });
};


  return (
    <div className="pb-8 bg-gray-900 mt-2 lg:pb-13" id="contact">
      <div className="text-[#06e3f5] bg-black p-4 text-center text-2xl border-2 lg:text-4xl">
        Contact Me
      </div>

      <section className="max-w-xl mx-auto p-6">
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <div className="lg:mt-7">
            <label className="block text-sm font-medium text-white lg:text-[20px]">Name</label>
            <input
              type="text"
              name="hr_name"
              required
              className="mt-1 block w-full rounded-md text-white pl-2 border border-white shadow-sm focus:border-[#06e3f5] focus:outline-0 focus:border-2 lg:h-[37px]"
            />
          </div>

          <div className="lg:mt-7">
            <label className="block text-sm font-medium text-white lg:text-[20px]">
              Company Name
            </label>
            <input
              type="text"
              name="company_name"
              required
              className="mt-1 block w-full rounded-md text-white pl-2 border border-white shadow-sm focus:border-[#06e3f5] focus:outline-0 focus:border-2 lg:h-[37px]"
            />
          </div>

          <div className="lg:mt-7">
            <label className="block text-sm font-medium text-white lg:text-[20px]">
              Email
            </label>
            <input
              type="email"
              name="hr_email"
              required
              className="mt-1 block w-full rounded-md text-white pl-2 border border-white shadow-sm focus:border-[#06e3f5] focus:outline-0 focus:border-2 lg:h-[37px]"
            />
          </div>

          <div className="lg:mt-7">
            <label className="block text-sm font-medium text-white lg:text-[20px]">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="mt-1 block w-full rounded-md text-white pl-2 border border-white shadow-sm focus:border-[#06e3f5] focus:outline-0 focus:border-2 lg:h-[37px]"
            ></textarea>
          </div>

          <button
  type="submit"
  disabled={isSending}
  className={`w-full ${
    isSending ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700 hover:scale-105"
  } cursor-pointer text-white font-semibold py-2 px-4 rounded-md transition lg:mt-2`}
>
  {isSending ? "Sending..." : "Send"}
</button>
        </form>

        {statusMessage && (
          <p className="mt-4 text-center text-sm text-gray-700 font-medium">
            {statusMessage}
          </p>
        )}
      </section>
    </div>
  );
};

export default ContactForm;
