angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

/**
 * Esempio lista di news 
 */
.factory('News', function()
{
    var news = [
        {
            id      : 100,
            title   : "Notizia",
            text    : "Esempio descrizione di una notizia pubblicata dallo staff."
        },
        {
            id      : 101,
            title   : "Notizia #2",
            text    : "Esempio descrizione di una notizia pubblicata dallo staff (#2)."
        }
    ];
    
    return {
        all: function() {
            return news;
        },
        get: function(newsId) {
            return _.find(news, function(newsObject){ return newsObject.id == newsId; });
        }
    }
});
