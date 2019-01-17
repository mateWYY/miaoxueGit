let boxs = document.getElementsByClassName('boxs')[0];
let bodys = document.getElementsByTagName('body')[0];
let colors = ['red','orange','#000','green','blue']
let worlds = ['吃鸡','吃鸭','开汽车','学开车','抢红包']
boxs.addEventListener('click',function (e) {
    if(e.target.className){
        details(e)
    }
},false)
function details(val) {
    let span = document.createElement('span');
    let randomWorld = Math.floor(Math.random()*10/2)
    let randomColor = Math.floor(Math.random()*10/2)
    span.style.left = val.offsetX + 'px'
    span.style.top =  val.offsetY + 'px'
    span.style.color = colors[randomColor]
    span.innerHTML = worlds[randomWorld]
    span.className = 'anims'
    bodys.appendChild(span)
    setTimeout(disappear, 500, span)
}
function disappear(val) {
    bodys.removeChild(val)
}