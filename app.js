const menu = document.querySelector('.ham');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo_name');
const dropdown = document.querySelector('.menu');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

menu.addEventListener('click', () => {
    nav.classList.toggle('nav1');
    dropdown.classList.toggle('menu');
    dropdown.classList.toggle('menu2');
    menu.classList.toggle('into');
    logo.classList.toggle('log1');
});

const images = document.querySelectorAll('.img4');
const wrongs = document.querySelectorAll('.ham1');
const section4 = document.querySelector('.section4');

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', () => {
        images[i].classList.toggle('sec41');
        wrongs[i].classList.toggle('ham2');
        section4.classList.toggle('section-4');
    });

    // wrongs[i].addEventListener('click', () => {
    //     section4.classList.remove('section-4');
    //     images[i].classList.remove('sec41');
    //     wrongs[i].classList.remove('ham2');
    //     section4.classList.add('section4');
    // });
}

const tr = document.querySelectorAll('.tr1');
const js = document.querySelector('.js');
const inputs = document.querySelectorAll('.inp');
const buttons = document.querySelectorAll('.btnkm');
const button1 = document.querySelector('.btnjs');
const table = document.querySelector('table');
const divButtn = document.querySelector('.bttn');
let count = 0;
let inputValues = [];
let count1 = 0;

for (let i = 0; i < tr.length; i++) {
    tr[i].addEventListener('click', () => {
        count++;
        if (count === 1) {
            button1.classList.toggle('btnjs1');
        }

        const div = document.createElement('div');
        div.classList.add('div1');
        js.appendChild(div);

        const head = document.createElement('h4');
        head.innerHTML = buttons[i].value;
        const head1 = document.createElement('h4');
        head1.innerHTML = parseInt(inputs[i].value);
        inputValues.push(parseInt(inputs[i].value));
        div.appendChild(head);
        div.appendChild(head1);

        button1.addEventListener('click', () => {
            if (count1 === 0) {
                button1.classList.remove('btnjs1');
                table.classList.toggle('table1');
                let sum = 0;
                for (let j = 0; j < inputValues.length; j++) {
                    sum += inputValues[j];
                }
                let total = sum * 50;

                const div2 = document.createElement('div');
                div2.classList.add('div2');
                const head4 = document.createElement('h4');
                head4.innerHTML = 'Total kms';
                const head5 = document.createElement('h4');
                head5.innerHTML = sum;
                const div1 = document.createElement('div');
                div1.classList.add('div2');
                const head2 = document.createElement('h4');
                head2.innerHTML = 'Total';
                const head3 = document.createElement('h4');
                head3.innerHTML = total;
                divButtn.appendChild(div1);
                divButtn.appendChild(div2);
                div2.appendChild(head2);
                div2.appendChild(head3);
                div1.appendChild(head4);
                div1.appendChild(head5);
            }
            count1++;
        });
    });
}
let link = 'https://fakestoreapi.com/products'
fetch(link)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        for (let img in data) {
            if (img < 3) {
                const section = document.querySelector('.fet')
                const main = document.querySelector('.fetch')
                const div = document.createElement('div')
                div.classList.add('d1')
                const imgs = document.createElement('img')
                
                
                imgs.setAttribute("src", data[img].image)
                main.appendChild(div)
                div.appendChild(imgs)
                
            }
        
        }
    const section = document.querySelector('.fet')
    const load=document.createElement('button')
    load.classList.add('load')
    load.innerHTML='Load'
    const div1 = document.createElement('div')
                div1.classList.add('fet')
                section.appendChild(div1)
                div1.appendChild(load)
                var img=0
               var num = 6
    load.addEventListener('click', () => {
            while (img < num) {
                const section = document.querySelector('.fet')
                const main = document.querySelector('.fetch')
                const div = document.createElement('div')
                div.classList.add('d1')
                const imgs = document.createElement('img')
                imgs.setAttribute("src", data[img].image)
                main.appendChild(div)
                div.appendChild(imgs)
                
            img++  
            }
           
            num = num + 3
            

        
        

    })
    img+= 3
    
     
})