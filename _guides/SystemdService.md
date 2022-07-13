---
title: Systemd Service
name: Systemd Service
permalink: /guides/systemd
layout: default
---

If you wish to install either FileFlows Server or FileFlows node as as systemd service.  Follow this guide.

First you need to have "dotnet" available to sudo and in the path variable.  This is needed as you have to use sudo to install the service, and the systemd file will use "dotnet" to launch FileFlows.

### FileFlows Server
To install FileFlows server as a systemd service run the following:

```
cd Server
sudo dotnet FileFlows.Server.dll --systemd
```

### FileFlows Node
To install FileFlows Node, it is recommended that you first run the Node manually to create the configuration file which include the URL of the server

```
cd Node
dotnet FileFlows.Node.dll --no-gui
```

This will create a JSON configuration file /Data/node.config

```json
{
  "ServerUrl": "",
  "TempPath": "/home/user/FileFlows/Temp",
  "HostName": "machine-name",
  "Runners": 0,
  "Enabled": false
}
```
Update the "ServerURL" with the URL to your FileFlows Server, for example

```json 
{
  "ServerUrl": "http://192.168.1.100:5000/",
  "TempPath": "/home/user/FileFlows/Temp",
  "HostName": "machine-name",
  "Runners": 0,
  "Enabled": false
}
```
Save the file.

Then install the systemd service with the following command
```
sudo dotnet FileFlows.Node.dll --systemd
```

### Check The Status
To check the status of the FileFlows Server run
```
sudo systemctl status fileflows.service
```

And to check the status of the FileFlows Node run

```
sudo systemctl status fileflows-node.service
```

---

### Uninstall
To uninstall the Server run
```bash
cd Server
sudo dotnet FileFlows.Server.dll --systemd --uninstall
```
Or to uninstall manually 

```bash
sudo systemctl stop fileflows
sudo systemctl disable fileflows
sudo rm /etc/systemd/system/fileflows.service
sudo systemctl daemon-reload
sudo systemctl reset-failed
```

To uninstall the Node run
```bash
cd Node
sudo dotnet FileFlows.Node.dll --systemd --uninstall
```


Or to uninstall manually 
```bash
sudo systemctl stop fileflows-node
sudo systemctl disable fileflows-node
sudo rm /etc/systemd/system/fileflows-node.service
sudo systemctl daemon-reload
sudo systemctl reset-failed
```

---

### FAQ
Question:
I am getting the following error when trying to install the service "sudo: dotnet: command not found"

Answer:
This means sudo cannot access dotnet, you can use whereis to find dotnet then include the full path

For example,
```
> whereis dotnet
> dotnet: /home/user/.dotnet/dotnet
> sudo /home/user/.dotnet/dotnet FileFlows.Server.dll --systemd
```

--- 

Question: 
I am getting an error saying dotnet cannot be found

Answer: 
If dotnet is not available in the PATH variable, you can modify the /etc/systemd/system/fileflows.service or /etc/systemd/system/fileflows-node.service and replace "dotnet" with the full path to dotnet.
You can find dotnet by running
```
whereis dotnet
```
For example,
```
> whereis dotnet
> dotnet: /home/user/.dotnet/dotnet
> sudo nano /etc/systemd/system/fileflows.service
```
And replace "dotnet" with /home/user/.dotnet/dotnet