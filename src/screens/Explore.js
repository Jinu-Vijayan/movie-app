import React from 'react'
import { useParams } from 'react-router-dom'

const Explore = () => {

    const data = useParams();

  return (
    <div>
        <p>{data.showType}</p>
    </div>
  )
}

export default Explore