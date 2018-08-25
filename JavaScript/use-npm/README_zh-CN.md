# npm 的基本使用

## 快速体验

``` bash
git clone git@github.com:forsigner/vscode-debug-examples.git
cd JavaScript/use-npm
npm i
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