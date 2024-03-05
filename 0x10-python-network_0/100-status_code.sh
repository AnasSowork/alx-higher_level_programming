#!/bin/bash
# This script sends a request to a URL passed as an argument and displays only the status code of the response
curl -s -I "$1" | grep -i "^HTTP" | awk '{print $2}'
