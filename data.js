
const fetchData = async () => {
    try {
        const response = await fetch('https://support.rockstargames.com/services/status.json');
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        throw error;
    }
};

module.exports = fetchData;