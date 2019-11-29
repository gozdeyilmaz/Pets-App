import React, { Component } from 'react'
import { Route, Switch } from "react-router";
import { FavoritesPage, HomePage, CharPage, ErrorPage } from "../pages";


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            petId: "" 
        }
    }
    petIdCallback = (id) => {
        this.setState({petId: id})
    }
    render() {
        console.log(this.state.petId);
        return (
            <div>
                <Switch>
                <Route exact path="/" component={() => <HomePage petIdCallback = {this.petIdCallback}/>}/>
                <Route exact path="/favoriler" component={FavoritesPage} />
                <Route exact path="/char" component={() => <CharPage petId={this.state.petId}></CharPage>} />
                <Route component={ErrorPage} />
            </Switch>
            </div>
        )
    }
}
export default Main;
