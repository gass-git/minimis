function git_sound(){ document.getElementById('git').play() };
function link_sound(){ document.getElementById("linked").play() };
function stack_sound(){ document.getElementById('stack').play() };
function tweet_sound(){ document.getElementById('tweet').play() };

var tooltip = document.getElementById('two');
var env = $('#envelope');

function copy_email(){

    copyToClipboard();
    tooltip.style.cssText = null;  // Start fresh: clean styles on html tag
    document.getElementById('mail-audio').play();
    envelope.addEventListener('mouseout', retrieve_msg);

    env.css('transition','none');
    env.css('margin-top','-5px');

    env.removeClass('fa-envelope');
    env.addClass('fa-envelope-open');
    
    setTimeout(show_envelope, 200);
    setTimeout(close_envelope, 800);

    // Hide and set tooltip to default
    setTimeout(hide_tooltip, 800);
    setTimeout(retrieve_msg, 800);

    function hide_tooltip(){ tooltip.style.opacity = '0' }

    function copyToClipboard() {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy); 
    dummy.value = 'gabriel.salinas@protonmail.com';
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    tooltip.innerHTML = 'Email copied!';
    }

    function close_envelope(){
    $('#envelope').css('margin-top','0px')
    envelope.classList.remove('fa-envelope-open-text');
    envelope.classList.add('fa-envelope');

    setTimeout(function(){ $('#envelope').css('transition','500ms ease-in-out') }, 200);
    }

    function show_envelope(){
    envelope.classList.remove('fa-envelope-open');
    envelope.classList.add('fa-envelope-open-text');
    }

    function retrieve_msg(){
    setTimeout(function(){
        tooltip.innerHTML = "Let's talk";
    },200);
    }
} // END of copy_email functions


/**@abstract
 * 
 * Tooltip might have "visibility = hidden" if the email btn was clicked 
 * if it's the case remove all styles in html tag.
 * 
 */
envelope.addEventListener('mouseover', function(){
    var tooltip = document.getElementById('two');
    if(tooltip.style.cssText != null){ tooltip.style.cssText = null }
    if(tooltip.innerHTML != "Let's talk"){ tooltip.innerHTML = "Let's talk" } 
});