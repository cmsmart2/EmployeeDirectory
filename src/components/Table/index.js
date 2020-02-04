import React from "react";


function Table(props) {
    
    function getName(name) {
        return `${name.first} ${name.last}`;
    }
    return (
        <table className="table text-center m-5">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">
                    <span onClick={props.handleSortReverse}>
                    &#8595;  </span> Name <span 
                            onClick={props.handleSort}>    
                        &#8593; </span>
                    </th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(employee => (
                    <tr key={employee.id.value}>
                        <td><img alt="employee" src={employee.picture.thumbnail}/></td>
                        <td>{getName(employee.name)}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        <td>{employee.dob.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;