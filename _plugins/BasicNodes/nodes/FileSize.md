---
name: File Size
title: File Size
permalink: /plugins/basic-nodes/file-size
layout: default
plugin: Basic Nodes
toc: true
---

{% include node.html input=1 outputs=2 icon="fas fa-balance-scale-right" name="File Size" type="Logic" %}

Checks if the file size matches the configured parameters. The values are in megabytes.

### Lower
The value it must be greater than this number of megabytes

### Upper
The value it must be less than than this number of megabytes. Leave as 0 to not test the upper limit.

### Outputs
1. File size within range
2. File size not within range