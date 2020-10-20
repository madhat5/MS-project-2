// console.log('sim sim salabim');
"use strict"

const { workers } = require('cluster');
const   fs = require('fs'),
        request = require('request'),
        dotenv = require('dotenv');

// Data model
var dataModel = [{
    id: 'string',
    title: 'string',
    topic: 'string',
    year: 1920,
    objectType: 'string'
}];

// GET DATA ====================================================

// API key
dotenv.config();
const API_KEY = process.env.SMITH_KEY;
const API_URL = 'https://api.si.edu/openaccess/api/v1.0/search'
// const searchTerm = `Frederick Douglass AND unit_code:"NMAAHC"`
// const searchTerm = `Frederick Douglass AND unit_code:"NMAH"`
// const searchTerm = `Frederick Douglass AND unit_code:"NPG"`
// const searchTerm = `Frederick Douglass AND unit_code:"NPM"`
// const searchTerm = `Frederick Douglass AND unit_code:"SIA"`
// const searchTerm = `Frederick Douglass AND unit_code:"SIL"`

// const searchTerm = [
//     `Frederick Douglass AND unit_code:"NMAAHC"`,
//     `Frederick Douglass AND unit_code:"NMAH"`,
//     `Frederick Douglass AND unit_code:"NPG"`,
//     `Frederick Douglass AND unit_code:"NPM"`,
//     `Frederick Douglass AND unit_code:"SIA"`,
//     `Frederick Douglass AND unit_code:"SIL"`
// ]

const searchTerm = [{
        searchQuery: `Frederick Douglass AND unit_code:"NMAAHC"`,
        unitCode: "NMAAHC" 
    },
    {
        searchQuery: `Frederick Douglass AND unit_code:"NMAH"`,
        unitCode: "NMAH"
    },
    {
        searchQuery: `Frederick Douglass AND unit_code:"NPG"`,
        unitCode: "NPG"
    },
    {
        searchQuery: `Frederick Douglass AND unit_code:"NPM"`,
        unitCode: "NPM"
    },
    {
        searchQuery: `Frederick Douglass AND unit_code:"SIA"`,
        unitCode: "SIA"
    },
    {
        searchQuery: `Frederick Douglass AND unit_code:"SIL"`,
        unitCode: "SIL"
    }
]

// "possible title: finding Frederick Douglass at the Simthsonian"
// presentation format
// primary level/layer:his immediate life
// portraits/art/sculptures
// documents/writings
// add timeline
// secondary level/layer:his influence on america
// secondary works

// inspirations
// - http://inspacewetrust.org/en/
// - https://guernica.museoreinasofia.es/cronologia/en/
// - http://www.evolutionoftheweb.com/

let dataRows = 500;

// array that we will write into
let dataArray = [];

function dataSearch() {

    searchTerm.forEach((el, i) => {
        // console.log(el)

        let apiRequest = API_URL + "?api_key=" + API_KEY + "&q=" + el.searchQuery + '&rows=' + dataRows;

        request(apiRequest, (err, res, body) => {
            if (err) {
                throw err;
            }
            // console.log(res.body)

            let apiData = JSON.parse(res.body);
            // dataArray.push('dataSearch' + i, apiData);
            // dataArray.push(el.unitCode, apiData);
            dataArray.push(apiData);
            // data confirm =================
            // console.log(dataArray);
            // console.log(dataArray.length);
            // console.log(dataArray[1].response);
            // data details =================
            // console.log(dataArray[1].response.rows[0]);
            // console.log(dataArray[1].response.rows[0].content.freetext.notes);
            if (dataArray.length == 6) {
                // writeFile =================
                writeFile('data', dataArray)
            }

        });
    })
}

function writeFile(fsName, fsData) {
    fs.writeFileSync('data/' + fsName + '.json', JSON.stringify(fsData));
    console.log('*** *** *** *** ***');
    console.log('writeFile complete for', fsName);
};

dataSearch();