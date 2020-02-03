 import { SERVER_CONFIG } from '../Utility/server';
 
export function getPostList(atStart) {  
    return fetch(`${SERVER_CONFIG.BASE_URL}/posts?_start=${atStart}&_limit=10`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json', 
        }

    })
        .then((response) => {
            //console.log("Response", response);
            return response.json();
        })
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.log(error);
        });
}

 
export function getPostFromID(id) {  
    return fetch(`${SERVER_CONFIG.BASE_URL}/posts/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json', 
        }

    })
        .then((response) => {
            //console.log("Response", response);
            return response.json();
        })
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.log(error);
        });
}

export function getAlbumFromID(id) {  
    return fetch(`${SERVER_CONFIG.BASE_URL}/photos?album=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json', 
        }

    })
        .then((response) => {
            //console.log("Response", response);
            return response.json();
        })
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.log(error);
        });
}

 