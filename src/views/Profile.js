import React from "react";

// react-bootstrap components
import { useState } from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import Appbar from "../components/Appbar";

function User() {
  const [name, SetName] = useState("");
  const [address, SetAddress] = useState("");
  const [prezime, SetPrezime] = useState("");
  const [grad, SetGrad] = useState("");
  const [drzava, SetDrzava] = useState("");
  const [stanje_plinomjera, SetStanje_plinomjera] = useState("");
  const [zipcode, SetZipcode] = useState("");
  const [broj_plinomjera, SetBroj_plinomjera] = useState("");

  const handlerClick = (e) => {
    e.preventDefault();
    const student = {
      name,
      address,
      prezime,
      grad,
      drzava,
      stanje_plinomjera,
      zipcode,
      broj_plinomjera,
    };
    console.log(student);
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("New student added");
    });
  };

  return (
    <>
      <Appbar />
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Građanin</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Prezime</label>
                        <Form.Control
                          placeholder="Prezime"
                          type="text"
                          value={prezime}
                          onChange={(e) => SetPrezime(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Ime</label>
                        <Form.Control
                          placeholder="Ime"
                          type="text"
                          value={name}
                          onChange={(e) => SetName(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Adresa</label>
                        <Form.Control
                          placeholder="Kućna adresa"
                          type="text"
                          value={address}
                          onChange={(e) => SetAddress(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label v>Grad</label>
                        <Form.Control
                          placeholder="Grad"
                          type="text"
                          value={grad}
                          onChange={(e) => SetGrad(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Država</label>
                        <Form.Control
                          placeholder="Država"
                          type="text"
                          value={drzava}
                          onChange={(e) => SetDrzava(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Zip code</label>
                        <Form.Control
                          placeholder="ZIP Code"
                          type="text"
                          value={zipcode}
                          onChange={(e) => SetZipcode(e.target.value)}
                          maxLength = {5}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Broj plinomijera</label>
                        <Form.Control
                          placeholder="Broj plinomijera"
                          type="text"
                          maxLength={8}
                          value={broj_plinomjera}
                          onChange={(e) => SetBroj_plinomjera(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Stanje plinomijera</label>
                        <Form.Control
                          placeholder="Stanje pliomjera"
                          type="number"
                          value={stanje_plinomjera}
                          onChange={(e) => SetStanje_plinomjera(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <p></p>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    onClick={handlerClick}
                  >
                    Add Profile
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
