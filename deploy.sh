#/bin/bash
#upload files
aws s3 cp ./dist s3://cloud.lol-champ-select.com --recursive --acl public-read