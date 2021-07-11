function sound_one(){
    var git = document.getElementById('git');
    git.play();
  }

  function sound_two(){
    var linked = document.getElementById("linked");
    linked.play();
  };

  function sound_three(){
    var stack = document.getElementById('stack');
    stack.play();
  }

  function sound_four(){
    var tweet = document.getElementById('tweet');
    tweet.play();
  }

  function page_sound(){
    var page = document.getElementById('page');
    page.play();
  }

  function animate_envelope(){

    var mail = document.getElementById('mail-audio');
    var tooltip = document.getElementById('tooltip-three');
    var email = 'gabriel.salinas@protonmail.com';

    // Copy email to clipboard
    copyToClipboard();

    // Start fresh: clean styles on html tag
    tooltip.style.cssText = null;

    envelope.addEventListener('mouseout', retrieve_msg);

    // Play audio
    mail.play();

    // Icon animation

    
    $('#envelope').css('transition','none');
    $('#envelope').removeClass('fa-envelope');
    $('#envelope').css('margin-top','-5px');
    $('#envelope').addClass('fa-envelope-open');
    setTimeout(show_envelope, 300);
    setTimeout(close_envelope, 1000);

    // Hide and set tooltip to default
    setTimeout(hide_tooltip, 1000);
    setTimeout(retrieve_msg, 1000);

    function hide_tooltip(){
      tooltip.style.opacity = '0';
    }

    function copyToClipboard() {
      var dummy = document.createElement("textarea");
      document.body.appendChild(dummy); 
      dummy.value = 'g.szada@gmail.com';
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

  }

  envelope.addEventListener('mouseover', function(){
    
    var tooltip = document.getElementById('tooltip-three');
    
    // Tooltip might have "visibility = hidden" if the email btn was clicked 
    // if it's the case remove all styles in html tag
    if(tooltip.style.cssText != null){
      tooltip.style.cssText = null;
    }
    if(tooltip.innerHTML != "Let's talk"){
      tooltip.innerHTML = "Let's talk";
    }

  });