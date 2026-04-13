import explorerData from '../data/explorer.json';

export const getPlaces = async () => {
    // Mimic async fetch
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(explorerData);
        }, 100);
    });
}

export const getPlaceNames = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const places = explorerData.map(placeDetail => placeDetail.city);
            resolve(places);
        }, 100);
    });
}

export const getPlaceDetail = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const detail = explorerData.find(item => item.id.toLowerCase() === id.toLowerCase());
            resolve(detail);
        }, 100);
    });
}

