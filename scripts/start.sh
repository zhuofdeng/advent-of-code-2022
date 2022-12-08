#!/bin/bash

# DAY=$1
DAY='day07'
esbuild ./src/${DAY}/main.ts --bundle --platform=node | node
