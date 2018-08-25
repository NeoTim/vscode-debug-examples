# Nodemon 的基本使用

在真实的开发场景，我们使用 Nodemon(或类似工具) 启动 Node 服务，实现修改本地代码后自动重启，下面演示 VSCode 怎么配合 Nodemon。


## 快速体验

``` bash
git clone git@github.com:forsigner/vscode-debug-examples.git
cd JavaScript/use-nodemon
npm i
code .  # 在 VScode 打开项目
```

然后，在 VSCode 给代码打上断点，按下 `f5`，看到 Debug toolbar 就说明成功了。

## 配置

核心的配置是 `restart: true`，这里为了更简单地演示怎么使用 Nodemon 调试，使用了 `launch` 模式，真实的开发场景，建议使用 `attach` 模式，会更加灵活。

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

了解更多: [Node.js debugging in VS Code with Nodemon](https://github.com/Microsoft/vscode-recipes/tree/master/nodemon)