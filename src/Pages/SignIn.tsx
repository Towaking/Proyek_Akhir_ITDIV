import React from 'react';
import { Navbar } from '../component/Navbar/Navbar';
import { Footer } from '../component/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';

export function SignIn() {
    const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleSignUpClick = () => {
    // Redirect ke halaman sign-up
    navigate('/signup');
  };
  return (
    <div>
      <Navbar />
      <section className='signIn-container'>
      <div className="login-form">
        <h5>Welcome back to cinemate!</h5>
        <br></br>
        <input type="username" placeholder='Username'/>
        <input type="password" placeholder='Password'/>
        <button>Sign Up</button>
        <p>
          New to Cinemate?{' '}
          <span onClick={handleSignUpClick}>Sign up now</span>
        </p>
      </div>
      </section>
      <Footer />
    </div>
  );
}

export default SignIn;
