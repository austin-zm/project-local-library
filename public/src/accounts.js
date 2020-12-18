function findAccountById(accounts, id) {
  // loop through accounts until id matches
  for (let i = 0; i < accounts.length; i++){;
    if (id === accounts[i].id){;
      return accounts[i];
    }
  }
}

function sortAccountsByLastName(accounts) {
  //change last name to lower case cause sort vaulues are different for uper 
  //sort names by name.last
  accounts.sort((a, b) => {;
    let fa = a.name.last.toLowerCase();
        fb = b.name.last.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
  return accounts;
}

function numberOfBorrows(account, books) {
  //two loops to loop through both arrays
  //first books
  //then loop through the borrows arr and use counter
  let counter = 0;
  for (let i = 0; i < books.length; i++){
    for (let j = 0; j < books[i].borrows.length; j++){
    if (books[i].borrows[j].id === account.id){
      counter += 1;
    }
  }
}
  return counter;
}

function booksInPossession(account, books, authors) {
  //go into books
  //then go into borrows 
  //then take the author id from borrows and loop through auther arr
  //then replace id number with author name 
  let possessedBooks = [];
  for (let i = 0; i < books.length; i++){
    let book = books[i];
    const {id, title,genre,borrows} = book;
    for (let j = 0; j < borrows.length; j++){
      if (borrows[j].id === account.id && borrows[j].returned === false){
        for (let k = 0; k < authors.length; k++){
          let author = authors[k];
          if (author.id === book.authorId){
            let tempBook = {id , title, genre, author, borrows};
            possessedBooks.push(tempBook);
          }
        }
      }
    }
  }
  return possessedBooks
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
