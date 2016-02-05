# Tidal-Flux

Browser Based Rhythm Game  
[Play now!](https://tidal-flux.herokuapp.com)

## Installation

1. `$ git clone https://github.com/Tsunami273/Tidal-Flux.git`
2. `$ cd Tidal-Flux`
3. `$ npm install`
4. - Provide Mongo Database information in `server/creds.js`
5. `$ npm start`

## Contributing
After installing the game;
1. Fork it!
  1. `$ git clone Your fork`
  2. `$ cd Tidal-Flux`
2. Create your feature branch: `git checkout -b my-new-feature`
  1. `$ npm install`
  2. `$ npm start`
  3. `$ npm run watch`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push my-new-feature`
5. Submit a pull request `with the information a short message of what you added/removed or modified`



## Built With
###Front end
* React
* Redux
* D3

###Back end
* Node
* MongoDB
* Express

## License

ISC

Copyright (c) 2016, Tidal-Flux

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

### User Stories

As a player, I should be able to sign up.  
  - Email field.  
  - username field.  
  - password field.  
  - confirm password.  
  - client side validation : matching passwords, username less than 16 chars & 4 or more chars.  valid email address.  
  - server side validation: username already exists, email already exists.  
  - login page link.  
  - upon successful signup, logs user in automatically. 

As a player, I should be able to Log in.  
  - Username / email field.  
  - Password field.  
  - error messages Incorrect username/password.  
  - Password recovery button.  
  - Signup page Link.  
  - or login with facebook.   

As a player, I should be able to view other profiles.   
  - See avatar, Age, location, account age, song stats, ranking.  
  - Button to message them.  
  - Button to friend them.   
  - button to challenge them.  

As a player, I should be able to see a main menu.  
  - Play button links to song select menu.  
  - Options button links to global options menu.  
  - User profile button / display snippet / login button.  
  - editor link *   

As a player, I should be able to make/view/edit my profile.   
  - Edit your avatar.   
  - Edit age, location.    
  - Shows Account age.    
  - Shows song stats.    
  - Shows ranking.   
  - show friends.    
  - show/send messages.   
  - show achievements.   

As a player, I should be able to search for users.  
  - Search by any property in their profile (username, location etc).   

As a player, I should be able to select a song.   
  - List of all songs.  
    includes: 
    - difficulty.  
    - name / artist.  
    - note count.  
    - play preview.  
    - my high score.  
    - world high score.  
  - Have song options menu.  
  - Pick song to go to song play screen.  
  - sort songs.  
  - Locked songs are greyed out and not selectable, shows criteria for unlocking song.   

As a player, I should be able to play a song.   
  - should render notes based on the chart file.        
  - As a player, I should get feedback on note hits.   
  - As a player, I should see my input.   
  - As a player, I should see notes that are synced to the music.   
    - continually updates progress with song playhead.    
  - As a player, I should see a progress bar when playing a song.   
  - on song end, should go to score screen.  
  - "exit" should go back to song select menu and discard gameplay data for that song.  

As a player, I should be able to see a score screen.  
  - shows the score of the previous song.  
  - shows your highest score.  
  - shows stats of note hits.  
  - "finshed" button takes you to song select menu.  
  - play again button to restart same song.   
  - records new high scores.  
  - awards points based on song score.  
  - gives notification that you have unlocked a new song.  

As a player, I should be able to view other people's scores.  
  - Should display scores on leaderboard.  
  - Should display on song select screen.  

As a player, I should be able to see an song options menu.  
  - change scroll speed.  
  - change note skin.  
  - change background.  
  - change audio equalizer*  
  - change difficulty.  

As a player, I should be able to see a main options menu.  
  - As a player, I should be able to change key bindings.  
  - As a player, I should be able to change global offset. 

As a player, I should be able to view leaderboard.  
  - Should be able to sort by song.   
  - Should be able to click on user and view their profile.  
  - Should be able to sort by location.   

As a player, I should be able to input codes to change settings.    
  - cheat codes.   

As a player, I should be able to play head-to-head.  
As a player, I should be able to challenge and message other players.  
As a player, I should be able to recover my password.  
As a player, I should be able to sign up with email.  
As a player, I should be able to log in with facebook.  
As a player, I should be able to make my own songs*    
As a player, I should be able to share scores on facebook.    # Tidal-Flux
Browser Based Rhythm Game

### User Stories

As a player, I should be able to sign up.  
  - Email field.  
  - username field.  
  - password field.  
  - confirm password.  
  - client side validation : matching passwords, username less than 16 chars & 4 or more chars.  valid email address.  
  - server side validation: username already exists, email already exists.  
  - login page link.  
  - upon successful signup, logs user in automatically. 

As a player, I should be able to Log in.  
  - Username / email field.  
  - Password field.  
  - error messages Incorrect username/password.  
  - Password recovery button.  
  - Signup page Link.  
  - or login with facebook.   

As a player, I should be able to view other profiles.   
  - See avatar, Age, location, account age, song stats, ranking.  
  - Button to message them.  
  - Button to friend them.   
  - button to challenge them.  

As a player, I should be able to see a main menu.  
  - Play button links to song select menu.  
  - Options button links to global options menu.  
  - User profile button / display snippet / login button.  
  - editor link *   

As a player, I should be able to make/view/edit my profile.   
  - Edit your avatar.   
  - Edit age, location.    
  - Shows Account age.    
  - Shows song stats.    
  - Shows ranking.   
  - show friends.    
  - show/send messages.   
  - show achievements.   

As a player, I should be able to search for users.  
  - Search by any property in their profile (username, location etc).   

As a player, I should be able to select a song.   
  - List of all songs.  
    includes: 
    - difficulty.  
    - name / artist.  
    - note count.  
    - play preview.  
    - my high score.  
    - world high score.  
  - Have song options menu.  
  - Pick song to go to song play screen.  
  - sort songs.  
  - Locked songs are greyed out and not selectable, shows criteria for unlocking song.   

As a player, I should be able to play a song.   
  - should render notes based on the chart file.        
  - As a player, I should get feedback on note hits.   
  - As a player, I should see my input.   
  - As a player, I should see notes that are synced to the music.   
    - continually updates progress with song playhead.    
  - As a player, I should see a progress bar when playing a song.   
  - on song end, should go to score screen.  
  - "exit" should go back to song select menu and discard gameplay data for that song.  

As a player, I should be able to see a score screen.  
  - shows the score of the previous song.  
  - shows your highest score.  
  - shows stats of note hits.  
  - "finshed" button takes you to song select menu.  
  - play again button to restart same song.   
  - records new high scores.  
  - awards points based on song score.  
  - gives notification that you have unlocked a new song.  

As a player, I should be able to view other people's scores.  
  - Should display scores on leaderboard.  
  - Should display on song select screen.  

As a player, I should be able to see an song options menu.  
  - change scroll speed.  
  - change note skin.  
  - change background.  
  - change audio equalizer*  
  - change difficulty.  

As a player, I should be able to see a main options menu.  
  - As a player, I should be able to change key bindings.  
  - As a player, I should be able to change global offset. 

As a player, I should be able to view leaderboard.  
  - Should be able to sort by song.   
  - Should be able to click on user and view their profile.  
  - Should be able to sort by location.   

As a player, I should be able to input codes to change settings.    
  - cheat codes.   

As a player, I should be able to play head-to-head.  
As a player, I should be able to challenge and message other players.  
As a player, I should be able to recover my password.  
As a player, I should be able to sign up with email.  
As a player, I should be able to log in with facebook.  
As a player, I should be able to make my own songs*    
As a player, I should be able to share scores on facebook.    
