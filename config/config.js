
var config = {
    name             : 'ms-test',
    version          : 1,
    port             : 1003,
    host             : '0.0.0.0'
};

var serv_url = {
    url                 : 'http://185.102.73.61:8081/TestPFService/api/v20/', //any url
    service             : 'service',
    token               : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjQzIiwiVHlwZSI6IkFnZW50IiwiQWdlbnRJZCI6IjI5IiwibmJmIjoxNjQ1MDg5ODE4LCJleHAiOjE5NjA2MjE2NzgsImlhdCI6MTY0NTA4OTgxOCwiaXNzIjoiUGF5TmV0IiwiYXVkIjoiQ3liZXJpYVNvZnQifQ.WGa96lY5DlAS5jaQ9Sl0Xhkmu-SReUtm1Rfl5OxSK5s'
}

var secret = {
    jwt        : 'verysecretstringforjwt'
}

module.exports.config = config;
module.exports.serv_url = serv_url;
module.exports.secret = secret;