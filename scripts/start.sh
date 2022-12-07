#!/bin/bash

DAY=$1
esbuild ./src/day06/main.ts --bundle --platform=node | node
