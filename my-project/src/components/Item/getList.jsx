import React, { useState } from 'react'
import CreateTask from './CreateTask'

export default function GetList({lists}) {
  const[showModal,setShowModal] =useState(false)
  console.log({lists})
  return (
    <div> { (
     
      <ul className='flex flex-col justify-start shadow-md'>
        <div className='flex gap-3'>
        <h2 className="text-2xl text-center font-semibold "> {lists.title}</h2>
        <button className='bg-violet-400 hover:bg-violet-600 text-white px-2 rounded'   onClick={()=>setShowModal(true)}>create</button>
        </div>
         <div className='py-3  '>
        {lists.task.map((item, index) => (
          <li key={index} className=" p-5 shadow-lg py-3   w-[200px]">
            <div className='px-5 py-3 '>
            <span>{item.title}</span>
            <p>{item.description}</p>
            </div>
            <div className='flex justify-between'>
            <button className="bg-violet-400 hover:bg-violet-600 text-white px-2  rounded" onClick={()=>setShowModal(true)}>
              Update
            </button>
            <button className="bg-violet-400 px-2 hover:bg-violet-600 text-white   rounded"  >
              Delete
            </button>
            </div>
          </li>
        ))}
        </div>
        <CreateTask isvisible={showModal} onClose={()=>setShowModal(false)}/>
      </ul>
    )}</div>
  )
}
