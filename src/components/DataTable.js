import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from './Pagination';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const DataTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Number of items per page

  if (!data || !data.result || !Array.isArray(data.result)) {
    return <p>No data available</p>; 
  }

  const totalPages = Math.ceil(data.result.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.result.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <Th>Feature Set</Th>
            <Th>Gossip</Th>
            <Th>Pubkey</Th>
            <Th>Pubsub</Th>
            <Th>RPC</Th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <Td>{item.featureSet}</Td>
              <Td>{item.gossip}</Td>
              <Td>{item.pubkey}</Td>
              <Td>{item.pubsub}</Td>
              <Td>{item.rpc}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default DataTable;
