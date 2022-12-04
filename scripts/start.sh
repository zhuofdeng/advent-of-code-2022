#!/bin/bash

DAY=$1
esbuild ./src/day04/main.ts --bundle --platform=node | node
