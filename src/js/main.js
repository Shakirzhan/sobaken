import 'focus-visible';
import lazyImages from './modules/lazyImages';
import documentReady from './helpers/documentReady';
import $ from "jquery";

documentReady(() => {
  lazyImages();

  $('.catalog-item__button').on('click', e => {
    $(e.currentTarget).addClass('catalog-item__button--approve')
    $(".notification").fadeIn('slow')
    setTimeout(() => {
      $(".notification").fadeOut('slow')
    }, 500)
  })

  $('.question-button').on('click', e => {
    const questionItem = $(e.currentTarget).parents('.question-item')

    if(questionItem.hasClass('question-item--open')) {
      questionItem.removeClass('question-item--open')
    } else {
      questionItem.addClass('question-item--open')
    }
  })
});
