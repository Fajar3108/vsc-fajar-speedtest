const button = document.querySelector('#randomBtn');
const result = document.querySelector('#result');
const temp = [];

button.addEventListener('click', () => {
    let counter = 1;
    let randRes = 1;
    const max = parseInt(document.querySelector('#max').value);

    if (temp.length == max) {
        console.log('Mulai ulang untuk melanjutkan'); 
        return;
    }

    setInterval(() => {
        if(counter == 3000 || temp.length >= max) {
            return;
        }
        const randTemp = Math.floor(1 + Math.random() * max);
        if (temp.indexOf(randTemp) == -1) {
            randRes = randTemp;
            result.innerHTML = randRes;
        }
    }, 1);

    setTimeout(() => {
        counter = 3000;
        temp.push(randRes);
        console.log(temp)
    }, 3000);
    
});