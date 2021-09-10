const btn=document.querySelector('#btn');
const rotate=document.querySelector('#rotate');

/*btn.onclick=displayMessage;*/
btn.onclick=function(){
    displayMessage('Algo no funciona!','warning');
   // displayMessage('hola!','chat');
}
//btn.onclick=()=> displayMessage('this is a custom message!');

function displayMessage(msgText,msgType){
    const html= document.querySelector('html');
  
    const panel= document.createElement('div');
    panel.setAttribute('class','msgBox');
    html.appendChild(panel);
  
    const msg= document.createElement('p');
   /* msg.textContent='This is a message box';*/
   msg.text=msgText;
    panel.appendChild(msg);
   
    const closeBtn= document.createElement('button');
    closeBtn.textContent='x';
    panel.appendChild(closeBtn);
   
    closeBtn.onclick=function(){
        panel.parentNode.removeChild(panel);
    }
    rotate.onclick= function(){
        panel.className='msgBox rotating';
      //  panel.classList.className='rotating';
       // panel.class().add('rotating');
    }
    if (msgType==='warning'){
        msg.style.backgroundImage='url(images/warning.png)';
        panel.style.backgroundColor='tomato';
    }else  if (msgType==='chat') {
        msg.style.backgroundImage='url(images/chat.png)';
        panel.style.backgroundColor='aqua';
  
    }else{
        msg.style.paddingLeft='20px';
    }
    
}
//displayMessage();