#!/bin/bash

# DAY=$1
DAY='day09'
esbuild ./src/${DAY}/main.ts --bundle --platform=node | node
