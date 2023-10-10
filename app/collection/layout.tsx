import React, { ReactNode } from 'react'
import Navbar from '../navbar'
interface Props {
    children: ReactNode;
}
const CollectionLayout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>


    )
}

export default CollectionLayout