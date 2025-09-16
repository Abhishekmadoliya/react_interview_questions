import React from 'react'

const Fav = ({data}) => {
  return (
    <div>
        <h1>Fav component</h1>
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
    </div>
  )
}

export default Fav
