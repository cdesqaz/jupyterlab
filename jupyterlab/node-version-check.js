#!/usr/bin/env node
var pkg = require('./static/package.json');

function parser(part) {
  return parseInt(part, 10);
}

var engine = pkg.engines.node.replace('>=', '');
var eparts = engine.split('.').map(parser);

var version = process.version.replace('v', '');
var vparts = version.split('.').map(parser);

if (vparts[0] < eparts[0] || vparts[1] < eparts[1]) {
  process.exit(1);
}
