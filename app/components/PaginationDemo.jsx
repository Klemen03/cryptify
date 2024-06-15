'use client';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useState } from 'react';

export function PaginationDemo({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const disablePaginationPrevious = currentPage === 1 ? true : false;

  const disablePaginationNext = currentPage === pages.length ? true : false;

  // console.log(disablePrevNextBtn);
  // console.log(currentPage);

  return (
    <Pagination className="pb-5 pt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              handlePreviousPage();
            }}
            className={` hover:text-yellow-400 rounded-full text-md

              ${
                disablePaginationPrevious
                  ? 'text-gray-500 hover:text-gray-500 hover:bg-gray-900'
                  : ''
              }
            `}
          />
        </PaginationItem>
        {pages.map((page, idx) => (
          <PaginationItem key={idx}>
            <PaginationLink
              className={` rounded-full hover:bg-gray-700 text-md hover:text-yellow-400

                ${
                  currentPage === page
                    ? 'text-yellow-400 border-2 border-yellow-400 bg-gray-700 rounded-full'
                    : ''
                }

              `}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => handleNextPage()}
            className={` hover:text-yellow-400 rounded-full text-md

              ${
                disablePaginationNext
                  ? 'text-gray-500 hover:text-gray-500 hover:bg-gray-900'
                  : ''
              }
            `}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
