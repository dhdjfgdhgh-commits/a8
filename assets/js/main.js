(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
var sg=$('sp-g');if(sg){var stt=$('sp-t');var C={round8:8,round10:10,long:12,one:0};on([sg,stt],function(){var g=Math.max(2,parseInt(sg.value,10)||2),c=C[stt.value];
 if(!c){var len=Math.round(g/2*0.6*10)/10;$('sp-o').innerHTML='<strong>One table, '+len+' m long</strong><p>'+Math.ceil(g/2)+' guests along each side at about 60 cm each, plus a host at each end if you like.</p>';return;}
 var t=Math.ceil(g/c),per=Math.floor(g/t),rem=g%t;$('sp-o').innerHTML='<strong>'+t+' table'+(t===1?'':'s')+'</strong><p>'+(rem?rem+' tables of '+(per+1)+' and '+(t-rem)+' of '+per:t+' tables of '+per)+'.</p><p>Mix each table: a few people who know each other, and someone new.</p>';});}
var pc=$('pb-c');if(pc){var bx=[].slice.call(pc.querySelectorAll('input'));on(bx,function(){var o={};bx.forEach(function(b){o[b.value]=b.checked;});var L=[],R=[],T=[];
 if(o.starter)L.push('Salad fork');if(o.fish){L.push('Fish fork');R.push('Fish knife');}L.push('Dinner fork');if(o.soup)R.push('Soup spoon');if(o.starter)R.push('Starter knife');R.push('Dinner knife');if(o.dessert)T.push('Dessert spoon and fork');if(o.bread)T.push('Bread plate and butter knife');
 L.reverse();R.reverse();$('pb-o').innerHTML='<strong>'+(L.length+R.length)+' pieces of cutlery</strong><ul><li><b>Left (outside in):</b> '+L.slice().reverse().join(', ')+'</li><li><b>Right (outside in):</b> '+R.slice().reverse().join(', ')+'</li>'+(T.length?'<li><b>Above:</b> '+T.join('; ')+'</li>':'')+'</ul>';});}
var ct=$('ct-t');if(ct){var cn=$('ct-n');function f(m){m=((m%1440)+1440)%1440;return ('0'+Math.floor(m/60)).slice(-2)+':'+('0'+m%60).slice(-2);}var N={3:[['Starter',25],['Main',45],['Dessert',30]],4:[['Starter',25],['Soup or salad',20],['Main',45],['Dessert',30]],5:[['Welcome bite',15],['Starter',25],['Soup or salad',20],['Main',45],['Dessert',30]]};
 on([ct,cn],function(){var p=(ct.value||'19:30').split(':'),m=parseInt(p[0],10)*60+parseInt(p[1],10),L=[];N[cn.value].forEach(function(c,i){L.push('<li>'+f(m)+' &ndash; '+c[0]+'</li>');m+=c[1]+(i<N[cn.value].length-1?10:0);});L.push('<li>'+f(m)+' &ndash; Coffee and tea</li>');
  $('ct-o').innerHTML='<strong>Finish around '+f(m+20)+'</strong><ol>'+L.join('')+'</ol>';});}
})();
