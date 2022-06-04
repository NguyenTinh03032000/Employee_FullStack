import React, { Component } from 'react';
import DepartmentService from '../services/DepartmentService';

class UpdateDepartmentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: '',
            contacts: '',
            address: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeContactsHandler = this.changeContactsHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.updateDepartment = this.updateDepartment.bind(this);
    }

    componentDidMount() {
        DepartmentService.getDepartmentById(this.state.id).then((res) => {
            let department = res.data;
            this.setState({
                name: department.name,
                contacts: department.contacts,
                address: department.address
            });
            console.log(department);
        });
    }

    updateDepartment = (e) => {
        e.preventDefault();
        let department = { name: this.state.name, contacts: this.state.contacts, address: this.state.address };
        console.log('department =>' + JSON.stringify(department));
        DepartmentService.updateDepartment(department, this.state.id).then(res => {
            this.props.history.push('/departments');
            window.location.reload();
        });
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    changeContactsHandler = (event) => {
        this.setState({ contacts: event.target.value });
    }

    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Update Department</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label> Name:</label>
                                        <input placeholder='Name' name='name' className='form-control'
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label> Contacts:</label>
                                        <input placeholder='Contacts' name='contacts' className='form-control'
                                            value={this.state.contacts} onChange={this.changeContactsHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label> Address:</label>
                                        <input placeholder='Address' name='address' className='form-control'
                                            value={this.state.address} onChange={this.changeAddressHandler} />
                                    </div>
                                    <button className='btn btn-success' onClick={this.updateDepartment}>Update</button>
                                    <a class="btn btn-danger" href="/departments" style={{ marginLeft: "10px" }} role="button">Cancel</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateDepartmentComponent;