function menuToggle() {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  }


function popup()
{
    var choice1;
    var choice2;
    var message;
    choice1= confirm('Confirm submission? This cannot be undone.');
    if (choice1) {
        message = 'We have received your submission. Thank you!';
    }
    else {
        message = 'Action withdrawn.';
    }
    
    choice2= confirm(message);
    if (choice2)
    {
        window.location = 'hdb_main.html';
    }
}



