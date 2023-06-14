/*
________________________________________________________________________________________
<<<<<<<<<<<<<<<<<<<<<<<<<<< Change navbar style on Scroll >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
----------------------------------------------------------------------------------------
*/
//Below is the 'window' function which usually donot need any button to run it just run according to window of webpage
window.addEventListener('scroll', () => {
    //our this function will run everytime when scroll bar of our webpage is moved
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0); 
    //window.scrollY will return px value which describes the scroll value window, like if you move down 10px vertically, then 'window.scrollY' will return 10, but if you donot scroll at all, then the scroll value is '0'. 

    /*
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);

    in upper line, 'toggle', function is used to add, remove, css class to any element.
    
    toggle function usually takes two input, first is the css class whish is to be added and other is the condition on which the class will be applied

    syntax:
    classList.toggle('css_class_name', true)

    so in upper command we have got the all the classes (currently no class is assigned to nav, there is just CSS applied directly to 'nav' tag) and then by using toggle function we have added a new css class 'window-scroll' to it.

    we can also do the same task by using classList.add(), but as it donot accept any condition, so we have to use if-else, toggle is easy if accept the condition and 
    */
});


/*
________________________________________________________________________________________
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< SHOW/HIDE FAQs >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
----------------------------------------------------------------------------------------
*/

const faqs = document.querySelectorAll('.faq'); //this will get all the faqs
// do remeber when you a fetching document from tag then you donot put '.' before it

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        /* SO, toggle function do both (adding and removing). if toggle found to be 'open' class is applied to a tag then again using toggle command, then 'open' class will be removed from the tag */

        //change icon
        const icon = faq.querySelector('.faq__icon i');

        if (icon.className == "uil uil-plus")
        {
            icon.className = "uil uil-minus";
        }
        else{
            icon.className = "uil uil-plus";
        }
    });
});

/*
________________________________________________________________________________________
<<<<<<<<<<<<<<<<<<<<<<<<<<<<< SHOW/HIDE NAV MENU on SMALL SCREEN >>>>>>>>>>>>>>>>>>>>>>>
----------------------------------------------------------------------------------------
*/

const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

const li = document.querySelectorAll('.nv');

menuBtn.addEventListener('click', () => {


    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';

    let delay = 400;

    for(let i = 0; i < li.length; i++)
    {
        li[i].style.animation = 'animateNavItems ' + delay.toString() + 'ms linear forwards';
        
        delay = delay + 200;
        // li[i].style.animationDelay = "400ms";   
    }

});

let closeNav = () => {
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
    // menu.style.display = "none";

    
    let delay = 400;


    for(let i = li.length-1; i >= 0; i--)
    {
        li[i].style.animation = 'animateNavItemsR ' + delay.toString() +'ms linear forwards';

        delay = delay + 200;
    }
    // menu.style.display = "none";
};

closeBtn.addEventListener('click', closeNav);

