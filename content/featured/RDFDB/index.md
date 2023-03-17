---
date: '1'
title: 'RDF Database over Minibase'
cover: './rdf.png'
github: 'https://github.com/kaveri-s/RdfDB'
external: ''
tech:
  - Java
  - Minibase
  - Bash
---

A Resource Description Framework (RDF) built into Minibase. This RDF uses Quadruples having 4 fields instead of a generic tuple. Each field contains pointers to Strings called Labels. Labels are either an Entity or a Predicate. Entities are either a Subject or an Object. The database has 5 indices and 5 sorting options built in and the performance of each of these combinations is studied over various experiment sets and developing a formula based on the results obtained.
