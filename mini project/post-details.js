let urldetails = new URL(location.href)
let id = urldetails.searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
  .then(value => value.json())
  .then(posts => {
    for (const post of posts) {
      let divdetails = document.createElement('div')
      let p = document.createElement('p')
      p.innerText =   `UserId: ${post.userId} id: ${post.id} title: ${post.title} body: ${post.body}`
      divdetails.appendChild(p)
      document.body.appendChild(divdetails)







    }
  })
fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  .then(value => value.json())
  .then(comments => {
    for (const comment of comments) {
      let div = document.createElement('div')
      let p = document.createElement('p')
      p.innerText = `postId: ${comment.postId} id: ${comment.id} name: ${comment.name} email: ${comment.email} body: ${comment.body}`
      div.appendChild(p)
      document.body.appendChild(div)
    }
  })
