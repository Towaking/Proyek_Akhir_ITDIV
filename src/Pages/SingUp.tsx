import React from 'react';
import { Navbar } from '../component/Navbar/Navbar';
import { Footer } from '../component/Footer/Footer';

export function SignUp() {
  return (
    <div>
      <Navbar />
      <section className='signIn-container'>
      <div className="login-form">
        <h5>Welcome back to cinemate!</h5>
        <br></br>
        <input type="email" placeholder='Email'/>
        <input type="username" placeholder='Username'/>
        <input type="password" placeholder='Password'/>
        <input type="phonenumber" placeholder='Phonenumber'/>
        <button>Sign Up</button>
      </div>
      </section>
      <Footer />
    </div>
  );
}

export default SignUp;