import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";
import "bulma/css/bulma.css";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="Email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="password" placeholder="Your Password" />
      <CoolButton isSmall isSuccess>
        Submit
      </CoolButton>
    </div>
  );
};

export default Signup