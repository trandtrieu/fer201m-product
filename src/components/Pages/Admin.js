import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const response = await axios.get("http://localhost:3003/users");
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const usenavigate = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      usenavigate("/login");
    }
  }, []);
  return (
    <div className="container">
      <div className="py-4 text-center">
        <h1>Admin Page</h1>
        <input
          className="form-control mb-5"
          type="text"
          placeholder="Search.."
          value={searchTerm}
          onChange={handleSearch}
        />

        <table className="table border table-striped shadow">
          <thead className="table-dark text-center">
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filteredUsers.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-primary" to={`/users/${user.id}`}>
                    View
                  </Link>
                  &nbsp;
                  <Link
                    className="btn btn-outline-primary"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
