import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    ime: "",
    prezime: "",
    adresa: "",
    grad: "",
    drzava: "",
    zipcode: "",
    broj_plinomjera: "",
    stanje_plinomjera: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Ime: </b>
                  {user.ime}
                </li>
                <li className="list-group-item">
                  <b>Prezime :</b>
                  {user.prezime}
                </li>
                <li className="list-group-item">
                  <b>Adresa: </b>
                  {user.adresa}
                </li>
                <li className="list-group-item">
                  <b>Grad: </b>
                  {user.grad}
                </li>
                <li className="list-group-item">
                  <b>Država: </b>
                  {user.drzava}
                </li>
                <li className="list-group-item">
                  <b>Zipcode: </b>
                  {user.zipcode}
                </li>
                <li className="list-group-item">
                  <b>Broj plinomijera: </b>
                  {user.broj_plinomjera}
                </li>
                <li className="list-group-item">
                  <b>Stanje plinomjera: </b>
                  {user.stanje_plinomjera}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/table"}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
