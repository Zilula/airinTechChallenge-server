# Concept:

The backend and API for Airin's web technical challenge. The server contains routes for two schemas/models, questions and answers. The repo is currently connected to the deployed DB so if you want reseed the DB with more data, change the length of the arrays in the seedData.js and run npm run seed or node seed.js.  

View the [deployed endpoint](https://secure-temple-27525.herokuapp.com/questions)

## Getting Started

 - Clone and download the [GitHub repo](https://github.com/Zilula/airinTechChallenge-server)
 - Install dependencies:
	
    `npm i`
    
 - Run scripts
 
 `npm run test` to run the testing suite\
 `npm run test:watch`\
 `npm run start` to launch the server\
 `npm run lint`\
 `npm run seed` to seed the DB\
 `npm run start:watch`\
 `npm run drop` to drop the DB\
 `npm run db-load-all` to drop and reseed the DB\
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

