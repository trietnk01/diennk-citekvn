import "assets/tailwind.css";
import LoadingSpinner from "components/LoadingSpinner";
import Notify from "components/Notify";
import { USER_LOGIN } from "configs";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import userSlice from "redux/userSlice";
import RoutesMain from "RoutesMain";
function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    let userJson = localStorage.getItem(USER_LOGIN);
    let userInfo = null;
    if (userJson) {
      userInfo = JSON.parse(userJson);
      if (userInfo) {
        let expiryV1 = userInfo.expiry;
        let expiryV2 = Date.now();
        let remainedMilisecond = expiryV2 - expiryV1;
        if (remainedMilisecond > 1 * 60 * 1000) {
          dispatch(userSlice.actions.logout());
        } else {
          dispatch(userSlice.actions.login({ ...userInfo, expiry: Date.now() }));
        }
      }
    }
  }, []);
  return (
    <Fragment>
      <RoutesMain></RoutesMain>
      <Notify />
      <LoadingSpinner />
    </Fragment>
  );
}

export default App;
