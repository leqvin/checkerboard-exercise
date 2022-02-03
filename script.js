// Your JS goes here

for (let i= 1; i < 64; i++) {
    const div = document.createElement('div')
    div.style.width = '11.1%'
    div.style.paddingBottom = '11.1%'
    div.style.float = 'left'
    if (i % 2 === 1) {
        div.style.backgroundColor = 'red'; 
    }
    else {
        div.style.backgroundColor = 'black';
    }
    
    document.body.append(div)
}


