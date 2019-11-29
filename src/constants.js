import React from "react";
import axios from 'axios';

export const rootApiURL = "http://5dd7af92505c590014d3b4ac.mockapi.io/pets/";

export const getPets = () => {
    return axios.get(rootApiURL)
        .then(res => res.data)
};

export const breedOptions = [
    "Cavalier King Charles Spaniel",
    "Golden Retriever",
    "Beagle",
    "French Bulldog"
];
