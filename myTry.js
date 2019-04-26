var length = 1;
let search = "top news"

$('form').on('submit', function(event) {
  event.preventDefault()
  length = $('select').val()
  search = $('#searchTerm').val()
  searchResults(search)
})

function searchResults(search) {
  let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=DinKr5hAldR8hYndk0jjGyzfg7p7yAnx&max=5`

  $.ajax({
    url:  queryURL,
    method: "GET"
  }).then(function(response) {
    let data = response.response.docs;
    console.log(data)
    generateResults(length, data)
  })
}

function generateResults(length, results) {
  for (let i = 0; i < length; i++) {
    console.log(results[i].headline.main)
    console.log(results[i].source)
    console.log(results[i].web_url)
    let cardBody = $("<div>").addClass('card-body results').append($('<div>').addClass('card').append($('<div>').addClass('card-body sub-card')))
    
  }
}
