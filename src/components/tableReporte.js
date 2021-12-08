import React from "react"

const TableReporte = (props) => {
    const { data } = props;
    return (
        <table className="table table-bordered " >
            <thead className="table-dark" >
                <tr>
                    <th>id</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Servicio</th>
                    <th>Empleado</th>
                    <th>Estado</th>


                </tr>
            </thead>
            <tbody className="table-dark  table-hover ">
                {
                    data.map(user => {
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.fecha}</td>
                                <td>{user.hora}</td>
                                <td>{user.servicio}</td>
                                <td>{user.empleado}</td>
                                <td>{user.estado}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
export default TableReporte

