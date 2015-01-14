#!/usr/bin/env node

'use strict';

var format = require('string-template');
var fs = require('fs');

var packageJSON = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
if (!packageJSON) return console.error('must be in npm module directory');

var template = fs.readFileSync(__dirname + '/template.txt', 'utf8');
var info = {
    name: packageJSON.name,
    license: packageJSON.license,
    description: packageJSON.description
};

var newTemplate = format(template, info);
console.log(newTemplate);
