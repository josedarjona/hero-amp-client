import React, { Component } from "react";
import axios from "axios"

import "../styles/contact.css";
import "../styles/css/all.css";

import Header from "./layout-components/header";
// import NavBar from "./layout-components/navbar";
import Footer from "./layout-components/footer";

// import SponsoredAd from "./layout-components/sponsored-ad";

class ContactUsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answerShowing: false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const contactWhoEmail = document.getElementById('contactWhoEmail').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url: process.env.BASE_URL+"/api/contact-us",
            data: {
                name: name,
                email: email,
                message: message,
                contactWhoEmail: contactWhoEmail
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                // alert("Message Sent.");
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                // alert("Message failed to send.")
            }
        })
    }
    resetForm() {
        document.getElementById('contact-form').reset();
    }

    showAnswer(num) {
        this.setState({ answerShowing: num });
    }

    render() {
        return (
            <div>
                <Header />

                {/* <NavBar /> */}

                {/* <div className="p-wrapper">
                    <p>
                        Lorem ipsum dolor amet cred yr pour-over banjo sriracha, artisan
                        church-key cronut bicycle rights. Fanny pack quinoa sustainable,
                        affogato unicorn cred tacos 8-bit keytar paleo hexagon. Normcore
                        wayfarers everyday kogi.
          </p>
                </div> */}

                <div className="orange-form">
                    <form onSubmit={this.handleSubmit} id="contact-form">
                        <div className="fieldSet">
                            <label>CONTACT US- DROP DOWN TO SELECT SUBJECT</label>
                            <select id="contactWhoEmail">
                                <option value="fanMail">FAN MAIL</option>
                                <option value="LaDoctoraResponde">LA DOCTORA RESPONDE</option>
                                <option value="prMail">PR MAIL</option>
                                <option value="partnerships">BRAND PARTNERSHIPS</option>
                                <option value="help">CUSTOMER SERVICE/HELP</option>
                            </select>
                        </div>

                        <div className="fieldSet">
                            <label>NAME</label>
                            <input id="name" placeholder="John Doe" />
                        </div>

                        <div className="fieldSet">
                            <label>EMAIL</label>
                            <input type="email" id="email" placeholder="JohnDoe@email.com" />
                        </div>

                        <div className="fieldSet">
                            <label>MESSAGE</label>
                            <textarea rows="5" id="message" />
                        </div>

                        <button type="submit">SEND</button>
                    </form>
                </div>

                {/* <section className="faq-section">
                    <h2> FREQUENTLY ASKED QUESTIONS</h2>

                    <div
                        className="faq-drop"
                        onClick={() => {
                            this.showAnswer(0);
                        }}
                    >
                        <span>
                            THIS IS A QUESTION THAT IS OFTEN ASKED ON THIS WEBSITE. PLEASE
                            TAKE A MOMENT TO READ
            </span>
                        <i className="fas fa-chevron-down" />
                    </div>
                    {this.state.answerShowing === 0 && (
                        <div className="answer" id="an1">
                            This is the answer to the question tiam hendrerit nulla sit amet
                            diam faucibus, facilisis ultricies magna vulputate. Vestibulum sit
                            amet pharetra nulla, a interdum ligula. Maecenas finibus purus
                            libero, at consequat neque consequat a. Vestibulum quis euismod
                            eros. Vestibulum ut quam iaculis, maximus purus quis, ornare nunc.
                            Sed vitae quam augue. In fringilla ornare nibh, in venenatis lacus
                            euismod ac. Maecenas nec odio ac metus vulputate placerat. Nulla
                            facilisi. Suspendisse sit amet euismod nunc. Nam tincidunt
                            pulvinar erat, vitae fermentum augue euismod ultricies. Proin a
                            purus at lorem vulputate porttitor id eu felis. Etiam maximus orci
                            urna, eu mollis lacus suscipit nec. Donec at purus metus.
            </div>
                    )}

                    <div
                        className="faq-drop"
                        onClick={() => {
                            this.showAnswer(1);
                        }}
                    >
                        <span>
                            THIS IS A QUESTION THAT IS OFTEN ASKED ON THIS WEBSITE. PLEASE
                            TAKE A MOMENT TO READ
            </span>
                        <i className="fas fa-chevron-down" />
                    </div>
                    {this.state.answerShowing === 1 && (
                        <div className="answer" id="an2">
                            This is the answer to the question tiam hendrerit nulla sit amet
                            diam faucibus, facilisis ultricies magna vulputate. Vestibulum sit
                            amet pharetra nulla, a interdum ligula. Maecenas finibus purus
                            libero, at consequat neque consequat a. Vestibulum quis euismod
                            eros. Vestibulum ut quam iaculis, maximus purus quis, ornare nunc.
                            Sed vitae quam augue. In fringilla ornare nibh, in venenatis lacus
                            euismod ac. Maecenas nec odio ac metus vulputate placerat. Nulla
                            facilisi. Suspendisse sit amet euismod nunc. Nam tincidunt
                            pulvinar erat, vitae fermentum augue euismod ultricies. Proin a
                            purus at lorem vulputate porttitor id eu felis. Etiam maximus orci
                            urna, eu mollis lacus suscipit nec. Donec at purus metus.
            </div>
                    )}

                    <div
                        className="faq-drop"
                        onClick={() => {
                            this.showAnswer(2);
                        }}
                    >
                        <span>
                            THIS IS A QUESTION THAT IS OFTEN ASKED ON THIS WEBSITE. PLEASE
                            TAKE A MOMENT TO READ
            </span>
                        <i className="fas fa-chevron-down" />
                    </div>
                    {this.state.answerShowing === 2 && (
                        <div className="answer" id="an3">
                            This is the answer to the question tiam hendrerit nulla sit amet
                            diam faucibus, facilisis ultricies magna vulputate. Vestibulum sit
                            amet pharetra nulla, a interdum ligula. Maecenas finibus purus
                            libero, at consequat neque consequat a. Vestibulum quis euismod
                            eros. Vestibulum ut quam iaculis, maximus purus quis, ornare nunc.
                            Sed vitae quam augue. In fringilla ornare nibh, in venenatis lacus
                            euismod ac. Maecenas nec odio ac metus vulputate placerat. Nulla
                            facilisi. Suspendisse sit amet euismod nunc. Nam tincidunt
                            pulvinar erat, vitae fermentum augue euismod ultricies. Proin a
                            purus at lorem vulputate porttitor id eu felis. Etiam maximus orci
                            urna, eu mollis lacus suscipit nec. Donec at purus metus.
            </div>
                    )}
                </section> */}
                <Footer />
            </div>
        );
    }
}

export default ContactUsPage;
