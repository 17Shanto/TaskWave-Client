 import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
 
import { workSpace } from '../../features/workspaces/workSlic';
import { useGetWorkspacesListQuery,useGetWorkspacesQuery } from '../../features/workspaces/workspaceApi';
import ListCreateItem from './ListItemCreate';
import GetList from './getList';
import CommonModal from './CommonModal';
 export default function WorkTitle() {
   const lists = 
    {
      title: "To-Do List",
      task: [
        {
          "title": "Task 1",
  "description": "Description of Task 1",
  "list": "list-id-here"
        },
        {
          "title": "Task 1",
  "description": "Description of Task 1",
  "list": "list-id-here"
        }, {
          "title": "Task 1",
  "description": "Description of Task 1",
  "list": "list-id-here"
        },
        {
          "title": "Task 1",
  "description": "Description of Task 1",
  "list": "list-id-here"
        }, {
          "title": "Task 1",
  "description": "Description of Task 1",
  "list": "list-id-here"
        },
        {
          "title": "Task 1",
  "description": "Description of Task 1",
  "list": "list-id-here"
        }
      ]
    }
     
   
       
  const[showModal,setShowModal] =useState(false)
   return (
     
     <div className=' '>
      <div className=' px-10 flex items-center justify-between '>
    <div><h1 className='text-2xl font-bold  '>Work Title Title</h1></div>
  <div className='flex gap-5'>
  <button
        onClick={()=>setShowModal(true)}
      className="bg-violet-400 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded"
    >
       Edit
    </button>
    <button
         
      className="bg-violet-400 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded"
    >
       Delete
    </button>
  </div>
  </div>
   <div className='flex gap-2 items-center justify-center'>
    
   </div>
     
   <ListCreateItem isvisible={showModal} onClose={()=>setShowModal(false)}/>
   <div className="max-w-full mx-auto bg-white p-6 rounded-md shadow-md flex gap-4">
    
     
     <GetList lists={lists}/>
     <GetList lists={lists}/>
           
     <GetList lists={lists}/>
     <GetList lists={lists}/>     
     <GetList lists={lists}/>
     <GetList lists={lists}/>     
     <GetList lists={lists}/>
     <GetList lists={lists}/>
   

    </div>
    
     </div>
   )
 }
 