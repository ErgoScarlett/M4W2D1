const apiKey = 'IuoIO4YKek5H3l2hyIghmbzU1jDBRFisBhsU68IGSSYT4wev8QkIZdlf';
    
const getDogs = () => {
    fetch(`https://api.pexels.com/v1/search?query=dog`, {
        headers: {
            Authorization: apiKey
            }
            })
            .then(response => response.json())
            .then(data => {
                let html = '';
                data.photos.forEach(photo => {
                    html += `
                    <div class="col-4 mb-4">
                    <div class="card">
                    <img class="fixed-size" src="${photo.src.medium}">
                    </div>
                    </div>`;
                    });

                    document.getElementById('photos').innerHTML = html;
                    })
                    .catch(err => {console.error(err);})
                    }

document.getElementById('getDogs').addEventListener('click', getDogs);


const getCats = () => {
    fetch(`https://api.pexels.com/v1/search?query=cat`, {
        headers: {
            Authorization: apiKey
            }
            })
            .then(response => response.json())
            .then(data => {
                let html = '';
                data.photos.forEach(photo => {
                    html += `
                    <div class="col-4 mb-4">
                    <div class="card">
                    <img class="fixed-size" src="${photo.src.medium}">
                    </div>
                    </div>`;
                    });

                    document.getElementById('photos').innerHTML = html;
                    })
                    .catch(err => {console.error(err);})
                    }

document.getElementById('getCats').addEventListener('click', getCats);