module.exports = {
  "*.{js,jsx,ts,tsx,json,css,md}": (files) => {
    const filtered = files.filter((f) => !f.startsWith("src/components/ui/"));
    if (filtered.length === 0) {
      return ["echo 'No files to format with Biome'"];
    }
    // Run Biome only on files not ignored by our Biome config
    return [`biome check --write --unsafe ${filtered.join(" ")}`];
  },
};
