// mone kor 1 theke 20 pojonto print out korbe jekhane 3 diye vag gele akta name dibe 5 diye vag gele akta name dibe it's call divisible

for (let i = 1; i <= 15; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('fookooo')
    }
    else if (i % 3 == 0) {
        console.log('foo')
    }
    else if (i % 5 == 0) {
        console.log('kooo')
    }

    else {
        console.log(i)
    }

}