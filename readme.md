# rockstar-api-status

**nyx-rockstar-status** is a simple module for Node.js that allows you to easily check the status of Rockstar Games services. It retrieves and formats the status of services such as **Red Dead Online**, **Grand Theft Auto Online**, and the **Rockstar Games Launcher**, providing users with clear and legible output, along with timestamps for last updates.

## Features
- **Service Status**: Fetch the current status of various Rockstar services (up, down, maintenance).
- **Formatted Output**: Display status in a user-friendly format for easy reading.
- **Timestamps**: Each status check includes the last update time for accurate tracking.

## Installation
To install **nyx-rockstar-status**, use npm (Node Package Manager). Run the following command in your terminal:

```
npm install nyx-rockstar-status
```

# How to Use
Here's how to use nyx-rockstar-status in your project:

```js
const { getRockstarStatus, formatStatus } = require('rockstar-api-status');

(async () => {
    try {
        const status = await getRockstarStatus();

        console.log("Rockstar Services Status:");
        console.log("=======================================");

        console.log("Red Dead Online:", formatStatus(status.redDedOnline));
        console.log("Grand Theft Auto Online:", formatStatus(status.gtao));
        console.log("Social Club:", formatStatus(status.socialClub));
        console.log("Rockstar Games Launcher:", formatStatus(status.launcher));
        console.log("Last Updated:", status.lastUpdate);
    } catch (err) {
        console.error("Error retrieving statuses:", err);
    }
})();
```

# Contributions
Contributions are welcome! If you'd like to improve the module, don’t hesitate to submit a pull request.