# Simplest `attach` mode

The simplest configuration of the `attach` mode, the `attach` mode is used to debug a started program, here use `npm srcript` to start a node service.

## Quick experience

``` bash
git clone git@github.com:forsigner/vscode-debug-examples.git
cd JavaScript/minimal-attach
npm i && npm run dev
code . # open in VScode
```

Then, put a breakpoint on the code in VSCode, press `f5`, and you will see the Debug toolbar.

## Configuration

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

## References

- [Understanding `launch` and `attach`](/docs/launch-and-attach.md)
- [Official Docs](https://code.visualstudio.com/docs/editor/debugging)