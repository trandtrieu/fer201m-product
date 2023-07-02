import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    console.log(result);
    setUser(result.data);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div>
      <div className="container">
        <div className="py-4">
          <h1>Home Page</h1>
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link class="btn btn-primary" to={`/users/${user.id}`}>
                      View
                    </Link>
                    &nbsp;
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {users.map((user, index) => (
            <div className="col-md-4 col-lg-4 mb-4">
              <div className="card">
                <img src="image.jpg" className="card-img-top" alt="Image" />
                <div className="card-body">
                  <h5 className="card-title">Card Title</h5>
                  <p className="card-text">Some example text.</p>
                  <Link class="btn btn-primary" to={`/users/${user.id}`}>
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
