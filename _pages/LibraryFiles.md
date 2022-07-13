---
title: Files
name: Files
permalink: /library-files
layout: default
order: 120
---

This page contains a list of files found by the library scanner.

* Unprocessed
  * These are unprocessed files that have been detected but not processed yet.  They appear in the order they will be processed, and you can move files to the top of the queue.
* Processing
  * These are the files that are currently being processed.  You can double click to see the processing log as it happens
* Processed
  * These are the files that have been processed.  You can double-click to see the processing log of the file.
* Processing Failed
  * These are files that for some reason failed to be processed.   You can video the processing log to find out.   This should not happen very often unless you have misconfigured your system, which hopefully the log can tell you what is wrong.
* Flow Not Found
  * Happens if the flow has been deleted and the Library has not updated Flow set. 
  * To fix this, edit the Library and configure a Flow for it.
  * Then select the items to process and click Reprocess
* Missing Library
  * The libraries these files belong to have been deleted. A new library may have been created with the same path, but the ID of the library has changed.
  * To process these files, delete them and scan the library again.
  * These files may have been left un-deleted to retain the processing statistics for these files.



Columns 
* Name = The name of the file relative to the library 
* Flow = The Flow used to process the file
* Library = The Library in which the file was located
* Time = How long it took to process the file
* Output = Where the file ended up