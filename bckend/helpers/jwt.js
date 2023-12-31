const expressJwt = require('express-jwt');

function authJwt() {
   // const secret = process.env.secret;
    //const secret = 'secret';
    return expressJwt({
        secret:'secret',
        algorithms: ['HS256']
        //isRevoked: isRevoked
    }).unless({
        path: [
           // { url: /\/public\/uploads(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/v1\/student(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/v1\/student(.*)/, methods: ['POST', 'OPTIONS'] },
            { url: /\/api\/v1\/student(.*)/, methods: ['PUT', 'OPTIONS'] },
            { url: /\/api\/v1\/student(.*)/, methods: ['DELETE', 'OPTIONS'] },

           // { url: /\/api\/v1\/categories(.*)/, methods: ['GET', 'OPTIONS'] },
          //  { url: /\/api\/v1\/orders(.*)/, methods: ['POST', 'OPTIONS'] },
          '/api/v1/user/login',
          '/api/v1/user/register'
           // `${api}/users/login`,
           // `${api}/users/register`
        ]
    });
}

// async function isRevoked(req, payload, done) {
//     console.log(req.url);
//     console.log(req.method);
//     if (payload.isAdmin) {
//         done();
//     } else if (req.url.include('orders')) {
//     }

//     done(null, true);
// }

module.exports = authJwt;
