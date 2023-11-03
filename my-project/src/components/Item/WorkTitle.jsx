 import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetWorksapceAllQuery } from '../../features/workspaces/workspaceApi'
import { workSpace } from '../../features/workspaces/workSlic';
 export default function WorkTitle() {
  const[getData,setData] =  useState()
  const dispatch =  useDispatch()
  const {work} = useSelector((state)=>state.work)

 
  const  {data,isLoading,isError,error} =  useGetWorksapceAllQuery()
       
     dispatch(workSpace(data))
       console.log( ) 
    
    useEffect(()=>{
       setData(data)
    },[data])
    console.log({getData})
   return (
     <div>WorkTitle</div>
   )
 }
 