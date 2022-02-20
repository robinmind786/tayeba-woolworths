// chat application
const chatBtn = document.querySelector('.trlive-chat-link');
const chatApp = document.querySelector('.chating-app');
const closeChat = document.getElementById('closeChat');

chatBtn.onclick = function() {
	chatApp.style.display = 'block';
	this.style.display = 'none'
}

closeChat.onclick = function() {
	chatApp.style.display = 'none';
	chatBtn.style.display = 'block';
}










//scroll top the page
function topFunction() {
	document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
