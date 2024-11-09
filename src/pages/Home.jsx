// src/pages/Home.js
import React from "react";
import "./Home.css"; // for custom pixel and animation styles
import cityscape from "/assets/cityscape.png"; // Import the image
import Footer from "../components/Footer/Footer";
import { GoogleLogin } from '@react-oauth/google';

const Home = () => {
  return (
    <div
      className="bg-dark-blue min-h-screen flex flex-col relative"
      style={{
        backgroundImage: `url(${cityscape})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      
      }}
    >
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center z-10">
        {/* Title */}
        <h1 className="text-neon-pink text-8xl font-pixel flicker">FICTIONARY</h1>

        {/* Sign Up Button */}
        <button className="sign-up-button font-pixel text-2xl text-amber-300 mt-8">
        <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
        </button>

        {/* Additional Effects */}
        <div className="pixel-stars"></div>
      </div>

     
    </div>
  );
};

export default Home;
