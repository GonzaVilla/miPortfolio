// declarando botones
const sobreMi = document.getElementById('sobreMi');
const curriculum = document.getElementById('curriculum');
const proyectos = document.getElementById('proyectos');
const main = document.getElementById('main')
console.log(main)
sobreMi.addEventListener("click", (e)=>{
    invisible(main);
    setTimeout(()=>{
        document.getElementById('progressbar').value = 33;
    document.getElementById('main-innerContainer1').style.display = 'flex';
    document.getElementById('main-innerContainer2').style.display = 'none';
    document.getElementById('main-innerContainer3').style.display = 'none'
    }, 1000)
    });

curriculum.addEventListener("click", (e)=>{
    invisible(main)
    setTimeout(()=>{
        document.getElementById('progressbar').value = 66;
    document.getElementById('main-innerContainer1').style.display = 'none';
    document.getElementById('main-innerContainer2').style.display = 'flex';
    document.getElementById('main-innerContainer3').style.display = 'none'
    }, 1000)
    })

proyectos.addEventListener("click", (e)=>{
    invisible(main)
    setTimeout(()=>{
        document.getElementById('progressbar').value = 100;
    document.getElementById('main-innerContainer1').style.display = 'none';
    document.getElementById('main-innerContainer2').style.display = 'none';
    document.getElementById('main-innerContainer3').style.display = 'flex'
    }, 1000)
    });

    function invisible(div) {
            div.classList.add('active')
            setTimeout(()=> {
                div.classList.remove ('active');
            }, 1000);   
        }




