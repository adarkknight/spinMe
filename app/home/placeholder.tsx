'use client';
import React from 'react'
import Image from "next/image";

const recordPlayer = require('../../public/record_player.png')
const Placeholder = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-6">
            <div className="hero h-80 w-80 bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <Image
                        src={recordPlayer}
                        className="w-32 rounded-lg"
                        alt="record player"
                    />
                    <div className="text-center">

                        <div>
                            <h1 className="text-3xl font-inter font-bold">Welcome!</h1>
                            <p className="font-inter text-sm py-2">Connect your Discogs collection with spinMe by clicking below</p>
                            <button className="btn btn-primary btn-sm text-xs modal-close-button font-inter italic font-bold" >Coming Soon</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placeholder