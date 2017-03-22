# Requirements:
* Ensure you have Node version 4 or higher.
* Ensure you are running on Linux or Mac OSX. (windows support is close on the horizon)

# Getting Started

1. Place a copy of `realm-professional.tgz` in the root directory
2. Installation. Just run: `npm install`
3. Just Building: Just run `npm run build`
4. Running and Building `npm run start`

The server should run on port 5000.

# Configuration

## Running on a different port
You have two options:
1. Change `4500` to whatever port you want then run this command. `npm run build && PORT=4500 npm run start`
2. Directly changing the code in `src/server.ts`. 

## Want to place your realm-professional.tgz somewhere else?

1. Place it in your newly specified location
2. Update the dependency for `realm` in `package.json` and update the location 
3. Run `npm install` once again.

# Bonus: Run and Debug with Visual Studio Code

Debugging with breakpoints with Visual Studio Code comes out of the box!

1. Make sure you've installed all dependences with `npm install`
2. Just run by pressing `Command+F5`
3. Add breakpoints and debug the runtime!
