---
name: Web Request
title: Web Request
permalink: /plugins/basic-nodes/web-request
layout: default
plugin: Basic Nodes
toc: true
---

{% include node.html input=1 outputs=2 icon="fas fa-globe" name="Web Request" type="Communication" %}

Copies a file to the destination folder

### URL
The URL of the request.

### Method
The web method to use when sending this request.

### Content Type
The Content-Type of the message to send.

### Headers
Optional headers to send with the request.

### Body
The body of the request being sent.  Variables can be used in this field.
This is a plain text field and variables can be used using the {}.
For example {file.Name}

## Outputs
1. Successfully sent
2. Request returned a non-successful status code

## Variables

| Variable | Description | Type | Example |
| :---: | :---: | :---: | :---: |
| web.StatusCode | The status code from the response | number | 200 |
| web.Body | The body of the response | string | this is a sample body |


Note: In the [Flow Editor](/flow-editor) this examples values will be used, so if you are expecting JSON back, the code will be evaluated with "this is a sample body" when saving.


### JSON Body Example
To send a JSON body
1. Set the content type to "JSON"
2. Choose the HTTP method, for example "POST"
3. Set the body
```json
{
    "SomeInt": 123,
    "SomeString": "this is a string",
    "StringVariable": "{file.Name}",
    "IntVariable": {file.Size}
}
```

