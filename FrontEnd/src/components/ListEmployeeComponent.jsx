import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {

    constructor(props) {

        super(props)

        this.state = {
            employees: []
        }

        this.editEmployee = this.editEmployee.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    viewEmployee(id) {
        this.props.history.push(`/view-employee/${id}`);
        window.location.reload();
    }

    editEmployee(id) {
        this.props.history.push(`/update-employee/${id}`);
        window.location.reload();
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    addEmployee() {
        this.props.history.push('/add-employee');
        window.location.reload();
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
        });
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Employee List</h2>
                <div>
                    <button class="btn btn-primary row" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className='row'>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.email}</td>
                                            <td>
                                                <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(employee.id)} className="btn btn-info">View</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        );
    }
}

export default ListEmployeeComponent;