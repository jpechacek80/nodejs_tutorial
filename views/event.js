const myclass = document.querySelector('.aclass')

Ev_Listener("click",myclass,e=>{
  console.log('hi');
})

function Ev_Listener(type,selector,callback)
{
 document.addEventListener(type, ev =>
  {
   if(ev.target.matches(selector)) callback(ev)
  )}
}
