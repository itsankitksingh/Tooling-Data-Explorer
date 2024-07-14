import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px;
  margin: 0 5px;
  border: 1px solid #ddd;
  background-color: #f2f2f2;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <PaginationContainer>
      <Button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </Button>
      <span>Page {currentPage} of {totalPages}</span>
      <Button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
