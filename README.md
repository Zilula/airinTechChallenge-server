# Concept:

The backend and API for Airin's web technical challenge. The server contains routes for two schemas/models, questions and answers. The repo can be connected to the deployed DB so if you want to reseed the DB with more data, connect to the DB using the URI provided in the `.travis.yml` file  and change the values in the seed.js file then run `npm run seed`.  

View the [deployed endpoints](https://secure-temple-27525.herokuapp.com/questions)

## Getting Started

 - Clone and download the [GitHub repo](https://github.com/Zilula/airinTechChallenge-server)
 - Install dependencies:
	
    `npm i`
- Add a `.env` file. Reference the `.env.example` and `.travis.yml` files
    
 - Run scripts
 
 `npm run test` to run the testing suite\
 `npm run test:watch`\
 `npm run start` to launch the server\
 `npm run lint`\
 `npm run seed` to seed the DB\
 `npm run start:watch`\
 `npm run pretest`
 
## Technologies
 - Node
	 - JS runtime environment.
 - Express
	 - Used to handle routing and building the API endpoints.
 - Travis CI
    -   For easy deployment to Heroku.
 - Eslint
    -  A basic linting tool to reinforce consistent formatting.
- Jest
	- Testing library to confirm endpoints behave as expected.
- Chance
	- Generate seed data.
- MongoDB
	- Easy to use noSQL DB that worked well for the structure of the data.
- Mongoose
	- Used to validate and sanitize incoming data.
	

## Models

    Answer: {
	   answer:{
		   type: String,
		   required: true
	   },
	   questionId: {
		   ref: 'Question',
		   type: mongoose.Schema.Types.ObjectId
	   }
    } 

    Question: {
	   question:{
		   type: String,
		   required: true
	   }
    } 
    

