import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="grid  grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-accent dark:text-gray-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-primary lg:text-5xl">
              Let's talk!
            </h2>
            <div className="text-secondary">
              Vivamus in nisl metus? Phasellus.
            </div>
          </div>
          <img
            src="https://media.giphy.com/media/xUA7aTKxZWcHEnAXoQ/giphy.gif"
            alt=""
            className="mr-6 md:h-72"
          />
        </div>
        <form
          novalidate=""
          className="space-y-6 ng-untouched ng-pristine ng-valid ng-submitted"
        >
          <div>
            <label for="name" className="text-sm text-secondary">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded "
            />
          </div>
          <div>
            <label for="email" className="text-sm text-secondary">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded "
              data-temp-mail-org="1"
            />
          </div>
          <div>
            <label for="message" className="text-sm text-secondary">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded "
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded btn btn-primary bg-gradient-to-r from-primary to-secondary"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
