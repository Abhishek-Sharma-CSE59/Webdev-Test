import React from 'react'

function Card ({name, email,age}) {
  return (
    <div className='border border-gray-200 p-6 rounded-lg shadow-lg bg-white '>
        <h2 className='test-2xl font-semibold text-gray-900 mb-2'>{name}</h2>
        <p className='test-gray-700 text-lg'>{email}</p>
        <p className='test-gray-600 text-sm'>Age : {age}</p>
    </div>
  )
}

export default Card