import fs from 'fs';
import config from './../config';
const mimes = config.mimes;


let walk = function(  pathResolve  ){

    let files = fs.readdirSync( pathResolve );

    let dirList = [], fileList = [];
    for( let i=0, len=files.length; i<len; i++ ) {
        let item = files[i];
        let itemArr = item.split("\.");

        let itemMime = ( itemArr.length > 1 ) ? itemArr[ itemArr.length - 1 ] : "undefined";

        if( typeof mimes[ itemMime ] === "undefined" ) {
            dirList.push( files[i] );
        } else {
            fileList.push( files[i] );
        }
    }
    

    let result = dirList.concat( fileList );

    return result;
};

export default walk;