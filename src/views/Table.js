import React from "react";
import Appbar from "../components/Appbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// react-bootstrap components
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

function TableList() {
  const [setUsers] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
      });
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

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
                    {user.map((user) => (
                      <tr>
                        <td> {user.id}</td>
                        <td> {user.prezime}</td>
                        <td> {user.broj_plinomjera}</td>
                        <td> {user.stanje_plinomjera}</td>
                        <td>
                          <Link
                            className="btn btn-outline-primary mx-2"
                            to={`/EditUser/${user.id}`}
                          >
                            Edit
                          </Link>
                          <Button
                            className="btn btn-danger mx-2"
                            onClick={() => deleteUser(user.id)}
                          >
                            Delete
                          </Button>
                          <Link
                            className="btn btn-success mx-2 "
                            to={`/ViewUser/${user.id}`}
                          >
                            View
                          </Link>
                        </td>
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
