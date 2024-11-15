const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "avatar-vangogh.jpg",
        post: "post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "avatar-courbet.jpg",
        post: "post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "avatar-ducreux.jpg",
        post: "post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let thePost = ""
let contentShow = document.getElementById("container")


function showPost(){
    
    for(i=0;i<posts.length;i++){
    
               thePost += `<section id="item">
                <div class="feed">
                    <div class="general-padding avatar">
                        <img id="avatar-image" src="${posts[i].avatar}">
                        <div class="user-details">
                            <h5 id="the-name">${posts[i].name}</h5>
                            <p id="location">${posts[i].location}</p>
                        </div>
                    </div>
                    <div class="post">
                        <img id="image-post" src="${posts[i].post}">
                    </div>
                    <div class="engagement">
                        <div class="general-padding icons">
                            <img class="the-icon" id="like-button" src="images/icon-heart.png">
                            <img class="the-icon" src="images/icon-comment.png">
                            <img class="the-icon" src="images/icon-dm.png">
                        </div>
                        <div class="general-padding likes">
                            <p id="like-count">${posts[i].likes} likes</p>
                        </div>
                        <div class="comment">
                            <h4 id="username">${posts[i].username}</h4>
                            <p id="the-comment">${posts[i].comment}</p>
                        </div>
                    </div>   
                </div>`
} contentShow.innerHTML += thePost
}
showPost()

let likeButton = document.getElementById("like-button")
let newLike = 0
likeButton.addEventListener("click", function increaseLike(){
    for(i=0;i<posts.length;i++){
    newLike = posts[i].likes + 1
    document.getElementById("like-count").innerHTML = `${newLike} likes`
    newLike = 0 
}
}
)




