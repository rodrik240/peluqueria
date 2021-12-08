import React from "react"

const TableServicio = (props) => {
    const { data } = props;
    return (
        <table className="table table-bordered" >
            <thead className="table-dark" >
                <tr>
                    <th>Id</th>
                    <th>Mañana</th>
                    <th>Tarde</th>
                    <th>Servicio</th>
                    <th>Empleado</th>
                    <th>Disponibilidad</th>
                </tr>
            </thead>
            <tbody className="table-dark  table-hover ">{
                data.map(user => {
                    return (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.manana}</td>
                            <td>{user.tarde}</td>
                            <td>{user.servicio}</td>
                            <td>{user.empleado}</td>
                            <td>{user.disponibilidad}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
export default TableServicio

