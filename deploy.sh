git add .
git commit -m "deploy script"
git push

ng build --prod

#/bin/bash
#upload files
aws s3 cp ./dist/ChampSelect s3://league-counter.com --recursive --acl public-read
aws s3 cp ./dist/ChampSelect s3://lol-champ-select --recursive --acl public-read