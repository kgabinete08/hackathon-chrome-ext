// fetch('https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202442047&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys').then(res => {
//   res.json().then(data=> {
//     const condition = document.getElementById('condition');
//     condition.innerHTML = `${data.query.results.channel.item.condition.text}`;

//     const temp = document.getElementById('temp');
//     temp.innerHTML = `${data.query.results.channel.item.condition.temp}`;
//   });
// }).catch(err => {
//   console.error(err.message);
// });

fetch('https://api.chucknorris.io/jokes/random').then(res => {
  res.json().then(data => {
    const quotes = document.getElementById('quotes');
    quotes.innerHTML = `${data.value}`;
  });
}).catch(err => {

});
