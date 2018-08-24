# 渐进式的配置教学

- [最基本的launch模式](#最基本的launch模式)
- [最基本的attach模式](#最基本的attach模式)
- [使用npm](#使用npm)
- [使用nodemon](#使用nodemon)


### 最基本的launch模式

这是最简单的配置，使用 `launch` 模式调试 Node.js，实际场景用的不多。

`.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Node App",
      "program": "${workspaceRoot}/app.js"
    }
  ]
}
```

例子：[minimal-node-app](/JavaScript/minimal-node-app/README.md)


### 最基本的attach模式

 `attach` 模式的最简单配置，`attach` 模式用来调试某个已启动的程序，这里使用 `npm srcript` 启动一个 node 服务。

`package.json`

```json
{
  "scripts": {
    "dev": "node --nolazy --inspect app.js"
  }
}
```

`.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach",
      "port": 9229
    }
  ]
}
```


例子：[minimal-attach](/JavaScript/minimal-attach/README.md)


### 使用npm

`.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "use npm",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run-script", "dev"],
      "console": "integratedTerminal",
      "port": 9229
    }
  ]
}
```

`package.json`

```json
{
  "scripts": {
    "dev": "node --nolazy --inspect app.js"
  }
}
```

例子：[use-nodemon](/JavaScript/use-nodemon/README.md)


### 使用nodemon

`.vscode/launch.json`

```json
{
   "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "nodemon 启动",
      "runtimeExecutable": "nodemon",
      "program": "${workspaceFolder}/app.js",
      "restart": true,
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

例子：[use-nodemon](/JavaScript/use-nodemon/README.md)
