"use client";
import React from "react";
import Recommendation from "./recommendation";
import Button from "./components/button";
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

interface Props {
  data: [];
}


const timeOfDay = getTimeOfDay();

function Hero({ data }: Props) {
  const recordPlayer = require('../public/record_player.png')
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [albumData, setAlbumData] = React.useState<any[]>(data);
  const initialState = data;

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const childToParent = (childData: number) => {
    setAlbumData((prevItems: any[]) => {
      if (prevItems.length === 1) {
        setAlbumData(initialState);
      }
      const newArray = [...prevItems];
      newArray.splice(childData, 1);
      return newArray;
    });

    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      {!isModalOpen && (
        <div className="hero h-80 w-80 bg-base-200 rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src={recordPlayer}
              className="w-32 rounded-lg"
              alt="record player"
            />
            <div className="text-center">

              <div>
                <h1 className="text-3xl font-inter font-bold">Good {timeOfDay}!</h1>
                <p className="font-inter text-sm py-2">Click the button to get a record recommendation</p>
                <Button onClick={toggleModal} text="Hey Ho, Let's Go!" />
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && (
        <Recommendation childToParent={childToParent} data={albumData} />
      )}
    </div>

  )
}

export default Hero;