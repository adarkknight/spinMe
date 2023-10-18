'use client';
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSearchParams } from 'next/navigation';

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
    <div className='flex flex-col items-center'>
      <div className="join grid grid-cols-2 mb-2">
        {currentPage === 1 &&
          <button className="join-item btn btn-outline btn-disabled text-xs">Prev</button> ||
          <button className="join-item btn btn-outline text-xs" onClick={() => { changePage(currentPage - 1) }}>Prev</button>
        }
        {currentPage >= pageCount &&
          <button className="join-item btn btn-outline btn-disabled text-xs">Next</button> ||
          <button className="join-item btn btn-outline text-xs" onClick={() => { changePage(currentPage + 1) }}>Next</button>
        }
      </div>
    </div>
  )
}

export default Pagination