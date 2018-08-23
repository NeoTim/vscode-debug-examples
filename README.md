# 五分钟学会 VSCode 调试

> Debugging in VSCode

## 快速体验

为了直观地体验调试的效果，可以先抛开各种复杂的概念，现在 VSCode 中快速体验一下。

[一分钟体验 VScode Node.js 调试](JavaScript/minimal-node-app/README.md)

视觉效果：[minimal-debug.gif](screenshots/minimal-debug.gif)


## VScode 两种调试模式

- `launch`：启动程序并进行调试；
- `attach`：调试某个已启动的程序；

**launch 模式配置**:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch 模式",
      "program": "${workspaceroot}/app.js"
    }
  ]
}
```

**Attach 模式配置**:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
        "type": "node",
        "request": "attach",
        "name": "Attach 模式",
        "port": 9229
    }
  ]
}
```

request 参数(attach or launch)决定了使用何种调试模式，当然，在同一项目中，两种模式也可以并存使用。


## attach 和 launch 的选择

// TODO

当request为launch时，就是launch模式了，这是程序是从vscode这里启动的，如果是在调试那将一直处于调试的模式。而attach模式，是连接已经启动的服务。比如你已经在外面将项目启动，突然需要调试，不需要关掉已经启动的项目再去vscode中重新启动，只要以attach的模式启动，vscode可以连接到已经启动的服务。当调试结束了，断开连接就好，明显比launch更方便一点。

## 文章推荐

- [Node Debugging Guide (官方)](https://nodejs.org/en/docs/guides/debugging-getting-started/)
- [Node 调试指南 —— Inspector 协议](https://zhuanlan.zhihu.com/p/30264842)
- [Chrome Remote Debug 初探](https://ielgnaw.com/article/Chrome-Remote-Debug)
- [Debugging Node.js with Chrome DevTools](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27)
- [VS Code Debugging](https://code.visualstudio.com/docs/editor/debugging)
- [Node.js Debugging in VS Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_launch-configuration-support-for-npm-and-other-tools)