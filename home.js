fetch("movies.json")
.then(function(response){
    return response.json();
}).then(function(products){
    let placeholder = document.querySelector("#movieCards");
    let out = "";
    let i = 0
    for (let product in products){
        // console.log(products[product]);
        obj = products[product];

        corefour = obj['coreReviews'];
        console.log(corefour);
        corefourscore = 0;
        coreReviewed = 0;

        if (corefour['matt']['rating'] != -1) {
            corefourscore = corefourscore + corefour['matt']['rating'];
            coreReviewed = coreReviewed + 1;
        }
        console.log(corefourscore)
        if (corefour['nick']['rating'] != -1) {
            corefourscore = corefourscore + corefour['nick']['rating'];
            coreReviewed = coreReviewed + 1;
        }
        console.log(corefourscore)
        if (corefour['brad']['rating'] != -1) {
            corefourscore = corefourscore + corefour['brad']['rating'];
            coreReviewed = coreReviewed + 1;
        }
        console.log(corefourscore)
        if (corefour['sherm']['rating'] != -1) {
            corefourscore = corefourscore + corefour['sherm']['rating'];
            coreReviewed = coreReviewed + 1;
        }
        if (corefourscore == 0) {
            corefourscore = "N/R"
        } else {
            corefourscore = (corefourscore / coreReviewed).toFixed(1);
        }

        userRating = 0;
        public = obj['userReviews'];
        console.log(public)

        for (let pub of public){
            console.log(pub)
            userRating = userRating + pub['rating'];
        }
        if (userRating == -1){
            userRating = "N/R"
        } else {
            userRating = (userRating / public.length).toFixed(1);
        }

        out += `
        <div class="card">
            <img src="${obj["img"]}">
            <div class="cardBody backgroundInfo">
                <h1>${obj["title"]}</h1>
                <p>${obj["description"]}</p>
                <div class="moreinfocenter">
                    <a href="${obj.page}">More Information</a>
                </div>
            </div>
            <div class="rating backgroundInfo">
                <h2>${corefourscore}</h2>
            </div>
            <div class="userrating backgroundInfo">
                <h2>${userRating}</h2>
            </div>
        </div>
        `
        i += 1;
    }
    placeholder.innerHTML = out;
})
