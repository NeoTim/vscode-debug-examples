# 一分钟体验 VSCode 调试 Node.js 应用
> 最基本的 Node.js 应用调试

## 如何在本地体验调试

``` bash
git clone git@github.com:forsigner/vscode-debug-examples.git
code JavaScript/minimal-node-app # 在 VScode 打开项目
```

然后，在 VSCode 给代码打上断点，按下 `f5`，看到 Debug toolbar 就说明成功了。

![体验](/screenshots/minimal-debug.gif)

## 最简单配置

调试配置文件存在 `.vscode` 文件夹的 `launch.json` 文件中，最简单配置如下：

``` json

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

更多细节看官方文档：https://code.visualstudio.com/docs/editor/debugging