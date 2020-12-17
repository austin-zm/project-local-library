function findAuthorById(authors, id) {
  //compairing two values 
  for (let i = 0; i < authors.length; i++){
    if (id === authors[i].id){
      return authors[i];
    }
  }
}

function findBookById(books, id) {
  // compairing two values
  for (let i = 0; i < books.length; i++){
    if (id === books[i].id){
      return books[i];
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  // seperate borrowed books into 2 arrays depending on the first var in borrows array
  let borrowedBooks = books.filter(book=>{
    return book.borrows[0].returned == false;
  })
  let returnedBooks = books.filter (book =>{
    return book.borrows[0].returned == true;
  })
  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  // empty array to push into
  let result = [];
  let borrows = book.borrows;
  for (let recIndex in borrows){ 
    let record = borrows[recIndex];
    for (let index in accounts){
      let account = accounts[index];
    if (record.id === account.id){
      let tempAcct = account;
      tempAcct["returned"] = record.returned;
      result.push(tempAcct);
    }
    }
}
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
