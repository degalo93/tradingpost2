import axios from "axios";

export default {
    user: function () {
        return axios.get("https://trading-post-server.herokuapp.com/api/auth/user", { crossdomain: true, withCredentials: true })
    },

    signup: function (signupData) {
        return axios.post("https://trading-post-server.herokuapp.com/api/auth/signup", signupData)
    },

    signin: function (signinData) {
        return axios.post("https://trading-post-server.herokuapp.com/api/auth/login", signinData)
    },

    //get most recently added items on the landing page

    // http://fathomless-sands-76947.herokuapp.com/
    getRecentItems: function () {
        return axios.get("https://trading-post-server.herokuapp.com/api/items/dateDown")
    },
    //post request for the create a new item
    createNewItem: function (userId, postData) {
        console.log(postData);
        return axios.post(`https://trading-post-server.herokuapp.com/api/items/${userId}`, postData)
        /* example
        {	
        "_owner": "5cc8da15ce98f8f39fccd613",
	    "title": "Book",
	    "picture": "test",
	    "description": "C++ textbook",
	    "condition": "so-so",
	    "category": "Books"
        }
        */
    },
    //getUserInfo: function (userid) {
    //get request to receive a user's ifo with his/her items and the wishlist
    users: function () {
        return axios.get("https://trading-post-server.herokuapp.com/api/auth/users")
    },

    getUserInfo: function (userid) {
        return axios.get("https://trading-post-server.herokuapp.com/api/users/" + userid)
    },
    //get request to receive items based on the category and the search term
    getSearchedItems: function (category, searchTerm) {
        console.log("category: " + category);
        console.log("searchTerm: " + searchTerm);
        return axios.get("https://trading-post-server.herokuapp.com/api/categories/" + category + "/" + searchTerm)
    },
    //create a new user (post method for signing up)
    /*
    signup: function(signupData) {
        return axios.post("https://trading-post-server.herokuapp.com/api/auth/users",signupData)
    },
    */

    //get request for update an item form
    updateItem: function (itemid) {
        return axios.get("https://trading-post-server.herokuapp.com/api/items/single/" + itemid);
        /* example
        {
        title: "A ring",
        picture: "test",
        description: "old golden ring with ruby",
        condition: "good",
        category: "Jewelry",
        _id: "5cca086a4c0a7d0017d2382e",
        _owner: "5cca0613076d830017d9f38d",
        createdAt: "2019-05-01T20:58:18.447Z",
        updatedAt: "2019-05-01T20:58:18.447Z",
        __v: 0
        }
        */
    },
    //put request for updating an existing item
    updateExistingItem: function (itemid, postData) {
        return axios.put("https://trading-post-server.herokuapp.com/api/items/single/" + itemid, postData)

        //on the backend we have to make sure we update only four fields for a given itemid!
        /* example
        {	
        title: "A ring",
        picture: "test",
        description: "old golden ring with ruby",
        condition: "good",
        category: "Jewelry",
        _id: "5cca086a4c0a7d0017d2382e",
        }
        */
    },

    getItemData: function (itemId) {
        return axios.get("https://trading-post-server.herokuapp.com/api/items/single/" + itemId)
    },


    /*
    updateItem: function() {
        return axios.put("http://Localhost:3000/api/items/:itemId")
    }, */
    deleteItem: function(userId, itemId) {
        console.log(userId)
        console.log(itemId)
        return axios.delete(`https://trading-post-server.herokuapp.com/api/items/${userId}/${itemId}`)
    } 

}