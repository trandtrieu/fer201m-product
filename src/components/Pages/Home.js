import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          {users.map((user, index) => (
            <div className="col-md-4 col-lg-4 mb-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">{user.email}</p>
                  <Link class="btn btn-primary" to={`/users/${user.id}`}>
                    Detail
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
