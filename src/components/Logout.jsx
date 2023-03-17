import axios from "axios";
import React from 'react';
import { useNavigate } from "react-router-dom";


const Logout = () => {
    const navigate = useNavigate();
  
    function handleLogout(event) {
        event.preventDefault();
        axios({
          method: "GET",
          url: "http://192.168.0.109:5000/auth/logout",
        })
          .then((response) => {
            localStorage.clear();
            navigate("/login");
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          });
      }

      return (
    <div className="Logout text-end">
        <div class="Remove p-1 border bg-red-500 rounded-2xl flex text-white">
            <input type="submit" value="Logout" onClick={handleLogout} />
        </div>
    </div>
  )
}

export default Logout