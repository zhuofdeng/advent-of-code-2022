#!/bin/bash

# DAY=$1
DAY='day13'
esbuild ./src/${DAY}/main.ts --bundle --platform=node | node
