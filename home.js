//js do menu
var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigationH');
var content = document.getElementById('content');
var showSidebar = false; 

function ClickSidebar() 
{
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        navigationHeader.style.marginLeft = '-1vw';
        navigationHeader.style.animationName = 'showSidebar';
    }
    else{
        navigationHeader.style.marginLeft = '-50vw';
        navigationHeader.style.animationName = '';
    }

}

function CloseSidebar(){
    if(showSidebar)
    {
        ClickSidebar();
    }
}

// js do slide
