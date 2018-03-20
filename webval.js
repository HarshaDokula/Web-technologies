
function validate()
{
flag1=0;
flag2=0;
flag3=0;
 nm=document.getElementById("unm").value;
 if(nm.search(/^[A-Z][a-z]+( [A-Z][a-z]+)*$/)==0)
{flag1++;}
else alert("invalid name");

 p=document.getElementById("pw").value;
 vp=document.getElementById("vpw").value;
  var n = p.localeCompare(vp);
 if(n!=0)
  alert("password did not match");
else
  flag2++;

ar=new Array();
j=0;
f1=document.getElementById("f");
for(i=0;i<f1.sub.length;i++)
{
  if(f1.sub[i].checked==true)
  {
   ar[j]=f1.sub[i].value;
    j++;
   flag3++;
   }
}

if(j!=2)
alert("select correct number of subjects");

if(flag1==1&&flag2==1&&flag3==2)
return true;
else
return false;
}


  