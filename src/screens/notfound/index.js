import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./notfound.css"

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notFoundContent">
      <div className="row">
        <div className="col text-center mb-5 header_content">
          <h1 className="display-4">Ooops!! This Page Not Found!</h1>
          <button type="button" className="btn btn-info" onClick={() =>{ navigate('/')}}>Go To Home Page</button>
        </div>
      </div>

    </div>
  )
}

export default NotFound