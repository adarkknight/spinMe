'use client'
import React from "react";
import Image from "next/image";
import Button from "./components/button";
import { RecommendationUpdate } from "./lib/definitions";

const Recommendation = ({ updateAlbumData, data }: RecommendationUpdate) => {
    const randomInfo = Math.floor(Math.random() * data.length);
    const randomAlbum = data[randomInfo];
    const albumImage = randomAlbum.coverImage;
    const artistName = randomAlbum.artist;
    const albumName = randomAlbum.title;

    return (

        <div className="inset-0 flex items-center justify-center">
            <div className="card  bg-neutral shadow-xl w-auto h-80">
                <Image width="100" height="100" src={albumImage} className="w-32 rounded-lg mx-auto mt-6" alt="album" />
                <div className="card-body flex flex-col gap-0 items-center justify-center text-neutral-content">
                    <h2 className="font-inter text-sm font-semibold" >We think you should spin</h2>
                    <h3 className="font-inter text-sm font-light italic">{albumName}</h3>
                    <h2 className="font-inter font-extrabold text-lg">{artistName}</h2>
                    <div className="card-actions mt-3">
                        <Button onClick={() => { updateAlbumData(randomInfo) }} text="Close" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Recommendation;
