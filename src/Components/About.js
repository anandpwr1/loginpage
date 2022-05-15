import React from "react";
import { useEffect, useState } from "react";
import { useNavigate  } from 'react-router-dom';

import NavigationBar from "./NavigationBar";

function About() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate (); //for navigating to Details page


  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    setUsers(await response.json());
  };
    useEffect(() => {
    getUsers();
  }, []);

  const handleUsersData = (id) =>{
    // console.log(id)
    navigate('/details/'+id);
  }

  return (
    <>
      {/* Navigation Bar Component*/}
      <NavigationBar />

      {/* List Card currentItems  */}
      <ul className="list-group  ">
        {users.map((currentItem) => {
          return (
            <li
              className="list-group-currentItem d-flex justify-content-around"
              key={currentItem.id}
            >
              <div className="card" style={{ width: "20%" }}>
                {/* <img
                    className="card-img-top"
                    src={currentItem.imagePath}
                    alt="Card image cap"
                  /> */}
                <div className="card-body">
                  <h5 className="card-title">{currentItem.username}</h5>
                  <p className="card-text">{currentItem.name}</p>
                  <p className="card-text">{currentItem.email}</p>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => handleUsersData(currentItem.id)} //binding using arrow function passing argument to function without invoking

                  >
                    Details
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default About;
