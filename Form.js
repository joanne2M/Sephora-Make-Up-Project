import React from "react";
import { useState, useEffect } from 'react';

function Form(props) {
    const [formData,setFormData]= useState({
        searchTerm: ""
    })
const handleChange = (e)=> {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }
// handles an event and allows target event(submission) to populate and save info to state

const handleSubmit = (e)=>{
    e.preventDefault()
    props.MakeUpsearch(formData.searchTerm)
}

  return (
    <>
      <form className ="SubmitButton" onSubmit={handleSubmit}>
        <input className ="SubmitButton" placeholde="Enter Movie" type="text" name="searchTerm" onChange={handleChange} value={formData.searchTerm} />
        <input className ="SubmitButton" type="submit" value="submit" />
      </form>
    </>
  );
}

export default Form;