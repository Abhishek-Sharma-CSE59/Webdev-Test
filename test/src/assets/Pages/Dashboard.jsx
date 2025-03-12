import React from 'react'
import { useState } from 'react'
import Card from "../Components/Card.jsx"

function Dashboard() {
    const [users, setUsers] = useState([
        {name : 'abhishek', email: "abhishekaj590@gmail.com", age:19},
        {name : 'Raj', email: "Raj590@gmail.com", age:23},
        {name : 'Joshi', email: "Joshi590@gmail.com", age:19},
        {name : 'Subh', email: "subh590@gmail.com", age:12},
    ]);
  return (
    <div className='p-6 bg-gray-900 min-h-screen bg-gradient-to-r from-blue-500 to-purple-600'>
        <h1 className='text-4xl font-bold text-center text-gray-800 mb-6'>User Dashboard</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {users.map((user,index) => (
                <Card key={index} name={user.name} email={user.email} age={user.age}/>
            ))}
        </div>
    </div>
  )
}

export default Dashboard