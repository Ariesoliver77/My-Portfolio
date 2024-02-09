

function menuToggle(e){
    var anchor = e.target.closest('div.mobile-icon');
    //TOGGLE THE ACTIVE SWITCH
    anchor.classList.toggle('active');
    
    //CHECK WHAT TO DO
    if(anchor.classList.contains('active')){
        anchor.innerHTML = '<i class="far fa-arrow-left"></i>';
        
        //GET MENU BAR AND SHOW IT
        var menuBar = document.querySelector('.nav-bar');
        
        menuBar.style.maxWidth = "70%";
    }else{
        anchor.innerHTML = '<i class="far fa-bars"></i>';
        
        //GET MENU BAR AND SHOW IT
        var menuBar = document.querySelector('.nav-bar');
        
        menuBar.style.maxWidth = "0";
    }

}









//HANDLE NAV LINK CLICK
function clickNavLink(e){
    var anchor = e.target.closest('div.nav-tab');
    var linkName = anchor.getAttribute('id');
    
    
    //REMOVE ACTIVE
    var allNavLinks = document.querySelectorAll('.nav-tab');
    
    allNavLinks.forEach(navLink => {
        if(navLink.classList.contains('active')){
            navLink.classList.remove('active');
        }
    })
    
    //MAKE CLICKED LINK ACTIVE
    var clickedLink = document.querySelector(`.nav-tab#${linkName}`);
    clickedLink.classList.add('active');
    
    //SCROLL PAGE TO TARGET BAR
    var targetBar = document.querySelector(`.show-bar#${linkName}`);
    
    targetBar.scrollIntoView();
}




