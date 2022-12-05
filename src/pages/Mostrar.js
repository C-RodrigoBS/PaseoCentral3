import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { faEye, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar/Navbar';
import * as Server from './Server'

export function Mostrar() {
  const initialState={id:0,dni:0,nombre:"",apellidos:"",correo:"",celular:0,direccion:"",distrito:"",genero:""};
  const [usuarioss,setUsuarios]=useState(initialState);
  const [series, setSeries] = useState([]);
  const [pos, setPos] = useState(null);
  const [id, setId] = useState(0);
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  useEffect(() => {
    axios.get('https://paseo-medieval.onrender.com/usuarios')
      .then(res => {
        console.log(res.data);
        setSeries(res.data);
      })
  })

  function mostrar(cod, Mostrar) {
    axios.get('https://paseo-medieval.onrender.com/usuarios' + cod)
      .then(res => {
        setPos(Mostrar);
        setId(res.data.id);
        setNombre(res.data.name);
        setFecha(res.data.release_date);
      })
  }

  const handleInputChange=(e)=>{
    //console.log(e.target.name);
    //console.log(e.target.value);
    setUsuarios({...usuarioss,[e.target.name]:e.target.value}); 
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      let res;
      res = await Server.registerUsuario(usuarioss);
      const data = await res.json();
      setUsuarios(initialState);
    }catch(error){
      console.log(error);
    }
  };

  const handleDelete= async (userId) => {
    await Server.deleteUsuario(userId); 
  }
  const handleMostrar= async (userId) => {
    await Server.mostrarUsuario(userId); 

  }

  const listUsuarios = async () => {
    try {
      const res = await Server.listUsuarios();
      const data = await res.json();
      setSeries(data.serie);
    }catch(error){
      console.log(error);
    }
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
                    <form onSubmit={handleSubmit}>
                      <div class="mb-3">
                        <input type="hidden" name='id' value={usuarioss.id} onChange={handleInputChange} class="form-control" id="id" />

                      </div>
                      <div class="mb-3">
                        <label class="form-label">DNI</label>
                        <input type="number" name='dni' value={usuarioss.dni} onChange={handleInputChange} class="form-control" id="dni" />

                      </div>
                      <div class="mb-3">
                        <label class="form-label">Nombre</label>
                        <input type="text" name='nombre' value={usuarioss.nombre} onChange={handleInputChange} class="form-control" id="nombre" />

                      </div>
                      <div class="mb-3">
                        <label class="form-label">Apellidos</label>
                        <input type="text" name='apellidos' value={usuarioss.apellidos} onChange={handleInputChange} class="form-control" id="apellidos" />

                      </div>
                      <div class="mb-3">
                        <label class="form-label">Correo electronico</label>
                        <input type="text" name='correo' value={usuarioss.correo} onChange={handleInputChange} class="form-control" id="correo" />

                      </div>
                      <div class="mb-3">
                        <label class="form-label">Celular</label>
                        <input type="number" name='celular' value={usuarioss.celular} onChange={handleInputChange} class="form-control" id="celular" />

                      </div>
                      <div class="mb-3">
                        <label class="form-label">Dirección</label>
                        <input type="text" name='direccion' value={usuarioss.direccion} onChange={handleInputChange} class="form-control" id="direccion" />

                      </div>
                      <div class="mb-3">
                        <label class="form-label">Distrito</label>
                        <input type="text" name='distrito' value={usuarioss.distrito} onChange={handleInputChange} class="form-control" id="distrito" />

                      </div>
                      <div class="mb-3">
                        <label class="form-label">Genero</label>
                        <input type="text" name='genero' value={usuarioss.genero} onChange={handleInputChange} class="form-control" id="genero" />

                      </div>

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
        {/*-------------- */}
        <div class="modal fade" id="modal-ver" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Información de Usuarios</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div>
              <tbody>
                {series.map((serie) => {
                  return (
                    <tr key={serie.id} >
                      <p className='border border-solid border-2 border-green-600'>{serie.dni}</p>
                      <p className='border border-solid border-2 border-green-600'>{serie.nombre}</p>
                      <p className='border border-solid border-2 border-green-600'>{serie.apellidos} </p>
                    </tr>
                  );
                })}
              </tbody>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            {/* Empieza la tabla */}
            <table className='table'>
              <thead className='table-dark'>
                <tr>
                  <th className='border border-solid border-2 border-green-600'>DNI</th>
                  <th className='border border-solid border-2 border-green-600'>Nombre</th>
                  <th className='border border-solid border-2 border-green-600'>Apellidos</th>
                  <th className='border border-solid border-2 border-green-600'>Ver</th>
                  <th className='border border-solid border-2 border-green-600'>Eliminar</th>

                </tr>
              </thead>
              <tbody>
                {series.map((serie, Mostrar) => {
                  return (
                    <tr key={serie.id} >
                      <td className='border border-solid border-2 border-green-600'>{serie.dni}</td>
                      <td className='border border-solid border-2 border-green-600'>{serie.nombre}</td>
                      <td className='border border-solid border-2 border-green-600'>{serie.apellidos}</td>
                      <td><button onClick={()=>serie.id && handleMostrar(serie.id)} type="button" class="btn btn-success"  data-bs-toggle="modal" data-bs-target="#modal-ver"><FontAwesomeIcon icon={faEye}/></button></td>
                      <td><button onClick={()=>serie.id && handleDelete(serie.id)} type="button"  class="btn btn-danger"><FontAwesomeIcon icon={faTrash}/></button></td>
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
