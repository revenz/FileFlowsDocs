---
name: Replace Original
title: Replace Original
permalink: /plugins/basic-nodes/replace-original
layout: default
plugin: Basic Nodes
---

{% include node.html input=1 outputs=1 icon="fas fa-file" name="Replace Original" type="Process" %}

Replaces the original file with the working file.

If the extension is different on the working file, the original file will be deleted and the working file will be moved to the original with the new extension.
E.g. from File.avi to File.mkv