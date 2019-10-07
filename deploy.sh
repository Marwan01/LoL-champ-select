git add .
git commit -m "deploy script"
git push

ng build --prod

#/bin/bash
#upload files

aws s3 cp ./dist/ChampSelect s3://lol-champ-select --recursive --acl public-read