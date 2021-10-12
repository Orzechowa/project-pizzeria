import {templates, select} from '../settings.js';


class Home{
  constructor(element, activatePage){
    const thisHome = this;

    thisHome.render(element);
    thisHome.initWidgets();

    thisHome.activatePage = activatePage;

    thisHome.goToPage();
   
  }
  
  render(element){
    const thisHome = this;

    const generatedHTML = templates.homeWidget();

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    thisHome.dom.order = element.querySelector(select.home.order);
    thisHome.dom.booking = element.querySelector(select.home.book);

  }

  initWidgets(){
    const thisHome = this;

    setTimeout(() => {
      thisHome.element = document.querySelector('.main-carousel');
      thisHome.flkty = new Flickity(thisHome.element, {
        prevNextButtons: false,
        wrapAround: true,
        autoPlay: 3000,
        cellAlign: 'left',
        contain: true,
      });
    }, 2000);

    
  }

  goToPage(){
    const thisHome = this;
    
    thisHome.dom.order.addEventListener('click', function(){
      thisHome.activatePage('order');
    });
   
    thisHome.dom.booking.addEventListener('click', function(){
      thisHome.activatePage('booking');
    });
  }

 


}
export default Home;
