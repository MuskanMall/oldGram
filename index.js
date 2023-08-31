let posts = [
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

// terms.setAttribute(‘id’,‘para-1’);



container = document.querySelector("#container")

for (let i =0; i< posts.length; i++){
    // DIVISION CONTAINING THE POST
    const post_wrapper =  document.createElement("div")
    post_wrapper.classList.add("post-styling")

    // MAKING A DIV CONTAINER FOR AUTHOR'S NAME, LOCATION AND PROFILE PICTURE
    const author_name_location_pic = document.createElement("div")
    author_name_location_pic.classList.add("image-author-section")

    // ADDING PROFILE PICTURE
    const profile_pic = document.createElement("img")
    profile_pic.src = posts[i].avatar
    profile_pic.classList.add("avatar")
    author_name_location_pic.appendChild(profile_pic)

    // CREATING A DIV, TO MAKE THIS AREA A SUBCHILD FOR THE FLEXBOX
    const author_info_text = document.createElement("div")

    // ADDING AUTHOR'S NAME
    const author_name = document.createElement("h3")
    author_name.textContent = posts[i].name
    author_info_text.appendChild(author_name)
    

    // ADDING AUTHOR'S LOCATION
    const author_location = document.createElement("p")
    author_location.textContent = posts[i].location
    author_info_text.appendChild(author_location)

    // ADDING THIS TO THE SECTION'S DIV
    author_name_location_pic.appendChild(author_info_text)
    
    // ADDING THIS WHOLE SECTION"S DIV INTO THE POST
    post_wrapper.appendChild(author_name_location_pic)

    // ADDING THE POST
    const selfie_post = document.createElement("img")
    selfie_post.src = posts[i].post
    selfie_post.classList.add("post")
    post_wrapper.appendChild(selfie_post)

    // CREATING ALL THE NECESSARY REACTIONS
    const all_reactions = document.createElement("div")
    all_reactions.classList.add("reactions")

    const heart = document.createElement("img")
    heart.src = "images/icon-heart.png"
    heart.classList.add("reaction-icon")
    heart.setAttribute('id', `like-btn-${i}`)
    all_reactions.appendChild(heart)

    const comment_on_post = document.createElement("img")
    comment_on_post.src = "images/icon-comment.png"
    comment_on_post.classList.add("reaction-icon")
    all_reactions.appendChild(comment_on_post)

    const dm = document.createElement("img")
    dm.src = "images/icon-dm.png"
    dm.classList.add("reaction-icon")
    all_reactions.appendChild(dm)

    post_wrapper.appendChild(all_reactions)

    // ADDING THE NUMBER OF LIKES
    const likes = document.createElement("h3")
    likes.setAttribute("id",`likes-${i}`)
    likes.textContent = `${posts[i].likes} likes`
    post_wrapper.appendChild(likes)

    
    // CREATING A DIV FOR THE CAPTION
    const caption_div  = document.createElement("div")
    caption_div.classList.add("comment")

    // ADDING THE USERNAME
    const username = document.createElement("h3")
    username.textContent = posts[i].username
    caption_div.appendChild(username)

    
    // ADDING THE CAPTION
    const caption = document.createElement("p")
    caption.textContent = posts[i].comment
    caption_div.appendChild(caption)

    post_wrapper.appendChild(caption_div)

    container.appendChild(post_wrapper)


}

// LIKE BUTTON
for(let i = 0; i < posts.length; i++){
    const like_btn = document.querySelector(`#like-btn-${i}`)
    like_btn.addEventListener("click", () => {
        posts[i].likes += 1
        const no_likes = document.querySelector(`#likes-${i}`)
        no_likes.textContent = `${posts[i].likes} likes`
        console.log("clicked")
        like_btn.src = "images/heart-clicked.png"

    })
}