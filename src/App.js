import React from 'react';
import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/CoolButton'
import Signup from './signup/Signup'
import 'bulma/css/bulma.css';


const App = () => {
  return (
    <div>
      {/*<Navbar />
      <FormField label="Name" type='text' placeholder='e.g Alex Smith'/>
      <FormField label="Email" type='Email' placeholder='e.g. alexsmith@gmail.com'/>
      <FormField label="Password" type="password" placeholder="Your Password" />
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Submit</CoolButton>*/}
      <Signup />
    </div>
    

  ) 
};

export default App;
