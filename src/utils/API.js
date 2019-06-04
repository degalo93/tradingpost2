import axios from "axios";

export default {
   /*  user: function () {
        return axios.get("https://trading-post-server.herokuapp.com/api/auth/user", { crossdomain: true, withCredentials: true })
    }, */

    //get most recently added items on the landing page
    // http://fathomless-sands-76947.herokuapp.com/
    getRecentItems: function () {
        return axios.get("https://tradingpost-server-hz.herokuapp.com/api/latest")
    },
    //post request for the create a new item
    createNewItem: function (userId, postData) {
        console.log(postData);
        return axios.post(`https://tradingpost-server-hz.herokuapp.com/api/items/${userId}`, postData);
    },
    //getUserInfo: function (userid) {
    /* //get request to receive a user's ifo with his/her items and the wishlist
    users: function () {
        return axios.get("https://trading-post-server.herokuapp.com/api/auth/users")
    }, */
    //a request to get users info for the profile page
    getUserInfo: function (userid) {
       return axios.get("https://tradingpost-server-hz.herokuapp.com/api/users/" + userid);
    },
    //get request to receive items based on the category and the search term
    getSearchedItems: function (category, searchTerm) {
       return axios.get("https://tradingpost-server-hz.herokuapp.com/api/search/" + category + "/" + searchTerm);
    },
    //get request for update an item form
    updateItem: function (userId, itemId) {
        return axios.get(`https://tradingpost-server-hz.herokuapp.com/api/items/${userId}/item/${itemId}`);
    },
    //put request for updating an existing item
    updateExistingItem: function (userid, itemid, postData) {
        return axios.put(`https://tradingpost-server-hz.herokuapp.com/api/items/${userid}/item/${itemid}`, postData)
    },
    //delete an item posted by a user
    deleteItem: function(userId, itemId) {
        return axios.delete(`https://tradingpost-server-hz.herokuapp.com/api/items/${userId}/item/${itemId}`);
    } 

}