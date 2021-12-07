import 'focus-visible';
import lazyImages from './modules/lazyImages';
import documentReady from './helpers/documentReady';
import $ from "jquery";

documentReady(() => {
  lazyImages();

  $('.catalog-item__button').on('click', () => {
    
  })
});
