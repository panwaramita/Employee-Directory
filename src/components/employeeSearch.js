import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import EmployeeList from '../components/employeeList';
const EmployeeSearch = () => {
    const [employee, setEmployee] = useState([]);
    const [search, setSearch] = useState();
    const [filteredEmployee, setFilterdEmployee] = useState([]);
    const [sort, setShort] = useState('asc');
    const [sortedEmployee,setSortedEmployee]=useState([]);
    useEffect(() => {       
        console.log("the value of search"+search)
        if (search || search==="") {
            setEmployeeData();
            return;
        }
        else if(sortedEmployee.length!=0)
        {
            setEmployee(sortedEmployee);
            return;
        }
        else {
            API.getEmployeeList()
                .then((response) => {
                    setEmployee(response.data.results);
                    setFilterdEmployee(response.data.results);
                })
                .catch(err => (console.log(err)))
        }
    }, [search],[sortedEmployee])

    const setEmployeeData = () => {
        let data = [];
             
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

    const shortName =async () => {

        if (sort === 'asc') 
        {
            setShort('desc');
            document.getElementById("sortEmp").innerHTML="";
           document.getElementById("sortEmp").innerHTML="<i class='fa fa-sort-desc' style='color:red'></i>";
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
        else {
            setShort('asc')
            document.getElementById("sortEmp").innerHTML="";
           document.getElementById("sortEmp").innerHTML="<i class='fa fa-sort-asc' style='color:red'></i>";
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
        <div className="container">
            <div style={{ textAlign: "center" }}>
                <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Enter First Name" required></input>
            </div>
            <br />
            <div>
                <table className="table" style={{border:"1px black solid",backgroundColor:"white"}}>
                    <thead>
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
                    <tbody>
                        {
                            filteredEmployee.map(ele => <EmployeeList key={ele.login.uuid} firstName={ele.name.first} lastName={ele.name.last} image={ele.picture.thumbnail} gender={ele.gender} email={ele.email} age={ele.dob.age} />)}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default EmployeeSearch;