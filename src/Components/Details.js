import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const [users, setUsers] = useState([]);
  let params = useParams();
  Number(params);
  // console.log(params.userId)

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();


    data.forEach(obj => {
        if(obj.id === Number(params.userId)){
            console.log(obj)
            console.log("binog")
            setUsers(obj);
            console.log(users)
        }
    });
    // console.log(users.id);
    
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
          <h4>
            name : {users.name}
            id: {users.id}
            
          </h4>
    </>
  );
}
export default Details;
