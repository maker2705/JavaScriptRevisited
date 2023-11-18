function outerTest(){
    let a  = 'Hello';

    if (true) {
        let a = "hey!"
        console.log(a);
    }
    console.log(a);

}

outerTest();

// Output: hey!
     //    Hello 