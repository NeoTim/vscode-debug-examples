# 最简单的 attach 模式配置

## 快速体验

``` bash
git clone git@github.com:forsigner/vscode-debug-examples.git
cd JavaScript/minimal-attach
npm i && npm run dev
code .  # 在 VScode 打开项目
```

然后，在 VSCode 给代码打上断点，按下 `f5`，看到 Debug toolbar 就说明成功了。

## 配置

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

## 更多

- [深入了解 `launch` 和 `attach`](docs/launch-and-attach.md)
- [官方文档](https://code.visualstudio.com/docs/editor/debugging)