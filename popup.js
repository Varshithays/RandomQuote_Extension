function showNextQuote() {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        const quote = `"${data.content}"\n- ${data.author}`;
        const quoteEl = document.getElementById('quote');
        quoteEl.innerText = quote;
        const quoteHeight = quoteEl.offsetHeight;
        const popupHeight = quoteHeight + 100; // add some extra padding
        const popupEl = document.getElementsByTagName('body')[0];
        popupEl.style.height = `${popupHeight}px`;
        startCountdown();
      })
      .catch(error => {
        console.log(error);
        document.getElementById('quote').innerText = 'An error occurred. Please try again later.';
      });
  }
  
  function startCountdown() {
    const countdownEl = document.getElementById('countdown');
    countdownEl.innerText = 'Next quote in 5 seconds';
    let countdown = 5;
    const countdownInterval = setInterval(() => {
      countdown--;
      countdownEl.innerText = `Next quote in ${countdown} seconds`;
      if (countdown === 0) {
        clearInterval(countdownInterval);
        showNextQuote();
      }
    }, 1000);
  }
  
  showNextQuote();
  