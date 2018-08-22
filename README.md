# 五分钟学会 VSCode 调试

> Debugging in VSCode

## 快速  体验

为了直观地体验调试的效果，可以先抛开各种复杂的概念，现在 VSCode 中快速体验一下。

[一分钟体验 VScode Node.js 调试](JavaScript/minimal-node-app/README.md)

视觉效果：[minimal-debug.gif](screenshots/minimal-debug.gif)


## VScode 两种调试模式

- `launch` 模式：启动程序并进行调试；
- `attach` 模式：调试某个已启动的程序；

**launch 模式配置**:

````json
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

**Attach 模式配置**:

``` json
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

request 参数(attach or launch)决定了使用何种调试模式，当然，在同一项目中，两种模式也可以并存使用。
