---
title: Scripts
name: Scripts
permalink: /scripts
layout: default
order: 160
---

Scripts allow you to define Javascript functions that can be re-used as user-created Nodes in a Flow.

A script can be shared with the community to implement common or missing features not found in a plugin.

Each script will be added as a Flow Node in the Flow Editor.

## System Scripts
There are several built-in scripts. 
These scripts will always be recreated at startup to ensure they work as expected, so any changes made to these scripts will be overridden.

If you wish to customize one of these scripts duplicate it, then edit the new instance.
* 7Zip: Compress to Zip
* Video: Bitrate greater than
* Video: Downscale greater than 1080p
* Video: Resolution

## Creating a Script
Each script must have the following a starting comment block describing the script and a Script function that will be the entry point of the script.

### Script Comment Block
```javascript
/**
 * Requires a 7Zip tool to be configured and will zip files
 * @author John Andrews
 * @version 0.6.1.900
 * @param {string} ArchiveFile The name of the zip file to create, if empty a random name will be used
 * @param {string} Pattern The filename pattern to use, eg *.txt
 * @param {bool} SetWorkingFileToZip If the working file in the flow should be set to the newly created zip file
 * @output Zip file created
 */
```
* The text before the first @ is the description of the Script
* @author [optional] and it is the person who created the script
* @version [optional] the version of the script
* @param {type} [name] [description]
  * Type: tells the UI what type of input this is, available options are "string", "bool", "int"
  * Name: The variable name passed in to the function, no spaces are allowed
  * Description: everything after name
* @output these the possible output connections this function has.  The order is import, the first @ouput will be "Output 1", 2nd will be "Output 2" etc.

### Entry Point
* The script must have a "Script" function as the entry point
* The script will have the variables defined in the comments passed into the script when called
```javascript
function Script(ArchiveFile, Pattern, SetWorkingFileToZip)
```

### Complete Example
```javascript
/**
 * Requires a 7Zip tool to be configured and will zip files
 * @author John Andrews
 * @version 0.6.1.900
 * @param {string} ArchiveFile The name of hte zip file to create, if empty a random name will be used
 * @param {string} Pattern The filename pattern to use, eg *.txt
 * @param {bool} SetWorkingFileToZip If the working file in the flow should be set to the newly created zip file
 * @output Zip file created
 */
function Script(ArchiveFile, Pattern, SetWorkingFileToZip)
{
    let output = '' + ArchiveFile; // ensures ArchiveFile is a string
    if(!output || output.trim().length == 0)
        output = Flow.TempPath + '/' + Flow.NewGuid() + '.zip';
    Logger.ILog('Output: ' + output);
    let sevenZip = Flow.GetToolPath('7zip');

    let process = Flow.Execute({
        command: sevenZip,
	argumentList: [
	    'a',
	    output,
	    Pattern
    	]
    });

    if(process.exitCode !== 0){
        Logger.ELog('Failed to zip: ' + process.exitCode);
	return -1;
    }

    if(SetWorkingFileToZip)
	Flow.SetWorkingFile(output);
    return 1;
}
```
