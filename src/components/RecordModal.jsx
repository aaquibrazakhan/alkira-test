import React, {
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import moment from "moment";

import { Col, Container, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./RecordModal.css";

const RecordModal = forwardRef(({ item }, ref) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useImperativeHandle(ref, () => ({
    handleShow: () => setShow(true),
  }));

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title ><h5>{item?.home_team?.name}</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={6} md={6}>
                <p>Team Full Name</p>
              </Col>
              <Col xs={6} md={6}>
                {item?.home_team?.full_name}
              </Col>
              <Col xs={6} md={6}>
                <p>Total Games in 2021</p>
              </Col>
              <Col xs={6} md={6}>
                {item?.home_team?.id}
              </Col>
              <Col xs={6} md={6}>
                <h5>Random Game Details:</h5>
              </Col>
              <Col xs={6} md={6}>
                <p></p>
              </Col>
              <Col xs={6} md={6}>
                <h5>Date</h5>
              </Col>
              <Col xs={6} md={6}>
                <h5>{moment(item?.date).format("yy-MM-DD")}</h5>
              </Col>
              <Col xs={6} md={6}>
                <h5>Home Team</h5>
              </Col>
              <Col xs={6} md={6}>
                <h5>{item?.home_team?.name}</h5>
              </Col>
              <Col xs={6} md={6}>
                <h5>Home Team Score</h5>
              </Col>
              <Col xs={6} md={6}>
                <h5>{item?.home_team_score}</h5>
              </Col>
              <Col xs={6} md={6}>
                <h5>Visitor</h5>
              </Col>
              <Col xs={6} md={6}>
                <h5>{item?.visitor_team?.full_name}</h5>
              </Col>
              <Col xs={6} md={6}>
                <h5>Visitor Team Score</h5>
              </Col>
              <Col xs={6} md={6}>
                <h5>{item?.visitor_team_score}</h5>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
});

export default RecordModal;
