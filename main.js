//mendefinisikan element html di js
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");


// membuat pencegahan submit yg salah
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});


// kondisi untuk input kosong 
let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be null";
        console.log("failure");
    } else {
        console.log("successs");
        msg.innerHTML = "";
        acceptData();
    }
};

// menerima data
let data = {};
let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
}

//create post
let createPost = () => {
    posts.innerHTML += `
<div>
    <p>${data.text}</p>
    <span class="options">
        <i onclick="editPost(this)" class="fas fa-edit"></i>
        <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
</div>
`;
    input.value = "";
};

//menghapus data
let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

//mengedit data
let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};

