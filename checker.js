const axios = require('axios');
const { version: currentVersion } = require('./package.json');
const log = require("./index")

async function checkForUpdates() {
    const response = await axios.get(`https://registry.npmjs.org/nyx-rockstar-status`);
    const latestVersion = response.data['dist-tags'].latest;

    if (latestVersion !== currentVersion) {
        console.log(`[nyx-rockstar-status] Update available ${currentVersion} → ${latestVersion}`);
    }
}


module.exports = checkForUpdates;