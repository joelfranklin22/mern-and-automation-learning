import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup
    .string()
    .oneOf(["admin"], "Only admin allowed")
    .required("Please fill out field"),
  password: yup
    .string()
    .oneOf(["1234"], "Password wrong")
    .required("Enter password"),
});

function LocalStorageLogin() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", password: "" },
    resolver: yupResolver(schema),
  });

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user") || sessionStorage.getItem("user")) {
      navigate("/home");
    }
  }, []);

  const onSubmit = (data) => {
    const user = { name: data.name };

    if (checked) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      sessionStorage.setItem("user", JSON.stringify(user));
    }

    console.log("Login Success");
    reset();
    navigate("/home");
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="form-control w-25 mb-2"
          placeholder="Username"
          {...register("name")}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

        <input
          type="password"
          className="form-control w-25 mb-2"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}

        <div className="mb-3">
          <input
            type="checkbox"
            id="rememberMe"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label htmlFor="rememberMe" className="ms-2">
            Remember Me
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default LocalStorageLogin;
