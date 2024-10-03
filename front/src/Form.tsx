import { get, set } from "lodash";
import React from "react";

type FormField = {
  name?: string;
  type: ((data: any) => string) | string;
  label: string;
  defaultValue?: any;
  required?: boolean;
  fields?: FormField[];
  options?: (string | null)[];
  step?: ((data: any) => number) | number;
  onClick?: () => void;
  condition?: (data: any) => boolean;
};

const inputStyle = "border border-gray-300 p-2 rounded bg-gray-50 w-full";

const Form: React.FC<{
  form: FormField[];
  title?: string;
  formData: Record<string, any>;
  setFormData: (data: Record<string, any>) => void;
}> = ({ form, title, formData, setFormData }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData(set({ ...formData }, e.target.name, e.target.value));
  };

  const renderField = (field: FormField) => {
    const type =
      typeof field.type === "function" ? field.type(formData) : field.type;
    const step =
      typeof field.step === "function" ? field.step(formData) : field.step;
    switch (type) {
      case "text":
        return (
          <input
            type="text"
            name={field.name}
            placeholder={field.label}
            className={inputStyle}
            required={field.required}
            defaultValue={field.defaultValue}
            onChange={handleChange}
            value={get(formData, field.name || "")}
          />
        );
      case "number":
        return (
          <input
            type="number"
            name={field.name}
            placeholder={field.label}
            className={inputStyle}
            required={field.required}
            defaultValue={field.defaultValue}
            step={step}
            onChange={handleChange}
            value={get(formData, field.name || "")}
          />
        );
      case "select":
        return (
          <select
            name={field.name}
            className={inputStyle}
            required={field.required}
            defaultValue={field.defaultValue}
            onChange={handleChange}
            value={get(formData, field.name || "")}
          >
            {field.options?.map((option, i) => (
              <option key={i} value={option || ""}>
                {option}
              </option>
            ))}
          </select>
        );
      case "date":
        return (
          <input
            type="date"
            name={field.name}
            className={inputStyle}
            required={field.required}
            defaultValue={field.defaultValue}
            onChange={handleChange}
            value={get(formData, field.name || "")}
          />
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            name={field.name}
            className=" rounded-xl h-8 w-8 accent-sky-600"
            required={field.required}
            defaultValue={field.defaultValue}
            onChange={handleChange}
            value={get(formData, field.name || "")}
          />
        );
      case "button":
        return (
          <button
            type="button"
            className="bg-blue-500 text-white p-2 rounded"
            onClick={field.onClick}
          >
            {field.label}
          </button>
        );
      case "group-field":
        return (
          <div className="space-y-2 border p-4 rounded w-full">
            {field.fields?.map((f, i) => {
              const fType: any =
                typeof f.type === "function" ? f.type(formData) : f.type;

              return (
                <>
                  <label
                    key={"label" + field.name + i}
                    className="block text-sm font-medium text-gray-700 w-36"
                  >
                    {f.label}
                  </label>
                  <div key={"input" + field.name + i}>
                    {renderField({ ...f, type: fType })}
                  </div>
                </>
              );
            })}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className=" space-y-6 p-6 rounded-lg border bg-white">
      {title && <h2 className=" font-bold text-lg"> {title} </h2>}
      {form.map((field, i) => {
        const type =
          typeof field.type === "function" ? field.type(formData) : field.type;

        return (
          <div key={i}>
            {field.condition && !field.condition(formData) ? null : (
              <div className=" flex">
                <label className="block text-sm font-medium text-gray-700 w-36">
                  {field.label}
                </label>
                {renderField({ ...field, type })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Form;
