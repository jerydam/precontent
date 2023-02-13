function myCipher(key, data) {
    key = key.toString();
    data = data.toString();
    
    const signature = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9];
    
    let arr = [];
    let sets = key.split('.');
    
    for (let i = 0; i < sets.length; i++) {
        if (i % 2 === 0) {
            arr.push({a: sets[i], b: sets[i + 1]});
        }
    }
    
    arr.forEach((elem) => {
        let char1 = signature[elem.a];
        let char2 = signature[elem.b];
    
        let regex1 = new RegExp(char1, 'g');
        let regex2 = new RegExp(char2, 'g');
    
        data = data.replace(regex1, "!&").replace(regex2, char1).replace(/!&/g, char2);
    });
    
    return data;
}
