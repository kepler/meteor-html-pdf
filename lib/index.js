if (Meteor.isClient) {
    Meteor.pdf = {
        buffer: function (html, cb) {
            Meteor.call('pdfBuffer', html, function (err, result) {
                if (err || !result) {
                    cb && cb(err);
                    return;
                }
                cb && cb(null, result);
            });
        },
        stream: function (html, cb) {
            Meteor.call('pdfStream', html, function (err, result) {
                if (err || !result) {
                    cb && cb(err);
                    return;
                }
                cb && cb(null, result);
            });
        },
        save: function (html, filename) {
            var result = Meteor.call('pdfCollection', html);
            var item = PdfCollection.findOne({_id: result});
            var blob = new Blob([item.pdf], {type: 'application/pdf'});
            saveAs(blob, filename);
            PdfCollection.remove({_id: result});
        }
    };
}

PdfCollection = new Mongo.Collection('htmlPdfCollection');
