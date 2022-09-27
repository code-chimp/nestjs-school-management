#!/usr/bin/env pwsh

# stand up a mongo instance
docker run --name school-management_dev `
  -p 27017:27017 `
  -e 'MONGO_INITDB_ROOT_USERNAME=root' `
  -e 'MONGO_INITDB_ROOT_PASSWORD=P@ssw0rd' `
  -d mongo:6.0.1
