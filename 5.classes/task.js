// task 1
class PrintEditionItem {
    constructor(author, name, releasDate, pagesCount) {
        this.author = author;
        this.name = name;
        this.releasDate = releasDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    set state(stateItem) {
        this._state = stateItem;
    
        if (stateItem < 0) {
          this._state = 0;
        }
        if (stateItem > 100) {
          this._state = 100;
        }
      }
    
      get state() {
        return this._state;
      }
      fix() {
        this.state = 1.5 * this.state;
      }
    }

    class Magazine extends PrintEditionItem {
        constructor(name, releaseDate, pagesCount) {
          super(name, releaseDate, pagesCount);
          this.type = "magazine";
        }
      }
      class Book extends PrintEditionItem {
        constructor(author, name, releaseDate, pagesCount) {
          super(name, releaseDate, pagesCount);
          this.author = author;
          this.type = "book";
        }
      }
      
      class NovelBook extends Book {
        constructor(author, name, releaseDate, pagesCount) {
          super(author, name, releaseDate, pagesCount);
          this.type = "novel";
        }
      }      

      class FantasticBook extends Book {
        constructor(author, name, releaseDate, pagesCount) {
          super(author, name, releaseDate, pagesCount);
          this.type = "fantastic";
        }
      }
      
      class DetectiveBook extends Book {
        constructor(author, name, releaseDate, pagesCount) {
          super(author, name, releaseDate, pagesCount);
          this.type = "detective";
        }
      }

  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
    findBookBy(type, value) {
      let findBook = null;
      this.books.forEach((book) => {
        if ((type = "name")) {
          if (book.name === value) {
            findBook = book;
          }
        }
        if ((type = "pageCount")) {
          if (book.pagesCount === value) {
            findBook = book;
          }
        }
        if ((type = "releaseDate")) {
          if (book.releaseDate === value) {
            findBook = book;
          }
        }
        if ((type = "state")) {
          if (book.state === value) {
            findBook = book;
          }
        }
        if ((type = "type")) {
          if (book.type === value) {
            findBook = book;
          }
        }
        if ((type = "author")) {
          if (book.author === value) {
            findBook = book;
          }
        }
      });
      return findBook;
    }
    giveBookByName(bookName) {
      const findBookIndex = this.books.findIndex((book) => book.name === bookName);
      if (findBookIndex === -1) {
        return null;
      }
      return this.books.splice(findBookIndex, 1)[0];
    }
  }

