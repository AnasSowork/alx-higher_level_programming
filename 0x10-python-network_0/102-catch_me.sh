#!/bin/bash
# This script makes a request to 0.0.0.0:5000/catch_me causing the server to respond with a message containing "You got me!" in the body of the response
curl -s -X PUT 0.0.0.0:5000/catch_me -d "user_id=98" -H "Origin: HolbertonSchool" >/dev/null 2>&1
