
const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

// Add separate event listeners for the buttons
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
