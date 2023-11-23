import React, { ReactNode } from 'react'
import Navbar from '../navbar'
import { currentUser } from '@clerk/nextjs';

interface Props {
    children: ReactNode;
}
const CollectionLayout = async function ({ children }: Props) {
    const user = await currentUser();
    let isAuthorized = false;

    if (user?.privateMetadata.discogsToken && user?.privateMetadata.discogsUserId) {
        isAuthorized = true;
    }
    return (
        <>
            <Navbar authorized={isAuthorized} />
            <div>{children}</div>
        </>


    )
}

export default CollectionLayout