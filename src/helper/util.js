
const moment = require('moment');
const blend = require('@mapbox/blend');
const { writeFile } = require('fs');
let { join } = require('path');
const { v4: uuidv4 } = require("uuid");
const constant = require('../config/constant');

const util = {

    getUUID() {
        return uuidv4();
    },
    changeObjKey(obj, targetKey, newKey) {
        obj[newKey] = obj[targetKey]
        delete obj[targetKey]
        return obj;
    },
    formatTime (time) {
        return moment(time&&time).format('YYYY-MM-DD HH:mm:ss');
    },
    getSearchParams(params) {
        return new URLSearchParams(params).toString();
    },
    mergeImages(firstImage, secondImage, width, height) {

        return new Promise((resolve, reject) => {
            blend([
                { buffer: Buffer.from(firstImage, 'binary'), x: 0, y: 0 },
                { buffer: Buffer.from(secondImage, 'binary'), x: Number(width), y: 0 }
            ], {
                    width: Number(width) * 2,
                    height: Number(height),
                    format: 'jpeg',
                }, (err, data) => {
                    const fileOut = join(process.cwd(), `/cat-card.jpg`);

                    writeFile(fileOut, data, 'binary', (error) => {
                        error ? reject(error) : resolve({ imgUrl: fileOut });
                    })

                });
        });
    },       

}

module.exports = util;

