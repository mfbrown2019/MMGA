fetch("../movies.json")
.then(function(response){
    return response.json();
}).then(function(products){


    title = window.location['pathname'];
    console.log(window.location)

    title = title.split("/");
    title = title[2].split(".");
    title = title[0];
    console.log(title)
    product = products[title];



    corefour = product['coreReviews'];
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
    public = product['userReviews'];
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



    document.querySelector("#movieTitleID").innerText = product['title'].toUpperCase();
    document.querySelector("#rating").innerText = corefourscore
    document.querySelector("#userrating").innerText = userRating

    trailer = document.querySelector("#trailer")
    trailerOut = ""
    trailerOut += `
        <iframe src="https://www.youtube.com/embed/${product['videos'][0]}" allowfullscreen ></iframe>
    `
    trailer.innerHTML = trailerOut;

    

    fullCast = ""
    let i = 0
    for (let person of product["cast"]) {
        if (i != product["cast"].length - 1){
            fullCast += person + " | "
        } else {
            fullCast += person
        }
        i = i + 1
    }

    info1 = document.querySelector("#info1")
    info1Out = ""
    info1Out += `
        <p><b>Duration:</b> ${product["duration"]}</p>
        <p><b>Release Date:</b> ${product["release-date"]}</p>
        <p><b>Rated:</b> ${product["rated"]}</p>
        <p><b>Description:</b> ${product["description"]}</p>
        <p><b>Staring: </b>${fullCast}</p>
        <p><b>Genre:</b> ${product["genre"]}</p>
    `
    info1.innerHTML = info1Out ;


    matt = document.querySelector("#matt")
    mattOut = ""
    mattOut += ` 
        <h3 class="name rating">Matt</h3>
        <p>${product["coreReviews"]["matt"]["why"]}</p>
    `
    matt.innerHTML = mattOut ;

    nick = document.querySelector("#nick")
    nickOut = ""
    nickOut += ` 
        <h3 class="name rating">nick</h3>
        <p>${product["coreReviews"]["nick"]["why"]}</p>
    `
    nick.innerHTML = nickOut ;

    brad = document.querySelector("#brad")
    bradOut = ""
    bradOut += ` 
        <h3 class="name rating">brad</h3>
        <p>${product["coreReviews"]["brad"]["why"]}</p>
    `
    brad.innerHTML = bradOut ;

    sherm = document.querySelector("#sherm")
    shermOut = ""
    shermOut += ` 
        <h3 class="name rating">sherm</h3>
        <p>${product["coreReviews"]["sherm"]["why"]}</p>
    `
    sherm.innerHTML = shermOut ;


    






})
