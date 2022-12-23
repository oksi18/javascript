let urldetails = new URL(location.href)
let id = urldetails.searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
  .then(value => value.json())
  .then(posts => {
    for (const post in posts) {
      let divdetails = document.createElement('div')
      let p = document.createElement('p')
      p.innerText =   `${post.userId} ${post.id} ${post.title} ${post.body}`
      divdetails.appendChild(p)
      document.body.appendChild(divdetails)





    }
  })
