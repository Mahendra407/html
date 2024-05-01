let c=0;
function incr()
{
    c++;
    document.getElementById("count").textContent=c;
}
function decr()
{
    c--;
    document.getElementById("count").textContent=c;
}
function update()
{
    document.getElementById("count").textContent=0;
}
function changecolor()
{
    var color=prompt("enter color...")
    document.body.style.backgroundColor=color;
}
function changemode()
{
    document.body.classList.toggle('dark')
}