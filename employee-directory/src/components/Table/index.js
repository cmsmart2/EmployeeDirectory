import React from "react";


function Table(props) {
    
    function getName(name) {
        return `${name.first} ${name.last}`;
    }
    function getId(id) {
        return `${id.value}`
    }
    function getImage(picture) {
        return `${picture.thumbnail}`
    }
    function getAge (dob) {
        return `${dob.age}`;
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
                    <tr key={getId(employee.id)}>
                        <td><img alt="employee" src={getImage(employee.picture)}/></td>
                        <td>{getName(employee.name)}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        <td>{getAge(employee.dob)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;