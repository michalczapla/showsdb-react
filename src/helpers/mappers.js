// MAPOWANIE SERIALU - dane szczegółowe
export const mapShow = show => {
    // SPECYFICZNE WŁAŚCIWOŚCI:
    // numer najniższego sezonu:
    const minSeasonNo = () => {
        if (show.seasons.length!==0) {
            return show.seasons[0].season_number;
        } else {
            return 1;
        }
    };
    // numer najwyższego sezonu
    const maxSeasonNo = () => {
        if (show.seasons.length!==0) {
            return show.seasons[show.seasons.length-1].season_number;
        } else {
            return 0;
        }
    };

    const acceptedShow = {
        backdrop_path: show.backdrop_path,
        episode_run_time: show.episode_run_time,
        first_air_date: show.first_air_date,
        genres: show.genres,
        id: show.id,
        in_production: show.in_production,
        languages: show.languages,
        last_air_date: show.last_air_date,
        name: show.name,
        networks: show.networks,
        number_of_episodes: show.number_of_episodes,
        number_of_seasons: show.number_of_seasons,
        origin_country: show.origin_country,
        original_language: show.original_language,
        original_name: show.original_name,
        overview: show.overview,
        poster_path: show.poster_path,
        production_companies: show.production_companies,
        seasons: show.seasons,
        vote_average: show.vote_average,
        vote_count: show.vote_count,

        //PONIŻEJ SPECYFICZNE WŁAŚCIWOŚCI:
        // numer najniższego sezonu:
        min_season_no: minSeasonNo(),
        max_season_no: maxSeasonNo()
    }

    return acceptedShow;
};

//MAPOWANIE LISTY ODCINKÓW SEZONU
export const mapSeason = (season) => {
    if (season) {
        const acceptesShowsArray = [];
        for (let show of season) {
            acceptesShowsArray.push(mapSeasonShow(show));
        }
        return acceptesShowsArray;
    }
};


// MAPOWANIE ODCINKA DLA SEZONU
const mapSeasonShow = (show) => {

    const acceptedShow = {
        air_date: new Date(show.air_date),
        crew: show.crew,
        episode_number: show.episode_number,
        guest_stars: show.guest_stars,
        id: show.id,
        name: show.name,
        overview: show.overview,
        production_code: show.production_code,
        season_number: show.season_number,
        show_id: show.show_id,
        still_path: show.still_path,
        vote_average: show.vote_average,
        vote_count: show.vote_count

    };

    return acceptedShow;
};

