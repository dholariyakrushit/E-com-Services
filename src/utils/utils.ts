import CryptoJS from "crypto-js";
const SECRET_KEY = "mysecretkey";

// Encrypt password and return password
export function encrypass(password: string) {
  const encry = CryptoJS.AES.encrypt(password, SECRET_KEY).toString();
  return encry;
}

// Decrypts password and return password
export function decrydata(password: string) {
  const decryPass = CryptoJS.AES.decrypt(password, SECRET_KEY).toString(
    CryptoJS.enc.Utf8
  );
  return decryPass;
}
