#!/bin/bash

# DAY=$1
DAY='day11'
esbuild ./src/${DAY}/main.ts --bundle --platform=node | node
