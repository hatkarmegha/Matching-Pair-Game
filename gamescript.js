var cardImgArray=[];
var counter=0;
var moves=0;
var firstCard,secondCard;
const allcard=document.getElementsByClassName('card');
console.log(allcard);
function flipcard(cardId)
{
    var selectedCard=document.getElementById(cardId);
    var img1=selectedCard.querySelector('img').src;

    selectedCard.classList.toggle('flipped');

    cardImgArray.push(img1);
   
   var len=cardImgArray.length;
    if(len==1)                          /*store image of first card*/
    {
        firstCard=selectedCard;  
    }
    if(len==2)
    {
             secondCard=selectedCard;
             //console.log(firstCard);
             //console.log(secondCard);
             //console.log(cardImgArray[0]);
             //console.log(cardImgArray[1]);
            moves++;
            document.getElementById('moves').innerHTML=moves;
            console.log(moves);
            if(cardImgArray[0]==cardImgArray[1])
            {
                counter++;
                document.getElementById('pair').innerHTML=counter;
                firstCard.onclick=function()
                {
                    return false;
                }
                secondCard.onclick=function()
                {
                    return false;
                }                      
                console.log(counter);                   
               
            }
            else
            {   
                setTimeout(function()                   //flip card after 1.5 sec
                {           
                    firstCard.classList.toggle('flipped');
                    secondCard.classList.toggle('flipped');

                 }, 1500);
                
            }
            cardImgArray=[];
    }   
    if(counter==8)
    {
        setTimeout(function()
        {
            alert("Game Finish..");                   
            for(var i=0;i<16;i++)
            {  
               allcard[i].classList.toggle('flipped');
               allcard[i].onclick=function()
               {
                   return true;
               }
            }
            
            counter=0;
            moves=0;
            document.getElementById('pair').innerHTML=" ";
            document.getElementById('moves').innerHTML=" ";

        },1500);
        
    }         

}
