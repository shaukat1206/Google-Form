let darkbtn = document.getElementById('darkModeBtn');
let dark = document.getElementById('dark');
let darks = document.getElementById('darks');

let darkmode = ()=>{
document.body.style.background = '#17181b';
dark.style,background = '#17181b';
darks.style.background = '#17181b';
dark.style.color = 'white';
darks.style.color = 'white';
darkbtn.innerHTML ='light';
darkbtn.style.color = '#fff';
}


let defaultmode = ()=>{
document.body.style = '';
darkbtn.innerHTML = 'Dark';
darkbtn.style = '';
dark.style = '';
darks.style = '';
}


let autofunc = ()=>{ darkbtn.addEventListener('click',()=>{
    darkmode();
    secondAutoFunc();
});
}


darkbtn.addEventListener('click',()=>{
    darkmode();
    secondAutoFunc();
});


let secondAutoFunc = ()=>{
    darkbtn.addEventListener('click',()=>{
        defaultmode();
        autofunc();
    })
}