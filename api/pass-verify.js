const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$3dmAkBr6bSsqKWup1zDpC.ZD7U7SnYFh3ER8EyqN4PR6.ImhMgdYy';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
