---
title: Settings
name: Settings
layout: default
---

These are the general system settings

### General
* Compress Library Log Files
  * When enabled, all library log files will be saved in a compressed format.
  * This will reduce the size on disk of the log files, but make them harder to read outside of FileFlows
* Telemetry
  * Telemetry is useful to help know what devices we need to support, what Flow parts are the most used and where we should focus on the development.  All data is anonymous and no information about what files were processed will be sent.
  * If telemetry is disabled all auto updates will also be disabled as they do contact fileflows.com which is a form of telemetry.
* Auto Update
  * When enabled, FileFlows will routinely check for updates from fileflows.com and automatically download and install any updates.
* Auto Update Plugins 
  * When enabled plugins will routinely be checked for updates, and if any updates are found will automatically be downloaded.
* Auto Update Nodes
  * When enabled external nodes will automatically update when FileFlows server updates.  Meaning you will only have to update the FileFlows server instance in a distributed environment.

---

### Advanced
* Plugin Repositories
  * A line separated list of plugin repository URLs to use when searching for plugins.
  * The order is important, if multiple repositories contain the same plugin, the first repository will be used as it's source.
  * The default repository will always be added to the end of this list

