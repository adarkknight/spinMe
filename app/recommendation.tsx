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

        <div className="fixed inset-0 flex items-center justify-center mt-6">
            <div className="modal-overlay"></div>
            <div className="modal-container">
                <div className="modal-content">
                    <div className="card w-80 h-80 bg-neutral shadow-xl">
                        <Image width="100" height="100" src={albumImage} className="w-28 rounded-lg mx-auto mt-3" alt="album" />
                        <div className="card-body items-center text-white">
                            <div className="font-inter text-sm font-semibold justify-center" >We think you should spin</div>
                            <div className="flex-col justify-center items-center">
                                <p className="font-inter text-sm font-light italic">{albumName}</p>
                                <p className="font-inter text-sm">by</p>
                                <p className="font-inter font-extrabold text-lg">{artistName}</p>
                            </div>
                            <div className="card-actions justify-end">
                            <Button onClick={onClose} text="Close" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Recommendation;
