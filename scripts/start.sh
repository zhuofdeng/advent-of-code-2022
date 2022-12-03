#!/bin/bash

DAY=$1
esbuild ./src/day03/main.ts --bundle --platform=node | node
