import React, {useState} from "react";
import "./Home.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import TableData from "../components/TableData";
import {AiOutlineSearch } from 'react-icons/ai';
const Home = () => {
  const [term, setTerm] = useState("")
  return (
    <>
      <div className="main-container">
        <h2 className="title">
          NBA TEAMS <Badge bg="secondary"></Badge>
        </h2>
        <div>
          
        <InputGroup className="mb-3" >
          <AiOutlineSearch/>
        <Form.Control
          aria-describedby="basic-addon2"
          value={term}
          onChange={(e)=>setTerm(e.target.value)}
        />
      </InputGroup>
        </div>
        <div className="table-container">
          <TableData term={term} />
        </div>
      </div>
    </>
  );
};
export default Home;
