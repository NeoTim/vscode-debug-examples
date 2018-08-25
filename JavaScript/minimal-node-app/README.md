# Experience VScode Node.js debugging in one minute

> The simplest Node.js Debugging

Leave out a variety of complex concepts, now quickly experience it in VSCode.

## Quick experience

``` bash
git clone git@github.com:forsigner/vscode-debug-examples.git
code JavaScript/minimal-node-app # open in VScode
```

Then, put a breakpoint on the code in VSCode, press `f5`, and you will see the Debug toolbar.

![exp](/screenshots/minimal-debug.gif)

## Simplest Configuration

`.vscode/launch.json`

```json

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

## References

- [Understanding `launch` and `attach`](/docs/launch-and-attach.md)
- [Official Docs](https://code.visualstudio.com/docs/editor/debugging)