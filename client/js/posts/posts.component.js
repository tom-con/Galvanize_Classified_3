(function() {
  'use strict'

  angular.module('app')
    .component('posts', {
      controller: controller,
      templateUrl: './js/posts/posts.html'
    })

  controller.$inject = ['postService']
  function controller(postService) {
    const vm = this
    vm.$onInit = onInit
    vm.edit = edit
    vm.deletes = deletes
    vm.submitEdit = submitEdit
    vm.submitNew = submitNew

    function onInit() {
      getPosts()
      vm.editOn = false
      vm.newPost = true
    }

    function edit(id) {
      postService.getPosts(id).then(post => {
        vm.epost = post
        vm.editOn = true
        vm.newPost = false;
      })

    }

    function getPosts() {
      postService.getPosts().then(posts => {
        vm.posts = posts
      })
    }
    function submitEdit() {
      vm.editOn = false
      vm.newPost = true
      postService.editPost(vm.epost.id, vm.epost).then(() => {
        delete vm.epost
        getPosts()
      })
    }
    function submitNew() {
      vm.editOn = false
      vm.newPost = true
      postService.newPost(vm.npost).then(() => {
        delete vm.npost
        getPosts()
      })
    }
    function deletes(id) {
      postService.deletePost(id).then(() => {
        getPosts()
      })
    }
  }
}())
