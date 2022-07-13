---
title: Libraries
name: Libraries
permalink: /libraries
layout: default
order: 140
---

Libraries are where the files are stored in the system and the directories that will be scanned for files.

## General Options

### Name
The name of the library, must be unique.

### Path
The path of the library.  This path must be be available on all processing [Nodes](/nodes).  
Mapping may be required to map this path for external nodes.

### Flow
The flow to execute against files found in this library.

### Priority
The priority in which these files will be processed.  If a library has higher priority files those will be processed before the lower priority ones.

### Processing Order
The order in which to process files in this library.   
This option is only available if using an external database.
- As Found
  - The default order, as they are found and added to the system, this is the order they will be processed.
- Newest First
  - Files will be processed newest first, the newer the file the sooner it will be processed.
- Largest First
  - Files will be processed largest to smallest
- Smallest First
  - Files will be processed smallest to largest
- Random
  - Files will be processed randomly
  - Note the order files appear in the queue will not match the processing order for these files then.  As a file will be randomly selected when a processing node requests a file.

### Hold Minutes
Optionally hold any files found in this library for this amount of minutes before processing them.  Each file will be held for this amount of time.

### Enabled
If this library is enabled or not, and whether or not files should be processed from it.

## Schedule
This allows you to configure when this library will be active.

The library scanner will not run against this library nor will any files be processed outside of the schedule.

## Advanced

### Filter
A filter to match files against.
- The full path of the file will be used to match against this, e.g. C:\My Videos\TV Shows\MyShow.mkv
- Using a regular expression to match against

### Exclusion Filter
Will be used to exclude any files.
- Run before the exclusion filter, any files matching this will be excluded
- Using a regular expression to match against

### Exclude Hidden
If this is on, any hidden files will not be added to the library.

### Folders
If this is on folders will be processed in a flow instead of files.
- ONLY USE THIS IF YOU WANT TO PROCESS A *FOLDER*!
This does not mean scan subfolders and process subfolders. Libraries will always be searched recursively, this option means to process a FOLDER and not a FILE.

### Skip File Access Tests
When this is enabled, the server will not attempt to open the file for reading/writing when scanning.
The server usually tries to see if a file can be read/written to, so if using a [Replace Original](/plugins/basic-nodes/replace-original) or similar, the operating will succeed.

### Reprocess Recreated Files
When enabled if a file is re-detected with a different creation time than that is recorded, the file will be automatically set to reprocess.
This is helpful on a library of downloaded files, where you may download the same file multiple times and wish to process it each time.

### Use Fingerprinting
When enabled, files will have a checksum run against them when being imported and after a flow is completed.  Any matching checksum files will be skipped from future library imports.

### Scan
When Scan is enabled the library will be routinely scanned for new content.
When disabled the library will listen for file system events to detect new files.
It is best to leave this off unless you are having issues with files not being detected.

### Scan Interval
The shortest possible time in seconds between scans.  It is not guaranteed to scan at this interval each time, as another scan might be in progress.

### File Detection Interval
The amount of time in seconds to wait to recheck the file size during the library scanner.  Use this if another application maybe writing to a file in chunks, eg a PVR application writing parts of a recording every 20 seconds.

