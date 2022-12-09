#!/bin/bash

# DAY=$1
DAY='day08'
esbuild ./src/${DAY}/main.ts --bundle --platform=node | node
