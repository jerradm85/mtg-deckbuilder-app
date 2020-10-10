# MTG Deckbuilder Capstone

'MTG Deckbuilder' is a deck building app that lets you create custom decks for the collectible card game 'Magic: The Gathering'.

The reason I created this app, is because I've been an avid player for many years, and wanted a virtual space where I could create decks so I didn't have to take up so much physical space in my home with cards.

## Tech Stack:
-  `Front End:` HTML5, CSS3, ES6, React
-  `Back End:` Node.js, Express.js, Mocha, Chai, PostgreSQL
-  `Dev Environment:` Heroku, Vercel

## Screenshots & Description:

![image](/images/Screen1.png)
This is the screen a user sees after they log in. it features a navigation menu at the top with a logout button, the MTG Deckbuilder button that brings the user to the user screen at any time, and a menu on the left with the "+ Deck" button. when the user clicks on + Deck...

![image](/images/Screen2.png)
...They are taken to the "Create Deck" view, where they can name their deck, select from a list of cards and add them to their deck, then they can choose to describe the theme of the deck / why it was built or not. Finally they submit the deck, which creates it and storing it for later viewing.

![image](/images/Screen4.png)
After the user creates a deck, the deck appears in their deck list on the left of the screen. They have the option to delete their decks currnently, with edit functionality coming soon.

![image](/images/Screen3.png)
Finally, we have the "Deck" view. This view shows the completed deck. the user may click on any of the cards within the deck to view that card, and my back out to the user screen at any time via the back button.

## Live Demo:

- https://mtg-deckbuilder.vercel.app/

## Lessons Learned:
- taking the time to properly design your database structure will save you a lot of headache later on.
- don't leave styling until the end. style throughout.

  

#### What I would Do Differently:

- have components show on the User page instead of routing to each individual component.
- structure and spend my time more effectively by breaking down the tasks at hand in a trello board.
- style throughout building the front end.


## Github Repos

-  `front end:` https://github.com/jerradm85/mtg-deckbuilder-app
-  `back end:` https://github.com/jerradm85/mtg-deckbuilder-server