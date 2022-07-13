---
title: Creating A Library
name: Creating A Library
permalink: /creating-a-library
layout: default
order: 530
---

A library is a folder that FileFlows will monitor and search for files to process.   

Note: A Library must have a Flow associated with it.  Refer to [Creating a Flow](https://github.com/revenz/FileFlows/wiki/Creating-a-Flow) for an example.

* Click the "Libraries" page
* Click the "Add" button
* Enter the name of the library eg "Downloads"
* Enter the path of the library, you can use the "..." button to open a folder browser to select a folder, or you can enter the path directly
* Filter.  This is optional, but helpful to filter out any files you do not want.
  * This uses an regular expression to filter.
  * This example we want video files, so we will use the expression "\.(mp4|mkv|avi|mpg|mov)$" which matches files ending in the extensions mp4, mkv, avi, mpg, mov.  The expression is case insenstive
* Flow.  Select a flow you created previously, here we will use the example "Convert to H265/AC3"
* Click Save

![image](https://user-images.githubusercontent.com/958400/144160636-58816adf-fa85-4ed7-8dd1-6fb4ebc70047.png)


You now have a Library that will be scanned regularly and any video files found will be processed into H265/AC3.