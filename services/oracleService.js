const { doConnect } = require('../dbdrivers/oracle');
const oracledb = require('oracledb');
const catchAsync = require('../utils/catchAsync')
var logger = require('../utils/logger').writeLog;

const getTestData = catchAsync(async (req, res) => {
    let body = req.body.id;
    console.log(req.sequence);
    logger(body)
    try {
        const proc_name = process.env.test_proc;
        const proc = `begin ${proc_name}(:p_org_name, :r_err_code); end;`;
        const params = {
            p_org_name: body,
            r_err_code: {dir: oracledb.BIND_OUT, type: oracledb.STRING, maxSize: 200}
        };
  
        const result = await doConnect(proc, params);
        console.log(`Результат выполнения функции createDocs: ${JSON.stringify(result)}`);
        
        res.send(result);
  
    } catch (err) {

        res.send(err);
    }
  });


  module.exports = {
    getTestData
  }