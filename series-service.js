//A1
export const getEpisodeTitle = (show, seasonIndex, episodeIndex) => {
    return show.seasons[seasonIndex].episodes[episodeIndex].title ;
};

//A2
export const getLastSeasonNumber = (show) => {
    if (show.seasons.length === 0){
        return 0;
    }
    return show.seasons[show.seasons.length -1].number;
};

//A3
export const getNextSeasonYear = (show) => {
    if (show.nextSeason){
        return show.nextSeason.year;
    }
    return "No announcement"
};

//B1
export const getById = (series, id) => {
    return series.find(show => show.id === id);
};

//B2
export const getSeasonsCount = (series) => {
    return series.map(show =>({ title: show.title , seasons: show.seasons.length}));
};

//B3
export const hasTopEpisode = (show, minRating) => {
    return show.seasons.some(season => season.episodes.some(episode => episode.rating >= minRating)
    );
};

//B4
export const getCreatorsFrom = (series, country) => {
    return series.filter(show => show.creator.country === country).map(show => show.creator.name);
};

//B5
export const sortByStartYear = (series) => {
    return [...series].sort((a, b) => a.startYear - b.startYear)
};