import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "./TableData.css";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import RecordModal from "./RecordModal";

const TableData = ({term}) => {
  const [teamsData, setTeamsData] = useState([]);
  const [masterData, setMasterData] = useState([]);

  const [selectedTeam, setselectedTeam] = useState([]);
  const myRef = useRef();
  const [item, setItem] = useState(null);
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      setItem(row.id);
      myRef.current.handleShow();
    },
  };
  const columns = [
    { dataField: "name", text: "Team Name" },
    { dataField: "city", text: "city" },
    { dataField: "abbreviation", text: "Abbreviation" },
    { dataField: "conference", text: "Conference" },
    { dataField: "division", text: "Division" },
  ];

  const getAllTeams = async () => {
    await axios
      .get("https://www.balldontlie.io/api/v1/teams")
      .then((response) => {
        setMasterData(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(()=>{
    let arr = [...masterData].filter((ele)=>ele?.name.toLowerCase().includes(term.toLowerCase()))
   
    setTeamsData([...arr]);

  },[term, masterData])

  const getGame = async (id) => {
    await axios
      .get(`https://www.balldontlie.io/api/v1/games/${id}`)
      .then((response) => {
        setselectedTeam(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getGame(item);
  }, [item]);

  useEffect(() => {
    getAllTeams();
  }, []);
  return (
    <>
      <div>
        <BootstrapTable
          className="custom_table"
          keyField="id"
          data={teamsData}
          columns={columns}
          pagination={paginationFactory()}
          rowEvents={rowEvents}
          aria-expanded="true"
        />
      </div>
      <RecordModal ref={myRef} item={selectedTeam} />
    </>
  );
};

export default TableData;
