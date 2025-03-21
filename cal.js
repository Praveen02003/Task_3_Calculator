function change(event)
{
    var rep=document.getElementById("res")
    rep.append(event.target.textContent)
}
function result()
{
    var c=document.getElementById("res")
    console.log(c.textContent);
    var outp=eval(c.textContent)
    c.textContent=outp
}
function clea()
{
    var cl=document.getElementById("res")
    cl.textContent=""
}
