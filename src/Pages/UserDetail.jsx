import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDetail = ({ setId }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://667afce6bd627f0dcc915616.mockapi.io/api/Userdetail"
      );
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://667afce6bd627f0dcc915616.mockapi.io/api/Userdetail/${id}`
      );
      // After delete, fetch updated data
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">User List</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map((product, index) => (
          <div key={product.id} className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <div className="section-title">Address:</div>
                <p className="card-text">
                  <strong>Street:</strong> {product.street}
                </p>
                <p className="card-text">
                  <strong>City:</strong> {product.city}
                </p>
                <p className="card-text">
                  <strong>Zipcode:</strong> {product.zipcode}
                </p>
                <div className="section-title">Geolocation:</div>
                <p className="card-text">
                  <strong>Latitude:</strong> {product.lat}
                </p>
                <p className="card-text">
                  <strong>Longitude:</strong> {product.lng}
                </p>
                <div className="section-title">Company:</div>
                <p className="card-text">
                  <strong>Company Name:</strong> {product.company_name}
                </p>
                <p className="card-text">
                  <strong>Company Catch:</strong> {product.company_catch}
                </p>
                <div className="text-center">
                  <button
                    className="btn btn-warning btn-sm mx-1"
                    onClick={() => handleEdit(product.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        <button
          className="btn btn-primary m-3"
          onClick={() => navigate("/create")}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default UserDetail;
