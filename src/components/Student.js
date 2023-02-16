import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
// import {Paper} from '@material-ui/core';

import Card from "react-bootstrap/esm/Card";

function Student() {
  const [name, SetName] = useState("");
  const [address, SetAddress] = useState("");
  const [students, setStudents] = useState([]);
  const handlerClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("New student added");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);
  return (
    <Container>
      <>
        <FloatingLabel
          controlId="floatingInput"
          label="Student name"
          className="mb-3"
          value={name}
          onChange={(e) => SetName(e.target.value)}
        >
          <Form.Control type="text" placeholder="your name" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Address"
          value={address}
          onChange={(e) => SetAddress(e.target.value)}
        >
          <Form.Control type="address" placeholder="Address" />
        </FloatingLabel>
        {name}
        {address}
      </>

      <div></div>
      <p></p>
      <Button onClick={handlerClick}>Add Student</Button>

      <div></div>

      <Container className="my-5">
        <h1 className="text-center">Students</h1>

        <Card border="primary">
          {students.map((student) => (
            <Card
              border="secondary"
              key={student.id}
              style={{ margin: "10px" }}
            >
              <p>
                Ime: {student.name} <br />
                Prezime: {student.prezime} <br />
                Adresa: {student.address} <br />
                Grad: {student.grad} <br />
                Država: {student.drzava} <br />
                Zip code: {student.zipcode} <br />  
                Broj plinomjera: {student.broj_plinomjera} <br />
                Stanje plinomjera: {student.stanje_plinomjera} 
              </p>
            </Card>
          ))}
        </Card>
      </Container>
    </Container>
  );
}

export default Student;
