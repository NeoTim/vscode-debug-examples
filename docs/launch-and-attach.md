# Lauch 和 Attach

## VScode 两种调试模式

VSCode 提供了两种调试模式：

- `launch`：启动程序并进行调试；
- `attach`：调试某个已启动的程序；

有什么区别呢？**launch模式** 由 VSCode 来启动一个独立的具有 debug 模式的程序；**attach模式**附加于一个已经启动的程序，也就是程序本身不是通过 VSCode 启动的。


## 两种模式配置演示

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

**attach 模式配置**:

```json
{
  "version": "0.2.0",
  "configurations": 
    {
        "type": "node",
        "request": "attach",
        "name": "Attach 模式",
        "port": 9229
    }
  ]
}
```

request 参数(`attach` or `launch`)决定了使用何种调试模式，当然，在同一项目中，两种模式也可以并存使用。


## launch 和 attach 的选择

那到底使用 `launch` 和 `attach`，个人建议使用 `attach` 模式。
不管是 Web 调试，还是 Node 调试，大部分场景下 `attach` 模式都是比较好的选择。

调试 Web 项目时，使用 launch 模式存在一个问题，就是 VSCode 会以新访客的身份打开一个新的 Chrome 进程 (除非在 `launch.json` 配置中指定 userDataDir)，也就是说, 打开的 Chrome 是未登录的，并且没有插件（如下图所示）。

![chrome-not-login](/screenshots/chrome-not-login.gif)

在开发 Node 项目时，通常来说项目都是在终端启动，有时突然需要调试，这时使用 `attach` 模式，就不需要关掉已启动的项目, 再去 VSCode 中重启，也就是说 `attach` 可以做到按需启动 VSCode 调试，调试完成后，停止调试即可，显然这比 `launch` 模式灵活方便。


关于如何在调试 Web 项目时，打开的 Chrome 不是一个完全新的进程，可以看 [react-app(进阶)](/JavaScript/react-app/README.md#进阶) 和 [react-app-attach](/JavaScript/react-app-attach/README.md)