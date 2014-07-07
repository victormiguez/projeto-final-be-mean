$('#account-button').on('click', function(){
  $('.user-login-form-wrapper').toggleClass('active');
});

var msg = $('.success-msg');

// if($('.success-msg').html() === '') {
//   console.log('vazio');
// }
// console.log($('.success-msg').html());

function vazio() {
 if (msg.text() == "") {
  msg.addClass('empty');
 }
};

vazio();