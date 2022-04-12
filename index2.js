let left=`
margin-top:10%;
margin-right:50%;
`;
let right=`
margin-top:10%;
margin-left:50%;
`;
let bottomLeft=`
    margin-top:30%;
    margin-right:60%;
`;
let bottomRight=`
    margin-top:30%;
    margin-left:50%;
`;
    


let divs=document.getElementsByTagName('div');

for (const div of divs) {
    div.addEventListener("mouseenter",event=>{
        if (event.target) {
            // div.style.backgroundColor="red";
            if(div.getAttribute('class')==="ch1"){
                divs[8].style=left;
                divs[10].style=left;
            }
            else if(div.getAttribute('class')==="ch2"){
                divs[8].style=right;
                divs[10].style=right;
            }
            else if(div.getAttribute('class')==="ch3"){
                divs[8].style=bottomLeft;
                divs[10].style=bottomLeft;
            }
            else if(div.getAttribute('class')==="ch4"){
                divs[8].style=bottomRight;
                divs[10].style=bottomRight;
            }
            else if(div.getAttribute('class')==='ch5'){
                div.style.backgroundColor='#e55039';
                divs[11].style=`
                    width: 30%;
                    height: 20%;
                    border-radius:100px;
                    background-color:red;
                `;
                divs[8].style=`
                    margin-top:15%;
                    margin-left:28%;
                `;
                divs[10].style=`
                margin-top:15%;
                margin-left:28%;`;
            }
        }
    });
    div.addEventListener("mouseleave",event=>{
        if (event.target) {
            if(div.getAttribute('class')==='ch5'){
                div.style.backgroundColor='#e58e26';
                divs[11].style=`
                width: 50%;
                height: 15%;
                border-bottom-left-radius: 50%;
                border-bottom-right-radius: 50%;
                `;
            }
        }
    });
}
