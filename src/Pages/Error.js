import React from 'react'
import {Link} from 'react-router-dom'
export default function Error(){
  return(
    <>
      <div>
        <h1>Error</h1>
        <p>Would you like to go to your To Do list?</p>
      </div>

      <div>
        <Link to='/'>
        <button>Click here</button>
        </Link>
      </div>
    </>
  )
}