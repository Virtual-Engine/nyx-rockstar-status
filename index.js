const fetchData = require('./data');
const getStatuses = require('./status');
const checkForUpdates = require('./checker')

const MAX_RETRIES = 3;

const fetchWithRetry = async (retries = MAX_RETRIES) => {
    try {
        return await fetchData();
    } catch (err) {
        if (retries === 0) throw new Error(`Toutes les tentatives échouées : ${err.message}`);
        console.warn(`Erreur de connexion réseau, réessai... (${MAX_RETRIES - retries + 1})`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return fetchWithRetry(retries - 1);
    }
};

function formatStatus(serviceStatus) {
    return serviceStatus.map(service => ({
        platform: service.platform.map(p => p.name).join(', '),
        status: service.status
    }));
}

const getRockstarStatus = async () => {
    checkForUpdates();
    const data = await fetchWithRetry();

    const redDedOnline = getStatuses(data, 'Red Dead Online', ['PC', 'Xbox One', 'PS4', 'Stadia', 'Xbox Cloud Gaming']);
    const gtao = getStatuses(data, 'Grand Theft Auto Online', ['PC', 'PS4', 'Xbox One', 'Xbox Cloud Gaming']);
    const socialClub = getStatuses(data, 'Social Club', ['All Features']);
    const launcher = getStatuses(data, 'Rockstar Games Launcher', ['Authentication', 'Store', 'Cloud Services', 'Downloads']);

    return {
        redDedOnline,
        gtao,
        socialClub,
        launcher,
        lastUpdate: data.updated
    };
};

module.exports = { getRockstarStatus, formatStatus };
