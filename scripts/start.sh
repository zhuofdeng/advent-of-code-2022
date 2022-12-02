#!/bin/bash

DAY=$1
esbuild ./src/day01/main.ts --bundle --platform=node | node
