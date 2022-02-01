/* 
input: pageNumber, prevHandler, nextHandler
*/

import React from 'react';

const Pagination = (pageNumber) => {
  return (
    <div class='pagination'>
      <button class='btn'>←</button>
      <span class='pagination__page'>{pageNumber}</span>
      <button class='btn'>→</button>
    </div>
  );
};

export default Pagination;
