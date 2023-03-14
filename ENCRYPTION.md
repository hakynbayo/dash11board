# DATA ENCRYPTION

Use [Cipher](https://www.npmjs.com/package/@ibnlanre/cipher) or [CryptoJS](https://www.npmjs.com/package/crypto-js) to encrypt and decrypt your data. 
Otherwise, use the code snippet attached. You may find below its usage guidelines.

---

```js
// IMPORT

import Manager from "./lib/encryption.js";

const manager = new Manager({ 
  key: process.env.KEY, 
  vector: process.env.VECTOR
});
```

---

```js
// USAGE

function handleSubmit({ params }) {
  const form_data = { otp: params.otp };
  manager.encrypt(form_data); // impure encryption

  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  // headers.set("Authorization", `Bearer ${
  //   sessionStorage.getItem("user.auth.token") ?? context.user?.token
  // }`);

  fetch(url, {
    method: "POST",
    body: JSON.stringify(form_data),
    headers
  })
    .then((response) => response.json())
    .then((response) => {
      manager.decrypt(response) // impure decryption
      console.log(response) // something intelligible
    });
}
```