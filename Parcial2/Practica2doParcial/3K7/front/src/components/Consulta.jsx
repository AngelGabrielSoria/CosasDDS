import React from 'react'

export default function Consulta({rows, onVolver}) {
    return (
        <div>
            <h5 className='text-center'>Listado de Ingresos</h5>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Dni Ingreso</th>
                        <th>Hora Ingreso</th>
                        <th>Proveedor</th>
                        <th>Ingresa con Notebook</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    rows && rows.map((e, index) => {
                        return(
                            <tr key={index + 1}>
                                <td>{e.DniIngreso}</td>
                                <td>{e.HoraIngreso}</td>
                                <td>{e.Proveedor}</td>
                                <td>{e.IngresasConNotebook}</td>
                            </tr>
                        )
                    })
                   }
                </tbody>
            </table>
            <button style={{ textAlign: 'center' }} onClick={onVolver} className='btn btn-secondary'>Volver</button>
        </div>
    )
}
