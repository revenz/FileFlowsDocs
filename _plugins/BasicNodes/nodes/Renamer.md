---
name: Renamer
permalink: /plugins/basic-nodes/renamer
layout: default
plugin: Basic Nodes
toc: true
---

{% include node.html input=1 outputs=1 icon="fas fa-font" name="Renamer" type="Process" %}


Renames the working file.
Variables can be used by entering the key '{' inside the Pattern field.

### Fields

#### New Name
The new name of the file.  Can use variables. Any empty () and {} will be removed.

#### Destination Folder
If the file should be moved to a different folder.

#### Log Only
Turn on if you just want to test this node without it actually renaming the file

#### CSV File
Will append to this file the original name and the renamed file.  Useful when using 'Log Only' to test the renamer before changing files.