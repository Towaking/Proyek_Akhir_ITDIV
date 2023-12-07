import React, { useState } from 'react';
import { Navbar } from '../component/Navbar/Navbar';
import { Footer } from '../component/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const validateUsername = (username: string) => {
    if (username.length >= 3) {
      return true;
    } else {
      return false;
    }
  };

  const validatePassword = (password: string) => {
    if (password.length >= 5) {
      return true;
    } else {
      return false;
    }
  };

  const validateConfirmPassword = (password: string, confirmPassword: string) => {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const regex = /^08[0-9]{8,11}$/;
    if (regex.test(phoneNumber)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email && !username && !password && !phoneNumber) {
      alert("Semua form harus diisi");
    } else {
      if (!validateEmail(email)) {
        alert("Email tidak sesuai");
      } else if (!validateUsername(username)) {
        alert("Username harus memiliki minimal 3 karakter");
      } else if (!validatePassword(password)) {
        alert("Password harus memiliki minimal 5 karakter");
      } else if (!validateConfirmPassword(password, confirmPassword)) {
        alert("Password dan konfirmasi password tidak cocok");
      } else if (!validatePhoneNumber(phoneNumber)) {
        alert("Nomor telepon tidak sesuai");
      } else {
        try {
          const response = await axios.post('https://localhost:7262/api/User/Register', {
            userName: username,
            userEmail: email,
            userPhone: phoneNumber,
            userPassword: password
          });
  
          if (response.status === 200) {
            alert("Proses sign up berhasil");
            navigate('/signin');
          } else {
            alert("Proses sign up gagal");
          }
        } catch (error) {
          console.error(error);
          alert("Terjadi kesalahan saat sign up");
        }
      }
    }
  };

  return (
    <div>
      <Navbar />
      <section className='signIn-container'>
        <div className="login-form">
          <h5>Welcome back to cinemate!</h5>
          <br></br>
          <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="username" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <input type="tel" placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SignUp;