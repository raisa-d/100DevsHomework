// function declaration
function ask(q, y, n) {
    if (confirm(q)) y()
     else n()
}

// callback functions
function yes() {
    alert('You clicked OK')
}

function no() {
    alert('You clicked cancel')
}

// function call passing in callback functions as arguments
ask('Cookies are good?', yes, no)

// passing in function expressions as arguments
ask('Do you agree?', function() {alert('Yay!')}, function() {alert('Boo!')})