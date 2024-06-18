import React, { useState } from "react";
import {useForm} from 'react-hook-form'
import Consulta from './Consulta.jsx'
import "./styles.css";
import ingresosServices from '../services/ingresos.services.js';


export default function Registro() {
  const [action, setAction] = useState("R");
  const [rows, setRows] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await ingresosServices.saveIngreso(data);
    if (res) {
      loadData();
      setAction("C");
    }
  };

  const loadData = async () => {
    const data = await ingresosServices.getIngresos();
    setRows(data);
  };

  const onVolver = () => {
    setAction("R");
  };
  return (
    <div className="container_app">
      {action === "R" && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="Dni">DNI ingreso:</label>
            <input
              type="text"
              className="form-control"
              id="Dni"
              {...register("Dni", { required: "Este campo es requerido" })}
            />
            {errors.dni && <span className="error">{errors.dni.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="HoraIngreso">Hora Ingreso:</label>
            <input
              type="time"
              className="formControl"
              id="Hora Ingreso"
              placeholder="Ingrese la Hora de Ingreso"
              {...register("HoraIngreso", {
                required: "la hora de ingreso es requerida",
              })}
            ></input>
            {errors.horaIngreso && (
              <span className="text-danger">{errors.HoraIngreso.message}</span>
            )}
          </div>
          <div className="form-group text-center mt-3">
            <button type="submit" className="btn btn-primary mx-1">
              Registrar
            </button>
            <button type="reset" className="btn btn-secondary mx-1">
              Limpiar
            </button>
          </div>
        </form>
      )}
      {action !== "R" && <Consulta rows={rows} onVolver={onVolver}></Consulta>}
    </div>
  );
}
