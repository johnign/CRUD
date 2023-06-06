import React, {useState, useEffect} from 'react'
import {Button, Form, Grid, Loader} from "semantic-ui-react";
import {storage} from "../firebase";
import {useParams, useNavigate} from "react-router-dom";

const initialState = {
     name: "",
     email: "",
     info: "",
     contact: ""
}
const AddEditUser = () => {
  const [data, setData] = useState(initialState);
  const {name, email, info, contact} = data;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  const handleChange = (e) => {
     setData({...data, [e.target.name]: e.target.value })
  };
  
  const validate = () => {
     let errors = {};
     if(!name) {
       errors.name = "Name is Required"
      }
      if(!name) {
        errors.name = "Name is Required"
      }
      if(!name) {
        errors.name = "Name is Required"
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validate();
  }
  return (
    <div>
      <Grid 
      centered 
      verticalAlign="middle" 
      columns="3" 
      style={{ height: "80vh" }}
      >
          <Grid.Row>
            <Grid.Column textAlign="center">
                <div>
                  {isSubmit ? (
                  <Loader active inline="centered" size="huge" />
                  ) : (
                  <>
                    <h2>Add User</h2>
                    <Form onSubmit={handleSubmit}>
                     <Form.Input 
                      label="Name" 
                      placeHolder="Enter Name"
                      name="name"
                      onChange={handleChange}
                      value={name}
                      autoFocus
                     />
                     <Form.Input 
                      label="Email" 
                      placeHolder="Enter Email"
                      name="email"
                      onChange={handleChange}
                      value={email}
                     />
                     <Form.TextArea 
                      label="Info" 
                      placeHolder="Enter Info"
                      name="info"
                      onChange={handleChange}
                      value={info}
                     />
                     <Form.Input 
                      label="Contact" 
                      placeHolder="Enter Contact"
                      name="contact"
                      onChange={handleChange}
                      value={contact}
                     />
                     <Form.Input
                     label="Upload"
                     type="file"
                     onChange={(e) => setFile(e.target.files[0])}
                     />
                    </Form>
                  </>
                  )}
                </div>  
            </Grid.Column>
          </Grid.Row>
      </Grid>
    </div>
  )
}

export default  AddEditUser
