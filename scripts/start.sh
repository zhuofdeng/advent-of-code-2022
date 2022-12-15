#!/bin/bash

# DAY=$1
DAY='day14'
esbuild ./src/${DAY}/main.ts --bundle --platform=node | node
