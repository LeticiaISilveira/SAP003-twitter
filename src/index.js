const twitterText = document.querySelector("#twitter-text")
const tweetButton = document.querySelector("#tweet-button")
const tweetList = document.querySelector("#tweet-list")

tweetButton.addEventListener('click', addTweet);

//versão 1.0
function addTweet(event){
    const newLi = document.creatElement("li");
    newLi.textContent = twitterText.value;
    tweetList.appendChild(newLi);
    twitterText.value = "";
}