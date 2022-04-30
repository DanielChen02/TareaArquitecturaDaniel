/*
import React, { Component} from 'react';
import firebase from "firebase/compat/app";

import 'firebase/storage';  // <----
import { render } from '@testing-library/react';

class ImagenesGuardadas extends Component {
    constructor(){
        super();
        this.state = {
            picture: null
        };
    }

    
    handleUpload (event){
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`/images/${file.name}`);
        const task = storageRef.put(file)
    }


render(){
    return(
        <div>
            <input type="file" onChange={this.handleUpload}/>
            <br/>
            <img width="320" src={this.state.picture}/>
        </div>
    );
  } 
}

export default ImagenesGuardadas

*/