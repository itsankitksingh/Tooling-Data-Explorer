import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataThunk } from '../store/thunks';
import DataTable from './DataTable';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
`;

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => ({
    loading: state.loading,
    data: state.data,
    error: state.error,
  })); // Return specific parts of the state

  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);

  return (
    <DashboardContainer>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <DataTable data={data} />}
    </DashboardContainer>
  );
};

export default Dashboard;
