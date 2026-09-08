const fs = require('fs');

fs.readFile('student.txt', 'utf-8', (err, data) => {

    if (err) {
        console.log("Error in reading file:", err);
        return;
    }

    console.log("File data:", data);
    console.log("File read successfully");

});

