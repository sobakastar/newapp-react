import React, { useEffect, useState, useRef } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

import "./Form.styles.css";
// import { MyButton } from "../Example/Example";

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");


const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log("did mount", inputRef);
    inputRef.current?.focus();


    return () => {
      console.log("will unmount");
    };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
     {/*<input value={value} onChange={handleChange} type="text" ref={inputRef} />*/}
      {/*<input type="submit" />*/}
      <TextField sx={{padding:0}} value={value} onChange={handleChange} inputRef={inputRef}/>
      <Button className="mybtn" type="submit" variant="contained">
        Submit
      </Button>
     {/* <MyButton text="Submit" onClick={handleSubmit}>
       Between components tags
        </MyButton> */}
    </form>
  );
};
