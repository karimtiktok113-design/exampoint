
function reveal(btn){var box=btn.closest('.mcq');if(box.dataset.done)return;box.dataset.done=1;
 var ans=box.dataset.a;box.querySelectorAll('.opt').forEach(function(o){
  if(o.dataset.k===ans)o.classList.add('right');else if(o===btn)o.classList.add('wrong');});
 var st=box.querySelector('.stext');if(st){if(btn.dataset.k===ans){st.textContent=' ✔ Correct!';st.style.color='var(--ok)';}
 else{st.textContent=' ✘ Wrong';st.style.color='var(--bad)';}}}
function toggleTheme(){var h=document.documentElement;var t=h.getAttribute('data-theme')==='dark'?'light':'dark';
 h.setAttribute('data-theme',t);try{localStorage.setItem('mcq-theme',t)}catch(e){}}
(function(){try{var t=localStorage.getItem('mcq-theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})();
