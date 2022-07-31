const books = [{"id":1,"name":"Genesis","testament":"OT","genre":{"id":1,"name":"Law"}},{"id":2,"name":"Exodus","testament":"OT","genre":{"id":1,"name":"Law"}},{"id":3,"name":"Leviticus","testament":"OT","genre":{"id":1,"name":"Law"}},{"id":4,"name":"Numbers","testament":"OT","genre":{"id":1,"name":"Law"}},{"id":5,"name":"Deuteronomy","testament":"OT","genre":{"id":1,"name":"Law"}},{"id":6,"name":"Joshua","testament":"OT","genre":{"id":2,"name":"History"}},{"id":7,"name":"Judges","testament":"OT","genre":{"id":2,"name":"History"}},{"id":8,"name":"Ruth","testament":"OT","genre":{"id":2,"name":"History"}},{"id":9,"name":"1 Samuel","testament":"OT","genre":{"id":2,"name":"History"}},{"id":10,"name":"2 Samuel","testament":"OT","genre":{"id":2,"name":"History"}},{"id":11,"name":"1 Kings","testament":"OT","genre":{"id":2,"name":"History"}},{"id":12,"name":"2 Kings","testament":"OT","genre":{"id":2,"name":"History"}},{"id":13,"name":"1 Chronicles","testament":"OT","genre":{"id":2,"name":"History"}},{"id":14,"name":"2 Chronicles","testament":"OT","genre":{"id":2,"name":"History"}},{"id":15,"name":"Ezra","testament":"OT","genre":{"id":2,"name":"History"}},{"id":16,"name":"Nehemiah","testament":"OT","genre":{"id":2,"name":"History"}},{"id":17,"name":"Esther","testament":"OT","genre":{"id":2,"name":"History"}},{"id":18,"name":"Job","testament":"OT","genre":{"id":3,"name":"Wisdom"}},{"id":19,"name":"Psalms","testament":"OT","genre":{"id":3,"name":"Wisdom"}},{"id":20,"name":"Proverbs","testament":"OT","genre":{"id":3,"name":"Wisdom"}},{"id":21,"name":"Ecclesiastes","testament":"OT","genre":{"id":3,"name":"Wisdom"}},{"id":22,"name":"Song of Solomon","testament":"OT","genre":{"id":3,"name":"Wisdom"}},{"id":23,"name":"Isaiah","testament":"OT","genre":{"id":4,"name":"Prophets"}},{"id":24,"name":"Jeremiah","testament":"OT","genre":{"id":4,"name":"Prophets"}},{"id":25,"name":"Lamentations","testament":"OT","genre":{"id":4,"name":"Prophets"}},{"id":26,"name":"Ezekiel","testament":"OT","genre":{"id":4,"name":"Prophets"}},{"id":27,"name":"Daniel","testament":"OT","genre":{"id":4,"name":"Prophets"}},{"id":28,"name":"Hosea","testament":"OT","genre":{"id":4,"name":"Prophets"}},{"id":29,"name":"Joel","testament":"OT","genre":{"id":4,"name":"Prophets"}},{"id":30,"name":"Amos","testament":"OT","genre":{"id":4,"name":"Prophets"}},{"id":31,"name":"Obadiah","testament":"OT","genre":{"id":4,"name":"Prophets"}},{"id":32,"name":"Jonah","testament":"OT","genre":{"id":4,"name":"Prophets"}},{"id":33,"name":"Micah","testament":"OT","genre":{"id":4,"name":"Prophets"}},{"id":34,"name":"Nahum","testament":"OT","genre":{"id":4,"name":"Prophets"}},{"id":35,"name":"Habakkuk","testament":"OT","genre":{"id":4,"name":"Prophets"}},{"id":36,"name":"Zephaniah","testament":"OT","genre":{"id":4,"name":"Prophets"}},{"id":37,"name":"Haggai","testament":"OT","genre":{"id":4,"name":"Prophets"}},{"id":38,"name":"Zechariah","testament":"OT","genre":{"id":4,"name":"Prophets"}},{"id":39,"name":"Malachi","testament":"OT","genre":{"id":4,"name":"Prophets"}},{"id":40,"name":"Matthew","testament":"NT","genre":{"id":5,"name":"Gospels"}},{"id":41,"name":"Mark","testament":"NT","genre":{"id":5,"name":"Gospels"}},{"id":42,"name":"Luke","testament":"NT","genre":{"id":5,"name":"Gospels"}},{"id":43,"name":"John","testament":"NT","genre":{"id":5,"name":"Gospels"}},{"id":44,"name":"Acts","testament":"NT","genre":{"id":6,"name":"Acts"}},{"id":45,"name":"Romans","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":46,"name":"1 Corinthians","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":47,"name":"2 Corinthians","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":48,"name":"Galatians","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":49,"name":"Ephesians","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":50,"name":"Philippians","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":51,"name":"Colossians","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":52,"name":"1 Thessalonians","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":53,"name":"2 Thessalonians","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":54,"name":"1 Timothy","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":55,"name":"2 Timothy","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":56,"name":"Titus","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":57,"name":"Philemon","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":58,"name":"Hebrews","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":59,"name":"James","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":60,"name":"1 Peter","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":61,"name":"2 Peter","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":62,"name":"1 John","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":63,"name":"2 John","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":64,"name":"3 John","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":65,"name":"Jude","testament":"NT","genre":{"id":7,"name":"Epistles"}},{"id":66,"name":"Revelation","testament":"NT","genre":{"id":8,"name":"Apocalyptic"}}];

const verses = [
{book: 'John', chapter: 16, id: 27},
{book: 'Joshua', chapter: 1, id: 9},
{book: 'Jude', chapter: 1, id: 21},
{book: 'Psalms', chapter: 36, id: 7},
{book: 'Psalms', chapter: 109, id: 26},
{book: 'Romans', chapter: 5, id: 8},
{book: '1 Corinthians', chapter: 13, id: 13},
{book: 'Zephaniah', chapter: 3, id: 17},
{book: '1 John', chapter: 3, id: 1},
{book: '1 John', chapter: 4, id: 7},
{book: 'Romans', chapter: 5, id: 5},
{book: '1 John', chapter: 4, id: 8},
{book: '1 John', chapter: 4, id: 16},
{book: '1 John', chapter: 4, id: 18},
{book: '1 John', chapter: 4, id: 19},
{book: 'Galatians', chapter: 2, id: 20},
{book: 'Jeremiah', chapter: 29, id: 11},
{book: 'Jeremiah', chapter: 31, id: 3},
{book: 'John', chapter: 3, id: 16},
{book: 'John', chapter: 15, id: 13},
{book: 'Psalms', chapter: 86, id: 15},
{book: 'Psalms', chapter: 136, id: 26},
{book: 'Deuteronomy', chapter: 7, id: 9},
{book: 'Ephesians', chapter: 5, id: 25},
{book: 'Isaiah', chapter: 54, id: 10},
{book: '2 Thessalonians', chapter:3, id: 5},
{book: 'John', chapter: 15, id: 9},
{book: 'John', chapter: 15, id: 12},
{book: 'Colossians', chapter: 3, id: 14},
{book: 'Ephesians', chapter: 3, id: 19},
{book: 'Psalms', chapter: 63, id: 3},
{book: 'Isaiah', chapter: 41, id: 10},
{book: 'Genesis', chapter: 1, id: 1}
]

verses.forEach(verse => {
 verse.bookNum = books.find(x => x.name == verse.book).id;
 verse.finalVerseID = `${String(verse.bookNum).padStart(2,0)}${String(verse.chapter).padStart(3,0)}${String(verse.id).padStart(3,0)}`
});

var fs = require('fs');
fs.writeFile ("verses.json", JSON.stringify(verses), function(err) {
    if (err) throw err;
    console.log('complete');
    });
