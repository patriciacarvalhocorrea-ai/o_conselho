const toggle=document.querySelector('.menu-toggle');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',open);toggle.textContent=open?'Fechar −':'Menu +';document.querySelector('#menu').classList.toggle('is-open',open)});
const modal=document.querySelector('#letter-modal');let previous;
function close(){modal.classList.remove('open');document.body.style.overflow='';previous?.focus()}
document.querySelector('[data-open-letter]')?.addEventListener('click',e=>{previous=e.currentTarget;modal.classList.add('open');document.body.style.overflow='hidden';document.querySelector('#pseudonym').focus()});
document.querySelector('[data-close-letter]')?.addEventListener('click',close);
modal?.addEventListener('click',e=>{if(e.target===modal)close()});
document.addEventListener('keydown',e=>{if(!modal?.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='Tab'){const els=modal.querySelectorAll('button,input,textarea');const first=els[0],last=els[els.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
document.querySelector('#preview-letter')?.addEventListener('click',()=>{const name=document.querySelector('#pseudonym').value.trim(),letter=document.querySelector('#letter').value.trim(),out=document.querySelector('#preview-result');out.textContent=letter?`${name||'Correspondente anônimo'}\n\n${letter}\n\nPrévia local. Sua carta não foi enviada.`:'Escreva sua correspondência para visualizar a prévia.';out.classList.add('letter-preview')});
document.querySelector('#copy-link')?.addEventListener('click',async()=>{const out=document.querySelector('#copy-status');try{await navigator.clipboard.writeText(location.href);out.textContent='Link copiado.'}catch{out.textContent='Copie o endereço na barra do navegador.'}});
