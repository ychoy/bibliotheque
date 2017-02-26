angular
  .module('booksApp', ['ngRoute']) // ngRoute allows us to configure client-side routes in our app.
  //.config(config) // for the app, use this dependency and configuration
  .controller('BooksIndexController', BooksIndexController);

  BooksIndexController.$inject = ['$http'];

  function BooksIndexController ($http) {
    var vm = this;
    vm.newBook = {};
    vm.books = [];

      $http({
        method: 'GET',
        url: 'https://super-crud.herokuapp.com/books'
      }).then(function successCallback(response) {
        vm.books = response.data.books;
        console.log(response)
      }, function errorCallback(response) {
        console.log('There was an error getting the data', response);
      });


  }
