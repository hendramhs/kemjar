'use client';

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement contact form submission
    console.log("Contact form submission:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our products or services? We're here to help
              and answer any questions you might have.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Get in Touch
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Visit Us
                </h3>
                <p className="text-gray-600">
                  123 Agriculture Street
                  <br />
                  Jakarta, Indonesia 12345
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Contact Information
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Email:</span>{" "}
                    contact@agritech.com
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Phone:</span> +62 123 456 7890
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
