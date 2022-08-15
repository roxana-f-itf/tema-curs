let images = {

    data: {
        allCrewImages: []
    },

    renderAllCrewImages: function() {
        // we get the parent for all the images
        let imagesSection = document.querySelector('.imageContent > .si-image')

        for (let i = 0; i < images.data.allCrewImages.length; i++) {
            // create new divs, to act as a parents for each image element
            let imgDiv = document.createElement('div');
            // create new image elements (at each for step) - this can be done with document.createElement
            let imageItem = document.createElement('img');
            // don;t forget to use .appendChild function, to put the img in the new divs and the new div in the 'imagesSection' element
            let membersImg = images.data.allCrewImages[i].image;
            // instead of putting the image source (.image property) in the innerHTML,
            let membersName = images.data.allCrewImages[i].name;
            
            imageItem.setAttribute('src', membersImg);
            imageItem.setAttribute('alt', membersName);
            // make sure to put it in the 'src' HTML attribute
            // use .setAttribute('src', images.data.allCrewImages[i].image)
            // we did this in the project code
            imageItem.style.height = '100px';
            imageItem.style.width = '100px';
            imageItem.style.objectFit = 'scale-down';
            imageItem.style.alignItems = "center";


            imgDiv.appendChild(imageItem);
            imagesSection.appendChild(imgDiv);
        }
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

