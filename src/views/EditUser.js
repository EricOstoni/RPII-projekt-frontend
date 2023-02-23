import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

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

  const {
    ime,
    prezime,
    adresa,
    grad,
    drzava,
    zipcode,
    broj_plinomjera,
    stanje_plinomjera,
  } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/table");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Ime" className="form-label">
                Ime
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Upisi ime"
                name="ime"
                value={ime}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="prezime" className="form-label">
                Prezime
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="prezime"
                value={prezime}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="adresa" className="form-label">
                Adresa
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="adresa"
                value={adresa}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="grad" className="form-label">
                Grad
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Upisi grad"
                name="grad"
                value={grad}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="drzava" className="form-label">
                drzava
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="drzava"
                name="drzava"
                value={drzava}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="zipcode" className="form-label">
                Zip Code
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Upisi Zip code"
                name="zipcode"
                value={zipcode}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="broj_plinomjera" className="form-label">
                Broj plinomijera
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Upisi broj plinomjera"
                name="broj_plinomjera"
                value={broj_plinomjera}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stanje_plinomjera" className="form-label">
                Stanje plinomijera
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Upisi stanje"
                name="stanje_plinomjera"
                value={stanje_plinomjera}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/table">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
