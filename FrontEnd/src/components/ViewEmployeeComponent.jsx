import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: ''
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                email: employee.email
            });
            console.log(employee);
        });
    }

    render() {
        return (
            <div>
                <br />
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'> View Employee Details</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <label><b>Employee First Name: </b>{this.state.firstName}</label>
                        </div>
                        <div className='row'>
                            <label><b>Employee Last Name: </b> {this.state.lastName}</label>
                        </div>
                        <div className='row'>
                            <label><b>Employee Email: </b> {this.state.email}</label>
                        </div>
                    </div>
                    <a class="btn btn-danger" href="/employees" style={{ marginLeft: "10px", width: "80px" }} role="button">Cancel</a>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;