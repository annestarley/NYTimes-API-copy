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
  $('#articles-search').empty()

  for (let i = 0; i < length; i++) {
    console.log(results[i].web_url)
    let titleH3 = $('<h3>').addClass('card-title').html(`<a href="${results[i].web_url}"><span class="number">${i+1}</span> ${results[i].headline.main}</a>`)
    let subtitleH4 = $('<h4>').addClass('card-subtitle mb-2 text-muted').text(`By ${results[i].source}`)
    let cardBody = $("<div>").addClass('card-body results')
    let card = $('<div>').addClass('card')
    let subCard = $('<div>').addClass('card-body sub-card')
    subCard.append(titleH3)
    subCard.append(subtitleH4)
    card.append(subCard)
    cardBody.append(card)
    $('#articles-search').append(cardBody)



  }
}
