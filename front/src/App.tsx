import { useCallback, useState } from "react";
import "./App.css";
import Form from "./Form";
import { stepFields } from "./stepFields";
import { descriptiveFields } from "./descriptiveFields";

function App() {
  const fields = [
    descriptiveFields,
    ...Array.from({ length: 5 }, (_, i) => stepFields(i + 1)),
  ];

  const [formData, setFormData] = useState({});
  console.log({ formData });

  const renderForm = useCallback(() => {
    return fields.map((field, index) => (
      <div>
        <Form
          key={index}
          title={index > 0 ? `Etape ${index}` : "Formulaire de création"}
          form={field}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    ));
  }, [fields, formData]);

  return (
    <>
      <div className=" bg-gray-50 w-full sm:p-8">
        <div className=" m-auto space-y-4">
          <img
            alt="logo"
            src="./src/assets/J0ZHxsFAQCdIL2DDU3wR.webp"
            className="m-auto h-20"
          />
          {renderForm()}
        </div>
      </div>
    </>
  );
}

export default App;
