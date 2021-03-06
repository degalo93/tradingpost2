# Trading Post

[Deployed Link](https://degalo93.github.io/tradingpost2/)

[Server Back-end](https://github.com/Haldevel/trading-post-backend) 

Collaborators |
:---------:
* Samuel Thompson
* Denis Galo
* Halina Zmachynskaya


## Description
### An Craiglist inspired decoupled MERN app made with React and Redux, that uses its own JSON Web Tokens for security and authorization of users. This app encourages the exchange of goods without currency.

### For this app we choose to follow a decoupled MVC architecture. A decoupled architecture is a framework for complex work that allows components to remain completely autonomous and unaware of each other. This allows for a clear process in where both front and backend can work succinctly to make a fully functional app.

### 

## Screenshots/GIFS

Landing Page |
:------------------:
![Landing Page](./public/images/landing.PNG) |

Search Page |
:------------------:
![Search Page](./public/images/searchnew.PNG) |



Profile |
:------------------:
![Profile ](./public/images/profile.PNG) |

Our profile page displays a users' information such as a user's name,
profile picture, the items posted for exchange by a user and her wishlist. A user can add an item for exchange, delete the item, or update it. The Add and Update buttons open the corresponding forms, and the delete button deletes the corresponding item.




## Important Code Details

Forms  |
:------------------:
![Forms](./public/images/Authform.gif) |

The forms are conditionally rendered where if the person clicks sign up or sign in the form will changed based off of user input. 


Posting Items  |
:------------------:
![Items](./public/images/postitem.gif) |


For posting items we made the process easy for users to post the item that they want to trade. They have the option to edit the item or delete the post completely as soon as the user has traded it.


Server Side  |
:------------------:

The database contains four models: Person, Item, Wishlist, and Category. The API routes are protected using JWT middleware. To access routes such as profile, or to add, or update, or delete items, a user has to be logged in and authenticated.  





Technologies Used |
:---------:
* React
* Javascript
* CSS
* JQuery
* Materlize
* MongoDb
* Mongoose
* JSON Web Token
* Express
* cors
* Redux
* React-Redux
* Axios

