//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // grab date input and store in variable
  const dateInput = document.querySelector('input').value
  const iframe = document.querySelector('iframe')
  const img = document.querySelector('img')

  // url plus API key query plus date key query (we got this info from reading the docs)
  const url = `https://api.nasa.gov/planetary/apod?api_key=P2RU8xk0cfoUnP4BAxiAzVfjjIJOX7PcnNsIrt0O&date=${dateInput}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.table(data);

        // if the media type is an img
        if (data.media_type === 'image') {
          
          // if the img is hidden, unhide it
          if (img.classList.contains('hidden')) img.classList.remove('hidden');

          // if the iframe is not hidden, hide it
          if (!iframe.classList.contains('hidden')) iframe.classList.add('hidden')
          
          // insert the image into the DOM
          img.src = data.hdurl;
        
        // if the media type is a video 
        } else if (data.media_type === 'video') {
          
          // if the iframe is hidden, unhide it
          if (iframe.classList.contains('hidden')) iframe.classList.remove('hidden');

          // if the img is not hidden, hide it
          if (!img.classList.contains('hidden')) img.classList.add('hidden')
          
          // insert video into DOM
          iframe.src = data.url;
        } /* else if (data.hdurl.slice(-3) === 'gif') {
          // what to do if you get a gif ending of the url
        } */

        // insert the title in the DOM
        document.querySelector('h2').innerText = data.title;

        // insert the explanation into the DOM
        document.querySelector('h3').innerText = data.explanation;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

