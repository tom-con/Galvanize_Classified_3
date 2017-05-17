(function() {
  'use strict'

  angular.module('app')
    .service('postService', service)

  service.$inject = ['$http']
  function service($http) {
    const sv = this
    sv.getPosts = getPosts
    sv.editPost = editPost
    sv.newPost = newPost
    sv.deletePost = deletePost

    function getPosts(id){
      return $http.get(id ? `/classifieds/${id}` : '/classifieds').then(posts => {
        return posts.data
      })
    }
    function newPost(data){
      return $http.post(`/classifieds`, data).then(posts => {
        return posts.data
      })
    }
    function editPost(id, data){
      return $http.patch(`/classifieds/${id}`, data).then(posts => {
        return posts.data
      })
    }
    function deletePost(id){
      return $http.delete(`/classifieds/${id}`).then(posts => {
        return posts.data
      })
    }
  }
}())
