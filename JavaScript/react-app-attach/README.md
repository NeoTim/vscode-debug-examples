# Use `attach` in React

This article shows you how to debug a Web project using the `attach` mode (using React as an example). I explained how to use [VSCode Debug React (using launch)](/JavaScript/react-app/README.md) before. Why use `attach` mode? The reason can be seen: [Deep into `launch` and `attach`](/docs/launch-and-attach.md).

## Quick experience

> It is recommended to read the following article first.

```bash
git clone git@github.com:forsigner/vscode-debug-examples.git
cd JavaScript/react-app-attach
npm i && npm start
code .  # open in VScode
```

Then, put a breakpoint on the code in VSCode, press `f5`, and you will see the Debug toolbar.

## How to use the `attach` mode

#### First

Start Chrome by remote debugging mode, command in the Mac is: `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir=/tmp/chrome-debug` (other systems see the end of this post)

Pay attention to the `--user-data-dir` parameter, because usually your computer is already running a Chrome instance. Add this parameter to open a new Chrome instance. If you have a Chrome instance running before executing the above command, this parameter is required.


####  Second

Configurations in `launch.json`:

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

Then press `f5` to start debugging and access `http://localhost:3000` in the new opened Chrome instance.

## Useful tips (!important)

Introduced in the [Understanding `launch` and `attach`](/docs/launch-and-attach.md), The new Chrome instance is not logged in and there are no plugins, which is not what we expected. What if I want to use plugins that I installed before? Use `--user-data-dir` to solve it. It is recommended to set this parameter to the folder of your user directory. For example, if my Mac user name is `forsigner`, it is set to `--user-data-dir=/Users/forsigner/chrome-debug`.

For convenience, you can set an alias:

```bash
alias chrome_debug="/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir=/Users/forsigner/chrome-debug"
```

In the future, you can open the debug-only Chrome with the command `chrome_debug` in the terminal.

How to use the previous plugin? Sign in to your Google account with this debug-only Chrome and sync all your settings.

## References

[vscode-chrome-debug#attach](https://github.com/Microsoft/vscode-chrome-debug#attach)
