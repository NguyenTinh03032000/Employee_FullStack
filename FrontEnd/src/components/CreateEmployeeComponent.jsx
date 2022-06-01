import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
class CreateEmployeeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email };
        console.log('employee =>' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res => {
            this.props.history.push('/employees');
            window.location.reload();
        });

    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    cancel() {
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Employee</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label> First Name:</label>
                                        <input placeholder='First Name' name='firstName' className='form-control'
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label> Last Name:</label>
                                        <input placeholder='Last Name' name='lastName' className='form-control'
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label> Email Address:</label>
                                        <input placeholder='Email Address' name='email' className='form-control'
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <button className='btn btn-success' onClick={this.saveEmployee}> Save</button>
                                    <a class="btn btn-danger" href='/employees' style={{ marginLeft: "10px" }} >Cancel</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;