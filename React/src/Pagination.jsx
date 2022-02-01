import React from 'react';

const Pagination = ({ pageNumber, prev, next, usersCount, itemsPerPage }) => {
  const lastPage = Math.ceil(usersCount / itemsPerPage);
  return (
    <div className='pagination'>
      <button disabled={pageNumber === 1} onClick={prev} className='btn'>
        ←
      </button>
      <span className='pagination__page'>{pageNumber}</span>
      <button disabled={pageNumber === lastPage} onClick={next} className='btn'>
        →
      </button>
    </div>
  );
};

export default Pagination;
