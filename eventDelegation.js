const lis =document.querySelectorAll('li');
for(li of lis){
    li.addEventListener('click',function(){
        li.remove();
    })
}
const tweetForm = document.querySelector('#twitter');
const tweetsContainer=document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent the default form submission behavior

    // Access the form elements correctly using the 'elements' property
    const usernameInput = tweetForm.elements['username'];
    const tweetTextInput = tweetForm.elements['tweet'];

    addTweets(usernameInput.value, tweetTextInput.value);

    // Clear input fields after submitting
    tweetTextInput.value = '';
    usernameInput.value = '';
});
const addTweets = (username, tweetText) => {
    // Check if values are being retrieved correctly
    if (!username || !tweetText) {
        console.error('Username or Tweet is empty.');
        return;  // Stop execution if inputs are not filled
    }

    // Create new list item for the tweet
    const newLi = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);  // Add username to the bold tag
    newLi.append(bTag);  // Add the bold tag to the list item
    newLi.append(` - ${tweetText}`);  // Append the tweet text

    // Append the new list item to the tweets list
    const tweetList = document.querySelector('#tweets');
    tweetList.append(newLi);
}
tweetsContainer.addEventListener('click', function(e){
    e.target.nodeName==='LI' && e.target.remove();
})