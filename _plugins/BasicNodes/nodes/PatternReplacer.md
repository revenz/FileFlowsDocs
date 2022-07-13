---
name: Filename Pattern Replacer
title: Filename Pattern Replacer
permalink: /plugins/basic-nodes/filename-pattern-replacer
layout: default
plugin: Basic Nodes
toc: true
---

{% include node.html input=1 outputs=2 icon="fas fa-exchange-alt" name="Filename Pattern Replacer" type="Process" %}

This node lets you make replacements in the filename.  

You can use regular expressions for the replacements, or simple string replacements.

---

## Fields

### Replacements
A list of replacements to make to the file.  These will be done in the order given.

### Use Working Filename
When checked, the replacements will be done against the working filename, otherwise they will be done on the original filename.

---

## Outputs
1. Replacement done
2. No replacement done