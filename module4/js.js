'use strict'

const tvSeriesName = prompt('Enter the name of the TV series.')

async function tvSeries() {

    const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${tvSeriesName}`)
    const responseJSON = await response.json()

    console.log(responseJSON)

    const name = responseJSON['name']
    const image = responseJSON['image']['medium']
    const genres = responseJSON['genres']
    const summary = responseJSON['summary']
    const linkToDetails = responseJSON['url']

    document.getElementById('seriesName').innerText = name
    document.getElementById('seriesImg').src = image
    document.getElementById('genre').innerText = `Genre: ${genres[0]} | ${genres[1]} | ${genres[2]}`
    document.getElementById('summary').innerHTML = summary
    document.getElementById('url').href = linkToDetails
}

if (tvSeriesName === "" || tvSeriesName === null) {
    document.querySelector('#noName').innerHTML = 'No result'
}
else {
    tvSeries()
}
