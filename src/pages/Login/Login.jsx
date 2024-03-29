import "assets/admin/admin-main.scss";
import axios from "axios";
import { NOTIFY_NAME, PATH_NAME, TIME_OUT } from "configs";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loadingSlice from "redux/loadingSlice";
import notifySlice from "redux/notifySlice";
import userSlice from "redux/userSlice";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit({ username, password }) {
    let msg = new Array(0);
    let typeNotify = "";
    dispatch(loadingSlice.actions.show());
    axios({
      method: "GET",
      url: "https://6164054db55edc00175c1cc9.mockapi.io/v1/auth/1",
      timeout: TIME_OUT,
    })
      .then(function (res) {
        if (res && parseInt(res.status) === 200 && res.data && res.data.username) {
          let checkedUserNamePassword = true;
          if (username !== res.data.username) {
            checkedUserNamePassword = false;
            msg.push(NOTIFY_NAME.NOTI_WRONG_USERNAME);
            typeNotify = NOTIFY_NAME.NOTI_TYPE_WARNING;
          }
          if (password !== res.data.password) {
            checkedUserNamePassword = false;
            msg.push(NOTIFY_NAME.NOTI_WRONG_PASSWORD);
            typeNotify = NOTIFY_NAME.NOTI_TYPE_WARNING;
          }
          if (checkedUserNamePassword) {
            dispatch(
              userSlice.actions.login({
                ...res.data,
                expiry: Date.now(),
              })
            );
            navigate(`/${PATH_NAME.ADMIN_MASTER}/${PATH_NAME.ADMIN_USER_INFO}`);
          }
        } else {
          msg.push(NOTIFY_NAME.NOTI_LOGIN_FAIL);
          typeNotify = NOTIFY_NAME.NOTI_TYPE_DANGER;
        }
        dispatch(loadingSlice.actions.hide());
        dispatch(
          notifySlice.actions.showNotify({
            type: typeNotify,
            msg,
          })
        );
      })
      .catch(function (err) {
        dispatch(
          notifySlice.actions.showNotify({
            type: NOTIFY_NAME.NOTI_TYPE_DANGER,
            msg: err.message,
          })
        );
        dispatch(loadingSlice.actions.hide());
      });
  }
  return (
    <section className="sectionLogin h-screen text-base text-white">
      <div className="xForm absolute rounded px-10 top-1/2 left-1/2 flex items-center">
        <div className="frmContent relative w-full">
          <h1 className="mb-4 text-center text-4xl">Login</h1>
          <form className="frmLogin" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-2">
              <div>
                <input type="text" className="txtInput font-light outline-0 border-0 rounded px-2.5 py-2.5 w-full bg-transparent" {...register("username", { required: true })} />
                <i className="iconLogin absolute fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              {errors.username && <span className="text-red-500">Username is required</span>}
            </div>
            <div className="relative mb-2">
              <div>
                <input type="password" className="txtInput font-light outline-0 border-0 rounded px-2.5 py-2.5 w-full bg-transparent" {...register("password", { required: true })} />
                <i className="iconLogin absolute fa fa-key" aria-hidden="true"></i>
              </div>
              {errors.password && <span className="text-red-500">Password is required</span>}
            </div>
            <div className="relative mb-2 flex justify-center">
              <button type="submit" name="btn_login" className="btnLogin font-semibold relative flex items-center justify-center overflow-hidden">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
