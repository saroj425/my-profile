const pageTurnbtn = document.querySelectorAll(".nextprev-btn");

pageTurnbtn.forEach((el,index)=>{
    el.onclick = ()=>{
        const pageTurnId = el.getAttribute("data-page");
        const pageTurn = document.getElementById(pageTurnId);
        if(pageTurn.classList.contains("turn")){
            pageTurn.classList.remove("turn");
            setTimeout(()=>{
                pageTurn.style.zIndex = 20 - index;
            },500)
        }else{
            pageTurn.classList.add("turn");
            setTimeout(()=>{
                pageTurn.style.zIndex = 20 + index;
            },500)
        }
    }
})


////////////////////// Contact me button when clicked

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = ()=>{
    pages.forEach((page,index)=>{
        setTimeout(()=>{
            page.classList.add('turn')
            setTimeout(()=>{
                page.style.zIndex = 20 + index;
            },500)
        },(index + 1)*200 + 100)
    })
}


///////////////////Reverse Page function================


let totalpage = pages.length;
console.log("totalpage",totalpage)
let pageNo = 0;
 function reversePage(){
    pageNo--;
    if(pageNo < 0){
        pageNo = totalpage - 1;
    }
 }

 //////////////////Back Profile page when clicked on profile button================

 const backProfileBtn = document.querySelector('.back-profile');
 console.log("backProfileBtnbackProfileBtn",backProfileBtn)

 backProfileBtn.onclick = (()=>{
    pages.forEach((_,index)=>{
        setTimeout(()=>{
            reversePage();
            pages[pageNo].classList.remove('turn');
            setTimeout(()=>{
                reversePage();
                pages[pageNo].style.zIndex = 10 + index
            },500)
        },(index + 1)* 200 + 100)
    })
 })

 ///////////////////////Opening Animation================

 const coverRight = document.querySelector('.book-page.page-right');
 const coverLeft = document.querySelector('.book-page.page-left');

 setTimeout(()=>{
    coverRight.classList.add('turn');
 },2100)

 setTimeout(()=>{
    coverLeft.style.zIndex = 20;
 },3200)

 /////////////Opening animation (page left or Profile page)=================




 pages.forEach((_,index)=>{
    setTimeout(()=>{
        reversePage();
        pages[pageNo].classList.remove('turn');
        setTimeout(()=>{
            reversePage();
            pages[pageNo].style.zIndex = 10 + index
        },500)
    },(index + 1)* 200 + 2100)
})