// TEMPORARY

"use client";

import { useEffect, useState } from "react";

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState([]);

  // Temporary admin check
  useEffect(() => {
    // Simulate an admin login
    const adminEmail = "admin@example.com"; // Sample admin email
    const currentUserEmail = prompt("Enter admin email:"); // Prompt for admin email

    if (currentUserEmail === adminEmail) {
      setIsAdmin(true);
    } else {
      alert("Access Denied. Admins Only.");
    }
  }, []);

  // Mock data for users 
  useEffect(() => {
    if (isAdmin) {
      const fetchedUsers = [
        { id: 1, email: "user1@example.com", role: "User" },
        { id: 2, email: "user2@example.com", role: "User" },
        { id: 3, email: "admin@example.com", role: "Admin" },
      ];
      setUsers(fetchedUsers);
    }
  }, [isAdmin]);

  if (!isAdmin) {
    return null; // If not admin, render nothing
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Admin Dashboard</h1>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">User Management</h2>
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{user.id}</td>
                <td className="border border-gray-300 p-2">{user.email}</td>
                <td className="border border-gray-300 p-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Job Postings</h2>
        <div className="mb-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition">
            Add New Job Posting
          </button>
        </div>
        {/* List of job postings can go here */}

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Analytics</h2>
        <p className="text-gray-600">
          {/* Analytics data can be displayed here */}
          Key metrics and insights are here.
        </p>
      </div>
    </div>
  );
};

export default AdminPage;
