var arr;
function alpha(value)
{ var re=/[A-Z]/;
	if(re.test(value))
		return value;
}
function panafilter(value,i,a)
{ if(i==0)
	return value;
  else if(a[i]!=a[i-1])
	return a[i];
	
}
function isogram(value,i,a)
{
	if ( a.indexOf(value) == a.lastIndexOf( value ) )
		return true;

}

function panagram()
{
	var arr2=arr.filter(panafilter);
	if(arr2.length==26)
		return 1;
	else
		return 0;
}
function palindrome()
{var j=arr.length-1;
	for(i=0;j>i;i++,j--)
	{ if(arr[i]!=arr[j])
		{ arr.sort();
		 return 0;
		}
	}
	
	return 1;
}
function func()
{ var x=document.getElementById("result");
	var str=document.getElementById("word").value;
	if(str.length==0)
		alert("Please enter a word first");
	else
	{
	str=str.toUpperCase();
	var x=document.getElementById("result");
	
	arr=Array.from(str);
	arr=arr.filter(alpha);
	
	if(palindrome())
	{ 
		
		x.innerHTML="***Its a Palindrome";
	}
	else if(panagram())
	{
		x.innerHTML="***Its a Panagram";
	}
	else if(arr.every(isogram))
	{
		x.innerHTML="***It's a Isogram";
		
	}
	else
	{
		x.innerHTML="***Not a special Case";
	}
	}
}
function func2()
{	var a1=0;var  a2=0;var a3=0; var a4=0;
	var x=document.getElementById("result");
	var mono=[]; var doub=[]; var trip=[];
	var quad=[];
	var res="";
	var strs=document.getElementById("word").value;
	if(strs.length==0)
	{
		alert("Please enter the word first");
	}
	else
	{
		
	
	strs=strs.toUpperCase();
	var arr2=strs.split(/[^A-Z|^']+/);
	arr2.sort();
	var k=0;
	while(k<arr2.length )
	{
		var f=arr2.indexOf(arr2[k]);		
		var l=arr2.lastIndexOf(arr2[k]);
		var c=l-f+1;
		switch(c)
		{ 
		case 1: mono[a1++]=arr2[k];
					break;
		case 2: doub[a2++]=arr2[k];
					break;
		case 3: trip[a3++]=arr2[k];
					break;
		case 4: quad[a4++]=arr2[k];
					break;
		}
		k=l+1;
		
	}
	
	var res="Mono words: "+mono.join(",")+"<br>Double Words: "+doub.join(",")+"<br>Triple words: "+trip.join(",")+"<br>Quadruple words: "+quad.join(",");
	x.innerHTML=res;
	}
	
}
