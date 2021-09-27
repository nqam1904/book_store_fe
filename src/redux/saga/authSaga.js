import { put, takeLatest, call } from "redux-saga/effects";
import * as Action from "redux/actions/loginAction";
import loginApi from "api/loginApi";
import { Loading } from "components";
import { toast } from "react-toastify";
import optionToast from "utils/Toast";
import StorageKeys from "constants/Storage-key";
import { history } from "redux/store";
const option = optionToast;

function* loginSaga(action) {
  try {
    Loading.show();
    const response = yield call(loginApi.login, action.payload);

    localStorage.setItem(StorageKeys.TOKEN, response.access_token);
    localStorage.setItem(StorageKeys.USER, response.data);

    yield put(
      Action.loginSuccess({
        ...response.data,
        access_token: response.access_token,
      })
    );
    toast.success("🚀 Success", option);
    history.push("/admin");
  } catch (error) {
    toast.error(`${error}`, option);
  } finally {
    Loading.hide();
  }
}

// eslint-disable-next-line
export default function* () {
  yield takeLatest(Action.SIGN_IN, loginSaga);
}
