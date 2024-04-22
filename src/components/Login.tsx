import { useForm, SubmitHandler } from "react-hook-form";

import ErrorComponent from "./Error";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actions/login.actions";
import { loginResponseType } from "../redux/reducers/login.reducers";
import { ReducersType } from "../redux/store";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { loginSuccessAction } from "../redux/actions/loginSuccess.actions";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const LoginResponse = useSelector<ReducersType>(
    (state: ReducersType) => state.loginRes
  ) as loginResponseType;

  const Dispatch = useDispatch();
  type Inputs = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    Dispatch(loginAction(data.email, data.password) as never);
    reset();
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (LoginResponse.serverResponse.value) {
      Dispatch(
        loginSuccessAction(
          LoginResponse.serverResponse.value.value.token
        ) as never
      );

      navigate("/dashboard");
    }
  }, [LoginResponse.serverResponse.value]);

  const loading = LoginResponse.loading;

  return (
    <div
      className={`  w-full h-screen   flex items-center justify-center   `}
      //   style={{
      //     backgroundColor: "rgba(0,0,0,0.3)",
      //   }}
    >
      <div className="bg-white w-[400px] h-[300px] border shadow-lg rounded-2xl flex flex-col p-6 items-center">
        <img src="Giddaa Logo.png" alt="" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          {errors.email?.type === "required" && (
            <ErrorComponent message="Email Field is Required" />
          )}
          {errors.email?.type === "pattern" && (
            <ErrorComponent message="Invalid Email Format: Missing '@' Symbol" />
          )}

          {LoginResponse.serverError?.response && (
            <ErrorComponent
              message={
                LoginResponse.serverError?.response?.data?.value?.message
              }
            />
          )}
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className="border w-full pl-4 py-1 focus:border-[#335F32] focus:border focus:outline-none"
            placeholder="Enter Email Address"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            className="border w-full pl-4 py-1 focus:border-[#335F32] focus:border focus:outline-none"
            placeholder="Enter Password"
            type="password"
            {...register("password", { required: true })}
          />
          {/* errors will return when field validation fails  */}

          <button
            disabled={loading}
            className={`w-full py-1 border ${
              loading ? "opacity-50" : ""
            } bg-[#335F32] text-white flex justify-center items-center`}
          >
            {loading ? <Spinner /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
