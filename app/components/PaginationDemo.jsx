import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

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

  const disablePaginationNext =
    currentPage === pages.length || pages.length === 0 ? true : false;

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
            className={` dark:hover:text-yellow-400 border-2 border-white dark:border-gray-900 rounded-full text-md hover:bg-yellow-400 active:border-black dark:bg-gray-900 dark:active:border-yellow-400

              ${
                disablePaginationPrevious
                  ? 'dark:text-gray-500 active:border-whtie dark:hover:text-gray-500 dark:hover:bg-gray-900 bg-white hover:bg-white text-gray-300 hover:text-gray-300 dark:active:border-gray-900'
                  : ''
              }
            `}
          />
        </PaginationItem>
        {pages.map((page, idx) => (
          <PaginationItem key={idx}>
            <PaginationLink
              className={`rounded-full hover:bg-yellow-400 dark:hover:bg-gray-700 text-md dark:hover:text-yellow-400 

                ${
                  currentPage === page
                    ? 'dark:text-yellow-400 border-2 dark:border-yellow-400 dark:bg-gray-700 rounded-full bg-yellow-400 border-black'
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
            className={` dark:hover:text-yellow-400 border-2 border-white dark:border-gray-900 rounded-full text-md hover:bg-yellow-400 active:border-black dark:bg-gray-900 dark:active:border-yellow-400

              ${
                disablePaginationNext
                  ? 'dark:text-gray-500 active:border-whtie dark:hover:text-gray-500 dark:hover:bg-gray-900 bg-white hover:bg-white text-gray-300 hover:text-gray-300 dark:active:border-gray-900'
                  : ''
              }
            `}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
