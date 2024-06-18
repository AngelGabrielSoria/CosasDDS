import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Consulta from "./Consulta.jsx";
import reservasServices from "../services/reservas.services.js";
import "./styles.css";

export default function Registro() {
  const [action, setAction] = useState("R");
  const [rows, setRows] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await reservasServices.saveReserva(data);
    if (res) {
      loadData();
      setAction("C");
    }
  };

  const loadData = async () => {
    const data = await reservasServices.getReservas();
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
            <label htmlFor="Dni">DNI reserva:</label>
            <input
              type="text"
              className="form-control"
              id="Dni"
              {...register("Dni", { required: "Este campo es requerido" })}
            />
            {errors.dni && <span className="error">{errors.dni.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="FechaIngreso">Fecha ingreso:</label>
            <input
              type="date"
              className="formControl"
              id="fechaIngreso"
              placeholder="Ingrese la fecha de ingreso"
              {...register("FechaIngreso", {
                required: "la fecha de ingreso es requerida",
              })}
            ></input>
            {errors.fechaIngreso && (
              <span className="text-danger">{errors.fechaIngreso.message}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="FechaSalida">Fecha salida:</label>
            <input
              type="date"
              className="formControl"
              id="fechaSalida"
              placeholder="Ingrese la fecha de salida"
              {...register("FechaSalida")}
            ></input>
            {errors.fechaSalida && (
              <span className="text-danger">{errors.fechaSalida.message}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="Huespedes">Cantidad de huéspedes:</label>
            <input
              type="number"
              className="formControl"
              id="huespedes"
              placeholder="Ingrese la cantidad de Huespedes"
              {...register("Huespedes", {
                required: "la cantidad de Huespedes es requerida",
              })}
            ></input>
            {errors.huespedes && (
              <span className="text-danger">{errors.huespedes.message}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="stay">Tipo de estadía:</label>
            <select
              className="form-control"
              id="TipoEstadia"
              {...register("TipoEstadia", {
                required: "Este campo es requerido",
              })}
            >
              <option value="Pension completa">Pensión completa</option>
              <option value="Media pensión">Media Pensión</option>
              <option value="Solo estadía">Solo estadía</option>
            </select>
            {errors.tipoEstadia}
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
