/**
 * import main Posters Slider function
 */
import createPostersSlider from './posters-slider.js';

/**
 * import all other functions
 */

import './sparkle.js';


/**
 * import Posters Slider styles
 */
import './posters-slider.scss';
/**
 * Custom local styles
 */
import "./main.scss";

/**
 * Posters Slider element
 */
const sliderEl = document.querySelector('.posters-slider');

/**
 * Init Posters Slider
 *
 * argument: pass .posters-slider element
 */
createPostersSlider(sliderEl);

// Assuming 'quest' is the DOM element representing the quest item
quest.classList.add('completed');


function fetchQuestItems() {
    fetch('/api/quest-items')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error fetching quest items:', error));
  }


  document.addEventListener('DOMContentLoaded', () => {
    // Your existing code here
  
    fetchQuestItems();
  });
  