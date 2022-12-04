import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'bootstrap';
import Navbar from '../components/Navbar/Navbar';
export function Mostrar() {
  const [series, setSeries] = useState([]);
  const [pos, setPos] = useState(null);
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  useEffect(() => {
    axios.get('http://localhost:8000/reconocimiento')
      .then(res => {
        console.log(res.data);
        setSeries(res.data);
      })
  })

  function mostrar(cod, Mostrar) {
    axios.get('http://localhost:8000/reconocimiento/' + cod)
      .then(res => {
        setPos(Mostrar);
        setId(res.data.id);
        setNombre(res.data.name);
        setFecha(res.data.release_date);
      })
  }
  return (
    <div>
      <Navbar />
      <br />
      <div className='container'>
        <div className='row'>
          <div className='col'>
            {/* aca empieza el modal */}
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo Registro</button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Nuevo Usuario</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="mb-3">
                        <label for="dni" class="form-label">DNI</label>
                        <input type="text" class="form-control" id="dni" aria-describedby="dniHepl" />

                      </div>
                      <div class="mb-3">
                        <label for="dni" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="dni" aria-describedby="dniHepl" />

                      </div>
                      <div class="mb-3">
                        <label for="dni" class="form-label">Apellidos</label>
                        <input type="text" class="form-control" id="dni" aria-describedby="dniHepl" />

                      </div>
                      <div class="mb-3">
                        <label for="dni" class="form-label">Correo electronico</label>
                        <input type="text" class="form-control" id="dni" aria-describedby="dniHepl" />

                      </div>
                      <div class="mb-3">
                        <label for="dni" class="form-label">Celular</label>
                        <input type="text" class="form-control" id="dni" aria-describedby="dniHepl" />

                      </div>
                      <div class="mb-3">
                        <label for="dni" class="form-label">Dirección</label>
                        <input type="text" class="form-control" id="dni" aria-describedby="dniHepl" />

                      </div>
                      <div class="mb-3">
                        <label for="dni" class="form-label">Distrito</label>
                        <input type="text" class="form-control" id="dni" aria-describedby="dniHepl" />

                      </div>
                      <label for="dni" class="form-label">Genero</label>
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Escoja su genero</option>
                        <option value="1">Masculino</option>
                        <option value="2">Femenino</option>
                      </select>
                      <br />

                      <button type="submit" class="btn btn-primary">Registrar</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* Termina el formulario */}
          </div>
        </div>
        <br/>
        <div className='row'>
          <div className='col'>
            {/* Empieza la tabla */}
            <table className='table'>
              <thead className='table-dark'>
                <tr>
                  <th className='border border-solid border-2 border-green-600'>DNI</th>
                  <th className='border border-solid border-2 border-green-600'>Nombre</th>
                  <th className='border border-solid border-2 border-green-600'>Apellidos</th>
                  <th className='border border-solid border-2 border-green-600'>Correo</th>
                  <th className='border border-solid border-2 border-green-600'>Celular</th>
                  <th className='border border-solid border-2 border-green-600'>Dirección</th>
                  <th className='border border-solid border-2 border-green-600'>Distrito</th>
                  <th className='border border-solid border-2 border-green-600'>Genero</th>


                </tr>
              </thead>
              <tbody>
                {series.map((serie, Mostrar) => {
                  return (
                    <tr key={serie.id}>
                      <td className='border border-solid border-2 border-green-600'>{serie.codigoReconocimiento}</td>
                      <td className='border border-solid border-2 border-green-600'>{serie.fotoReconocimiento}</td>
                      <td className='border border-solid border-2 border-green-600'>{serie.Hora}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

          </div>

        </div>


      </div>
    </div>
  );
}
