var os = require('os');
var path = require('path');
var fs = require('fs');
var moment = require('moment');
var serviceName = require('../config/config').config.name;

var getLogPath = function(){
    var msFilesPath;
    var msFilesBasePath = 'msdata';
    var winHomeDir = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];

    if (os.platform() == 'win32') {
        msFilesPath = winHomeDir + '\\Documents\\' + msFilesBasePath + '\\' + serviceName + '\\';
    } else if (os.platform() == 'linux') {
        msFilesPath = '/' + msFilesBasePath + '/' + serviceName + '/';
    } else if (os.platform() == 'darwin') {
        msFilesPath = '/' + msFilesBasePath + '/' + serviceName + '/';
    }
    
    var logsFolder = path.join(msFilesPath, 'logs');
    return logsFolder;
}

var writeLog = async function(data, result = 'none', additional = 'none'){
    if (!data) {console.log('Ошибка неверный параметр!!!'); throw err}
    var per = '\n';
    if (os.platform() == 'win32') {per = '\r\n'}
    var logPath = getLogPath();
    var dataToLog = {};
    dataToLog.time = moment().format();
      
    dataToLog.details = data;
    dataToLog.result = result;
    dataToLog.additional = additional;
    dataToLog = JSON.stringify(dataToLog)
    console.log(dataToLog)

    var stream = fs.createWriteStream(`${logPath}//${serviceName}-${moment().format('DD.MM.YYYY')}.txt`, {flags:'a'});

    stream.write('--------------' + per)
    stream.write(dataToLog + per)
}

module.exports.writeLog = writeLog;
