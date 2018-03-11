const uiModule = (($) => {
    const $data = $('.data');
    //Show Main page
    const displayShows = (newListOfShows) => {//CTRL
        $data.children().remove()
        newListOfShows.forEach(showSingle => {
            const $showSingle = createShow(showSingle);
            $data.append($showSingle)

        })
    }
    //Show single page
    const displaySingleShows = (makeSingleShowJson) => {//CTRL
        const $showSingle = createSingleShow(makeSingleShowJson);
        $data.children().remove()
        $data.append($showSingle)


    }
    //Show search
    const displaySearchShows = () =>{//CTRL   
       $search = $('.search');
       const li = createSearch();
       $search.append(li);  
    }
    //Create main
    const createShow = (showSingle) => {
        const {
            id,
            image,
            name
        } = showSingle;

        return $(
            `<div class="col-4">
            <div class="card" >
                <img class="card-img-top" src="${image}" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text text-center">
                        <a href="" class="title" data-id="${id}">${name}</a>
                    </p>
                </div>
            </div>
        </div>`
        )
    }
    //Create single page
    const createSingleShow = () => {
        makeSingleShow = localStorage.getItem("selectedShow");
        const makeSingleShowJson = JSON.parse(makeSingleShow);
       
        return $(
            `<div class="col-8 offset-2">
            <div class="card" >
                <img class="card-img-top" src="${makeSingleShowJson.img}" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text text-center">
                       <h1>${makeSingleShowJson.name}</h1>
                       <p>${makeSingleShowJson.summary}</p>
                </div>
                <button class="btn btn-primary" onclick="ctrlModule.init()">Back to List</button>
            </div>
        </div>`
        )

    }
    
    const searchByInput = () => {//CTRL  
        let searchInput = $('input').val();
        return `http://api.tvmaze.com/search/shows?q=${searchInput}`;

    };

       //Create search
    const createSearch = () =>{
        makeSearchInfo= localStorage.getItem("searchShow");
        const makeSearchInfoJson = JSON.parse(makeSearchInfo);
       
            let $ul = "";
            const ul = $('.show');
            ul.children().remove();
            makeSearchInfoJson.forEach((element) => {
                ul.append(`<li id="${element.name}">${element.id}</li>`);
                $ul = ul;
            })    
            return $ul;
 
    }
        return {
            displayShows,
            displaySingleShows,
            searchByInput,
            displaySearchShows
        }

})(jQuery)





















































// const uiModule = (() => {

//     const selectors = {
//         searchInput: ".search-input",
//         card: ".card",
//         row: ".row",
//     }

//     const genericSearchURL = `http://api.tvmaze.com/shows`;

//     const generateSingleSearchURL = showID => `http://api.tvmaze.com/shows/${showID}?embed[]=seasons&embed[]=cast`;

//     const searchByValueURL = () => {

//         let searchValue = $(selectors.searchInput).val();

//         return `http://api.tvmaze.com/search/shows?q=${searchValue}`;
//     };

//     const error = () => {
//         alert("something went wrong");
//     }

//     const createHomePage = listOfShows => {
//         listOfShows.forEach(({ name, image, id }) => {
//             $(".row").append(`
//             <div class="col-lg-4 col-sm-6 portfolio-item">
//                 <div class="card h-100" id="${id}">
//                     <img class="card-img-top" src=${image.medium} alt="${name}">
//                     <div class="card-body">
//                         <h4 class="card-title">${name}</h4>
//                     </div>
//                 </div>
//             </div>
//           `);
//         });
//     }

//     const createShowPage = ({ seasons, name, posterURL, details, cast }) => {
//         $(selectors.row).children().remove();

//         $("h1").text(name).css("text-align", "center");

//         let seasonsList = seasons.map(season => `<li>${season.getInfo()}</li>`).join("");
//         let castList = cast.map(actor => `<li>${actor.name}</li>`).join("");

//         $(selectors.row).append(`
//             <img src=${posterURL} class="col-sm-6">
//             <div class="row col-sm-6">
//                 <h2 class="col-sm-12">Seasons (${seasons.length})</h2>
//                 <ul class="col">
//                     ${seasonsList}
//                 </ul>
//                 <h2 class="col-sm-12">Cast:</h2>
//                 <ul class="col">
//                     ${castList}
//                 </ul>
//             </div>
//             <div col>
//                 <h2 col>Show Details</h2>
//                 ${details}
//             </div>
//         `)
//     }

//     const createDropDownList = searchResults => {
//         let listOfShows = searchResults.map(({ show }) => `<li id="${show.id}">${show.name}</li>`).join("");
//         $(".dropdown ul").children().remove();
//         $(".dropdown").css("display", "block");
//         $(".dropdown ul").append(listOfShows);
//     }


//     return {
//         selectors,
//         genericSearchURL,
//         generateURL: generateSingleSearchURL,
//         searchByValueURL,
//         error,
//         createHomePage,
//         createShowPage,
//         createDropDownList,
//     }
// })();