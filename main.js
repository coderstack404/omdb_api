let kinobox = document.querySelector(".kino-box")
function search_func() {
    let input = document.querySelector("input")
    fetch(`https://www.omdbapi.com/?s=${input.value}&apikey=787478be`)
    .then(res => res.json())
    .then(kinolar => {
        let barchaKino = kinolar.Search
        kinobox.innerHTML = ""
        kinobox.style.display = "flex";
        kinobox.style.flexWrap = "wrap";
        try {
            barchaKino.forEach(kino => {
                let div = document.createElement("div")
                div.setAttribute("class", "kino")
                div.innerHTML = `
                <div class="card m-3" style="width: 18rem;">
                <img class="card-img-top" src="${kino.Poster}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${kino.Title}</h5>
                        <p class="card-text">${kino.Year}</p>
                        <a href="#" class="btn btn-primary">Ko'proq ma'lumot</a>
                    </div>
                </div>
                `
                kinobox.appendChild(div)
            })
        } catch (e) {
            alert("Kino topilmadi!!!")
        }
        ;
    })
}
