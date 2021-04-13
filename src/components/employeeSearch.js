//import the react,useState and useEffect
import React, { useState, useEffect } from 'react';
//import the API to display the list of users
import API from '../utils/API';
//import the EmployeeList function to create the row 
import EmployeeList from '../components/employeeList';
//create the EmployeeSearch function to search the employee based on first name
const EmployeeSearch = () => {
    //create a state to hold all the employees
    const [employee, setEmployee] = useState([]);
    //create a state to search for the perticular employee
    const [search, setSearch] = useState();
    //create a state to filter the employees in asc ordesc order
    const [filteredEmployee, setFilterdEmployee] = useState([]);
    //create a state to hold the filter structure
    const [sort, setShort] = useState('asc');
    const [sortedEmployee,setSortedEmployee]=useState([]);
    //the useEffect function is called once the page rendered
    useEffect(() => {       
        //check if user searching for a perticular employee
        if (search || search==="") {
            setEmployeeData();
            return;
        }
        //check if there is a data for the employee
        else if(sortedEmployee.length!=0)
        {
            setEmployee(sortedEmployee);
            return;
        }
        //on the page render get the employee list from the API
        else {
            API.getEmployeeList()
                .then((response) => {
                    //Once data comes form the API set the employee state
                    setEmployee(response.data.results);
                     //Once data comes form the API set the filter employee state
                    setFilterdEmployee(response.data.results);
                })
                //If API is throwing error the send back the error messagge
                .catch(err => (console.log(err)))
        }
        //useEffect function is called if search or sortedEmployee are set
    }, [search],[sortedEmployee])
//After the data comes from API create the table using setEmployeeData
    const setEmployeeData = () => {
        let data = [];
        //check if user searching for a employee     
        if(search!="")
        {
        employee.forEach(element => {
            if (element.name.first.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
                data.push(element);
            }

        });
        setFilterdEmployee(data);
        
    }
    else
    {   console.log(employee);
        setFilterdEmployee(employee);
    }
    
    }
//short the employee list on asc or desc order
    const shortName =async () => {
//sort on asc order
        if (sort === 'asc') 
        {
            //set the short state to desc
            setShort('desc');
            //clear the spam to create the desc icon
            document.getElementById("sortEmp").innerHTML="";
            //create the desc icon
           document.getElementById("sortEmp").innerHTML="<i class='fa fa-sort-desc' style='color:red'></i>";
          //filter the employee data in asc order
           const data=await  filteredEmployee.sort(function (a, b) {
                if (a.name.first < b.name.first) {
                    return -1;
                } 
                else {
                    return 1;
                }

            })
        setSortedEmployee(data);
        }
        //sort the data in desc order
        else {
            //change the sort state to asc
            setShort('asc');
            //clear the spam to create the asc icon
            document.getElementById("sortEmp").innerHTML="";         
            //create the asc icon
            document.getElementById("sortEmp").innerHTML="<i class='fa fa-sort-asc' style='color:red'></i>";
            //filter the employee data in desc order
            const data=await  filteredEmployee.sort(function (a, b) {
                if (a.name.first > b.name.first) {
                    return -1;
                } 
                else {
                    return 1;
                }

            })
        setSortedEmployee(data);
        }
    }
    return (
        //creat the table for the employee list
        <div className="container">
            <div style={{ textAlign: "center" }}>
                <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Enter First Name" required></input>
            </div>
            <br />
            {/* //create a responsive table */}
            <div className="table-responsive">
                {/* create the table */}
                <table className="table" style={{border:"1px black solid",backgroundColor:"white"}}>
                    {/* create the table head */}
                    <thead>
                        {/* create the table head row */}
                        <tr>
                        <th>
                            Picture
                        </th>
                            <th style={{cursor:"pointer"}}>
                                <div>First Name
                                <span onClick={shortName} id="sortEmp"><i className="fa fa-sort-asc" style={{color:"red"}}></i></span>
                                   </div> 
                        </th>
                            <th>
                                Last Name
                        </th>
                         
                            <th>
                                Gender
                        </th>
                            <th>
                                Email
                        </th>
                            <th>
                                Age
                        </th>

                        </tr>
                    </thead>
                    {/* create the table body */}
                    <tbody>
                        {/* get the data list and call filterdEmployee  */}
                        {
                            filteredEmployee.map(ele => <EmployeeList key={ele.login.uuid} firstName={ele.name.first} lastName={ele.name.last} image={ele.picture.thumbnail} gender={ele.gender} email={ele.email} age={ele.dob.age} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
//export the EmployeeSearch
export default EmployeeSearch;