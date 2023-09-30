import React from 'react'
import { Link } from "react-router-dom"
const PageOne = () => {
  return (
    <div>
        <Link to={'page_two'}>Two</Link>
        <br />
        <Link to={'page_three'}>Three</Link>
    </div>
  )
}

export default PageOne