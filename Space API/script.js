const apiKey = "DEMOKEY";
const url = `https://science.nasa.gov/wp-json/wp/v2/apod-basic/?api_key=${apiKey}`;

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data[0].url);
    document.getElementById("apod-title").innerHTML = data[0].title;
    document.getElementById("apod-description").innerHTML = data[0].explanation;
    document.getElementById("apod-date").innerHTML = data[0].date;
    document.getElementById("media-container").innerHTML =
      `<img src="${data[0].hdurl}" alt="${data[0].title}">`;
  
  });