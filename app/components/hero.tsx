"use client";
import React from "react";
import Recommendation from "./recommendation";
import Button from "./button";
import Image from "next/image";

function getTimeOfDay() {
  const currentHour = new Date().getHours();
  switch (true) {
    case currentHour >= 5 && currentHour < 12:
      return 'Morning';
    case currentHour >= 12 && currentHour < 18:
      return 'Afternoon';
    default:
      return 'Evening';
  }
}

const timeOfDay = getTimeOfDay();

function Hero() {
  const recordPlayer = require('../../public/record_player.png')
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="hero min-h-[50vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          {!isModalOpen && (
            <Image
              src={recordPlayer}
              className="w-48 rounded-lg"
              alt="record player"
            />
          )}
          <div className="text-center">
            {!isModalOpen && (
              <div>
                <h1 className="text-3xl font-inter font-bold">Good {timeOfDay}!</h1>
                <p className="font-inter text-sm py-2">Click the button to get a record recommendation</p>
                <Button onClick={toggleModal} text="Hey Ho, Let's Go!" />
              </div>

            )
            }
            {isModalOpen && (
              <Recommendation onClose={toggleModal} />
            )}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Hero;