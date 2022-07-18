import { Navigate,Outlet } from "react-router-dom";


const PrivateRoutes=()=>{
    let token
  
    if(localStorage.email===""){
token=false
    }else {
        token=true
    }
  
    let auth = {token}
   
  
     return auth.token?localStorage.login?<Navigate to="/home"/>:<Outlet/>: <Navigate to="/login"/>
   
    
        
    
}

export default PrivateRoutes