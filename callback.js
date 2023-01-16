function welcomeMessage(name, greetHandler) {
    console.log(greetHandler);
    greetHandler(name)
}

function greetMorning(name) {
    console.log('good morning', name)
}
function greetAfternoon(name) {
    console.log('good afternoon', name)
}
welcomeMessage('tom', greetMorning)
welcomeMessage('jerray', greetAfternoon)