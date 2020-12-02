console.log("this is my index js file");

let source = 'coronavirus';
let apiKey = 'c72785daa12b418a908091dbd2839490';


//grab the news container
let newsAccordian = document.getElementById('newsAccordian');

//get the url ready

//create an ajax get request
// const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://inshortsapi.vercel.app/news?category=world`, true);


// // //what to do when response is ready
// xhr.onload = function () {
//     if (true) {

//         let json = JSON.parse(this.responseText);
//         console.log(json)
//     }
//     else {
//         console.log("Some error occured")
//     }
// }

// xhr.send()


const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        let json = JSON.parse(this.responseText);
        let articles = json.value;
        //console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element) {
        console.log(element);
        let news = `<div class="card" id="newsAccordian" style="background-color: white">
        <div class="row no-gutters align-items-center" >
            <div class="col-sm-12" >
                <div class="card-body">
                    <h2>${element.title}</h2>
                    <h5 class="card-title" style="color: green"> ${element.datePublished} </h5>
                    <h5 class="card-title" style="color: black">Provider: <a href="${element.url}" >${element.provider.name}</a></h5>

                    <p class="card-text">
                    ${element.body}
                    </p>
                </div>
            </div>
            

        </div>
        </div>`;
        
        newsHtml+=news;
        });
        newsAccordian.innerHTML = newsHtml;
    }
});

xhr.open("GET", "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?pageSize=18&q=coronavirus%20india&autoCorrect=true&pageNumber=2&toPublishedDate=null&fromPublishedDate=null");
xhr.setRequestHeader("x-rapidapi-key", "87def5d2bfmsh303c312c7723ff5p195d03jsn06c7be40b969");
xhr.setRequestHeader("x-rapidapi-host", "contextualwebsearch-websearch-v1.p.rapidapi.com");

xhr.send(data);









    