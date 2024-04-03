const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams:', myURL.searchParams);

myURL.searchParams.getAll('category');
myURL.searchParams.get('limit');
myURL.searchParams.has('page');
