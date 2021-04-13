//import the react 
import React from 'react';
//create employeelist function to create the row for eact employee
const EmployeeList=(props)=>{
return(
    //create the row for each employee
    <tr>
    {/* employee image */}
        <td>
         <img src={props.image} alt="Profile picture"></img>
        </td>
        {/* employee first name */}
        <td>
            {props.firstName}
        </td>
        {/* employee last name */}
        <td>
            {props.lastName}
        </td>
        {/* employee gender */}
        <td>
            {props.gender}
        </td>
        {/* employee email */}
        <td>
            {props.email}
        </td>
        {/* employee age */}
        <td>
            {props.age}
        </td>
    </tr>
)
}
// export the Employee list function 
export default EmployeeList;