const getTokenPayload = (req) => {
    const authorization = req['headers']['Authorization'] || req['headers']['authorization'];
    const token = authorization.split(' ')[1];
    return jwt.decode(token);
}