#!/bin/bash

# Check if URL argument is provided
if [ -z "$1" ]; then
    echo "Usage: $0 URL"
    exit 1
fi

# Send request to URL and get the size of the response body
size=$(curl -sI "$1" | grep -i Content-Length | awk '{print $2}')

# Check if size is empty
if [ -z "$size" ]; then
    # If Content-Length header is not present, retrieve the size of the response body directly
    size=$(curl -s "$1" | wc -c)
fi

# Check if size is empty again
if [ -z "$size" ]; then
    echo "Error: Unable to retrieve size of response body"
    exit 1
fi

echo "$size"
