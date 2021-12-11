#!/bin/bash
set -x

# Test Bucket
awslocal s3 mb s3://test-bucket

set +x
