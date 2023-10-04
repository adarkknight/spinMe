'use client'
import React from "react";
import Image from "next/image";
import Button from "./components/button";

interface Props {
    onClose: () => void;
    data: AlbumInfo[];
}

interface AlbumInfo {
    coverImage: string;
    title: string;
    artist: string;
}

const Recommendation = ({ onClose, data }: Props) => {
    const randomInfo = Math.floor(Math.random() * data.length);
    const randomAlbum = data[randomInfo];
    const albumImage = randomAlbum.coverImage;
    const artistName = randomAlbum.artist;
    const albumName = randomAlbum.title;

    return (

        <div className="inset-0 flex items-center justify-center">
            <div className="card bg-neutral shadow-xl">
                <Image width="100" height="100" src={albumImage} className="w-28 rounded-lg mx-auto mt-3" alt="album" />
                <div className="card-body flex flex-col items-center justify-center text-neutral-content">
                    <h2 className="font-inter text-sm font-semibold" >We think you should spin</h2>
                    <p className="font-inter text-sm font-light italic">{albumName}</p>
                    <p className="font-inter text-sm">by</p>
                    <p className="font-inter font-extrabold text-lg">{artistName}</p>
                    <div className="card-actions">
                        <Button onClick={onClose} text="Close" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Recommendation;
