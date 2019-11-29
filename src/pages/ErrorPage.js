import React, { Component } from 'react'

class ErrorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">404 ERROR</h1>
                    </div>
                </div>
            </div>
        )
    }
}
export default ErrorPage;
