const ContactSection = () => {
  return (
    <section className="bg-[#f5f5f5] dark:bg-slate-950 dark:text-white py-10">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl py-10">Contact Us</h1>
      <section className="container mx-auto px-4">
        <div className="contactSection grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="contactSectionLeft">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31085.57836452172!2d77.57846441688093!3d13.118352877502732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1856f737d2d5%3A0xbef78d20185d942f!2sYelahanka%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1723227958371!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full md:h-80 rounded-md shadow-md"
            ></iframe>
          </div>
          <div className="contactSectionRight">
            <form action="" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium dark:text-white text-gray-700">
                  Name:
                </label>
                <input
                  id="name"
                  className="input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium dark:text-white text-gray-700">
                  Email:
                </label>
                <input
                  id="email"
                  className="input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  type="email"
                  placeholder="Enter your Email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm dark:text-white font-medium text-gray-700">
                  Subject:
                </label>
                <input
                  id="subject"
                  className="input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block dark:text-white text-sm font-medium text-gray-700">
                  Message:
                </label>
                <textarea
                  id="message"
                  className="input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#5bc0de] text-white px-4 py-2 rounded-sm mt-4 hover:bg-[#4a9cbf] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactSection;
