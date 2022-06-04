import React, { Component } from 'react';
import DepartmentService from '../services/DepartmentService';
class CreateDepartmentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            contacts: '',
            address: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.saveDepartment = this.saveDepartment.bind(this);
    }

    saveDepartment = (e) => {
        e.preventDefault();
        let department = { name: this.state.name, contacts: this.state.contacts, address: this.state.address };
        console.log('department =>' + JSON.stringify(department));

        DepartmentService.createDepartment(department).then(res => {
            this.props.history.push('/departments');
            window.location.reload();
        });

    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    changeContactHandler = (event) => {
        this.setState({ contacts: event.target.value });
    }

    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }

    cancel() {
        this.props.history.push('/departments');
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Department</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label> Name:</label>
                                        <input placeholder='Department Name' name='name' className='form-control'
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label> Contacts:</label>
                                        <input placeholder='Department Contacts' name='contacts' className='form-control'
                                            value={this.state.contacts} onChange={this.changeContactHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label> Address:</label>
                                        <input placeholder='Address' name='address' className='form-control'
                                            value={this.state.address} onChange={this.changeAddressHandler} />
                                    </div>
                                    <button className='btn btn-success' onClick={this.saveDepartment}> Save</button>
                                    <a class="btn btn-danger" href='/departments' style={{ marginLeft: "10px" }} >Cancel</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateDepartmentComponent;