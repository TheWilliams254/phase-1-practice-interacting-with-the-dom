let counter = document.getElementById("counter");
let timer = setInterval(updateCounter, 1000);
let isPaused = false;

document.getElementById("plus").addEventListener("click", () => changeCounter(1));
document.getElementById("minus").addEventListener("click", () => changeCounter(-1));
document.getElementById("heart").addEventListener("click", likeNumber);
document.getElementById("pause").addEventListener("click", togglePause);
document.querySelector("form").addEventListener("submit", addComment);

function updateCounter() {
    counter.innerText = parseInt(counter.innerText) + 1;
}

function changeCounter(amount) {
    counter.innerText = parseInt(counter.innerText) + amount;
}

function likeNumber() {
    let likesList = document.querySelector(".likes");
    let number = counter.innerText;
    let existingLike = document.querySelector(`[data-num='${number}']`);
    
    if (existingLike) {
        let span = existingLike.querySelector("span");
        span.innerText = parseInt(span.innerText) + 1;
    } else {
        let li = document.createElement("li");
        li.dataset.num = number;
        li.innerHTML = `${number} has been liked <span>1</span> time`;
        likesList.appendChild(li);
    }
}

function togglePause() {
    let pauseBtn = document.getElementById("pause");
    let buttons = document.querySelectorAll("button:not(#pause)");
    
    if (isPaused) {
        timer = setInterval(updateCounter, 1000);
        pauseBtn.innerText = "pause";
        buttons.forEach(btn => btn.disabled = false);
    } else {
        clearInterval(timer);
        pauseBtn.innerText = "resume";
        buttons.forEach(btn => btn.disabled = true);
    }
    isPaused = !isPaused;
}

function addComment(event) {
    event.preventDefault();
    let commentInput = event.target.children[0];
    let commentText = commentInput.value;
    commentInput.value = "";
    let commentSection = document.querySelector(".comments");
    let p = document.createElement("p");
    p.innerText = commentText;
    commentSection.appendChild(p);
}
