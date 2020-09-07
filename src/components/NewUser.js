import React, {Component} from 'react';
import axios from 'axios';

export default class NewUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_name: '',
            user_city: '',
            user_phone: '',
            user_address: ''
        }
    }

    onChangeName(e) {
        this.setState({
            user_name: e.target.value
        });
    }

    onChangeCity(e) {
        this.setState({
            user_city: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            user_phone: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            user_address: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Name: ${this.state.user_name}`);
        console.log(`City: ${this.state.user_city}`);
        console.log(`Phone: ${this.state.user_phone}`);
        console.log(`Address: ${this.state.user_address}`);
        //Added a comment
        const newUser={
           user_name:this.state.user_name,
           user_city: this.state.user_city,
           user_phone: this.state.user_phone,
           user_address:this.state.user_address


        }
        
        axios.post('https://stoic-ritchie-1a1905.netlify.app/.netlify/functions/server/rsdb/users/add', newUser)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });
        this.setState({
            user_name: '',
            user_city: '',
            user_phone: '',
            user_address: ''
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
                                value={this.state.user_name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>City: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.user_city}
                                onChange={this.onChangeCity}
                                />
                    </div>
                    <div className="form-group">
                        <label>Phone: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.user_phone}
                                onChange={this.onChangePhone}
                                />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.user_address}
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