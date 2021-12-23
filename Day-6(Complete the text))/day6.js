const source = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

fetch(source)
    .then(blob => blob.json())
    .then(data => cities.push(...data))


function findMatches(wordToFind, cities) {

    return cities.filter(place => {
        let word = new RegExp(wordToFind, 'gi')
        return place.city.match(word) || place.state.match(word)

    })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function display() {
    const match = findMatches(this.value, cities);

    const html = match.map(place => {

        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
        </li>
      `;
    }).join('');

    suggestions.innerHTML = html;
}
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestion');

searchInput.addEventListener('change', display)
searchInput.addEventListener('keyup', display)