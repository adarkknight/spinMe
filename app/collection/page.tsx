import React from 'react'
import getAlbumData from '../api/getAlbumData'
import { sort } from 'fast-sort';
import Image from 'next/image';
import Pagination from '../components/pagination';
interface Album {
    artist: string;
    title: string;
    coverImage: string;
}
export default async function Collection({searchParams}: {searchParams: {page: string}}) {
    const data: Album[] = await getAlbumData();
    const sortedData = sort(data).asc(a => a.artist);
    return (

        <div className="overflow-auto">
            <h1 className="font-extrabold text-2xl ml-4 mt-4">Record Collection</h1>
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
                    {sortedData.map((album, index) => <tr key={index}>
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
            <div>
            <Pagination currentPage={parseInt(searchParams.page)} pageCount={9}/>
            </div>
        </div>
    )
}
