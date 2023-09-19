import React from "react";
import Image from "next/image";
import Button from "./button";

interface Props {
    onClose: () => void;
}

interface ArtistName {
    name: string;
}
interface AlbumInfo {
    title: string;
    artists: ArtistName[];
    cover_image: string;
}
const Recommendation = ({ onClose }: Props) => {
    const [albumData, setAlbumData] = React.useState({
        title: '',
        artistName: '',
        coverImage: '',
    });

    const albumImage = require('../../public/ramones1.png');

    React.useEffect(() => {
        fetch(`https://api.discogs.com/users/adarkknight/collection/folders/1/releases?token=${process.env.NEXT_PUBLIC_DISCOGS_TOKEN}`, {
            headers: {
                'User-Agent': 'SpinMe/0.1'
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                return responseData.releases[0].basic_information
            })
            .then((response: AlbumInfo) => {
                const { title, artists, cover_image } = response;
                const artistName = artists[0].name;
                const coverImage = cover_image;
                setAlbumData({
                    title,
                    artistName,
                    coverImage,

                })
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (

        <div className="fixed inset-0 flex items-center justify-center">
            <div className="modal-overlay"></div>
            <div className="modal-container">
                <div className="modal-content">
                    <div className="card w-50 glass">
                        <Image src={albumData.coverImage} className="w-28 rounded-lg mx-auto mt-6" alt="album" />
                        <div className="card-body">
                            <div className="font-inter text-sm font-semibold justify-center" >We think you should spin</div>
                            <div className="flex-col justify-center items-center">
                                <p className="font-inter text-sm font-light italic">{albumImage}</p>
                                <p className="font-inter text-sm">by</p>
                                <p className="font-inter font-black ">{albumData.artistName}</p>
                            </div>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <Button onClick={onClose} text="Close" />
                </div>
            </div>
        </div>

    )
}

export default Recommendation;

/// wrap in div, display-flex