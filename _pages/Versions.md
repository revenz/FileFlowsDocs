---
title: Versions
name: Versions
permalink: /versions
layout: default
order: 900
---

## Version 0.9.3

#### New
- Added File count bubbles to the navigation menu to show 
  - Unprocessed files
  - Processing Files
  - Failed files

#### Fixed
- SQLite: Slow Server queries introduced in 0.9.2

---

## Version 0.9.2

#### New
- Premium: Revision History
  - Available for Flows, Libraries, and Dashboards (will extend in a later version)
  - This will save every change to these as a past revision allowing you to revert to a specific version or in case of deletion, to restore the deleted item
- MySQL
  - Drastically reduced database calls and improved performance
  - Logging is now batched.  20 log lines will be written at a time.  This does mean logs will be delayed in the "Logs" view until 20 messages have been received.  This adds a few seconds to the live view of the logs between updates
  - Cache Store: Caching some objects now for up to 1 minute.  E.g. processing nodes and executing files.  This means for every update from a worker those things do not need to be re-read from the database
  - Smarter updating of in-progress files.  Only if a change is dedicated will a file be updated in the database.  Previously every update from the processing node triggered an update in the DB.  
    - E.g. a percentage increase that didn't change the File object itself would be updated in the database
  - In progress files directly update the database JSON data without needing to read the previous file object and cut the database queries in half.
- Log Page: Scrolls to bottom when going to this page now
- FFMPEG Builder: Subtitle Track Merge now will merge files with the language code in the filename
  - Will parse a language code and HI, CC, SDH as well, for example, file.en.hi.srt will have the language set to "English (HI)"
- SQLite: Automatically creates a backup database file on upgrade, e.g. FileFlows-0.9.0.sqlite.backup
- Hold: You can now skip a file from being held
- UI: Datalist now re-selects items during some operations (reverting a revision for example)
- Resources are now loaded with a version number parameter to avoid caching between versions
- Dashboards will now update widgets based on page focus.   If the browser page does not have focus some widgets will get updated less frequently (from 10 seconds to 20 seconds)
- Docker now has dotnet installed to /dotnet with chmod 775

#### Fixed
- Basic dashboard would not refresh the chart

---

## Version 0.9.1

#### New
- Exposing FFMPEG Builder now to functions/scripts.  See [documentation](/plugins/video-nodes/ffmpeg-builder) for more information
- MySQL: Improved search in Files, now uses stored procedure with fuzzy logic
- [FF-101](https://github.com/revenz/FileFlows/issues/101): Video now look for CodecTag and will set on the video object.  Video Has Stream can use this to test if a video has a codec tag. 
- New Node: [Video Extract Audio](/plugins/video-nodes/video-extract-audio)
- Added support links to forum and discord
- Added a "Scan" button to the "Files" page.  This will block and wait for all enabled libraries to scan, then the files list will be reloaded.

#### Fixed
- Files were constantly being sent to unprocessed after completion if "Reprocess Recreated Files" was set incorrectly
- Open Database Connections widget could not be added
- Cancel New Dashboard would show an error
- Black bar detection would fail on short videos
- If the user script has the same name as a System script the user script will no longer "crash" the scripts from loading, it is now ignored
- Blocked ctrl-s from read-only editors (e.g. the system script editor)
- [FF-212](https://github.com/revenz/FileFlows/issues/212): Minor cosmetic log improvement
- Fixed display of "Step 1/2" when the menu was collapsed
- Deleting a flow now refreshes the list (which updates any "In Use" rows)
- Fixed issue with Plex Analyze not working on Windows systems
- Fixed issue with Logging and Temp folder calculation being wrong on dashboard widgets
- Humanizing the "Step" on the dashboard progress widget 
- Fixed the time series bottom period chart on the dashboard
- Fixed issue where the language was not always parsed correctly on video audio streams

---

## Version 0.9.0

#### New
- Premium Feature: Multiple Dashboards
  - This moves the System page that was introduced in 0.8.4 into customizable widgets allowing the user to create multiple dashboards to view statistics
  - New Widget: Open database connections
  - New Widget: Storage Saved
  - New Widget: Audio Codecs
  - New Widget: Video Codec
  - SQLite now keeps statistics for Video Codecs, Audio Codecs, Codecs, Resolution, and Containers.
- Premium Feature: Pre-Execute Script.  This allows you to assign a script to a processing node which it will execute before requesting a file to process.  If this script returns anything other than 1, the node will not get a file to process.
- Flows types.  Flows are now separated into Standard and Failure.  
  - Can set a default Failure flow.  If none is set then no failure flow will be used when a flow fails
- Hold Period added to libraries.  This allows you to hold any found files for a configured amount of minutes.  These files will not be processed until after that time
- Scripts: Moved out of the database and into a "Scripts" folder.  
  - System: These are system scripts that cannot be edited and will be recreated each time FileFlows is started
  - User: These are user-created scripts
- In Use
  - Scripts, Flows, and Plugins now have an in-use indicator and cannot be deleted if in use
  - New dialog to show what is using an item
- Database is now using a better connection pool which will wait for a connection instead of failing
- Sleep: New Node add to sleep, and a new Sleep function is exposed in the function nodes/scripts.
- Process is now shown in the window title
- Added ability to enable/disable hardware encoding/decoding in a function/script
```js
Variables.NoNvidia = true
Variables.NoQSV = true
Variables.NoVAAPI = true
Variables.NoAMD = true
```
- Added Hostname variable to functions/scripts which contains the hostname of the executing node
- First and the last page added to the pager
- Datalist improvements, including shift to multi-select, ctrl to add single, clicking on an item now unselects other and only selects that row (unless shift or control is pressed)
- New worker to update object references, so when you rename a flow that flow is updated in any files and libraries using it
- New script 'NVIDIA - Below Encoder Limit'
- Subtitle Track Merge now has an option to match the filename
- Library: When "Reprocess Recreated Files" is checked, if a file was deleted by a flow and is found again, that file will now be processed again regardless of the creation date.
- Can now use failure flows in the Goto node
- Side menu can now be collapsed
- Added ctrl-s to save a function/script
- Logs now auto-scroll if near the bottom
- Added maximize button to file viewer
- Improved look of toasts

#### Fixed
- MySQL move to the top wouldn't work if library priority was lower than other files
- FFMPEG Builder: Fixed mapping of streams which could cause the wrong streams to be used in a file
- Fixed issue with final size being zero if external process moved a file before the flow was completed
- Fixed "Subtitle Track Merge" not actually merging the subtitle into the file 
- Fixed issue converting 10 bit to 8 bit video when using NVIDIA hardware encoding
- Fixed issue with function node name not being in the executed nodes list if that node name started with an "F"

---


## Version 0.8.4

#### New
- MySQL is now using a connection pool, a maximum of 50 connections
  - Removed the "Open Database Connections" portlet from the System page as this information is no longer available
- Setting to "Recreate Database", if unchecked and the database already exists, no data will be migrated and FileFlows will simply switch to this database.
- Node: [FFMPEG Builder:Audio Converter](/plugins/video-nodes/ffmpeg-builder/audio-converter)
- Library Option: Skip File Access Tests
  - When enabled, the library will not test if the server can read/write to a file before adding it into the system.
- New indicator on the [Nodes](/nodes) page if the node and server version mismatches
- New File Status "Missing Library"
  - Shown if a file was added into the database and then the Library was deleted
  - This allows you to delete these files for reprocessing if a new library with the same path is created

#### Fixed
- MySQL was ordering unprocessed incorrectly
- Zooming in the Flow Editor would break the multi-select
- Copy/Paste in Flow Editor would capture all copy/paste events and not just when in focus
- Log DB Pruner was not pruning database logs


---

## Version 0.8.3

#### New
- Flow Editor: Copy and Paste nodes
- Flow Editor: Undo/Redo history
- [System Page](/system) added (Premium Feature)
  - This gives you an overview of the system including Codecs processed, CPU/Memory/Storage/Database statistics, Processing times etc
- Removed "Statistics" page as the [System Page](/system) page now replaces this
- FFMPEG Builder: Video Codec no longer does a hardware test if a specific hardware encoder is specified.  
  - E.g. if you use qsv_h264 It will use that codec, it may fail, but it will use that
  - If you just use "h264" or "hevc" or "h265" it will continue to do the hardware test
- Server can now install/uninstall a systemd service using --systemd and --systemd --uninstall
- Node can now install a systemd service using --systemd --uninstall
- Server and Node now create an entry point bash script with using systemd and the auto-upgrade process takes place inside that script.
  - This fixes the issue with systemd restarting FileFlows while the upgrade is happening and works similar to how the Docker upgrade works
- Whenever the Server or Node is started a new log file will be created with a unique name. 

#### Fixed
- API Page failed to load due to swagger error
- Removed "No File" dashboard portlet 
- Fixed issue with loading from localhost
- Bug where "FFMPEG Builder: Subtitle Track Merge" would use the inverse of the selected files, so if you entered "sub" it would use any file but a "sub"
- Renamed "Pattern Replacer" to "Filename Pattern Replacer"
- Music Nodes: Fixed issue where MusicInfo was not updated after the file was processed
- Updated QSV and VAAPI hardware decoding parameters
- Plex Nodes are not able t find the path
- Processing Nodes now default to "Process: All"
- Step 1/2 hints for new installs now show on all screens
- Fixed the "Pause Processing" button on the mobile view
- Log files were created with no .log extension, causing the log cleaner to never delete the old log files
- Misc Cosmetic improvements


---

## Version 0.8.2

#### New
- Added a "Search" for files.  This allows you to search all files and discover any "hidden" files that may have had their library deleted.
- Added an option to remove files when removing a library.  This is selected by default
- File viewer now has a link to partial log to view only the selected executed node.
  - Logs had to change slightly so this will be imperfect for older processed files.
- Added "Processing Node" to file viewer to show what processing node processed a file

#### Fixed
- Improved MySQL performance
- [FFMPEG Builder: Add Audio Track](/plugins/video-nodes/ffmpeg-builder/add-audio-track) bitrate now goes up to 2048Kbps
- Fixed issue with scheduling time for workers could be a negative number causing FileFlows to crash on startup


---


## Version 0.8.1

#### New
- Video Legacy Nodes
  - Moved old legacy Video Nodes into a separate plugin
  - This plugin will be downloaded if upgrading from an earlier version, not if a clean install
- New "Obsolete" indicator on obsolete nodes in the flow editor.  And a warning will be shown if adding one of these nodes to the flow.
  - Note: These nodes will eventually be deleted for good, so upgrade your flows.
- Flow Templates updated to use FFMPEG Builder 
- Added "Date" to "Files" to show when the file was seen, processed, etc in relative time
- Workers now run at set times instead of [x] minutes since starting.
  This change should reduce the load on the CPU
  - Database Log Pruner - 5am
  - Library File Log Pruner - 5am
  - Library Worker
    - Every 30 seconds
    - On the hour if no libraries are set to "Scan"
  - Log Cleaner - 3am
  - Plugin Updater - 5am
  - Server Auto Updater - 4am
  - Telemetry Report - 5am
- Watched Library 
  - Now uses a Timer than can be stopped/started when a file is added to the load queue
  - Will now check known files before adding to the load queue
  - When the queue is empty, the timer is stopped.  When a file system event adds a new file, the timer is started    
- Get Next Library File now returns more information to the processing node to diagnose why nothing is being processed
- Added option to log every request made to the server, this is helpful for debugging and understanding the load on the server
- Updated order of hardware decoders to be: cuda, qsv, dxva2, d3d11va, opencl
- New Node [FFMPEG Builder: Metadata Remover](https://docs.fileflows.com/plugins/video-nodes/ffmpeg-builder/metadata-remover)
- MySQL: Get Library Files now orders unprocessed by date added to the library

#### Fixed
- Issue where only the first two processing nodes could be used even if those were not enabled if the system was unlicensed.
- FFMPEG Builder: 10 Bit was using the wrong 10bit pixel format for libx265 
- Fixed "Video Has Stream" would always fail on language matches as it was using the codec value to perform the check


---

## Version 0.8.0

#### New
- External Database Support (MySQL / Maria)
  - Library Process Order: As Found (default), Random, Newest, Smallest, Largest
  - Enhanced logging, can view and search Server logs and Node logs all from the web console
- "Pause" / "Resume" button now prompts for duration to pause for
- Logging now logs to rolling log files which are kept for a configured amount of days
- Links now have "noreferrer" on them
- WAL mode is now used for SQLite database connections
- Node: [FFMPEG Builder: Custom Parameters](https://docs.fileflows.com/plugins/video-nodes/ffmpeg-builder/custom-parameters)
- Node: [FFMPEG Builder: Video Tag](http://docs.fileflows.com/plugins/video-nodes/ffmpeg-builder/video-tag)
- Node: [FFMPEG Builder: Set Language](http://docs.fileflows.com/plugins/video-nodes/ffmpeg-builder/set-language)
  - This node was the "FFMPEG Build: Audio Set Language" but has been renamed and extended to support subtitles
- Node: [FFMPEG Builder: Track Reorder](http://docs.fileflows.com/plugins/video-nodes/ffmpeg-builder/track-reorder)
  - This node was the "FFMPEG Build: Audio Track Reorder" but has been renamed and extended to support subtitles
- Node now looks for additional Environmental variables for settings: NodeMappings, NodeRunnerCount, NodeEnabled

#### Fixed
- Node: [FFMPEG Builder: Video 10 Bit](http://docs.fileflows.com/plugins/video-nodes/ffmpeg-builder/video-10-bit) and [FFMPEG Builder: Video Encode](http://docs.fileflows.com/plugins/video-nodes/ffmpeg-builder/video-encode) updated 10 Bit parameters to use p010le

#### Patreon Only Features
- External database support
- Enhanced Logging
- Auto Updates
- Up to 10 Processing Nodes


---


## Version 0.7.1

#### New
- Added "Pause" / "Resume" button.  I will extend this with a "Pause for [x] minutes" in a later version.
- Node: [Can Use Hardware Encoding](https://docs.fileflows.com/plugins/video-nodes/logical-nodes/can-use-hardware-encoding)

#### Fixed
- The logging "Log Queue Messages" switch was inversed so when it was on, it was actually off and vice versa.
- Issue with parsing comments in scripts if comment contained a "/" character
- Script output labels not shown in the Flow
- Editor would show the "Pending Changes" prompt if a code editor was previously opened.  Eg edit a script, then go to Files and view a file.  Closing that side window would cause the prompt to appear
- Floats were not allowed in a number field when should be.  This caused the "Video: Has Stream" to fail if trying to set channels to 5.1
- Docker Nodes now have the correct mapping of FFMPEG when registered

#### Updates
- Documentation now points to the new documentation site https://docs.fileflows.com


---


## Version 0.7.0

#### New
- [Scripts](https://docs.fileflows.com/scripts) new feature to allow reuse of Javascript function and easily share with other community members
- Library Files are now called "Files" to avoid confusion
- Library Exclusion Filter
  - This allows you to exclude files easily from a library  
- "Log Queue Messages" setting to reduce excess logging.  Turn this on if you're trying to debug why a file is not being detected.

#### Improvements
- Updated to include FFMPEG 5.0
- Files Paging
- Flows now have a "Duplicate" button
- Internal Processing Node now has constant UID, this avoids the potential issue of it being added more than once
- Plugins all now have constant UID, this avoids the potential issue of them being added more than once
- Fixed memory issue where the .net garbage collector was not running when it should
- Numerous other improvements to reduce memory footprint

#### Fixed
- Node "Video Has Stream" now works
- Node "FFMPEG Builder: Video Encode" now uses preset "slower" for QSV instead of p6


---


## Version: 0.6.2

#### New
- Flow Runner now sends a "hello" message to the server when processing, to say it's alive, every 5 seconds. 
- Worker that will automatically cancel any runners that have not sent an update in 60 seconds.

#### Improvements
-Moved "Dequeued" messages to debug log

#### Fixed
- Issue with log file pruner being too aggressive and deleting any log
- Issue when trying to delete a flow connection and the previously selected node was deleted instead
- Issue with "Copy File" node when Server was a Linux server and Node was a Windows Node
