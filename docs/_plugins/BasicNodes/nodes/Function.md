---
name: Function
permalink: /plugins/basic-nodes/function
layout: default
description: Node that executes javascript functions
plugin: Basic Nodes
toc: true
---

{% include node.html input=1 outputs=1 icon="fas fa-code" name="Function" type="Logic" %}


The function node allows you to use custom javascript code to process within the flow.

It can let you make decision paths based on previous nodes, compute variables for future nodes, log information, and many more features.

## Return codes
* Return 1+ to specify which output is to be called.   Define the number of outputs using the "Outputs" fields.  This will add more output connections to the node
* Return 0 to complete the flow successfully.  This will immediately stop the flow and mark it as successful
* Return -1 to indicate an error and stop the flow.  This will mark the flow as unsuccessful.

## Members

This is a list of available builtin members available to a function
```
// Flow object that is executing
Flow: object
// The name of the machine executing this 
Hostname: string
// Logger available to log messages
Logger: object
// Sleep the execution for passed in milliseconds
Sleep: function(millisecond: number)
// Variables that can be used in many textfields
Variables: map
```

## Variables
It includes the "Variables" object which exposes variables from the flow.  And you can set future variables for the flow in here

```js
   Varabiles.MyFutureVariable = 'to be used in another flow node';

   // an example of variables from a 'Video Input' node
   let video = Variables.vi.VideoInfo.VideoStreams[0];
   // or a safe way to get that incase any of those objects are null
   let video = Variables.vi?.VideoInfo?.VideoStreams[0];
   if(!video) return -1; // video was null
```


## Logger

Lets you log messages to the flow log
```js
   Logger.ILog('an information log message');
   Logger.WLog('an warning log message');
   Logger.ELog('an error log message');
   Logger.DLog('an debug log message');
```

## Sleep

Allows you to "Sleep" for a specified amount of milliseconds
```js
// Sleep for 10 seconds (10,000 milliseconds)
Sleep(10_000);
```

## Flow

The "Flow" object lets you perform actions on the flow, it exposes helper methods to the code.
```js
   // will create a directory if it does not already exist
   // if it does exist this function simply returns 
   // its a safe way to ensure a directory exists 
   Flow.CreateDirectoryIfNotExists(path);

   // return the size in bytes as a number
   Flow.GetDirectorySize(path); 

   // gest/sets a parameter value with a given key
   Flow.SetParameter(key, value); 
   Flow.GetParameter(key); 

   // maps a path to the local processing node
   Flow.MapPath(path); 

   // moves the working file to the destination file
   Flow.MoveFile(destination); 

   // this will reset the working file to the original File, 
   // this lets you effectively reprocess the original file.  
   // Useful if you want to perform multiple operations on the same file
   Flow.ResetWorkingFile(); 

   // Sets the current working file to the file passed in
   // don't delete is a boolean that if true will not delete the current working file
   // note: if the current working file is the original file, it will NEVER be deleted
   Flow.SetWorkingFile(filename, dontDelete);

   // returns a new GUID as string
   Flow.NewGuid();

   // the temporary path, property NOT a function
   Flow.TempPath

   // the path of the library the file belongs to
   Flow.LibraryPath

   // Get a toolpath from the toolname, the toolname is case insensitive
   Flow.GetToolPath(toolname);

   // Execute a process and capture the output
   // you can use arguments for a string argument list, or argumentList which is an string array and will escape the arguments for you correctly
   // timeout is optional, number of seconds to wait before killing the process
   // returns ProcessResults
   //    Completed:bool; // if the process ran to completion or timedout/was canceled
   //    ExitCode:number; // the exit code of the process, may be null
   //    Output:string; // the output, if error output was detected this will contain that output
   //    StandardOutput: string; // the standard output from the process
   //    StandardError: string; // the standard error from the process if any
   Flow.Execute({command:'somecommand.exe', arguments: '-a -b -c', argumentList: ['can', 'use', 'instead of arguments'], timeout: 0, workingDirectory: 'optional'});
```

## Flow.Execute

This method allows you to execute any command from within a script.

It takes a ExecuteArgs parameter which has the following properties
```cs
/// <summary>
/// The command to execute
/// </summary>
string command;
/// <summary>
/// The arguments of the command
/// </summary>
string arguments;
/// <summary>
/// The arguments of the command as a list and will be correctly escaped
/// </summary>
string[] argumentList;
/// <summary>
/// The timeout in seconds of the process
/// </summary>
int timeout;
/// <summary>
/// When silent, nothing will be logged
/// </summary>
bool silent;
/// <summary>
/// The working directory of the process
/// </summary>
string workingDirectory;
```

## Samples

Different outputs based on file size
```js
   if(Variables.file.Size > 10_000_000_000) // 10GB
   	return 1; // output 1
   if(Variables.file.Size > 2_000_000_000) // 2GB
   	return 2; // output 2

   let reducedSize = (Variables.file.Size / Variables.file.Orig.Size) * 100;
   if(reducedSize < 10)
   	return 0; // its too small, something went wrong

   return 3; // output 3
```

Example showing using the Flow.Execute
```js
    // define the output file, in the temp directory with a guid as the name
    let output = Flow.TempPath + '/' + Flow.NewGuid() + '.mkv';
    // get the ffmpeg tool path
    let ffmpeg = Flow.GetToolPath('ffmpeg');
    // execute the process and capture the result
    let process = Flow.Execute({
    	command: ffmpeg,
      workingDirectory: '/media/my-working/directory',
    	argumentList: [
    		'-i',
    		Variables.file.FullName,
    		'-c:v',
    		'libx265',
    		'-c:a',
    		'copy',
    		output
    	]
    });
    
    // log the standard output/error if found
    if(process.standardOutput)
    	Logger.ILog('Standard output: ' + process.standardOutput);
    if(process.starndardError)
    	Logger.ILog('Standard error: ' + process.starndardError);
    
    // check the exit code of the process
    if(process.exitCode !== 0){
    	Logger.ELog('Failed processing ffmpeg: ' + process.exitCode);
    	return -1;
    }
    
    // update the working file to the newly created file from ffmpeg
    Flow.SetWorkingFile(output);
    return 1;
```