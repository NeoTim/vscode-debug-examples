# 开始使用 VSCode 调试

> 一些由浅到深的 VScode 调试例子，能让你快速理解和上手 VSCode 调试。

## 为什么使用 VSCode ?

我是深度 vi 用户，之前 Atom 深度使用者，现在基本上转到 VSCode，下面是我选择 VSCode 的原因：

- 颜值高，早期不如 Atom，现在已经逐渐赶上
- vi 支持度好，和 Atom 还差点，但已够用
- 调试体验好，完爆 Vim 和 Atom
- 插件多，和 Vim 和 Atom 打个平手
- 对 TypeScript 支持更好

## 浅浅地深入

- [一分钟体验 VScode Node.js 调试](JavaScript/minimal-node-app/README.md) ( [效果图.gif](screenshots/minimal-debug.gif) )
- [最简单 `launch `模式](JavaScript/minimal-node-app/README.md)
- [最简单 `attach` 模式](JavaScript/minimal-attach/README.md)
- [深入 `launch` 和 `attach`](docs/launch-and-attach.md)
- [如何使用 npm](JavaScript/use-npm/README.md)
- [怎样使用 Nodemon](JavaScript/use-nodemon/README.md)
- [渐进式的配置教学](docs/config-example.md)
- [react 中使用 `attach` (进阶)](JavaScript/react-app-attach/README.md)
- [调试单元测试 (Jest)](JavaScript/jest-test/README.md)
- [egg.js 调试 (子进程)](JavaScript/egg-app/README.md)

## 全部例子

> ### JavaScript 版例子

- [minimal-node-app](JavaScript/minimal-node-app/README.md)
- [minimal-attach](JavaScript/minimal-attach/README.md)
- [use-npm](JavaScript/use-npm/README.md)
- [use-nodemon](JavaScript/use-nodemon/README.md)
- [use-nodemon-attach](JavaScript/use-nodemon-attach/README.md)
- [express-app](JavaScript/express-app/README.md)
- [koa-app](JavaScript/koa-app/README.md)
- [react-app](JavaScript/react-app/README.md)
- [react-app-attach](JavaScript/react-app-attach/README.md)
- [jest-test](JavaScript/jest-test/README.md)
- [egg-app](JavaScript/egg-app/README.md)


> ### TypeScript 版例子

- [express-app](TypeScript/express-app/README.md)
- [koa-app](TypeScript/koa-app/README.md)
- [react-app](TypeScript/react-app/README.md)
- [jest-test](TypeScript/jest-test/README.md)
- [egg-app](TypeScript/egg-app/README.md)

## 参考资料

- [Node Debugging Guide (Node.js 官方)](https://nodejs.org/en/docs/guides/debugging-getting-started/)
- [VSCode Debugging (VSCode 官方)](https://code.visualstudio.com/docs/editor/debugging)
- [Node.js Debugging in VSCode (VSCode 官方)](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_launch-configuration-support-for-npm-and-other-tools) 
- [Node 调试指南 —— Inspector 协议](https://zhuanlan.zhihu.com/p/30264842)
- [Chrome Remote Debug 初探](https://ielgnaw.com/article/Chrome-Remote-Debug) - [Debugging Node.js with Chrome DevTools](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27)