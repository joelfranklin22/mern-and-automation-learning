function generateSalt(rounds = 10) {
  const randomBytes = new Uint8Array(16);

  crypto.getRandomValues(randomBytes);
  console.log("crypto", crypto.getRandomValues(randomBytes));

  const b64 = toBcryptBase64(randomBytes);
  console.log("b64", b64);

  return `$2b$${rounds.toString().padStart(2, "0")}$${b64}`;
}

function toBcryptBase64(buffer) {
  const alphabet =
    "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  console.log("buffer", buffer);

  let result = "";

  for (let i = 0; i < buffer.length; i += 3) {
    const b1 = buffer[i];
    const b2 = buffer[i + 1] || 0;
    const b3 = buffer[i + 2] || 0;
    console.log(b1, b2, b3);

    console.log(result);
    result += alphabet[b1 >> 2];
    console.log(result);
    result += alphabet[((b1 & 0x03) << 4) | (b2 >> 4)];
    console.log(result);
    result += alphabet[((b2 & 0x0f) << 2) | (b3 >> 6)];
    console.log(result);
    result += alphabet[b3 & 0x3f];
    console.log(result);
  }

  return result.slice(0, 22);
}

const salt = generateSalt(10);

console.log(salt);

document.getElementById("number").innerHTML = salt;

// async function simpleBcryptDemo(password, salt, rounds) {
//     const iterations = Math.pow(2, rounds);

//     console.log(`Total iterations: ${iterations}`);

//     // password + salt combine
//     let state = new TextEncoder().encode(password + salt);

//     const startTime = Date.now();

//     // Simplified simulation
//     for (let i = 0; i < iterations; i++) {
//         state = new Uint8Array(
//             await crypto.subtle.digest("SHA-256", state)
//         );
//     }

//     const endTime = Date.now();

//     console.log(`Time taken: ${endTime - startTime}ms`);

//     // Uint8Array → hexadecimal
//     const result = Array.from(state)
//         .map(byte => byte.toString(16).padStart(2, "0"))
//         .join("");

//     return result;
// }

// async function main() {

//     const password = "mySecretPassword";

//     const salt = "K8hN3pQrJmZxVw9tFbLcOe";

//     console.log("--- 10 rounds ---");
//     console.log(await simpleBcryptDemo(password, salt, 10));

//     console.log("--- 12 rounds ---");
//     console.log(await simpleBcryptDemo(password, salt, 12));

//     console.log("--- 14 rounds ---");
//     console.log(await simpleBcryptDemo(password, salt, 14));
// }

// main();
