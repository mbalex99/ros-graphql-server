# Requirements:
* Ensure you have Node version 6.4 or higher.
* Ensure you are running on Linux or Mac OSX. (windows support is close on the horizon)

# Getting Started

1. Installation. Just run: `npm install`
2. Just Building: Just run `npm run build`
3. Running and Building `npm run start`

The server should run on port 5000.

# Running on a different port
You have two options:
1. Change `4500` to whatever port you want then run this command. `npm run build && PORT=4500 npm run start`
2. Directly changing the code in `src/server.ts`. 

# Bonus: Run and Debug with Visual Studio Code

Debugging with breakpoints with Visual Studio Code comes out of the box!

1. Make sure you've installed all dependences with `npm install`
2. Just run by pressing `Command+F5`
3. Add breakpoints and debug the runtime!
