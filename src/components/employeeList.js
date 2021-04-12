import React from 'react';

const EmployeeList=(props)=>{
  //  console.log(props.firstName)
return(
    <tr>
        <td>
            {props.firstName}
        </td>
        <td>
            {props.lastName}
        </td>
        <td>
            {props.uuid}
        </td>
        <td>
            {props.gender}
        </td>
        <td>
            {props.email}
        </td>
        <td>
            {props.age}
        </td>
    </tr>
)
}

export default EmployeeList;