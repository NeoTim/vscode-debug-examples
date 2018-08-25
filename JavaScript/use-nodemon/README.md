# Use with Nodemon

In a real development scenario, we use Nodemon (or a similar tool) to start the Node service, which can be automatically restarted after modifying the native code. The following explains how VSCode Debugging works with Nodemon.


## Quick experience

``` bash
git clone git@github.com:forsigner/vscode-debug-examples.git
cd JavaScript/use-nodemon
npm i
code . # open in VScode
```

Then, put a breakpoint on the code in VSCode, press `f5`, and you will see the Debug toolbar.

## Configuration

The core configuration is `restart: true`. To explain how to use Nodemon debugging, the `launch` mode is used here. In the real development scenario, it is recommended to use the `attach` mode, which is more flexible.

`.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug with nodemon ",
      "runtimeExecutable": "nodemon",
      "program": "${workspaceFolder}/app.js",
      "restart": true,
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

Learn more: [Node.js debugging in VS Code with Nodemon](https://github.com/Microsoft/vscode-recipes/tree/master/nodemon)
