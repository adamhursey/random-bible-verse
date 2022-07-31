// const items = [
// {Matthew.26.41}
// {Luke.4.12-13}
// {1%20Corinthians.10.13}
// {Mark.14.38}
// {Matthew.6.13}
// {Luke.22.40}
// {1%20Corinthians.7.2}
// {Psalms.26.2}
// {Jeremiah.17.10}
// {Ephesians.6.11}
// {James.1.2-4}
// {James.1.12-13}
// {James.4.7}
// {1%20Peter.5.8}
// {1%20Corinthians.6.18-20}
// {Romans.6.12-14}
// {Galatians.5.17}
// {1%20Timothy.6.8-10}
// {1%20Peter.4.1-2}
// {1%20John.2.15-1}
// ]
const items = [
{bookID: 40, chapterID: 26, verseID: 40026041,  verseName: 'Matthew.26.41'},
{bookID: 42, chapterID: 4,  verseID: 42004012,  verseName: 'Luke.4.12-13'}
// {bookID: 46, chapterID: 10, verseID: ,  verseName: '1%20Corinthians.10.13'}
// {bookID: 41, chapterID: 14, verseID: ,  verseName: 'Mark.14.38'}
// {bookID: 40, chapterID: 6,  verseID: , verseName: 'Matthew.6.13'}
// {bookID: 42, chapterID: 22, verseID: ,  verseName: 'Luke.22.40'}
// {bookID: 46, chapterID: 7,  verseID: , verseName: '1%20Corinthians.7.2'}
// {bookID: 19, chapterID: 26, verseID: ,  verseName: 'Psalms.26.2'}
// {bookID: 24, chapterID: 17, verseID: ,  verseName: 'Jeremiah.17.10'}
// {bookID: 49, chapterID: 6,  verseID: , verseName: 'Ephesians.6.11'}
// {bookID: 59, chapterID: 1,  verseID: ,  verseName: 'James.1.2-4'}
// {bookID: 59, chapterID: 1,  verseID: ,  verseName: 'James.1.12-13'}
// {bookID: 59, chapterID: 4,  verseID: , verseName: 'James.4.7'}
// {bookID: 60, chapterID: 5,  verseID: , verseName: '1%20Peter.5.8'}
// {bookID: 46, chapterID: 6,  verseID: ,  verseName: '1%20Corinthians.6.18-20'}
// {bookID: 45, chapterID: 6,  verseID: ,  verseName: 'Romans.6.12-14'}
// {bookID: 48, chapterID: 5,  verseID: , verseName: 'Galatians.5.17'}
// {bookID: 54, chapterID: 6,  verseID: ,  verseName: '1%20Timothy.6.8-10'}
// {bookID: 60, chapterID: 4,  verseID: ,  verseName: '1%20Peter.4.1-2'}
// {bookID: 62, chapterID: 2,  verseID: , verseName: '1%20John.2.15-1'}
]


let item = items[Math.floor(Math.random()*items.length)];
item = items[0]



fetch(`http://cors.northland.dev/https://bible-go-api.rkeplin.com/v1/books/${item.bookID}/chapters/${item.chapterID}/${item.verseID}`,{mode : 'cors',headers: {
    'Content-Type': 'application/json'
  }})
    .then(response => response.text())
    .then(data => console.log(data));


