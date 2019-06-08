# Concept:

The backend and API for Airin's web technical challenge. The server contains routes for two models, questions and answers. 

View the[deployed endpoint](https://secure-temple-27525.herokuapp.com/questions)

## Getting Started

 - Clone and download the [GitHub repo](https://github.com/Zilula/airinTechChallenge-server)
 - Install dependencies:
	
    `npm i`\
 - Run scripts 
 `npm run test`\
 `npm run test:watch`\
 `npm run start`\
 `npm run lint`\
 `npm run seed`\
 `npm run start:watch`\
 `npm run drop`\
 `npm run db-load-all`\
 `npm run pretest`\
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
	- generate seed data.
- MongoDB
	- Easy to use noSQL DB that worked well for the structure of the data.
- Mongoose
	- Used to validate and sanitize incoming data.
