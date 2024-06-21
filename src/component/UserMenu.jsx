//User Menu Component

//importing bs
import React, { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

import { Button, Collapse } from "react-bootstrap";

//importing icons
import { MdOutlinePersonSearch } from "react-icons/md";
import { CiStar } from "react-icons/ci";

import { GrFilter } from "react-icons/gr";

//placeholder image
import placeholder from "../assets/images/user-ph.png";

//user database
import users from "../users-database";

//importing css file
import "../assets/styles/UserMenu.css";

//svg tags
import ChatCircle from "../assets/images/chat_circle.svg";
import CoffeeCircle from "../assets/images/coffee_circle.svg";
import GameCircle from "../assets/images/game_circle.svg";
import SnackCircle from "../assets/images/snack_circle.svg";
import WorkTogether from "../assets/images/work_together_circle.svg";
import MenuIcon from '../assets/icons/MenuIcon';

function Tag({ src }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="tag"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <img src={src} alt="Tag" />
      <Collapse in={open}>
        <div className="tooltip">
          <Button variant="primary">Invite?</Button>
        </div>
      </Collapse>
    </div>
  );
}



function Example() {
  //state code
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSearchClick = () => setShowSearch(!showSearch);

  const [modalShow, setModalShow] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = (employee) => {
    setSelectedEmployee(employee);
    setModalShow(true);
  };

  //Tags
  const images = [
    ChatCircle,
    CoffeeCircle,
    GameCircle,
    SnackCircle,
    WorkTogether,
  ];

  //employees info
  const [employees, setEmployees] = useState(
    users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      imageUrl: user.profile_pic,
      lunchTime: user.lunch_time,
      officeStatus: user.office_status,
      starColor: "grey",
      busyTag: user.tags["busy-tag"],
      tags: user.tags,
    }))
  );

  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [isFilterOn, setFilterOn] = useState(false);

  //searching functionality
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredEmployees(employees);
    } else {
      setFilteredEmployees(
        employees.filter((employee) =>
          employee.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, employees]);

  //favourite event

  const handleStarClick = (event, index) => {
    event.stopPropagation();
  
    const newEmployees = employees.map((employee, i) => {
      if (i === index) {
        return {
          ...employee,
          starColor: employee.starColor === "grey" ? "#e6ac28" : "grey",
        };
      }
      return employee;
    });
  
    setEmployees(newEmployees);
    setFilteredEmployees(newEmployees);
  };

  const handleFilterClick = () => {
    setFilterOn(!isFilterOn);
  
    if (!isFilterOn) {
      setFilteredEmployees(employees.filter(employee => employee.starColor === "#e6ac28"));
    } else {
      setFilteredEmployees(employees);
    }
  };

  return (
    <>
      <div onClick={handleShow} className="toggle-menu"> <MenuIcon/> </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        backdropClassName="bg-light"
        style={{ backgroundColor: "#DCDCDC" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ fontSize: "18px", color: "#0076ce" }}>
            <div className="d-flex align-items-center">
              <span>Users</span>
              <span className="ms-auto">
                <MdOutlinePersonSearch
                  className="mr-3"
                  style={{ fontSize: "40px", marginLeft: "220px" }}
                  onClick={handleSearchClick}
                />
                <GrFilter className="mr-3" style={{ fontSize: "30px" }} onClick={handleFilterClick} />
              </span>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="p-0 px-3">
          {/* Search Bar */}
          {showSearch && (
            <Form className={showSearch ? "mb-3" : "mb-0"}>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="search-bar mt-2"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Col>
              </Row>
            </Form>
          )}

          {/* Employee Cards */}
          {filteredEmployees.map((employee, index) => (
            <Card
              key={index}
              onClick={() => handleModalShow(employee)}
              style={{
                width: "auto",
                height: "auto",
                borderRadius: "0",
                fontSize: "12px",
                color: "#0076ce",
                borderTop: "1px solid #dee2e6",
                borderBottom: "1px solid #dee2e6",
                borderLeft: "0px",
                borderRight: "0px",
                borderColor: "#C0C0C0",
                backgroundColor: "#DCDCDC",
                margin: "0", 
                padding: "0", 
              }}
            >
              <Row className="align-items-center">
                <Col xs={2} className="text-center">
                  <Card.Img
                    variant="top"
                    src={employee.imageUrl ? employee.imageUrl : placeholder}
                    alt={`${employee.name}'s photo`}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                </Col>
                <Col xs={7}>
                  <Card.Body style={{ padding: "0.8rem" }}>
                    <Card.Title style={{ fontSize: "16px" }}>
                      {employee.name}
                    </Card.Title>
                  </Card.Body>
                </Col>
                <Col xs={3} className="text-right">
                  <CiStar
                    className="mr-3"
                    style={{ fontSize: "25px", color: employee.starColor }}
                    onClick={(event) => handleStarClick(event, index)}
                  />
                </Col>
              </Row>
            </Card>
          ))}
        </Offcanvas.Body>
      </Offcanvas>

      {/* Employee Modal */}
      <Modal show={modalShow} onHide={handleModalClose} className="p-4">
        <Modal.Header closeButton className="bg-primary text-white pb-2">
          <Modal.Title>{selectedEmployee?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-4 py-3">
            <Col xs={6} md={4}>
              <Image
                src={
                  selectedEmployee?.imageUrl
                    ? selectedEmployee.imageUrl
                    : placeholder
                }
                roundedCircle
                fluid
              />
            </Col>
            <Col>
              <p>
                <strong>Email:</strong> {selectedEmployee?.email}
              </p>
              <p>
                <strong>Lunch Time:</strong> {selectedEmployee?.lunchTime}
              </p>
            </Col>
          </Row>
          <p>
            <strong>Office Status:</strong>
          </p>
          <Table striped bordered hover size="sm" className="mb-4">
            <thead>
              <tr>
                <th>Day</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(selectedEmployee?.officeStatus || {}).map(
                ([day, status]) => (
                  <tr key={day}>
                    <td>{day}</td>
                    <td>{status ? "In Office" : "Remote"}</td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
          <p>
            <strong>Tags:</strong>
          </p>
          <div className="tags">
            {images.map((src, index) => (
              <Tag key={index} src={src} />
            ))}
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
