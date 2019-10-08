# LoL-champ-select

Clean and easy to use Angular application for League of Legends players that allows you to pick a champion from an auto-complete field and quickly get the counters for that champion. Mobile friendly with auto-updated data.

## How This Works:
In order to achieve great speed, the rendering of the champions counter data is done using a json file called `data.json` within the project assets. However, we keep our data up to date by continuously running a python script that scrapes https://lolcounter.com/ for new counter data. Here is how this is automated using AWS

### Lambda Design

![Screenshot](/src/assets/aws.png)

### Explanation

lol-scrapy is an [AWS Lambda](https://aws.amazon.com/lambda/) that executes a python script (you can find it in this repo as scrapy.py) that does the scraping of the website for data. This Lambda connect with the lol-champ-select [AWS s3](https://aws.amazon.com/s3/) bucket that hosts the production build of our Angular app, which allows the lambda to directly update the `data.json` file used for displaying our champion counter data. In order to give you the most updated version of counter data (in case a new champion is out or the votes change), we use [AWS CloudWatch](https://aws.amazon.com/cloudwatch/) Events to trigger this Lambda every 1 day.

## Run Locally 

Clone this Repository `git clone https://github.com/Marwan01/LoL-champ-select.git`
Go to the cloned Repo `cd LoL-champ-select`
Install Dependencies `npm install`
Run `npm start`
On your browser, go to `http:localhost:4200`

## Build & Deploy

Run `sh deploy.sh` to execute the deploy script which commits and pushes your changes to Github, create a production build and upload the result of it to your s3 bucket.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Tools used:

Angular: Simple and fast front end using Angular 8
Python: Counter data was fetched from https://lolcounter.com/champions using `scrapy.py`.
AWS: S3, Labda, CloudWatch to allow the hosting of the app and the updating of the data.

 <strong>Screenshot:</strong>
 <br>
 ### LoL-champ-select 

![Screenshot](/src/assets/app.png)

### lolcounter.com 

![Screenshot](/src/assets/lolcounter.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.
