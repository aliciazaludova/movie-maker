# movie-maker
1. setup
2. create json files
3. create xhr calls for the json files
4. data-gatekeeper
  - called xhr-categories file to use xhr request function
  - created functions for success + error load
  - created initializer function to call xhr function passing through the success and error functions
  - export initializer
5. main.js file -- require data-gatekeeper + call initializer
6. console.log and see that categories are printing there
7. QUESTION: i see it printing and am wondering again what parse does. it appears to be an object, just like it is in the json file.
## Description
This project is a website that is more involved than past projects and requires thorough planning. Project cards are important, as they articulate the plan. The site user is a movie producer who needs to decide if a movie can be made within a given budget. The producer chooses elements and then finds out if the budget will accommodate those elements.

[View assignment here](https://github.com/nss-nightclass-projects/exercise-vault/blob/master/movie-maker.md)

### Technologies Used
- HTML5, CSS, JavaScript
- JQuery
- Bootstrap
- Browserify
- Task runners

### Features
- The site has an input box to enter the movie budget. A button is then clicked to 'Set Budget'.
- Then elements to add to the movie can be selected. 
- After setting the budget, it cannot be changed.
- The elements to choose from are set up as checkboxes on the page. They are read-only until a budget is set.
- The user can see all of the things they can add to the movie at once, but the cost is not displayed.
- When the user adds a movie element, the remaining budget decreases with the cost of the element.
- When the user adds a movie element, it displays below the remaining budget with its cost.
- If the user still has budget remaining (has not gone over budget) and I has choosen at least one element from each category, they can make the movie.
- When the user adds a movie element from a category, a status bar at the top of the page increases in proportion with the portion of the budget used. 

#### Mock-up at this stage:
<img width="662" alt="movie-maker-w-selections" src="https://user-images.githubusercontent.com/33577725/38945389-0381df36-42fc-11e8-978b-ec9a123a14f9.png">

- The remaining budget is green while the number is positive (i.e. there is a remaining budget). It is red if the number is negative.
- When the user adds the first movie element from a category, the status bar at the top of the page increases in proportion with the portion of the budget used. Once the user has choosen at least one movie element from each category, the status bar is complete.
- If the user cannot yet make the movie, there is red text saying that 'I can't make the movie yet' under the added movie elements. 

#### Mock-up at this stage:
<img width="668" alt="movie-maker--over-budget" src="https://user-images.githubusercontent.com/33577725/38945653-c9d8e440-42fc-11e8-83c4-5c19f525a28b.png">

- If the user can make the movie, then there is green text saying that 'I can make the movie' under the added movie elements.

#### Mock-up at this stage:
<img width="672" alt="movie-maker-complete" src="https://user-images.githubusercontent.com/33577725/38945761-0e12d710-42fd-11e8-9bf5-072eba8108fe.png">

## Screenshot

## How to Run
1. Go to: `https://www.npmjs.com/package/http-server` and install "http-server".  
2. Navigate to the project folder in command line interface and type: `http-server -p 8080`  
3. This will show at: `http://localhost:8080` in your internet browser.

## Contributors
Alicia Zaludova