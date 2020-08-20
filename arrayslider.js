var n=0;
var a=document.getElementById('image-');
 var array=["image-1.png","image-2.png","image-3.png","image-4.png","image-5.png","image-6.png"];
function front()
{
    
    if(n<=6||n<=1)
    {
    
    console.log(n);
    n++;
   
    a.src="image-"+n+".png";
    if(n>=7)
    {
        alert('Enough images');
        a.src="image-"+1+".png";
    }
    }
  
}


function back()
{   
   
    if(n>=1||n>=7)
    {
    
        n--;
    console.log(n);
     a.src="image-"+n+".png";
   
    if(n==6)
    {
        n--;
        a.src="image-"+n+".png";
    
    }
    // if(n>=7)
    // {
    //     n--;
    //     a.src="image-"+n+".png";
    // }

    if(n==0)
    {
        n++;
        // alert('Enough images');
        a.src="image-"+n+".png";
       
        
    }
    }
}