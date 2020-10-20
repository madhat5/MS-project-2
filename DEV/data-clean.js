// console.log('sim sim salabim');
"use strict"

const fs = require('fs');

// Data model
var dataModel = [{
    id: 'string',
    unitCode: 'string',
    title: 'string',
    topic: 'string',
    objectType: 'string',
    description: 'string',
    year: 1920,
}];

// CLEAN DATA ====================================================

let json = require('./data/data.json');
// console.log(json)
// console.log(json[1])
// console.log(json[1].response.rows)
// let dataObj = json[1].response.rows;
// console.log(dataObj.length);

// clean data
let cleanData = [];

json.forEach((el, i) => {
    // console.log(el)
    // console.log(el.response.rows)
    // console.log(i)

    let dataObj = el.response.rows;
    // console.log(dataObj.length);


    // if (i == 1) { // data check
    dataObj.forEach((el, i) => {
        // console.log(el.id);

        cleanData.push({
            id: el.id,
            unitCode: el.unitCode,
            museumSource: el.content.descriptiveNonRepeating.data_source,
            title: el.title,
            topic: el.content.indexedStructured.topic,
            objectType: el.content.indexedStructured.object_type,
            // year: el.content.indexedStructured.date,
            year: function () {
                    var dateArr = [];
                    var indexStruct = el.content.indexedStructured;
                    if(indexStruct.hasOwnProperty("date")){
                        indexStruct.date.forEach((el, i) => {
                            var newDate = el.replace('s', '')
                            dateArr.push(+newDate)
                        })
                    }

                    dateArr.sort()

                    return dateArr;
            }(),
            notes: el.content.freetext.notes,
            recordLink: el.content.descriptiveNonRepeating.record_link,
            guid: el.content.descriptiveNonRepeating.guid
        });
    });
});

function writeFile(fsName, fsData) {
    fs.writeFileSync('data/' + fsName + '.json', JSON.stringify(fsData));
    console.log('*** *** *** *** ***');
    console.log('writeFile complete for', fsName);
};

// console.log(cleanData.length)
writeFile('cleanData', cleanData);