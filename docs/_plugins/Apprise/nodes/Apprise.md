---
name: Apprise
title: Apprise
permalink: /plugins/apprise/apprise
layout: default
plugin: Apprise
toc: true
---

{% include node.html input=1 outputs=2 icon="fas fa-bell" name="Apprise" type="Communication" %}

Sends a message to a Apprise server.

### Message
The message to send to the Apprise server

### Tag
A list of tags to send this message as, if empty it will be tagged with 'all'.

### Type
The type of message to be sent
- Information
- Success
- Warning
- Failure

### Outputs
1. Apprise message sent
2. Apprise message failed to send