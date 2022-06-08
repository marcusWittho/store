require('dotenv').config();
const crypto = require('crypto');

module.exports = {
  encrypt(password) {
    const iv = Buffer.from(crypto.randomBytes(16));
    const cipher = crypto.createCipheriv(
      'aes-256-cbc',
      Buffer.from(process.env.CRYPTO_SECRET),
      iv,
    );

    const encryptedPass = Buffer.concat([
      cipher.update(password),
      cipher.final(),
    ]);

    return {
      iv: iv.toString('hex'),
      password: encryptedPass.toString('hex'),
    };
  },

  decrypt(encryptedData) {
    const decipher = crypto.createDecipheriv(
      'aes-256-cbc',
      Buffer.from(process.env.CRYPTO_SECRET),
      Buffer.from(encryptedData.iv, 'hex'),
    );

    const decryptedPass = Buffer.concat([
      decipher.update(Buffer.from(encryptedData.password), 'hex'),
      decipher.final(),
    ]);

    return decryptedPass.toString();
  },
};
