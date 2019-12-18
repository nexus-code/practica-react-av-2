import AdModel from '../models/AdModel';

const API_URL = 'http://localhost:3001/apiv1/';

/*
    API: https://github.com/IsmaelB83/keepcoding-backend-node
*/

/**
 * 
 * @param {*} url of API
 */
const getFetch = (url) => {
    return fetch(url,
        { method: "GET" },
        { Accept: "application/json, text/plain, */*" },
        { mode: "cors" }
    )
    .then(res => res.json());
}

/**
 * return[] of tags (strings)
 */
const getTagsList = () => {
    
    return getFetch(`${API_URL}tags`)
        .then(res => res.results)
        .catch(error => console.error('Error:', error));
}

/**
 * 
 * @param {*} id The ad id to fetch
 */
const getAdDetail = (id) => {
    return getFetch(`${API_URL}anuncios/${id}`)
        .then(res => {
            if (!res.success) {
                return res;
            } else {
                return new AdModel(res.result);
            }
        })
        .catch(error => console.error('Error:', error));
}

/**
 * 
 * @param {*} query: filter anuncios
 */

const searchAds = (query) => {
    
    const url = query === '' ? `${API_URL}anuncios` : `${API_URL}anuncios/?${query}`;
    
    return getFetch(url)
        .then(res => res.results.map(ad => new AdModel(ad)))
        .catch(error => console.error('Error:', error));
}

/**
 * 
 * @param {*} ad {advertisement}
 * @param {*} method POST / PUT (for insert / update ) 
 * @param {*} id empty in POST. advertisement ID with PUT <-- improve this
 */
const saveAd = (ad, method, id) => {

    return fetch(`${API_URL}anuncios/${id}`, {
        crossDomain: true,
        method: `${method}`,
        mode: "cors",
        body: JSON.stringify(ad), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            // the API returns status, but not de advert sent 
            if (res.status === 200) {
                return 'OK';
            } else {
                return res;
            }
        })
        .catch(error => console.error('Error:', error));
}

export {
    getTagsList,
    searchAds,
    getAdDetail,
    saveAd
};