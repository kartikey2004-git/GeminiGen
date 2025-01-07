```bash
npm init -y
```
command is used to quickly initialize a new Node.js project with default settings.

It generates a package.json file with default values.

The -y flag automatically accepts all default options, so you don't have to go through the interactive prompts.



Packages
```bash
npm i express mongoose jsonwebtoken bcrypt cookie-parser dotenv cors
```

Socket.io mein jo humara http module rehta hai agar hum usse create krte hai server toh easily integrate hojata hai

jab bhi koi route pe request ayegi ya endpoint hit hota hai aapke server pe toh uska log humein miljaye

package to show logs
```bash
npm i morgan
```

ctrl + shift + p to reload window vscode

Controller folder ke andar pura logic likha rhega ek particular endpoint ka

Services folder hum generally isliye banate hai , jaise ki humara third party interaction hota hai jaise ki mongo db hai woh node js server ke bahar ka hai and wo interact kr rhi hoti hai

modular code rehta hai

express validator ke baare mein padhna hai abhi implementation kr leta hu

similar routes create krne hai for 
1.login
2.logout
3.Profile route to create auth middleware

protected route create krna hai profile ka
usko sirf ek loggedIn user hi access krna chahiye

loggedIn access ke liye humein ek middleware create krna padega

token do jagah mil skta hai header ke andar authorization mein ya toh cookies mein

Chatgpt reference

```bash
https://chatgpt.com/share/677d3022-4e50-800e-aab0-3af4c3b306ea
```