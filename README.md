## <h1 align="center">Nodejs Practice</h1>

-   [x] Installation
    -   visit nodejs: [Nodejs Website](https://nodejs.org/en/download)
    -   For ubuntu copy paste the given cmds to downlaod witn `nvm`
    -   After installation:
        -   Check version:
            ```
            nvm -v # nvm version: 0.40.3
            node -v # node lts version: v24.12.0
            npm -v # npm version: 11.6.2
            ```
-   [x] Check by running code:
    -   Open Terminal: type `node`
    -   This opens up the Node JS Virtual Env
    -   We Can run JS Code here
-   [x] Executing a .`js` file
    -   Open terminal: type `node filename`
    -   This runs the js file in the terminal, outside browser
-   [x] Initializing Nodejs in a project
    -   type cmd: `node init` to initialize nodejs project
    -   this will create a `package.json` file in the directory
    -   make a new script: "start": "node entryPointFileName.js"
    -   In the terminal, now run the script: `npm scriptName`, example: `npm start`
