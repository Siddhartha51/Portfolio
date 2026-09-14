import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaRocket,
} from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_e8vc82c",
        "template_wioiivb",
        form.current,
        "xJuIqOIElumF1sIph",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message, please try again.", error.text);
        },
      );
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center font-bold text-6xl mb-5">
          GetIn <span className="text-purple-500">Touch</span>
        </h1>
        <div className="flex flex-row justify-center">
          <p className="text-center text-xl mb-10 text-gray-400">
            Have a project or idea? Let's build something amazing
          </p>
          <FaRocket className="text-purple-500 shrink-0" />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="max-w-md space-y-4">
            <h2 className="text-2xl font-bold mb-4">
              Contact <span className="text-purple-500">Info</span>
            </h2>
            <p className="mb-4 text-gray-400">
              I'm available for freelance work and collaborations.
            </p>
            <div className="space-y-3 pt-2 text-gray-300">
              <p className="flex items-center space-x-3">
                <FaEnvelope className="text-purple-500 shrink-0" />
                <span>Email: thapasiddharth51@gmail.com</span>
              </p>
              <p className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-purple-500 shrink-0" />
                <span>Location: Bhaktapur, Nepal</span>
              </p>
              <p className="flex items-center space-x-3">
                <FaBriefcase className="text-purple-500 shrink-0" />
                <span>FullTime/Freelance / Remote Work Available</span>
              </p>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col bg-gray-900 w-full max-w-lg border border-gray-800 hover:border-purple-700 space-y-4 rounded-2xl p-8"
          >
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              className="bg-gray-800 px-4 py-3.5 rounded-xl border border-gray-800 hover:border-purple-600/50"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="user_email"
              className="bg-gray-800 px-4 py-3.5 rounded-xl border border-gray-800 hover:border-purple-600/50"
              required
            />
            <textarea
              type="field"
              placeholder="Your Message"
              name="text_area"
              className="bg-gray-800 px-4 py-3.5 rounded-xl border border-gray-800 hover:border-purple-600/50"
              required
            />
            <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-800 rounded-xl p-3 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
