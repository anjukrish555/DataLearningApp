#!/bin/bash

# This script is used to validate application 
ipaddr= http://ec2-18-218-222-63.us-east-2.compute.amazonaws.com:5000
listencount=$(netstat -an | grep 5000 | grep LISTEN | wc -l)
if [ "$listencount" -lt 1 ]; then
    exit 1
else
    exit 0
fi
