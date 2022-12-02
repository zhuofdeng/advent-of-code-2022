#!/bin/bash

DAY=$1
esbuild ./src/day02/main.ts --bundle --platform=node | node
