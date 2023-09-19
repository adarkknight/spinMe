import React from "react";
import Image from "next/image";
import Button from "./button";

interface Props {
    onClose: () => void;
}
const Recommendation: React.FC<Props> = ({ onClose }) => {
    console.log('this is onclose', onClose);
    const albumImage = require('../../public/ramones1.png');
    const artist = 'Ramones';
    const album = 'Self-Titled'
    
    return (

        <div className="fixed inset-0 flex items-center justify-center">
            <div className="modal-overlay"></div>
            <div className="modal-container">
                <div className="modal-content">
                    <div className="card w-50 glass">
                        <Image src={albumImage} className="w-28 rounded-lg mx-auto mt-6" alt="album" />
                        <div className="card-body">
                            <div className="font-inter text-sm font-semibold justify-center" >We think you should spin</div>
                            <div className="flex-col justify-center items-center">
                            <p className="font-inter text-sm font-light italic">{album}</p>
                            <p className="font-inter text-sm">by</p>
                            <p className="font-inter font-black ">{artist}</p>
                            </div>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <Button onClick={onClose} text="Close"/>
                </div>
            </div>
        </div>

    )
}

export default Recommendation;

/// wrap in div, display-flex