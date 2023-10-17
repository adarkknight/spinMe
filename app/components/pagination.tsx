'use client';
import { useRouter } from 'next/navigation'
import React from 'react'
import {useSearchParams} from 'next/navigation';

interface Props {
    currentPage: number,
    pageCount: number,
}
const Pagination = ({
    pageCount, 
    currentPage
    }: Props) => {
        const router = useRouter();
        const searchParams = useSearchParams();
        const changePage = (page: number) => {
            const params = new URLSearchParams(searchParams)
            params.set('page', page.toString());
            router.push('?' + params.toString());
        }
  return (
    <div className="join grid grid-cols-2">
    {currentPage === 1 &&
    <div className="join-item btn btn-outline btn-disabled">Previous page</div> ||
    <div className="join-item btn btn-outline" onClick={() => {changePage(currentPage - 1)}}>Previous page</div>
    }
    {currentPage >= pageCount &&
    <div className="join-item btn btn-outline btn-disabled">Next page</div> ||
    <div className="join-item btn btn-outline" onClick={() => {changePage(currentPage + 1)}}>Next page</div>
    }
  </div>
  )
}

export default Pagination