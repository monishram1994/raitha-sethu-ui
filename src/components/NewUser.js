import React, {Component} from 'react';

export default class NewUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            city: '',
            phone: '',
            address: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeCity(e) {
        this.setState({
            city: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Name: ${this.state.name}`);
        console.log(`City: ${this.state.city}`);
        console.log(`Phone: ${this.state.phone}`);
        console.log(`Address: ${this.state.address}`);

        this.setState({
            name: '',
            city: '',
            phone: '',
            address: ''
        })
    }

    render() {
        return (
            <div className="container">

            
            <div style={{marginTop: 20}}>
                <h3>Register New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>City: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.city}
                                onChange={this.onChangeCity}
                                />
                    </div>
                    <div className="form-group">
                        <label>Phone: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.onChangePhone}
                                />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.address}
                                onChange={this.onChangeAddress}
                                />
                    </div>                                           
                      
                    <div className="form-group">
                        <input type="submit" value="Create" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        </div>
        )
    }
}