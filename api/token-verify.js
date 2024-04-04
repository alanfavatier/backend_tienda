const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcxMjE3MjIzN30.FzGhvu8O8GCTfXcX10HTZNa5eyGzHyugbi9ssm2X0rM';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);

console.log(payload);
