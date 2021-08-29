# Cataas

## About the project
This API service is facilitate user to download randomly generated image with custom text.
Downloaded image is splited into two sections and each section contain randomly generated cats from external API.Application get image text,color and size as a user input for generate the image.Generated image will save in to project root folder.

## Getting started
Follow bellow steps on CLI before getting start
1) Run `git clone git@github.com:YasiruDev/cat-service.git` for clone project
2) Run `cd cat-service`
4) Run `npm install` for install packages

## Generate cats image
User need to run **specific command (npm script) with custom texts (command line arguments)** for generate the image

###### Custom text parameters
- greeting
- who
- width
- height
- color
- size

## Run Application
Follow bellow script on CLI to run this Application 
1) Run `npm run cat-start -- {arg}`

**Sample script**

> npm run cat-start -- --greeting=Hi --who=you --width=400 --height=500 --color=Pink --size=100
