let B7Validator = {
  handleSubmit:(event)=>{
    event.preventDefault();
    let send = true;

    let inputs = form.querySelectorAll('input');

    if(send) {
      form.submit();
    }
  }
};

let form = document.querySelector('.b7validator');
form.addEventListener('submit',B7Validator.handleSubmit);