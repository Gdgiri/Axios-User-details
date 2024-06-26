import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [createData, setCreateData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      await axios.post(
        "https://667afce6bd627f0dcc915616.mockapi.io/api/Userdetail",
        createData
      );
      // Show success message
      alert("User created successfully");

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
            value={createData.name}
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
            value={createData.username}
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
            value={createData.street}
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
            value={createData.city}
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
            value={createData.zipcode}
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
            value={createData.phone}
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
            value={createData.lat}
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
            value={createData.lng}
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
            value={createData.company_name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Company Catchphrase:</label>
          <input
            type="text"
            name="company_catch"
            value={createData.company_catch}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
