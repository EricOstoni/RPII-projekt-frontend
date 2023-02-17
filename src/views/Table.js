import React from "react";
import Appbar from "../components/Appbar";
import { useEffect, useState } from "react";

// react-bootstrap components
import { Card, Table, Container, Row, Col } from "react-bootstrap";

function TableList() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);
  return (
    <>
      <Appbar />
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Evidencija profila</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Prezime</th>
                      <th className="border-0">Broj plinomjera</th>
                      <th className="border-0">Stanje plinomjera</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr>
                        <td> {student.id}</td>
                        <td> {student.prezime}</td>
                        <td> {student.broj_plinomjera}</td>
                        <td> {student.stanje_plinomjera}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
