import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div >
                <header>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="/employees">Management Employee</a>
                        <a class="navbar-brand" href="/departments">Management Department</a>
                    </nav>
                </header>
            </div >
        );
    }
}

export default HeaderComponent;