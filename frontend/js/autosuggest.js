//https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8
var API_URL="https://autosuggest-backend.onrender.com/api/autosuggest"
var searchBar=document.getElementById("search-input");
var searchSuggestion=document.getElementById("suggestions");

searchBar.addEventListener("input", function(){
    //get the data the user has typed
    // Make an API request to fetch suggestions based on the query
    //Append all the search suggestions to div tag in UI
    var query=searchBar.value.trim();
    //console.log(query);
    fetchSuggestions(query);

})

function fetchSuggestions(query){
    var fullAPI=API_URL+"?q="+"&weighted=true&algorithm=trie&limit=8"
    fetch(fullAPI)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        showSuggestions(data);
        //console.log(data);
        //return;
    })
    .catch(function(err){
        console.log("Error:",+err);
    })
}

function showSuggestions(data){
    var values=data.results;
    if(data.count==0){
        searchSuggestions.innerHTML="<div> No Matching results found </div>"
    }
    else{
        for(var i=0;i<values.length();i++){
            //<span> text</span>
            htmlString+="<div><span class='suggestion-item'>"+values[i].text+"</span><span class='item-weight'>"+values[i].weight+"</span></div>";
        }
        searchSuggestions.innerHTML=htmlString;
    }
}