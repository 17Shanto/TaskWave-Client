import { Link } from 'react-router-dom'
import {AiOutlineHome}from'react-icons/ai'
export default function SideBar() {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 p-4">
     
    <ul className='flex flex-col  gap-y-4'>
      <li className="mb-2">ALL BOARDS (3)</li>
      <li className="mb-2">
        <div className='bg-violet-600 flex p-3 gap-2 rounded-r-full items-center'>
          <Link to='/item'>
          <AiOutlineHome size={30}/>
           <button>Platform Launch</button>
           </Link>
        </div>
      </li>
      <li className="mb-2">Roadmap</li>
      <li className="mb-2">+ Create New Board</li>

      {/* Add more items as needed */}
    </ul>
  </div>)
}
