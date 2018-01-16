# npm-list-problems-cli

## Introduction

Check if a directory has certain `npm` dependency errors. These errors can be seen when running [the `npm list` command](https://docs.npmjs.com/cli/ls) in a directory. However, it does not seem like there's a way to return a non-zero exit code for a subset of the different error types.

Filtering certain type of errors could lead to the ability to fail builds where certain `npm` dependency errors indicate that there are inconsistencies between the `package.json` and `package-lock.json` files.

## Installation

`npm install npm-list-problems-cli -g`

## Usage

### `npmlistproblems [--types] [--path]`

* There are `6` types of errors to filter by:
  1. `EXTRANEOUS_DEPENDENCY`
  1. `MISSING_DEPENDENCY`
  1. `MISSING_PEER_DEPENDENCY`
  1. `UNMET_PEER_DEPENDENCY`
  1. `INVALID_DEPENDENCY`
  1. `DEPENDENCY_ERROR`
* If no error types are specified, all `6` errors are used for filtering
* If no `path` is specified, the current directory is examined
* If error types are specified, they should be `|` separated
* If a `path` is specified, it should be the relative path for another directory
* `npmlistproblems --types="EXTRANEOUS_DEPENDENCY|MISSING_DEPENDENCY" --path="../some/other/directory`
  * Find all extraneous and missing dependency errors for `../some/other/directory`
