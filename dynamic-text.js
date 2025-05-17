// dynamic-text.js

document.addEventListener('DOMContentLoaded', function() {
  // Get sentences from the div content
  const dynamicTextElement = document.querySelector(".dynamic-text");
  
  // Extract sentences from the div text content
  const rawText = dynamicTextElement.textContent.trim();
  const sentences = rawText.split('\n')
                           .map(sentence => sentence.trim())
                           .filter(sentence => sentence.length > 0);
  
  console.log("Extracted sentences:", sentences);
  
  // Clear the original content
  dynamicTextElement.textContent = '';
  
  let currentIndex = 0;
  
  // Function to fade in text
  function fadeIn() {
    let opacity = 0;
    dynamicTextElement.textContent = sentences[currentIndex];
    dynamicTextElement.style.opacity = 0;
    
    const fadeInInterval = setInterval(function() {
      if (opacity < 1) {
        opacity += 0.05;
        dynamicTextElement.style.opacity = opacity;
      } else {
        clearInterval(fadeInInterval);
        // Wait for 2 seconds before fading out
        setTimeout(fadeOut, 3000);
      }
    }, 50);
  }
  
  // Function to fade out text
  function fadeOut() {
    let opacity = 1;
    
    const fadeOutInterval = setInterval(function() {
      if (opacity > 0) {
        opacity -= 0.05;
        dynamicTextElement.style.opacity = opacity;
      } else {
        clearInterval(fadeOutInterval);
        // Move to next sentence
        currentIndex = (currentIndex + 1) % sentences.length;
        // Fade in the next sentence
        fadeIn();
      }
    }, 50);
  }
  
  // Start the animation cycle
  fadeIn();
});
