#!/usr/bin/env bash

# stand up a mongo instance
docker run --name school-management_dev \
    -p 27017:27017 \
    -d mongo:6.0.1
