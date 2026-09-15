import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const schema = yup.object({
  name: yup.string().required("Name required"),
  age: yup.number().typeError("Enter valid age").min(18, "Min 18").required("Age required"),
  email: yup.string().email("Valid email").required("Email required"),
  password: yup.string().min(6, "Min 6 chars").required("Password required"),
});

function FormValidation() {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    trigger, // step 1 fields validate pannrathukku
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Next click — step 1 fields validate pannrom
  const handleNext = async () => {
    const isValid = await trigger(["name", "age"]); // name, age mattum check
    if (isValid) setStep(2); // valid ah irundha mattum step 2
  };

  const onSubmit = (data) => {
    console.log("Submitted!", data);
    reset();
    setStep(1); // reset pannina step 1 ku pogum
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-4">
      {step === 1 && (
        <>
          <h4>Step 1 — Personal Info</h4>
          <input
            type="text"
            placeholder="Name"
            className="form-control w-25 mb-2"
            {...register("name")}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

          <input
            type="number"
            placeholder="Age"
            className="form-control w-25 mb-2"
            {...register("age")}
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}

          {/* type="button" — form submit aagaathu */}
          <button type="button" className="btn btn-info" onClick={handleNext}>
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h4>Step 2 — Account Info</h4>
          <input
            type="email"
            placeholder="Email"
            className="form-control w-25 mb-2"
            {...register("email")}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Password"
            className="form-control w-25 mb-2"
            {...register("password")}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

          {/* Back button — step 1 ku pogum */}
          <button type="button" className="btn btn-secondary me-2" onClick={() => setStep(1)}>
            Back
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </>
      )}
    </form>
  );
}

export default FormValidation;