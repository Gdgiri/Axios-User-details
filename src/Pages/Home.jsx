import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="container mt-4">
      <div className="accordion" id="productAccordion">
        {products.map((element, index) => (
          <div className="accordion-item" key={element.id}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="true"
                aria-controls={`collapse${index}`}
              >
                <h6>
                  {element.id} <span>{element.name}</span>
                </h6>
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#productAccordion"
            >
              <div className="accordion-body">
                <h3>
                  
                  <img
                    src={element.Image}
                    alt={element.name}
                    style={{
                      width: "300px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </h3>
                <h4>Name: {element.name}</h4>
                <h4>Username: {element.username}</h4>
                <h5>Street: {element.street}</h5>
                <h5>City: {element.city}</h5>
                <h5>Zipcode: {element.zipcode}</h5>
                <h5>Phone: {element.phone}</h5>
                <h5>Latitude: {element.lat}</h5>
                <h5>Longitude: {element.lng}</h5>
                <h5>Company Name: {element.company_name}</h5>
                <h6>Company Catchphrase: {element.company_catch}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
