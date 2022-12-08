#!/bin/bash

DAY=$1
esbuild ./src/day07/main.ts --bundle --platform=node | node
