import React, { ReactNode } from 'react'
import Navbar from '../navbar'
interface Props {
    children: ReactNode;
}
const HomeLayout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>


    )
}

export default HomeLayout