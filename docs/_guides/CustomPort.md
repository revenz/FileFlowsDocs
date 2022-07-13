---
title: Custom Port
name: Custom Port
permalink: /guides/custom-port
layout: default
---

To customize the port of the FileFlows Server if using the command parameter
```
 --urls=http://[::]:#PORT#
 ```

For example, to use port 12345

```
dotnet FileFlows.Server.dll --urls=http://[::]:12345
```

Note: [::] in the URL means, bind to any IP on this machine


### Windows Shortcut

Open the install folder, default location is

```
%appdata%\FileFlows
```

Edit the shortcut file "FileFlows"

At the very end of "Target" prepend the new parameter

For example

```
"C:\Program Files\dotnet\dotnet.exe"  FileFlows.Server.dll --urls=http://[::]:12345
```
