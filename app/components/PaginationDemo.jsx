import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
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

  return (
    <Pagination className="pb-5 pt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePreviousPage()}
            className="rounded-full text-md"
          />
        </PaginationItem>
        {pages.map((page, idx) => (
          <PaginationItem
            key={idx}
            className={
              currentPage === page
                ? 'text-yellow-400 border-2 border-yellow-400 bg-gray-700 rounded-full'
                : ''
            }
          >
            <PaginationLink
              className="rounded-full hover:bg-gray-700 text-md"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => handleNextPage()}
            className="rounded-full text-md"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
