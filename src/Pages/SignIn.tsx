import React, { useState } from 'react';
import { Navbar } from '../component/Navbar/Navbar';
import { Footer } from '../component/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateUsername = (username: string) => {
    if (username.length >= 3) {
      return true;
    } else {
      alert("Username harus memiliki minimal 3 karakter");
      return false;
    }
  };

  const validatePassword = (password: string) => {
    if (password.length >= 5) {
      return true;
    } else {
      alert("Password harus memiliki minimal 5 karakter");
      return false;
    }
  };

  const handleSignInClick = async () => {
    if (validateUsername(username) && validatePassword(password)) {
      try {
        const response = await axios.post('https://localhost:7262/api/User/Login', {
          userName: username,
          userPassword: password
        });
  
        if (response.data) {
          localStorage.setItem('isLogin', 'true');
          localStorage.setItem('userID', response.data.userID);
          localStorage.setItem('userName', response.data.userName);
          localStorage.setItem('userEmail', response.data.userEmail);
          localStorage.setItem('userPhone', response.data.userPhone);
          localStorage.setItem('userSaldo', response.data.userSaldo);
          alert("Proses sign in berhasil");
          navigate('/');
        } else {
          alert("Username atau password salah");
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat melakukan sign in", error);
      }
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div>
      <Navbar />
      <section className='signIn-container'>
        <div className="login-form">
          <h5>Welcome back to cinemate!</h5>
          <br></br>
          <input type="username" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSignInClick}>Sign In</button>
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