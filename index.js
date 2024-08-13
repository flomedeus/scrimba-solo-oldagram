const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById("container-main")

function renderPosts(){
    for(let i=0;i<posts.length;i++){
        mainEl.innerHTML += `<div class="post">
        <div class="post-header">
            <img class="user-avatar" src="${posts[i].avatar}">   
            <div class="post-header-info">
                <p class="post-author">${posts[i].name}</p>
                <p class="post-location">${posts[i].location}</p>
            </div> 
        </div>
        <img class="post-img" src="${posts[i].post}" alt="">
        <div class="post-info">
            <div class="post-buttons">
                <button id="like-btn-${i}"><img src="images/icon-heart.png" alt=""></button>
                <button><img src="images/icon-comment.png" alt=""></button>
                <button><img src="images/icon-dm.png" alt=""></button>
            </div>
            <div class="post-likes-title">
                <p class="post-likes"><span class="bold" id="post-likes-${i}">${posts[i].likes}</span> likes</p>
                <p class="post-title"><span class="bold">${posts[i].username}</span> ${posts[1].comment}</p>
            </div>
        </div>
         </div>`
    }
}


renderPosts()

for (let i=0;i<posts.length;i++){
    const butEl = document.getElementById(`like-btn-${i}`)
    butEl.addEventListener("click", function(e){
        console.log(e.target.id)
        let post = e.target.id.slice(-1)
        updateLikes(post)
    })
}


function updateLikes(post){
    let postLikes = document.getElementById(`post-likes-${post}`)
    let likes = parseInt(postLikes.textContent)
    likes++;
    postLikes.textContent = likes;
}

