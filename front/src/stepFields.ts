export const stepFields = (num = 1) => [
  {
    name: `step${num}.label`,
    type: "text",
    label: "Label",
    required: true,
  },
  {
    name: `step${num}.type`,
    type: "select",
    label: "Type",
    required: true,
    options: ["Condition", "Calculation", "Function", "Return", "Variable"],
  },
  {
    name: `step${num}.variableName`,
    type: "text",
    label: "Variable Name",
  },
  {
    type: "text",
    label: "Description",
    name: `step${num}.description`,
  },
  {
    type: "text",
    label: "Value",
    name: `step${num}.value`,
  },
  {
    type: "group-field",
    label: "Function",
    name: `step${num}.function`,
    fields: [
      {
        type: "code",
        label: "Code",
        name: `step${num}.function.code`,
        options: [
          "MODULO",
          "MAX",
          "MIN",
          "PARTIE_ENTIERE",
          "PARTIE_DECIMALE",
          "ARRONDI",
          "ABS",
        ],
      },
      {
        type: "text",
        label: "⚙️ Un paramètre",
        name: `step${num}.function.paramFirst`,
      },
      {
        type: "text",
        label: "⚙️ Un autre  paramètre",
        name: `step${num}.function.paramSecond`,
      },
    ],
    condition: (value: Record<string, any>) =>
      value?.["step" + num]?.type == "Function",
  },
  {
    type: "group-field",
    label: "Calculs",
    name: `step${num}.calculs`,
    fields: [
      {
        type: "group-field",
        label: "Calcul 1",
        name: `step${num}.calculs.calculation1`,
        fields: [
          {
            type: "number",
            label: "⚙️ Un paramètre",
            name: `step${num}.calculs.calculation1.paramFirst`,
          },
          {
            type: "select",
            label: "Operator",
            name: `step${num}.calculs.calculation1.operator`,
            options: ["Addition", "Division", "Multiplication", "Substraction"],
          },
        ],
      },
    ],
    condition: (value: Record<string, any>) =>
      value?.["step" + num]?.type == "Calculation",
  },
  {
    type: "group-field",
    label: "Return",
    name: `step${num}.return`,
    condition: (value: Record<string, any>) =>
      value?.["step" + num]?.type == "Return",
    fields: [
      {
        type: "select",
        label: "Entity Type",
        name: `step${num}.return.entityType`,
        options: [null, "Calculation", "Constant", "Function", "Variable"],
      },
      {
        type: "select",
        label: "Type",
        name: `step${num}.return.type`,
        options: ["Boolean", "Float", "Number"],
        required: true,
      },
      {
        type: (value: Record<string, any>) =>
          ["Number" || "Float"].includes(value?.["step" + num]?.return?.type)
            ? "number"
            : "checkbox",
        label: "Value",
        step: (value: Record<string, any>) =>
          value?.["step" + num]?.return?.type == "Number" ? 0.1 : 1,
        name: `step${num}.return.value`,
      },
      {
        type: "text",
        label: "Function",
        name: `step${num}.return.function`,
      },
      {
        type: "text",
        label: "Calculs",
        name: `step${num}.return.calculs`,
      },
      {
        type: "text",
        label: "Variable Name",
        name: `step${num}.return.variableName`,
      },
    ],
  },
];
