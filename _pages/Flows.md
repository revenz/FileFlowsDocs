---
title: Flows
name: Flows
permalink: /flows
layout: default
order: 130
---

Flows are the processing rules/flows that FileFlows uses to process your files.

Each library requires a Flow.   Libraries can use the same Flow.

You can Add/Edit/Delete Flows from this page.

### Failure Flow
This is a special flow type that will be executed if any flow fails.

FileFlows will search for the first Failure Flow to use if a flow fails, if none are found then processing will immediately stop.

