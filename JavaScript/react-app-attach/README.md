# React 的 attach 模式配置

本文介绍如何使用 `attach` 模式调试 Web 项目 (用 React 做代表)。前面介绍了如何了 [VSCode 调试 React (使用 launch)](/JavaScript/react-app-attach/README.md)，为什么要使用 `attach` 模式呢？ 原因可以看：[深入 `launch` 和 `attach`](/docs/launch-and-attach.md)。

## 快速体验

> 建议先看完下面的介绍

```bash
git clone git@github.com:forsigner/vscode-debug-examples.git
cd JavaScript/react-app-attach
npm i && npm start
code .  # 在 VScode 打开项目
```

然后，在 VSCode 给代码打上断点，按下 `f5`，看到 Debug toolbar 就说明成功了。

## 如何使用 Attach 模式

#### 第一步

使用远程调试启动 Chrome，在 Mac 命令是：`/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir=/tmp/chrome-debug` (其他系统看文末相关资料)

注意 `--user-data-dir` 这个参数，因为通常你电脑已经跑着一个 Chrome 实例，加上这个参数可以新打开一个 Chrome 实例，如果执行上面命令之前已经有一个 Chrome 实例在跑，那这个参数是必须的。

#### 第二步

配置好 `launch.json`，类似下面：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "attach",
      "port": 9222,
      "name": "Attach to chrome",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}"
    }
  ]
}
```

然后按 `f5` 启动调试，在新打开的 Chrome 实例访问 `http://localhost:3000`，既可以体验。

## 特别有用的技巧

在[深入 `launch` 和 `attach`](/docs/launch-and-attach.md)里面说到，新打开的 Chrome 是未登录的，并且没有插件，这并不是我们期望的。如果要使用之前装好的插件怎么办呢？使用 `--user-data-dir` 可以解决，建议把这个参数设置为你用户目录的文件夹，比如我 Mac 用户名为 forsigner，那就设置为 `--user-data-dir=/Users/forsigner/chrome-debug`。

为了方便，可以设置一条 alias:

```bash
alias chrome_debug="/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir=/Users/forsigner/chrome-debug"
```

以后只需在终端用命令 `chrome_debug` 打开调试专用 Chrome。

如何使用之前的插件呢？在这个调试专用 Chrome 登录你的 Google 账户，把所有设置同步过来即可。

## 相关资料

[vscode-chrome-debug#attach](https://github.com/Microsoft/vscode-chrome-debug#attach)
