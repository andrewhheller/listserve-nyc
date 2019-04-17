// get the modal
// const modal = document.getElementById('myModal');

// get the button that opens the modal
// var open = document.getElementById("openBtn");

// get the button that closes the modal
// const close = document.getElementsByClassName("closeBtn")[0];

// open.onclick = function() {
//   modal.style.display = 'block';
// }

// const modal = document.getElementById('myModal');


// when the user clicks on the button, open the modal
const showModal = () => {
	modal.style.display = 'block';
}

// const closeModal = () => {
// 	const close = document.getElementsByClassName("closeBtn")[0];

// }
// // when the user clicks on the close button, close the modal
// close.onclick = function() {
// 	modal.style.display = "none";
// }

// click anywhere outside the modal to close
window.onclick = function(event) {
	if(event.target === modal) {
		modal.style.display = "none";
	}
}


export {
	showModal
}
