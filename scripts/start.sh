#!/bin/bash

DAY=$1
esbuild ./src/day05/main.ts --bundle --platform=node | node
