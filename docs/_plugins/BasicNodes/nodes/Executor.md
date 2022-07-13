---
name: Executor
title: Executor
permalink: /plugins/basic-nodes/executor
layout: default
plugin: Basic Nodes
toc: true
---

{% include node.html input=1 outputs=2 icon="fas fa-terminal" name="Executor" type="Process" %}

Execute the following process against the file.


### File Name
The name of the file to execute

### Arguments
The arguments to be passed to the process to execute

### Working Folder
The folder where the process will be executed from

### Success Code
The exit code of the process indicating the process was successful.  Usually this should be 0.

### Timeout
How long the process can run for before being terminated.  Use 0 for no timeout.

### Output Variable
An optional variable name to store the process output into.

### Output Error Variable
An optional variable name to store the process error output into.

---

### Outputs
1. Process returned success
2. Process returned failure