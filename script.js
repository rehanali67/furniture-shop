const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.filters button').forEach(button=>button.addEventListener('click',()=>{document.querySelector('.filters button.active')?.classList.remove('active');button.classList.add('active')}));
document.querySelectorAll('.swatch').forEach(swatch=>swatch.addEventListener('click',()=>{document.querySelectorAll('.swatch').forEach(item=>item.classList.remove('active'));swatch.classList.add('active')}));
document.querySelectorAll('.sizes button').forEach(size=>size.addEventListener('click',()=>{document.querySelectorAll('.sizes button').forEach(item=>item.classList.remove('active'));size.classList.add('active')}));
document.querySelector('.contact-form')?.addEventListener('submit',event=>{event.preventDefault();alert('Thank you! Your message has been received.');event.target.reset();});
