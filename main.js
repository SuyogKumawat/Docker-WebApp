<script>
function fun(){

var i=document.getElementById("i1").value

var xhr=new XMLHttpRequest();
xhr.open("GET","http://192.168.43.52/cgi-bin/js7.py?x=" + i,true);
xhr.send();

xhr.onload=function(){
        var output=xhr.responseText;
        document.getElementById("d1").innerHTML=output;
        }
}
</script>
