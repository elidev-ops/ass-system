import { createCipher } from 'crypto';

const DATA_CRIPTO = {
  algorithm: 'aes256',
  secret: '5d0132b07a3986953ef94d9afd8d970b',
  type: 'hex' as BufferEncoding
}

export default function cryptPassword(password: string) {
  const cypher = createCipher(DATA_CRIPTO.algorithm, DATA_CRIPTO.secret);
  cypher.update(password);
  return cypher.final(DATA_CRIPTO.type);
}