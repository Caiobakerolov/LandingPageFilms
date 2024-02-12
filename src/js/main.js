document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-tab-button]'); 
  const questions = document.querySelectorAll('[data-faq-question]');    

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(btn) {
      const targetTab = btn.target.dataset.tabButton;
      const tab = document.querySelector(`[data-tab-id=${targetTab}]`)
      hideAllTab();
      tab.classList.add('shows__list--is-active');
      removeButtonActive();
      btn.target.classList.add('shows__tabs__button--is-active'); 
    })    
  }

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', openOrCloseAnswer);
  }
})

function openOrCloseAnswer(element) {
  const classe = 'faq__questions__item--is-open';  
  const elementFather = element.target.parentNode;

  elementFather.classList.toggle(classe);
}

function removeButtonActive() {
  const buttons = document.querySelectorAll('[data-tab-button]');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('shows__tabs__button--is-active');
  }
}

function hideAllTab() {
  const tabsContainer = document.querySelectorAll('[data-tab-id');

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove('shows__list--is-active');
  }
}

$(document).ready(function() {  
  $('form').validate({
    rules: {      
      email2: {
        required: true,
        email: true,
      },
    },
    messages: {      
      email2: '<p style="color: red;">Please, enter your full email</p>',      
    },
  })
});