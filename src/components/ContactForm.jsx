import { assets } from "../assets/assets";
import SectionTitle from "./SectionTitle";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  (
    <section className="relative py-[50px] sm:py-[100px]">
      <div className="max-w-6xl mx-auto relative z-10 px-4 xl:px-0">
        <SectionTitle
          subTitle={"Contact Us"}
          title={"Get in Touch"}
          theme={"dark"}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-14">
          <div className="flex flex-col gap-6">
            <h2 className="text-[#46237a] uppercase font-yanone text-3xl">
              Send Us a Message
            </h2>
            <form>
              <input
                className="w-full p-3 font-works-sans border-1 border-[#46237a] rounded-md focus:outline-none mb-6"
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <input
                className="w-full p-3 font-works-sans border-1 border-[#46237a] rounded-md focus:outline-none mb-6"
                type="email"
                name="email"
                placeholder="Your Email"
              />
              <textarea
                className="w-full p-3 font-works-sans border-1 border-[#46237a] rounded-md focus:outline-none mb-6"
                placeholder="Message"
                name="message"
              ></textarea>
              <button
                onClick={handleSubmit}
                className="border-1 border-[#46237a] bg-[#46237a] text-white font-works-sans rounded-md px-8 py-3 hover:bg-transparent hover:text-[#46237a] transition-all duration-200 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-[#46237a] uppercase font-yanone text-3xl">
              Contact Info
            </h2>
            <p className="font-works-sans">
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <div className="flex gap-2 items-center">
              <img
                src={assets.telephoneIcon}
                alt="Phone Icon"
                className="w-4 h-4"
              />
              <a
                href="tel:+1910-626-85255"
                className="font-works-sans hover:text-[#46237a] transition-all duration-200"
              >
                +1 910-626-85255
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <img src={assets.map_icon} alt="Map Icon" className="w-4 h-4" />
              <a
                href="#"
                className="font-works-sans hover:text-[#46237a] transition-all duration-200"
              >
                123 Fifth Avenue, New York, NY 10160
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <img src={assets.mailIcon} alt="Mail Icon" className="w-4 h-4" />
              <a
                href="mailto:contact@hello.com"
                className="font-works-sans hover:text-[#46237a] transition-all duration-200"
              >
                contact@hello.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.033706375874!2d-73.99362322356023!3d40.73928383594421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3b24b424f%3A0x618680d3f8c2f773!2s123%205th%20Ave%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2s!4v1760961274995!5m2!1sen!2s"
          width="1920"
          height="600"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
