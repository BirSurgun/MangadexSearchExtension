var searchManga = document.querySelectorAll(".manga-entry");
var count2 = 0;
//var mangaId = document.querySelectorAll(".manga-entry")[0].getAttribute("data-id");
//var text = document.getElementsByClassName("ml-1 manga_title text-truncate")[0];

for(var i = 0; i < searchManga.length; i++) {

    var count = 0;
    const request = new XMLHttpRequest();

    var mangaId = document.querySelectorAll(".manga-entry")[i].getAttribute("data-id");
    var text = document.getElementsByClassName("ml-1 manga_title text-truncate");

    const url = 'https://mangadex.org/api/manga/' + mangaId;

    request.open('GET', url, false);
    request.onreadystatechange = function(i, count) {
        console.log(this.readyState);
        
        if (this.readyState == 4 && this.status == 200)  {
            var data = JSON.parse(this.response);
            var totalChapters = Object.keys(data.chapter).length;

            for(var j = 0; j < totalChapters; j++) {
                var objection = data.chapter[Object.keys(data.chapter)[j]];

                console.log(count2);
                if(objection.lang_code == "gb"){
                    count++;
                }                
            }
        }
    }
    text[i].innerHTML = "Total number of chapters ares " + count; 
    if(count2++ == 150){
        break
    }
    request.send(null);
}