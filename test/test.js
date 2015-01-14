'use strict';

var childProcess = require('child_process');
var fs = require('fs');
var test = require('tape');

test('mock equals output', function (t) {
    t.plan(1);
    var testCommand = 'cd ../ &&' + './cmd.js > test/test_output.md';

    childProcess.exec(testCommand, function (err, stdin, stdout) {
        if (err) return console.error(err);
        var mock = fs.readFileSync(__dirname + '/mock.md', 'utf8') + '\n';
        var output = fs.readFileSync(__dirname + '/test_output.md', 'utf8');
        t.ok(mock === output, 'mock === output');
        t.end();
    });
});
