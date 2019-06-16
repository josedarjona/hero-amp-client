import React from "react";

import '../../styles/css/all.css'
import '../../styles/css/mailchimp.css'
import '../../styles/css/landing.css'


// a basic form
const SimpleForm = ({ status, message, className, style, onSubmitted }) => {
  let input;
  const submit = () =>
    input &&
    input.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: input.value
    });


  return (
    <div className={"landing-component"}>
      {status === "sending" && <div style={{ color: "blue" }}>Sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input type="email" ref={node => (input = node)} className="email"
        placeholder="Uneté a nuestra lista de correo!!"
        required />

      <input type="submit" value="Subscribe" name="subscribe" onClick={submit} className={"mc-button"} />
    </div>
  );
};

export default SimpleForm;