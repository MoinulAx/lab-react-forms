import React, { useState } from "react";
import "./Form.css";
import calculateAmount from "./CalculateAmount";
function Form() {
  

  return (
    <>
    
      <form onSubmit = {(e) =>{e.preventDefault();calculateAmount()}}>
        <input id="values" name="values" type="text" />
        <select id="operation" value = {inputValue} name="operation" onChange={setInputValue}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p></p>
      </section>
    </>
  );
}

export default Form;
