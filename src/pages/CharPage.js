import React, { Component } from 'react';
import axios from 'axios';
import { rootApiURL } from '../constants';
import { Link } from 'react-router-dom';


export default class CharPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: {},
            yukleniyor: true,
            id: props.petId,
            storageId: ''
        }
    }
    componentDidMount() {
        this.state.storeageId = localStorage.getItem('petId')
        if (this.state.id){
            this.state.storeageId = this.state.id
            localStorage.setItem('petId', this.state.storeageId)
        }
        
        axios.get(`${rootApiURL}/${this.state.storeageId}`)
            .then(res => {
                this.setState({
                    pet: res.data,
                    yukleniyor: false
                });
            })
            .catch(err => {
                console.error(err.message);
                this.setState({
                    yukleniyor: false
                });
            });
    }

    render() {
        const { name, breed, image, description, age } = this.state.pet;
        const Pet = (
            <div className="col-lg-6 col-md-4 my-4 mx-auto">
                <h2><Link to="/">Home Page</Link></h2>
                <div className="card h-100">
                    <img className="card-img-top" src={image} alt="" style={{ height: "292px" }} />
                    <div className="card-body">
                        <h4 className="card-title">
                            {name}
                            <div>
                                <span className="badge badge-primary" style={{ fontSize: "12px" }}>{breed}</span>
                            </div>
                            <div>
                                <span className="badge badge-warning" style={{ fontSize: "12px" }}>{age}</span>
                            </div>
                        </h4>
                        <p className="card-text">
                            {description}
                        </p>
                    </div>
                    <div className="card-footer">
                        <div className="btn btn-success">Favorilere Ekle</div>
                    </div>
                </div>
            </div>
        );
        const ErrorPet = (
            <div className="container">
                <div className="row">
                    <div className="container">
                        <h1>The id you entered is incorrect.</h1>
                    </div>
                </div>
            </div>
        );
        const yukleniyor = (
            <div>Yukleniyor</div>
        );
        if (this.state.yukleniyor) {
            return yukleniyor;
        }
        if (this.state.pet.name) {
            return Pet;
        } else {
            return ErrorPet;
        }
    }
}
