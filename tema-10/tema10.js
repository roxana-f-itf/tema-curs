let images = {

    data: {
        allCrewImages: []
    },

    renderAllCrewImages: function() {
        let imagesSection = document.querySelector('.imageContent > .si-image')

        for (let i = 0; i < images.data.allCrewImages.length; i++) {
           
            let imgDiv = document.createElement('div');
            let imageItem = document.createElement('img');
            let membersImg = images.data.allCrewImages[i].image;
           
            let membersName = images.data.allCrewImages[i].name;
            
            imageItem.setAttribute('src', membersImg);
            imageItem.setAttribute('alt', membersName);
           
            imageItem.style.height = '300px';
            imageItem.style.width = '300px';
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
        
            images.data.allCrewImages = response.data;
            images.renderAllCrewImages();
            console.log(response);
    })
            .catch(function (error) {
            console.log(error);
        })
    ;

}
}

images.init();

