import { useState } from "react";

function InputsFields() {
  const [validationErr, setValidationErr] = useState(null);
  const [value, setValue] = useState("");
  const handleChange = (text) => {
    console.log({ text });
    if (/^[a-zA-Z]+$/.test(text)) {
      setValidationErr("Only number is required");
    } else {
      setValue(text);
      setValidationErr("");
    }
  };

  return (
    <div style={{ marginTop: "20%" }}>
      <p className="error">{validationErr}</p>
      <input
        value={value}
        className="inputs"
        type="text"
        placeholder="Enter postal code"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default InputsFields;
