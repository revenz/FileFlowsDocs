---
title: Creating A Flow
name: Creating A Flow
permalink: /creating-a-flow
layout: default
order: 520
---

A flow is the heart of File Flows, it a rule that defines what to do with a file as it is detected.
This example we will create a Video flow that converts videos to H265/AC3 audio and moves that file from a "Downloads" directory into a "Converted" directory.  We always want to move video files and we want to delete the original folder if empty.  Eg. if you are using a download client like Sabnzbd which will extract videos into a parent directory that you no longer need after conversion.

* Goto to the "Flow" page
* Click "Add" button
* Click and press "Delete" key on the default "Input File" node.  As we will be processing videos, we don't need this generic node
* Click and drag a "Video Node" into the flow.  This will be our entry node.   This node will load the media information for a file that we will use throughout this flow.  No video files will fail this check and not be processed
* Click and drag a "Video H265 AC3" node into the flow.   
* Connect the Output from the "Video Node" into the Input of the "Video H265 AC3" node.
* Click and drag a "Move File" node into the flow
* Double click the "Move File" node 
  * Set a destination path, eg "/mnt/media/videos/converted"
  * Turn on "Copy Folder"
     * This is so the folder structure will be copied to the destination directory, eg /mnt/media/downloads/movies/my movie/my movie.mkv will be moved to /mnt/media/converted/movies/my movie/my movie.mkv
  * Turn on "Delete Original"
     * This will then delete the unnecassary directory /mmt/media/downloads/movies/my movie
![image](https://user-images.githubusercontent.com/958400/144160783-33288944-1555-4d3f-85ae-ec32b8876752.png)
* Connect both Outputs from "Video H265 AC3" node into the Input of the "Move File" node.  We connect both outputs because we always want to move this file, regardless if needed to be converted or not.
* Name the flow to "Convert to H265/AC3"
* Click Save
* Click and drag a "Delete Source Directory" node into the flow
* Connect the Output from "Move File" to the Input of "Delete Source Directory"
* Double click the "Delete Source Directory" node
  * Check "If Empty".  This will mean the folder will only be deleted if the folder is not empty
  * Include Patterns.  
      * Enter "mkv", press enter, this will add "mkv" to the list of include patterns
      * Repeat the above for "mp4" "mov" "mpg" "avi"
      * This means only files matching these patterns (regular expressions or just a string match) will be counted when checking if the directory is empty.
      * This means if there any non important files like "nfo" "txt" "thumbnail" etc, they won't be counted and the folder can be deleted.  But if there are other video files, then the directory will not be deleted.
      ![image](https://user-images.githubusercontent.com/958400/144161330-3869743b-fd90-45c7-801f-e5df046a717a.png)


![image](https://user-images.githubusercontent.com/958400/144160886-70b3587c-dde0-4c80-a8ec-48eb83ddf77d.png)

You now have a flow that can be used in a library
