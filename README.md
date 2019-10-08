# LoL-champ-select

Simple mobile friendly Angular app designed for League of Legends players to use during champion selection. It allows you to pick a champion, and to quickly get who counters them, according to the most updated champion data on the web.

![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

[try it here.](http://lol-champ-select.s3-website-us-east-1.amazonaws.com/)


## What It Looks Like

![](/src/assets/media/usage.gif)

## How It Works

In order to achieve great speed, the rendering of the champions counter data is done using a json file called `data.json` that is located within the project assets. However, we keep our data up to date by continuously running a python script that scrapes https://lolcounter.com/ for new counter data. Here is how this is automated using AWS

### Lambda Design

![Screenshot](/src/assets/media/aws.png)

### Explanation

lol-scrapy is an [AWS Lambda](https://aws.amazon.com/lambda/) that executes a python script (you can find it in this repo as scrapy.py) that does the scraping of the website for data. This Lambda connect with the lol-champ-select [AWS S3](https://aws.amazon.com/s3/) Bucket that hosts the production build of our Angular app, which allows the Lambda to directly update the `data.json` file used to display our champion counter data. In order to give you the most updated version of counter data (in case a new champion is out, the votes change, etc...), we use [AWS CloudWatch](https://aws.amazon.com/cloudwatch/) Events to trigger this Lambda every 1 day.

## Run Locally 

Clone this Repository <br>`git clone https://github.com/Marwan01/LoL-champ-select.git` <br>
Go to the cloned Repo `cd LoL-champ-select` <br>
Install Dependencies `npm install` <br>
Run `npm start` <br>
On your browser, go to `http://localhost:4200` 

## Build & Deploy

Run `sh deploy.sh` to execute the deploy script which commits and pushes your changes to Github, creates a production build, and uploads the result to your S3 bucket.

## Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running e2e Tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Tools Used

* Angular 8: Simple and fast front-end framework.
* Python: Counter data was fetched from https://lolcounter.com/champions using `scrapy.py`.
* AWS: S3, Lambda, CloudWatch to allow the hosting of the app, and the updating of the data.


 **ScreenShots**

 ### LoLchampselect 

![Screenshot](/src/assets/media/app.png)

### Lolcounter

![Screenshot](/src/assets/media/lolcounter.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.
