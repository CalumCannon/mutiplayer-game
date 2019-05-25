const apiKey = '?apiKey=XN4B2a1_mSheUCWCpQvcQZWNjxbeW11A';
const baseURL = 'https://api.mlab.com/api/1/databases/heroku_4hll2llh/collections/players'; //'https://api.mlab.com/api/players?apiKey=XN4B2a1_mSheUCWCpQvcQZWNjxbeW11A';//'http://localhost:3000/api/players/';


export default {
  getPlayers(){
    return fetch(baseURL+apiKey)
    .then(res => res.json())
  },
  postPlayers(newplayer) {
    return fetch(baseURL+apiKey, {
      method: 'POST',
      body: JSON.stringify(newplayer),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  updatePlayerPosition(id,updatedPlayer){
    //PUT
    console.log(id.$oid);
    return fetch(baseURL + "/" + id.$oid + apiKey, {
      method: 'PUT',
      body: JSON.stringify(updatedPlayer),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },


  deletePlayers(id){
    return fetch(baseURL + id,{
      method:'DELETE'
    })
  }
};
