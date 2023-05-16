import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Products from "../components/products";
import axios from "axios";

function HomePage() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:8000/api/products");
      setProductsData(data);
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <Container>
        <h1 className="text-center my-4">Latest Products</h1>
        <Row>
          {productsData.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Products product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
