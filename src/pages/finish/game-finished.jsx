import React, { useState } from "react";
import  "./EventAd.module.css";
import bgImage from "/assets/bg.jpg";
const GameFinished = () => {
  const [gameOver, setGameOver] = useState(true); 

  return (
    <div
      className={`relative h-screen w-full flex flex-col items-center justify-center arcadeBackground`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
     
          <h1 className="xl:text-6xl  lg:text-5xl sm:text-3xl md:text-4xl font-bold text-neon-red flicker mb-4 font-pixel">
            GAME OVER
          </h1>
       

      {/* Neon Header */}
      <h1 className="xl:text-5xl  lg:text-4xl sm:text-2xl md:text-2xl font-bold text-neon-pink flicker mb-6 font-pixel">
        <span className="glowText">Upcoming Event</span>
      </h1>

      {/* Event Details */}
      
        <h2 className="xl:text-5xl  lg:text-4xl sm:text-1xl  md:text-4xl text-neon-blue font-pixel mb-4">
          Reverbrate!
        </h2>
       

      {/* Call to Action */}
      <button
        className={`mt-8 px-6 py-3 text-1xl text-black bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-pink rounded-lg transition-all font-pixel glowButton`}
      >
       Register Now
      </button>

      {/* Floating Neon Stars */}
      <div className="floatingStars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default GameFinished;
