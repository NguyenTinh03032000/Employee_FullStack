import React, { Component } from 'react';
import DepartmentService from '../services/DepartmentService';

class ListDepartmentComponent extends Component {

    constructor(props) {

        super(props)

        this.state = {
            departments: []
        }

        this.editDepartment = this.editDepartment.bind(this);
        this.addDepartment = this.addDepartment.bind(this);
        this.deleteDepartment = this.deleteDepartment.bind(this);
    }

    editDepartment(id) {
        this.props.history.push(`/update-department/${id}`);
        window.location.reload();
    }

    componentDidMount() {
        DepartmentService.getDepartment().then((res) => {
            this.setState({ departments: res.data });
        });
    }

    addDepartment() {
        this.props.history.push('/add-department');
        window.location.reload();
    }

    deleteDepartment(id) {
        DepartmentService.deleteDepartment(id).then(res => {
            this.setState({ departments: this.state.departments.filter(department => department.id !== id) });
        });
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Department List</h2>
                <div>
                    <button class="btn btn-primary row" onClick={this.addDepartment}>Add Department</button>
                </div>
                <div className='row'>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Department Name</th>
                                <th>Department Contacts</th>
                                <th>Department Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.departments.map(
                                    department =>
                                        <tr key={department.id}>
                                            <td>{department.name}</td>
                                            <td>{department.contacts}</td>
                                            <td>{department.address}</td>
                                            <td>
                                                <button onClick={() => this.editDepartment(department.id)} className="btn btn-info">Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteDepartment(department.id)} className="btn btn-danger">Delete</button>
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

export default ListDepartmentComponent;