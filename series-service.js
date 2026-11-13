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
