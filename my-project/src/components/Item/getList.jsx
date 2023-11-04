import React from 'react'

export default function GetList({lists}) {
  console.log({lists})
  return (
    <div> { (
     
      <ul className='flex flex-col justify-start'>
         <h2 className="text-2xl font-semibold "> {lists.title}</h2>
        {lists.task.map((item, index) => (
          <li key={index} className="  w-[200px]">
            <div className='px-5 py-3 '>
            <span>{item.title}</span>
            <p>{item.description}</p>
            </div>
            {/* <button className="text-red-500" onClick={() => removeFromCart(index)}>
              Remove
            </button> */}
          </li>
        ))}
      </ul>
    )}</div>
  )
}
