import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Pagination from '../app/components/pagination'
import { useRouter} from 'next/navigation'
import userEvent from '@testing-library/user-event'

jest.mock('next/navigation', () => {
    const router = {
      push: jest.fn(),
      query: {}
    }
    const searchParams = {
        push: jest.fn(),

    }
    return {
      useRouter: jest.fn().mockReturnValue(router),
      useSearchParams: jest.fn().mockReturnValue(searchParams)
    }
  })

describe('Pagination', () => {
    test('when on first page, and page count greater than 1, Next button is enabled, Prev is disabled ', () => {
        const pageCount = 2
        const currentPage = 1
        render(<Pagination pageCount={pageCount} currentPage={currentPage}/>)
        const nextButton = screen.getByText('Next')
        const prevButton = screen.getByText('Prev')
        expect(nextButton).toBeInTheDocument();
        expect(nextButton).not.toHaveClass('btn-disabled')
        expect(prevButton).toBeInTheDocument();
        expect(prevButton).toHaveClass('btn-disabled')
    })

    test('when on first page, and page count is 1, Next button is disabled, Prev is disabled ', () => {
        const pageCount = 1
        const currentPage = 1
        render(<Pagination pageCount={pageCount} currentPage={currentPage}/>)
        const nextButton = screen.getByText('Next')
        const prevButton = screen.getByText('Prev')
        expect(nextButton).toBeInTheDocument();
        expect(nextButton).toHaveClass('btn-disabled')
        expect(prevButton).toBeInTheDocument();
        expect(prevButton).toHaveClass('btn-disabled')
    })

    test('when on first page, and page count greater than 1, Next button can be clicked', async () => {
        const pageCount = 2
        const currentPage = 1
        render(<Pagination pageCount={pageCount} currentPage={currentPage}/>)
        const nextButton = screen.getByText('Next')
        const user = userEvent.setup()
        await user.click(nextButton)

        expect(useRouter().push).toHaveBeenCalledWith(expect.stringContaining('page=2'))
    })

    test('when on second page, and page count greater than 1, Prev button can be clicked', async () => {
        const pageCount = 2
        const currentPage = 2
        render(<Pagination pageCount={pageCount} currentPage={currentPage}/>)
        const prevButton = screen.getByText('Prev')
        const user = userEvent.setup()
        await user.click(prevButton)

        expect(useRouter().push).toHaveBeenCalledWith(expect.stringContaining('page=1'))
    })
})