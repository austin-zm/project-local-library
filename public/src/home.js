function totalBooksCount(books) {
  // basic counter
  let counter = 0;
  for (let i = 0; i < books.length; i++){
    counter += 1;
  }
  return counter;
}

function totalAccountsCount(accounts) {
  //basic counter
    let counter = 0;
  for (let i = 0; i < accounts.length; i++){
    counter += 1;
  }
  return counter;
}

function booksBorrowedCount(books) {
  //basic counter 
  let counter = 0;
  for (let i = 0; i < books.length; i++){
    if (books[i].borrows[0].returned === false){
      counter += 1;
    }
  }
  return counter; 
}


function mostCommonGenres(books) {
  //reduce to count items per genre
  let countedBooks = books.reduce((acc, item) => {
    if (acc[item.genre]){
      acc[item.genre]++;
    } else {
      acc[item.genre] = 1;
    }
    return acc;
  }, {})
  console.log(countedBooks);
  // use keys to sort 
  let keys = Object.keys(countedBooks);
  let sortedKeys = keys.sort((key1,key2) => {
    return countedBooks[key2] - countedBooks[key1];
  })
  let mapped = sortedKeys.map((key) => {
    return {name:key, count: countedBooks[key]}
  })
  //splice to stop at 5
  return mapped.slice(0, 5);
}
// creating helper function to sort
function sorter(arr){
  return arr.sort((a, b) => {
    if (a.count< b.count) return 1;
    if (a.count> b.count) return -1;
    return 0
  })
}
// creating helper function to find authors name
function getAuthorName (authors, id){
  let author = authors.find((author) => author.id === id)
  return `${author.name.first} ${author.name.last}`
}


function mostPopularBooks(books) {
  //need to get to most popular books = name of book - borrows.length >
  //create empty arr
  let newArr = [];
  books.forEach(book => {
    //use forEach to put information into format required
    let newObj = {};
    newObj["name"] = book.title;
    newObj["count"] = book.borrows.length;
    newArr.push(newObj);
  })
  // use helper function to sort then .splice to clean up new arr
  return sorter(newArr).slice(0, 5);

}

function mostPopularAuthors(books, authors) {
  //two keys name = first and last of author
  // count - number of times any of their books were checked out 
  //get names for authors
  let finalArr = [];
  for (let index in authors) {
    let booksByAuthorArr = books.filter(
      (book) => book.authorId === authors[index].id
      )
      let count = 0;
      let newObj = {
        name: authors[index].name.first + " " + authors[index].name.last 
      }
      for (let index in booksByAuthorArr){
        count += booksByAuthorArr[index].borrows.length;
      }
      newObj.count = count;

      finalArr.push(newObj);
  }
  return sorter(finalArr).slice(0, 5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
};
