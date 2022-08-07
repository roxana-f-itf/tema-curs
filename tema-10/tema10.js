let images = {

    data: {
        allCrewImages: []
    },

    renderAllCrewImages: function() {
        let imagesSection = document.querySelector('.imageContent.si-image')

        imagesSection.innerHTML += window.data.allCrewImages.image;
    },
    init: function() {
        axios
            .get('https://api.spacexdata.com/v4/crew')
            .then(function (response) {
            // handle success
            images.data.allCrewImages = response.data;
            images.renderAllCrewImages();
            console.log(response);
    })
            .catch(function (error) {
            // handle error
            console.log(error);
        })
    ;

}
}

images.init();