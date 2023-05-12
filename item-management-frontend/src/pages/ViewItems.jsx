import React from "react";
import {
  Card,
  Container,
  Row,
} from "reactstrap";

const ViewItems = ({ items }) => {
  return (

    <Container>
      <Row className="mt-3">
       
          {items.map((item) => (
              <Card className="col-12 mb-3 bg-dark" key={item.id}>
                <div class="card-body">
                <h5 className="card-title text-info" >{item.name}</h5>
                <p className="card-text text-light">{item.description}</p>
                </div>
              </Card>

          
          ))}
          
      </Row>
    </Container>
    
  );
};

export default ViewItems;
