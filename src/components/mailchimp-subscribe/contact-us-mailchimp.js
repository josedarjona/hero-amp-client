import React from "react";

import '../../styles/css/all.css'
import '../../styles/css/mailchimp.css'
import '../../styles/css/landing.css'
import "../../styles/contact.css";
import MailchimpSubscribe from "./mailchimp-subscribe";


// ignore all of this
// idk what i was trying to do
// 
// 


const CustomForm = ({ status, message, onValidated }) => {
  let email;
  let contactWho;
  let name;
  let bodyMessage;
  const submit = (e) => {
    email &&
    email.value.indexOf("@") > -1 &&
    contactWho && //add functionality here to select right contact
    name &&
    bodyMessage &&
    onValidated({
      EMAIL: email.value,
      MMERGE1: contactWho.value,
      MMERGE2: name.value,
      MMERGE3: bodyMessage.value,
    });
    e.preventDefault();

  }

  return (
    // {/* <div
    //   className="px-3 py-4 mb-3"
    // >
    //   <form onSubmit={submit}>
    //     <div className="input-group">
    //       <input
    //         ref={node => (email = node)}
    //         type="email"
    //         placeholder="Your email"
    //         className="form-control"
    //         value={status === "success" ? "" : null}
    //       />
    //       <div className="input-group-append">
    //         <button
    //           type="submit"
    //           className="btn btn-secondary"
    //         >
    //           Sign me up
    //         </button>
    //       </div>
    //     </div>
    //   </form>

    //   {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
    //   {status === "error" && (
    //     <div
    //       class="alert alert-danger mb-0 mt-3 small"
    //       role="alert"
    //       dangerouslySetInnerHTML={{ __html: message }}
    //     />
    //   )}
    //   {status === "success" && (
    //     <div
    //       class="alert alert-success mb-0 mt-3 small"
    //       role="alert"
    //       dangerouslySetInnerHTML={{ __html: message }}
    //     />

    //   )}
    // </div> */}

    <div className="orange-form">
          <form onSubmit={submit}>
            <div className="fieldSet">
              <label>CONTACT US- DROP DOWN TO SELECT SUBJECT</label>
              <select ref={node => (contactWho = node)} name="MMERGE1" class="" id="mce-MMERGE1">
                <option value="fanMail">FAN MAIL</option>
                <option value="questionAnswer">QUESTION/ANSWER</option>
                <option value="contest">RE: CONTEST</option>
              </select>
            </div>

            <div className="fieldSet">
              <label>NAME</label>
              <input ref={node => (name = node)} 
              value={status === "success" ? "" : null}
               placeholder="Ana Maria Polo"
               />
            </div>

            <div className="input-group fieldSet">
          <input
            ref={node => (email = node)}
            type="email"
            placeholder="Your email"
            className="form-control"
            value={status === "success" ? "" : null}
          />
          </div>

            <div className="fieldSet">
              <label>MESSAGE</label>
              <textarea ref={node => (bodyMessage = node)} 
              value={status === "success" ? "" : null}
               placeholder="Ana Maria Polo" />
            </div>

            <button>SEND</button>
          </form>
        </div>
    
  );
};

const subscribeMailchimp = () => {
  const url =
      "linkhere";
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  );
};

export default subscribeMailchimp;