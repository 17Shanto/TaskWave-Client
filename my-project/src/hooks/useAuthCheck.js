 
import {useEffect, useState}from'react';
import {useDispatch}from'react-redux';
import {userLoggedIn} from'../features/auth/AuthSlice'
export default function useAuthCheck() {
  const [authChecked,setAuthChecked] = useState(false)
  const dispatch = useDispatch()
   useEffect(()=>{
    const localAuth = localStorage?.getItem('auth');
    if(localAuth){
      const auth = JSON.parse(localAuth);
      if(auth?.token && auth?.user){
        dispatch(userLoggedIn({
          token:auth.token,
          user:auth.user
        }))
      }
    }
    setTimeout(()=>{
      setAuthChecked(true)
    },1000)
   },[dispatch,setAuthChecked])
   return authChecked;
}
