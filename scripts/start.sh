#!/bin/bash

# DAY=$1
DAY='day12'
esbuild ./src/${DAY}/main.ts --bundle --platform=node | node
