import { useForm } from "react-hook-form";
import { useFieldArray } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const scheme = yup.object({
  company: yup.string().required("company name"),
  employees: yup
    .array()
    .of(
      yup.object({
        name: yup.string().required("enter name"),
        role: yup.string().required("enter role"),
      }),
    )
    .min(1, "Min 1 Employee"),
});
function FormValidationDynamic() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      employees: [
        {
          name: "",
          role: "",
        },
      ],
    },
    resolver: yupResolver(scheme),
  });
  const { fields, remove, append } = useFieldArray({
    control,
    name: "employees",
  });
  const onSubmit = (data) => {
    localStorage.setItem("employees", JSON.stringify(data));
    console.log("Data", data);
    reset();
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Company Name"
          {...register("company")}
          className="form-control w-25 m-4 p-2"
        />
        {errors.company && (
          <p style={{ color: "red" }}>{errors.company.message}</p>
        )}
        {fields.map((field, index) => (
          <div key={field.id}>
            <input
              type="text"
              placeholder="Employee Name"
              className="form-control w-25 m-4 p-2"
              {...register(`employees.${index}.name`)}
            />
            {errors.employees?.[index]?.name && (
              <p style={{ color: "red" }}>
                {errors.employees[index].name.message}
              </p>
            )}
            <input
              type="text"
              placeholder="Role"
              className="form-control w-25 m-4 p-2"
              {...register(`employees.${index}.role`)}
            />
            {errors.employees?.[index]?.role && (
              <p style={{ color: "red" }}>
                {errors.employees[index].role.message}
              </p>
            )}

            <button
              className="btn btn-danger m-4"
              onClick={() => remove(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-primary m-4"
          onClick={() => append({ name: "", role: "" })}
        >
          Add User
        </button>
        <button type="submit" className="btn btn-info m-4">
          Sumbit
        </button>
      </form>
    </>
  );
}
export default FormValidationDynamic;
