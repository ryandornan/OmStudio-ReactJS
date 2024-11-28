import React from "react";
import "./contact.css";
import SectionTitle from "../../components/Section Title/SectionTitle";

function ContactForm() {
    return (
        <div className="container-full contact-background">

            <div className="section" id="contact">
                <div className="container contact-container">
                    <h2 className="contact-heading pt-2">Want to know more?</h2>
                    <p className="pb-2">Fill in the form and one of our team will call you.</p>
                    <form className="contact-form p-3">
                        {/* First Name and Last Name */}
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="form-control"
                                    placeholder="Enter your first name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="form-control"
                                    placeholder="Enter your last name"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email Address */}
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>

                        {/* Address */}
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                className="form-control"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn-submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
