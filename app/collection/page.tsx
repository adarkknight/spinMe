import React from 'react'
import getAlbumData from '../api/getAlbumData'
import { sort } from 'fast-sort';
import Image from 'next/image';

interface Album {
    artist: string;
    title: string;
    coverImage: string;
}
export default async function Collection() {
    const data: Album[] = await getAlbumData();
    const sortedData = sort(data).asc(a => a.artist);
    return (
        <div className="overflow-x-auto">
            <table className='table'>
                <thead>
                    <tr>
                        <th>
                            Album Cover
                        </th>
                        <th>
                            Artist
                        </th>
                        <th>
                            Album
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map(album => <tr key={album.title}>
                        <td>
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <Image src={album.coverImage} width='100' height='100' alt='album'></Image>
                                </div>
                            </div>
                        </td>

                        <td>{album.artist}</td>
                        <td>{album.title}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
