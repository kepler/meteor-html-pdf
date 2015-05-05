# kepler:html-pdf

This is a fork of jgdovin:html-pdf, a Meteor wrapper for the NPM html-pdf.

## Windows support

This package seems not to work consistently on Windows because of node.js issues.
* http://stackoverflow.com/questions/24356803/cant-write-to-a-spawned-child-processs-stdin-on-windows
* May be also: http://stackoverflow.com/questions/14532725/error-running-example-code-in-a-serialized-loop

Other cause of issues might be wrapAsync:
* https://github.com/meteor/meteor/issues/2774
* http://stackoverflow.com/a/29602309/36195

## Installation

```
    meteor add kepler:html-pdf
```

## Warning
Currently the items under usage do not fully work, I have a work around for these for now as I continue to investigate issues with passing buffers between server and client

For now you may call from the client:
```
Meteor.pdf.save('<h1>My Cool Pdf</h1>', 'myFileName');
```

this will process your pdf and automatically save the file to the client in a pdf file format.

## Usage

Either call asynchronous calls from the html-pdf library with the defined pdf variable. See the library here: https://www.npmjs.com/package/html-pdf

Additional methods have been added to wrap these in a synchronous way to receive the data back to the browser

To receive a buffer:
```
var html = '<h1>My cool html</h1>';
Meteor.pdf.buffer(html, function(result) {
    console.log(result);
  });
```

To receive a stream:
```
var html = '<h1>My cool html</h1>';
Meteor.pdf.stream(html, function(result) {
    console.log(result);
  });
```

You may also pass in a blaze template with the following:
```
 var html = Blaze.toHTML(Blaze.With(template.data, function () {
      return Template.QuotePrint;
    }));
```