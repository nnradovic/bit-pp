const dataModule = (() => {

    const apiShowMovie = {
        baseUrl: `http://api.tvmaze.com/shows`,

    }

    class Show {
        constructor(id, image, name, rating) {
            this.id = id;
            this.image = image;
            this.name = name;
            this.rating = rating;
        }

    }
    class SelectedShow {
        constructor( name, img,summary) {
            this.name = name;
            this.summary = summary;
            this.img = img;
        }
    }

    class SearchInfo {
        constructor(name, id) {
            this.name = name;
            this.id = id;
        }
    }
    const makeShows = (response) => {
        return response.map((oneShow) => {
            const { id, image, name, rating } = oneShow;
            const show = new Show(id, image.medium, name, rating.average);
            return show
        })
    }

    const makeSingleShow = ( name, image, summary) => {
        return  new SelectedShow( name, image, summary);
       
    }
    const makeSearchInfo = (search) => {

        let searchList = [];
        search.forEach((element) => {
            searchList.push(new SearchInfo(element.show.id, element.show.name));
        })
        return searchList;
    }


    return {
        apiShowMovie,
        makeShows,
        makeSingleShow,
        makeSearchInfo

    }

})()




























































// const dataModule = (() => {

//     const createSeason = (startDate, endDate) => new Season(startDate, endDate);

//     const actor = (name, surname) => new Actor(name, surname);

//     const createShow = (id, name, posterURL, listOfSeasons, listOfActors, details) => {

//         let seasonsList = listOfSeasons.map(season => new Season(season.premiereDate, season.endDate));
//         let actorsList = listOfActors.map(actor => new Actor(actor.person.name));

//         return new Show(id, name, posterURL, seasonsList, actorsList, details);
//     }

//     return {
//         createShow,
//     }
// })();