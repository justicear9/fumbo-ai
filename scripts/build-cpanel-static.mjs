import { rename, cp, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";

const root = process.cwd();
const apiDir = path.join(root, "src/app/api");
const apiBackup = path.join(root, ".cpanel-api-bak");

async function restoreApi() {
  if (existsSync(apiBackup) && !existsSync(apiDir)) {
    await rename(apiBackup, apiDir);
  }
}

if (existsSync(apiDir)) {
  await rename(apiDir, apiBackup);
}

try {
  const env = {
    ...process.env,
    NEXT_OUTPUT: "export",
    NEXT_PUBLIC_CONTACT_ENDPOINT: "/contact.php",
  };
  const result = spawnSync("npx", ["next", "build"], {
    cwd: root,
    env,
    stdio: "inherit",
    shell: process.platform === "win32",
  });
  if (result.status !== 0) {
    throw new Error(`next build failed with status ${result.status ?? 1}`);
  }

  const outDir = path.join(root, "out");
  await mkdir(outDir, { recursive: true });
  await cp(path.join(root, "cpanel/contact.php"), path.join(outDir, "contact.php"));
  await cp(path.join(root, "cpanel/.htaccess"), path.join(outDir, ".htaccess"));
  await cp(
    path.join(root, "cpanel/contact.config.example.php"),
    path.join(outDir, "contact.config.example.php"),
  );
  console.log("\nStatic cPanel build is in /out. Upload those files to public_html.");
  console.log("Then copy contact.config.example.php → contact.config.php and add SMTP details.");
} finally {
  await restoreApi();
}
