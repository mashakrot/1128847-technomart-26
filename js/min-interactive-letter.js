var letter=document.querySelector(".write-us"),popupLetter=document.querySelector(".letter"),buttonClose=popupLetter.querySelector(".button-close"),login=popupLetter.querySelector("[name=name]"),password=popupLetter.querySelector("[name=e-mail]"),textarea=popupLetter.querySelector("[name=later]"),form=popupLetter.querySelector(".letter-form"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(e){isStorageSupport=!1}letter.addEventListener("click",function(e){e.preventDefault(),popupLetter.classList.add("letter-show"),storage?(login.value=storage,password.focus()):login.focus()}),buttonClose.addEventListener("click",function(e){e.preventDefault(),popupLetter.classList.remove("letter-show"),popupLetter.classList.remove("letter-error")}),form.addEventListener("submit",function(e){login.value&&password.value&&textarea.value?isStorageSupport&&localStorage.setItem("login",login.value):(e.preventDefault(),popupLetter.classList.add("letter-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popupLetter.classList.contains("letter-show")&&(popupLetter.classList.remove("letter-show"),popupLetter.classList.remove("letter-error")))});