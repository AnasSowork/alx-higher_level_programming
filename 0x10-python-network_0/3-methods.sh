#!/bin/bash
# This script takes a URL as an argument and displays all HTTP methods the server will accept
curl -sI -X OPTIONS "$1" | grep -i Allow | awk -F ': ' '{print $2}'
