import React from 'react';

const EmployeeList=(props)=>{
  //  console.log(props.firstName)
return(
    <tr>
        <td>
         <img src={props.image} alt="Profile picture"></img>
        </td>
        <td>
            {props.firstName}
        </td>
        <td>
            {props.lastName}
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