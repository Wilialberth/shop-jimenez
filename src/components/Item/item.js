import React from 'react'

const item = (product) => {
   const{img, tipo, descr} = product
  return (
    <div className='card' style={{width: '20rem', margin: '.5rem'}}>
        <img src={img} className='card-img-top' alt={tipo} />
        <div>
            <p className="card-body">
              {tipo}
            </p>
            <p className="card-text">
              {descr}
            </p>
        </div>
        <button className='btn btn-primary'>Ver más</button>
    </div>
  )
}

export default item