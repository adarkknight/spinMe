import React from 'react'
import getCollectionData from '../lib/getCollectionData';
import { sort } from 'fast-sort';
import Image from 'next/image';
import Pagination from '../components/pagination';
import { currentUser } from '@clerk/nextjs';

import { PaginationInfo, Album } from '../lib/definitions';

export default async function Collection({ searchParams }: { searchParams: { page: string } }) {
    const user = await currentUser();
    if (!user?.privateMetadata.discogsToken && !user?.privateMetadata.discogsUserId) {
        return;
    }
    const discogsToken = user?.privateMetadata.discogsToken as string;
    const discogsUserId = user?.privateMetadata.discogsUserId as string;
    const page = searchParams.page;
    const data = await getCollectionData(page, discogsToken, discogsUserId);
    const paginationData: PaginationInfo = data[0];
    const albumData: Album[] = data[1];
    const sortedData = sort(albumData).asc(a => a.artist);
    return (
        <>
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
                            <td className="font-semibold">{album.artist}</td>
                            <td>{album.title}</td>
                        </tr>)}
                        <tr></tr>
                    </tbody>
                </table>
            </div>
            <Pagination currentPage={parseInt(page)} pageCount={paginationData.pages} />
        </>
    )
}
