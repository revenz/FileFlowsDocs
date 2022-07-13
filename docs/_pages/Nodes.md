---
title: Nodes
name: Nodes
permalink: /nodes
layout: default
order: 150
---

Processing Nodes, or simply Nodes, are instances that actually execute a flow and process the library files.

FileFlows Server (the main application) has an in-built processing node and this is all that is needed for FileFlows to work.  However, if you want to split the workload onto more machines or you don't want the server doing the processing; you can install additional nodes on other machines.

For example, install FileFlows as an unRAID application, and have a FileFlows node installed on a much more powerful Windows machine.  You could have the unRAID process 1 file at a time and you could have the Windows machine process 3 additional files.  Or you could farm it out and have 1000 nodes processing 1000 files each at a time. 

## Settings
### General
* Name
  * The display name of the Node
* Address
  * The IP or hostname address of the node
* Enabled
  * If the node is enabled or not and can process files
* Flow Runners
  * The number of simultaneous files this node can process
* Temp Directory
  * The directory on the node to store temporary files created by the Flow Runner

### Schedule
This allows you to set a processing schedule for a node.
This schedule is when a file is allowed to start processing.  If a file start processing 1 minute before the schedule ends, that file could still be processing outside of the schedule, but no additional files will be processed.

### Mappings
This allows you to map tools and directories from the Server to the Node.
You need to map any path used in the Flow or Libraries to locally available paths on the node.
You also need to map any tools used in FileFlows to the Node, for example map FFMPEG from the server to where you installed FFMPEG locally on the node.

### Processing
This allows you to set conditions on what files this node can process
* All Libraries
  * Whether or not this node can process all libraries in FileFlows
* Libraries
  * If All Libraries is unchecked, specify which libraries this node can process
* Max File Size
  * Set to 0 to have no max
  * The file size limit this node can process.
  * For example, you may wish to limit a Raspberry Pi node so it can only process smaller files due to it's memory constraints.

### Advanced
* Change Owner
  * When checked the node will change the owner of any newly created files to the PGID and PUID defined in the environmental values.
  * If these environmental variables are not set the owner will be changed to 'users:nobody'.
* Set Permissions 
  * When checked file permissions will be set on any newly created files
* Permissions
  * The file permissions to set on any newly created files.  If blank the default permissions of 777 will be used.