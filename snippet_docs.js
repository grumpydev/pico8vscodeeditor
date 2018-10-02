const fs = require('fs');
const path = require('path');

var output = "";

fs.readdirSync('./snippets/').forEach(file => {
    var contents = JSON.parse(fs.readFileSync('./snippets/'+file, 'utf8'));

    var sectionName = path.basename(file, ".json");

    output += "### " + sectionName + "\n";

    var values = Object.values(contents);

    values.forEach(snip => {
        output += "* " + snip.prefix + " : " + snip.description + "\n";
    });

});

console.log(output);
