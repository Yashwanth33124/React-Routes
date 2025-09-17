import React from 'react'
import  {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <h3>
        This page Not Found
      </h3>
      <Link to={"/Recipe-list"}>
      Go to Recipe List
      </Link>
    </div>
  )
}

export default NotFound
