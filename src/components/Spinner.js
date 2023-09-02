import React from 'react'
import loading from './ZKZg.gif';

const Spinner =()=> {
  
    return (
      <div className='text-center'>
        <img className='my-4'src={loading} width={60} height={60} alt='loading'/>
      </div>
    )
  }
export default Spinner;
