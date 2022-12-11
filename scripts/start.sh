#!/bin/bash

# DAY=$1
DAY='day10'
esbuild ./src/${DAY}/main.ts --bundle --platform=node | node
