import React from "react";
import Container from "react-bootstrap/esm/Container";

const GlobalMsg = () => {
  return (
    <div className="bg-dark text-light">
      <Container className="d-flex justify-content-between p-1">
        <div>
          <i class="fa-solid fa-phone"></i> Call 1300 My shop
        </div>
      </Container>
    </div>
  );
};

export default GlobalMsg;
