const  trafficLight1  =  document.querySelector('#tL1')
const  trafficLight2  =  document.querySelector('#tL2')
const  trafficLight3  =  document.querySelector('#tL3')


function  MakeGreen()  {    
    trafficLight1.style.background  = ('green');    
    trafficLight2.style.background = ('black');
    trafficLight3.style.background = ('black');


    trafficLight1.addEventListener('click',  MakeYellow);    
    trafficLight2.addEventListener('click',  MakeYellow);    
    trafficLight3.addEventListener('click',  MakeYellow);        
    trafficLight1.removeEventListener('click',  MakeGreen);    
    trafficLight2.removeEventListener('click',  MakeGreen);    
    trafficLight3.removeEventListener('click',  MakeGreen);    


}

function  MakeYellow()  {    
    trafficLight2.style.background  = ('yellow');    
    trafficLight1.style.background = ('black');
    trafficLight3.style.background = ('black');    
    trafficLight2.addEventListener('click',  MakeRed);    
    trafficLight1.addEventListener('click',  MakeRed);    
    trafficLight3.addEventListener('click',  MakeRed);    
    trafficLight1.removeEventListener('click',  MakeYellow);
    trafficLight2.removeEventListener('click',  MakeYellow);      
    trafficLight3.removeEventListener('click',  MakeYellow);  
}

function  MakeRed()  {    
    trafficLight3.style.background  = ('red');    
    trafficLight1.style.background = ('black');
    trafficLight2.style.background = ('black');  

    trafficLight3.addEventListener('click',  MakeGreen);    
    trafficLight1.addEventListener('click',  MakeGreen);    
    trafficLight2.addEventListener('click',  MakeGreen);

    trafficLight1.removeEventListener('click',  MakeRed);
    trafficLight2.removeEventListener('click',  MakeRed);      
    trafficLight3.removeEventListener('click',  MakeRed);    

}

trafficLight1.addEventListener('click',  MakeGreen);
trafficLight2.addEventListener('click',  MakeGreen);
trafficLight3.addEventListener('click',  MakeGreen);