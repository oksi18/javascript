let urldetails = new URL(location.href)
let id = urldetails.searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
  .then(value => value.json())
  .then(posts => {
    for (const post of posts) {
      let divdetails = document.createElement('div')
      let p = document.createElement('p')
      p.innerText =   `${post.userId} ${post.id} ${post.title} ${post.body}`
      divdetails.appendChild(p)
      document.body.appendChild(divdetails)


      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(value => value)
        .then(comments => {
          for (const comment of comments) {
            let div = document.createElement('div')
            let p = document.createElement('p')
            p.innerText = `${comment.postId} ${comment.id} ${comment.name} ${comment.email} ${comment.body}`
            div.appendChild(p)
            document.body.appendChild(div)
          }
        })



    }
  })

