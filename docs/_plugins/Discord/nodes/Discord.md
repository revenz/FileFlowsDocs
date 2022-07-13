---
name: Discord
title: Discord
permalink: /plugins/discord/discord
layout: default
plugin: Discord
toc: true
---

{% include node.html input=1 outputs=2 icon="fab fa-discord" name="Discord" type="Communication" %}

Sends a message to a Discord server.

### Message
The message to send to the Discord server

### Title
An optional title to send, if not set the message type will be the title.

### Type
The type of message to send.  Basic type will be just the message without a title and no colouring.


### Outputs
1. Discord message sent
2. Discord message failed to send