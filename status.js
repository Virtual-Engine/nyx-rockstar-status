
const getStatuses = (data, serviceName, platforms) => {
    const result = [];
    
    data.statuses.forEach(status => {
        if (status.name === serviceName) {
            if (status.services_platforms && status.status_tag) {
                result.push({
                    platform: status.services_platforms,
                    status: status.status_tag
                });
            } else {
                console.warn(`Données manquantes pour ${serviceName}`);
            }
        }
    });

    return result;
};

module.exports = getStatuses;