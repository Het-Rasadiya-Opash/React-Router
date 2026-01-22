import React from "react";
import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error);
  }
};

const Contact = () => {
  return (
    <>
      <section className="container section-contact">
        <div className="container">
          <h2 className="section-common--title">contact us</h2>
          <p className="section-common--subheading">
            Get in touch with us. We are always here to help you.
          </p>
        </div>

        <div className="grid grid-two--cols">
          <div className="contact-content">
            <Form method="POST" action="/contact">
              <div className="grid grid-two--cols mb-3">
                <div>
                  <label htmlFor="username">Full name</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter Full Name"
                    autoComplete="off"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="abc@thapa.com"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  placeholder="We are always here to help you"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-submit">
                Send Message
              </button>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
