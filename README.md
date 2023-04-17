# git_js_bot

## 20230417

### first day of javascript discord bot

what is needed to install?

- node.js
    > main things to let you run javascript in your server
- nvm
    > manage node.js
- yarn
    > install and manage packages. ex. discord.js

### start

to get start, you need to add discord.js, by using,

```text
yarn add discord.js
```

then, it would install it and generate three things, node_modules, package.json, and yarn.lock.

- node_modules: put everything about modules
- packages.json: tell what package inside it
- yarn.lock: every version number of package, don't touch.

### programing

you can look <https://discordjs.guide/first>

to let it run, create a main.js to put main function in it. then, using this

```javascript
// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);
```

when input discord.js, you can use it like,

```javascript
import { Client, Events, GatewayIntentBits } from 'discord.js';
```

### dotenv

to use it , using

```text
yarn add dotenv
```

to add package into it , and add a .env file to save like token

```env
TOKEN = <token>
```

then, if you want to import

```javascript
import dotenv from 'dotenv';
// load dotenv packages

dotenv.config();
// load .env
```

when you want to using token

```javascript
client.login(process.env.TOKEN);
```

### Start the bot

```text
node src/main.js
```

### Extra

if you want to clone a github project, you can use desktop version, or download "git" to let it inside the vs code.

to clone a project in github, use

```text
git clone <url>
```

then, open the flolder with vscode, you can push your changes to github.

### gitignore

if want to ignore, in .gitignore, just put in the file and flolder name

### set up spirit

if you want to set up a sprirt, in package.json,

```json
"scripts": {
    "start": "node src/main.js"
  }
```
