const { execSync } = require("child_process");
const fs = require("fs-extra");
const path = require("path");
 
// Define paths
const nextDir = path.join(__dirname, ".next");
const rootDir = __dirname;
const tempDir = path.join(rootDir, "standalone-temp");
const standaloneDir = path.join(nextDir, "standalone");
const staticDir = path.join(nextDir, "static");
const publicDir = path.join(rootDir, "public");
const standaloneRootDir = path.join(rootDir, "standalone");
 
// Run npm build
try {
  console.log("Running npm run build...");
  execSync("npm run build", { stdio: "inherit" });
 
  // Ensure temporary directory exists
  fs.ensureDirSync(tempDir);
  fs.ensureDirSync(path.join(tempDir, ".next", "static"));
  fs.ensureDirSync(path.join(tempDir, "public"));
 
  // Copy standalone folder from .next to temporary directory
  console.log("Copying standalone folder to temporary directory...");
  fs.copySync(standaloneDir, tempDir, { overwrite: true });
 
  // Copy static folder from .next to temporary directory/.next
  console.log("Copying static folder to temporary directory...");
  fs.copySync(staticDir, path.join(tempDir, ".next", "static"), {
    overwrite: true,
  });
 
  // Copy public folder from root to temporary directory
  console.log("Copying public folder to temporary directory...");
  fs.copySync(publicDir, path.join(tempDir, "public"), { overwrite: true });
 
  // Replace existing standalone directory with new files
  console.log("Replacing existing standalone folder with new files...");
  fs.copySync(tempDir, standaloneRootDir, { overwrite: true });
 
  // Clean up temporary directory
  fs.removeSync(tempDir);
 
  // // Restart PM2 process
  // console.log("Restarting PM2 process...");
  execSync('pm2 restart ecosystem.config.js', { stdio: "inherit" });
 
  console.log("Deployment completed successfully!");
} catch (error) {
  console.error("An error occurred during deployment:", error.message);
  process.exit(1);
}
 
