import jwt_decode from 'jwt-decode';
import './App.css';
import {useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import File from "./File";
import {useState} from 'react';

function Login() {
  const [user, setUser] = useState({});
  
    function handleCallbackResponse(response){
      console.log("Encoded JWT ID token: " + response.credential);
      var userObject = jwt_decode(response.credential)
      console.log(userObject)
      setUser(userObject)
      document.getElementById("signInDiv").hidden = true;

  
    }
    function handleSignOut(event){
      setUser({});
      document.getElementById("signInDiv").hidden = false;

    }
  
    useEffect (()=>{
      /* global google */
      google.accounts.id.initialize({
        client_id: "859648345174-908l8i1ked8v53be5i29d8u1glp2mn46.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme:"outline", size:"large"}
      );
      google.accounts.id.prompt();
    },[])
    
    return (
      <div className="App">
        
        <div id='signInDiv'></div>
        { Object.keys(user).length != 0 && 
        
          <button onClick={ (e)=> handleSignOut(e)}>Sign Out</button>
          
        
  
        }
        
          {user &&
           <div>
            <img src={user.picture}></img>
            <h3>{user.name}</h3>
           </div>
          }
          <Routes>
            <Route path="/file" element={<File />} />
          </Routes>
          
      
        
        
        
       
      </div>
      
    );
  }
  
  export default Login;