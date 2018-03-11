const ctrlModule = ((data, ui) => {
    //MAIN PAGE
    const init = () => {
        const {
            baseUrl
        } = data.apiShowMovie;
        fetchMovie(baseUrl)
    }
    //AJAX fetch main page
    const fetchMovie = (inputUrl) => {
        $.get(inputUrl)
            .done(sucessGetData)
            .fail(errorGetData)
    }
    //Sucess
    const sucessGetData = (response) => {
     
        const newListOfShows = data.makeShows(response);//DATA
        uiModule.displayShows(newListOfShows)//UI

        //SEARCH
        $(ui.searchByInput).on("keyup", () => {
            if (ui.searchByInput().length > 3) {
                //AJAX fetch for search
                const fetchSearchMovie = (inputUrl) => {
                    $.get(inputUrl)
                        .done(sucessSingleGetData)
                        .fail(errorGetData)
                }
                const sucessSingleGetData = (response) => {
                    const makeSearchInfo = data.makeSearchInfo(response);//DATA
                    console.log(makeSearchInfo.searchList);
                    
                    const makeSearchInfoJson = JSON.stringify(makeSearchInfo);
                    localStorage.setItem("searchShow", makeSearchInfoJson);
                    ui.displaySearchShows()//UI
                }
                const search = ui.searchByInput()//UI
                
                //Start fetch Ajax after 3 input
                fetchSearchMovie(search)
            }
        })


        //SINGLE PAGE
        const $showName = $('.title');
        $showName.on('click', (e) => {
            e.preventDefault()
            const $self = $(e.currentTarget).attr('data-id');
            const {baseUrl} = data.apiShowMovie;

            const fetchsingleMovie = (inputUrl) => {
                $.get(inputUrl)
                    .done(sucessSingleGetData)
                    .fail(errorGetData)
            }
            const sucessSingleGetData = (response) => {
                const { name , image, summary } = response
                const makeSingleShow = data.makeSingleShow(name, image.medium, summary);//DATA
                const makeSingleShowJson = JSON.stringify(makeSingleShow);
                localStorage.setItem("selectedShow", makeSingleShowJson);
                uiModule.displaySingleShows(makeSingleShow)//UI
            }
           
                //If clicked on title start fetch for single page
                fetchsingleMovie(` ${baseUrl}/${$self}`)
           
        })

    }

    //Error
    const errorGetData = (error) => {
        console.log(error);


    }
    //Exspose Init to outher world.
    return {
        init,
        sucessGetData,




    }

})(dataModule, uiModule)









































































// ((data, ui) => {

//     $(() => {

//         $.get(ui.genericSearchURL)
//             .done(response => {
//                 const topShows = response.filter(element => parseFloat(element.rating.average) > 8.3).slice(0, 50);
//                 ui.createHomePage(topShows);

//                 $(ui.selectors.card).on("click", function () {
//                     const singleSearchUrl = ui.generateURL(this.id);

//                     createShowPageOnSelect(singleSearchUrl);
//                 });
//             })
//             .fail(() => { ui.error(); });

//         $(ui.selectors.searchInput).on("keyup", () => {

//             let currentValueSearch = ui.searchByValueURL();

//             $.get(currentValueSearch)
//                 .done(response => {
//                     ui.createDropDownList(response);

//                     $(".dropdown li").on("click", function (e) {
//                         e.stopPropagation();

//                         const singleSearchUrl = ui.generateURL(this.id);

//                         createShowPageOnSelect(singleSearchUrl);
//                     })

//                     $(ui.selectors.searchInput).on("blur", () => {
//                         setTimeout(() => {
//                             $(".dropdown").css("display", "none");
//                         }, 150);
//                     })
//                 })
//                 .fail(() => { ui.error(); });
//         })


//         const createShowPageOnSelect = (singleSearchUrl) => {
//             $.get(singleSearchUrl)
//                 .done(({ id, name, image, _embedded, summary }) => {
//                     let show = data.createShow(id, name, image.medium, _embedded.seasons, _embedded.cast, summary);
//                     ui.createShowPage(show);
//                 })
//                 .fail(() => { ui.error(); });

//             ui.createShowPage(this.id);
//         }
//     })

// })(dataModule, uiModule);