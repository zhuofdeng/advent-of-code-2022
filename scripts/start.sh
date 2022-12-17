#!/bin/bash

# DAY=$1
DAY='day15'
esbuild ./src/${DAY}/main.ts --bundle --platform=node | node
