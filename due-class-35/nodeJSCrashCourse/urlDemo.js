import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// URL Object with URL constructor
const urlObj = new URL(urlString);

// format - takes object and turns back into string
console.log(url.format(urlObj));

// import.meta.url - special variable that provides some metadata about current module. not part of url module itself. gives you file URL
console.log(import.meta.url);

// fileURLToPath() - convert it to a regular path
console.log(url.fileURLToPath(import.meta.url));

// get search/query params
console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
console.log(params.get('q'));

// can add onto params
params.append('limit', '5');

// can delete params
params.delete('limit');
console.log(params);