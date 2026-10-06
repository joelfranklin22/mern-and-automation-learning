// ---------- helper: page-la oru line add panna ----------
function show(containerId, label, value) {
  const row = document.createElement("div");
  row.className = "row";

  const b = document.createElement("b");
  b.textContent = label + ": ";

  const code = document.createElement("code");
  code.textContent = value;

  row.append(b, code);
  document.getElementById(containerId).appendChild(row);
}

// ---------- salt generate ----------
function generateSalt(rounds = 10) {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);

  show("saltOutput", "Random bytes (16)", Array.from(randomBytes).join(", "));

  const b64 = toBcryptBase64(randomBytes);
  show("saltOutput", "Bcrypt Base64 (22 chars)", b64);

  const fullSalt = `$2b$${rounds.toString().padStart(2, "0")}$${b64}`;
  show("saltOutput", "Final salt (version $2b$ + rounds + salt)", fullSalt);

  return fullSalt;
}

function toBcryptBase64(buffer) {
  const alphabet =
    "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";

  for (let i = 0; i < buffer.length; i += 3) {
    const b1 = buffer[i];
    const b2 = buffer[i + 1] || 0;
    const b3 = buffer[i + 2] || 0;

    result += alphabet[b1 >> 2];
    result += alphabet[((b1 & 0x03) << 4) | (b2 >> 4)];
    result += alphabet[((b2 & 0x0f) << 2) | (b3 >> 6)];
    result += alphabet[b3 & 0x3f];
  }

  return result.slice(0, 22);
}

// ---------- simple bcrypt-like demo ----------
async function simpleBcryptDemo(password, salt, rounds) {
  const iterations = Math.pow(2, rounds);

  let state = new TextEncoder().encode(password + salt);
  const startTime = Date.now();

  for (let i = 0; i < iterations; i++) {
    state = new Uint8Array(await crypto.subtle.digest("SHA-256", state));
  }

  const timeTaken = Date.now() - startTime;

  const hash = Array.from(state)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return { iterations, timeTaken, hash };
}

// ---------- main ----------
async function main() {
  // eppavum fresh-a start aaga clear pannurom
  document.getElementById("saltOutput").innerHTML = "";
  document.getElementById("hashOutput").innerHTML = "";

  const password = document.getElementById("password").value;
  show("saltOutput", "Password", password);

  const salt = generateSalt(10);

  for (const rounds of [10, 12, 14]) {
    const sectionTitle = document.createElement("div");
    sectionTitle.className = "section";
    sectionTitle.innerHTML = `<b>--- ${rounds} rounds ---</b>`;
    document.getElementById("hashOutput").appendChild(sectionTitle);

    show("hashOutput", "Calculating", "please wait...");

    const { iterations, timeTaken, hash } = await simpleBcryptDemo(
      password,
      salt,
      rounds,
    );

    show("hashOutput", "Total iterations", iterations);
    show("hashOutput", "Time taken", timeTaken + " ms");
    show("hashOutput", "Hash", hash);
  }
}

document.getElementById("runBtn").addEventListener("click", main);
main(); // page load aanavudane auto-run
