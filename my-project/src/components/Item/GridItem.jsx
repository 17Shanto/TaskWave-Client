 
 
 
import { useDispatch, useSelector } from 'react-redux';
import { useGetWorksapceAllQuery } from '../../features/workspaces/workspaceApi';
import Product from './Product';
 
import WorkTitle from './WorkTitle';
import {workSpace,workspaceByid} from '../../features/workspaces/workSlic';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
 

 

 
const GridItem = () => {
  
  const dispatch = useDispatch()
  const { id } = useParams();
  const [value ,setValue] = useState('')
  console.log(id)
  const auth =  useSelector((state)=>state.auth)
    console.log(auth.user._id)
     
    
  
   console.log( useGetWorksapceAllQuery())
    
  
    {
      const filterById = (array, targetId) => {
        console.log(targetId)
        return array.filter(item => item.createdBy === targetId);
      };
      
      // Example usage
      const filteredArray = filterById(data, id);
      dispatch(workspaceByid(filteredArray))
      console.log({filteredArray});
    }
  
  // console.log({filteredArray})
  
  return (
    <div className="container mx-auto p-4">
     
      
      <div className="">
        
        <div className="">
          <h1 className="text-2xl font-bold mb-4">Shopping App</h1>
           
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
             <WorkTitle data={data}/>
          </div>
        </div>
         
      </div>
    </div>
  );
};

export default GridItem;
