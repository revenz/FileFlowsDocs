---
title: Variables
name: Variables
permalink: /variables
layout: default
order: 600
toc: false
---

Variables let you inject a string into a field.  

The available variables are based on the flow nodes before the current node.   

E.g. if you use a [Video File](/plugins/video-nodes/video-file) node this will insert {vi.Video.Codec} etc

## Using in Text Fields
To use a variable inside a text field, they must be wrapped in {}.

For example, {file.Name}

Typing { will open up a variable selector of available variables.

![Text Variables](/images/2022-06-26-11-12-27.png)

## Using in a Function or Script
To use a variable inside a function or script, call the Variables object

For example,
```javascript
Variables.file.Name
```
![Function Variables](/images/2022-06-26-11-11-10.png)

## Options
These let you alter the the variable value

| Option | Description | Example | Output |
| :---: | :---: | :---: | :---: |
| ! | Uppercase | {ext!} | MKV |
| :0 | Left pad with 0 | {file.CreateDate.Day:00} | 05 |


## Always Available

| Variable | Description | Type | Example |
| :---: | :---: | :---: | :---: |
| ext | Extension of working file | string | .mkv |
| file.Name | Short filename of working file without extension | string | b0d11434-8fce-4d3c-ad55-774e05061bdf |
| file.FullName | Full filename of working file | string | /temp/FFRunner/b0d11434-8fce-4d3c-ad55-774e05061bdf.mkv |
| file.Extension | Extension of working file | string | .mkv |
| file.Size | Size of working file in bytes | long | 100000000 |
| folder.FileName | Short folder name of working file | string | FFRunner |
| folder.FullName | Full folder name of working file | string | /temp/FFRunner |
| file.Create | Creation DateTime of original file | DateTime | Javascript new Date() |
| file.Create.Year | Creation Year of original file | int | 2020 |
| file.Create.Month | Creation Month of original file | int | 3 |
| file.Create.Day | Creation Day of original file | int | 28 |
| file.Modified | Modified DateTime of original file | DateTime | Javascript new Date() |
| file.Modified.Year | Modified Year of original file | int | 2020 |
| file.Modified.Month | Modified Month of original file | int | 3 |
| file.Modified.Day | Modified Day of original file | int | 28 |
| file.Modified | Modified DateTime of original file | DateTime | Javascript new Date() |
| file.Modified.Year | Modified Year of original file | int | 2020 |
| file.Modified.Month | Modified Month of original file | int | 3 |
| file.Modified.Day | Modified Day of original file | int | 28 |
| file.Orig.Extension | Extension of original file | string | .mkv |
| file.Orig.FileName | Short filename of original file without extension | string | TestFile |
| file.Orig.FullName | Full filename of original file | string | C:\Files\TestFile.mkv |
| file.Orig.Size | Size of original file in bytes | long | 100000000 |
| folder.Orig.FileName | Short folder name of original file | string | Files |
| folder.Orig.FullName | Full folder name of original file | string | C:\Files |
