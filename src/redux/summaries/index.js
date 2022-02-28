import { put, takeLatest } from "@redux-saga/core/effects";
import AxiosCustom from '../../components/common/components/apiConfig';
import {handleNotificationAlertCatch,handleNotificationAlertTrySelect} from '../../components/common/method/handleNotificationAlert'

export const actionTypes = {
  summariesSelect: "[summariesSelect Action]",
  summariesSelectEmpty: "[summariesSelectEmpty Action]",
  summariesSelectLoading: "[summariesSelectLoading Action]",
  summariesSelectAsync: "[summariesSelectAsync Action]",
};

const initialState = {
  data: [],
  loading:false
};

export const summaries_select_reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.summariesSelect:
      return { data: payload };
    case actionTypes.summariesSelectEmpty:
      return { data: [] };
    case actionTypes.summariesSelectLoading:
      return {...state,loading:payload};
    default:
      return state;
  }
};

function* handleWorker({payload}) {
  let config = { url: "select_request" };
  yield put({type:actionTypes.summariesSelectLoading,payload:true})


  let _data = {
    table: "stock",
    from:0,
    size:1000,
   
    method_type: "select_summaries",
    data: payload?.data ? payload.data:{}
  };

  try {
    let response = yield AxiosCustom(config, _data);

    let isOk = handleNotificationAlertTrySelect(response);
    if (!isOk) {
      return;
    }
    yield put({ type: actionTypes.summariesSelect, payload: response.data.response.data.results });
  } catch (err) {
    handleNotificationAlertCatch();
  }finally{
    yield put({type:actionTypes.summariesSelectLoading,payload:false})
  }
}
export function* summariesSelect() {
  yield takeLatest(actionTypes.summariesSelectAsync, handleWorker);
}
