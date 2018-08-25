# Lauch and Attach

## Two debugging modes in VScode

- `launch`:  Start a program and debug it;
- `attach`: Debug an already started program;

What is the difference between the two modes? **Launch mode** Start a program with debug mode by VSCode; **Attach mode** is attached to an already started program, which means that the program is not started by VSCode.

## Showcase of Two mode configurations

**launch mode**:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch mode",
      "program": "${workspaceroot}/app.js"
    }
  ]
}
```

**attach mode**:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
        "type": "node",
        "request": "attach",
        "name": "Attach mode",
        "port": 9229
    }
  ]
}
```

The `request` parameter (`attach` or `launch`) determines which debug mode to use. Of course, in the same project, the two modes can also be used together.

## Choose launch or attach ?

What mode should we choose? Personally I recommend the `attach` mode.
Whether it's Web debugging or Node debugging, the `attach` mode is a better choice for most scenarios.

when debugging a web project,One drawback to using the launch mode is that VSCode will open a new Chrome instance as a new guest (unless `userDataDir` is specified in the `launch.json` configuration), the new opened Chrome is not Logged in, and there are no extentions with it (as shown below).

![chrome-not-login](/screenshots/chrome-not-login.gif)

When developing a Node.js project, usually the project is started in the terminal, sometimes you suddenly need to debug, if you use the `attach` mode, you don't need to turn off the started project and restart it in VSCode, you can start debugging in VSCode directly, after debugging is complete, just stop it, obviously this is more flexible than the `launch` mode.


When debugging a web project, If you don't want to always open a new chrome instance, see [react-app(Advanced)](/JavaScript/react-app/README.md#Advanced)  and [react-app-attach](/JavaScript/react-app-attach/README.md)
