# VSCode 调试 React

本文例子使用 create-react-app 创建 React 项目，代码展示了如何在 VSCode 使用最基本的调试方法。

## 快速体验

``` bash
git clone git@github.com:forsigner/vscode-debug-examples.git
cd TypeScript/react-app
npm i & npm start
code .  # 在 VScode 打开项目
```

然后，在 VSCode 给代码打上断点，按下 `f5`，看到 Debug toolbar 就说明成功了。

## 进阶

上面的介绍是使用 `launch` 模式调试，在真实的开发中，推荐使用 `attach` 模式来调试，会更加灵活。具体方法看: [使用 attach 模式调试 React](/JavaScript/react-app-attach/README_zh-CN.md)