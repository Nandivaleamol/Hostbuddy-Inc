import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  InputGroup,
  Input,
  Row,
  InputGroupText,
} from "reactstrap";
import ViewItems from "./ViewItems";
import { toast } from "react-toastify";

function ItemList() {

  // for search functionality
  const [searchTerm, setSearchTerm] = useState("");

  //for adding items
  const [items, setItems] = useState([]);

  //for filtering items
  const [filteredItems, setFilteredItems] = useState([]);

  //for calling server api
  useEffect(() => {
    fetch("http://localhost:8181/item/all")
      .then((response) => response.json())
      .then((data) => {
        // set data as item
        setItems(data);

        //set filtered items as data
        setFilteredItems(data);
      })
      .catch((error) =>{
        // in case of any error toast will showing
        toast.error("Something went wrong on server, try again!!")
        console.log(error)
      } );
  }, []);

  // search function
  const handleSearch = () => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  //for reset search input
  const handleReset = () => {
    setSearchTerm("");
    setFilteredItems(items);
  };

  return (
      <Container>
        <Row className="mt-3">
          <Col sm={{ size: 6, offset: 3 }}>
                <h2>Items List</h2>
                <InputGroup>
                  <Input
                    placeholder="Search items by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <InputGroupText addon>
                    <Button className="btn-success" onClick={handleSearch}>Search</Button>
                  </InputGroupText>
                  <InputGroupText addon>
                    <Button className="btn-danger" onClick={handleReset}>Reset</Button>
                  </InputGroupText>
                </InputGroup>
                <ViewItems items={filteredItems} />
          </Col>
        </Row>
      </Container>
  );
}

export default ItemList;
