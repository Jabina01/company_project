import React from 'react'
import {useState} from "react"
import axios from 'axios'
function Form() {
const [post, setPost] = useState({})
function createPost() {
  console.log(post,"post");
  axios
    .post("localhost:5000/get_data", 
      {
      headers: {
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(post)
    })
    .then((response) => {
      setPost(response);
      console.log(response)
    });
}

  return (
    <>
    <form className='form'>
    <h1>ADD/EDIT EMPLOYE</h1>
      <label>Name:
        <input className='Box'
          type="text" 
          onChange={(e)=>{
            setPost({
              FirstName:e.target.value
            });
    
          }} 
        />
      </label>
      <label> Email:
        <input className='Box'
          type="text" 
          
          onChange={(e)=>{
            setPost({
              LastName:e.target.value
            });
    
          }} 
        />
      </label>
      <label> Password:
        <input className='Box'
          type="password" 
          
          onChange={(e)=>{
            setPost({
              LastName:e.target.value
            });
    
          }} 
        />
      </label>
      <p>{JSON.stringify(post)}</p>
      <button onClick={createPost} type="submit" className='btn'> Submit</button>

    </form>

    </>
  )
}export default Form