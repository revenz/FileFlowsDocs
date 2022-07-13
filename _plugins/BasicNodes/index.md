---
name: Basic Nodes
layout: default
description: Index file for Basic nodes that provide the basic functionality to FileFlows
---

Basic Nodes are core nodes and provide basic functionality to a flow

Including
* Input File
  * A basic input file node which is a starting point of a flow
* Copy File
  * Copies a file to another location
* Delete Source Directory
  * Deletes the source directory of the file being processed.  Include options to only delete if empty
* Move File
  * Moves a file to another location
* File Extension
  * Logical node that can test if a file has a particular extension
* File Size
  * Logical node that cant test if a file is a certain file size
* Function
  * A node that lets the user provide their own logic to test.  This is a javascript code block
* Log
  * Lets you log a message to the flow log
* Pattern Match
  * Logical node that tests the working file and the original file against a regular expression.   Uses a c# regular expression.
* Pattern Renamer
  * Logical node that will replace text in the filename with using regular expressions or basic strings.  You can specify multiple patterns to replace. For example 
![image](https://user-images.githubusercontent.com/958400/143516676-9a41524d-bcef-4430-9745-34c9ebf45ac9.png)
* Renamer 
  * Logical node that will rename the file.  Can use variables using the '{' key to use variables from other nodes and also common variables. 
* Replace Original
  * Logical node that will replace the original file of the flow with the current working file.  If the current working file has a different extension than the original, the working extension will be used, eg "MyFile.avi" will become "MyFile.mkv"