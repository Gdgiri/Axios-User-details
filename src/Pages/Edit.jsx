import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const navigate = useNavigate();

  // State to hold edit data
  const [editData, setEditData] = useState({
    name: "",
    username: "",
    street: "",
    city: "",
    zipcode: "",
    phone: "",
    lat: "",
    lng: "",
    company_name: "",
    company_catch: "",
  });

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data for the specified ID
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://667afce6bd627f0dcc915616.mockapi.io/api/Userdetail/${id}`
      );
      // Update editData state with fetched data
      setEditData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Send PUT request to update data
      await axios.put(
        `https://667afce6bd627f0dcc915616.mockapi.io/api/Userdetail/${id}`,
        editData
      );
      // Show success message
      alert("Details updated successfully");

      navigate("/details");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form text-center p-4">
        <div className="mb-3">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={editData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={editData.username}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Street:</label>
          <input
            type="text"
            name="street"
            value={editData.street}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={editData.city}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Zipcode:</label>
          <input
            type="text"
            name="zipcode"
            value={editData.zipcode}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={editData.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Latitude:</label>
          <input
            type="text"
            name="lat"
            value={editData.lat}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Longitude:</label>
          <input
            type="text"
            name="lng"
            value={editData.lng}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Company Name:</label>
          <input
            type="text"
            name="company_name"
            value={editData.company_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Company Catch:</label>
          <input
            type="text"
            name="company_catch"
            value={editData.company_catch}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary m-3">
          Update Details
        </button>
      </form>
    </div>
  );
};

export default Edit;
