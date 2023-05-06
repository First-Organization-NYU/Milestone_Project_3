# Barking Boutique Web Store

Welcome to our pet ecommerce web store called Barking Boutique. Here you will be able to purchase toys and treats for your beloved pets!
You can also purchase your favorite pet/animal movies as well. 
You can also create a account to login and keep track of your purchases, and potential discounts and special offers.

# About

Our page allows users to browse available pet toys and treats to have their lovely canine. 
The page was designed by a team of four students from NYU ThriveDx Software Development Program, 
for our MileStone 3 Project, our final project for our Web Development Coding Bootcamp.
This project is a fullstack project devleoped using the following technolgies: 
React, Boostrap React, CSS, HTML, Javascirpt and Node.js. 
The page connects to a PostgreSQL database using Sequelize.
Heroku was used to deploy this project.

# Features 

The Barking Boutique Ecommerce Store has the following features:
- Homepage welcoming the user and clearly displaying a navigation bar to access products
- Product Page listing the dog treats, dog toys, and movies
- A registration and log in form, to give the user access to view and purchase products
- Authentication is used for the log in and sign up, to ensure the user is inputing a valid email and password
- Shopping cart that gives the user ability to delete and edit items in there cart
- Confirmation page with details about the recent purchase

# Getting Started

## Installation

1. Clone this repository to your local machine.
2. Install dependencies with npm install
3. Install nodemon globally to run the server: npm install -g nodemon
4. Run the server with npm start

## Technologies

- React
- Bootstrap React
- CSS
- HTML
- JavaScript
- Sequelize
- Node.JS
- Heroku

## Routes
| Method | Path | Purpose |
| ------ | ------------ | ------------ |
| GET | '/' | Homepage |
| GET | '/toys' | Lists all the Dog Toys |
| GET | '/treats' | Lists all the Dog Treats |
| GET | '/dogbreeds' | Lists all the different Pet Breeds from the Dop API |
| GET | '/:name' | Displays a Single Dog from a dog API |
| GET | '/about' | Displays what the website is About |
| GET | '/signup | Displays a sign up form |
| GET | '/login' | Shows the Log-in form |
| GET | '/payment' | Displays a payment form |
| GET | '/cart' | Displays the shopping cart and any items the user has selected to add |
| GET | '/confirmation' | Shows a page that lets the user know there purchase is confirmed |


# Database:
- pgAdmin
- PostgreSQL

**Users**

| Field | Type |
| -------- | -------- |
| id | User ID |
| firstname | String |
| lastname | String |
| email | String |
| password | String |
| role | ENUM |

**Dog Treats**

| Field | Type |
|-------- | -------- |
| id | Object ID |
| barcode | Integer |
| name | String |
| brand | String | 
| image | String |
| price | Integer |
| weight(oz) | Integer |

**Dog Toys**

| Field | Type |
|-------- | -------- |
| id | Object ID |
| barcode | Integer |
| name | String |
| brand | String | 
| image | String |
| price | Integer |

**Pet Breeds**
| Field | Type | 
| -------- | -------- |
| name | String |
| bred_for | String |
| weight(kg) | Integer |
| height(cm) | Integer |
| breed | String |
| lifespan | Integer |
| temperament | String |

## Features 

The Barking Boutique Web Store has the following features:
- Homepage with a navagation bar with links to the dog treats, dog toys and movies
- Users are able to click the links to view dog treats, toys and breeds from the database
- Users are able to sign up for an account and login in
- After a user signs up they recieve a confirmation and a 10% discount on there first purchase
- Signed in users can view the shopping cart and make purchases
- Once a purchase is made a confirmation page appears
- User is able to view different dog breeds from a dog api
- Users can search for different dog breeds from the database
- Customers can update there cart by being able to delete, or increase quantity of items
- Customers are also able to view the price incease and decrease as they remove or add itmes to cart

## Acknowledgement

- We would like to thank our instructors for guiding us through this project.
They have also been very supporting and encouraging of us. 
We would also like to thank 
each other and all of our previous instructors who helped us develop the knowledge.

## Resources

- Google, NYU Resources, StackOverflow, ChatGPT
- Youtube :
    - https://www.youtube.com/watch?v=b0g-FJ5Zbb8&t=1022s

# Potential Improvements

- Create a Account dashboard were the user can view there recent and previous purchases, 
	while also displaying any offers or upcoming discounts

# Bugs/Fixes

- Issues with connection to Heroku and our pgAdmin database
- Show the name of the user who is logged in on the page
- Allow only logged in users to view the shopping cart

# Contributing
Contributions to the Barking Boutique are more than welcome. To contribute, follow these steps:

- Fork the repository: https://github.com/First-Organization-NYU/Milestone_Project_3
- Create a new feature branch: git checkout -b feature/my-new-feature
- Commit your changes: git commit -am 'Add some feature'
- Push the branch: git push origin feature/my-new-feature
- Submit a pull request

## Contact Us

If you have any questions please reach out to us at:

- venycordova@gmail.com
- kamelbarakat8796@gmail.com
- neilgardner@verizon.net
- yj776@nyu.edu

# License
This project is licensed under the MIT License.

Copyright (c) [2023] [Barking Boutique]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.