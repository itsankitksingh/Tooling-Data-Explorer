import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './actions';
import { fetchHeliusData } from '../services/api';

export const fetchDataThunk = () => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const data = await fetchHeliusData();
    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};
