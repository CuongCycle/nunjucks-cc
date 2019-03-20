import BrowserSizeController from '../helper/browser-size-controller';

const HomePage = $el => {
  if ($el.length > 0) {
    // example
    new BrowserSizeController({
      onSmartphone: function() {
        $el.css({
          background: 'pink',
        });
      },
      onTablet: function() {
        $el.css({
          background: 'orange',
        });
      },
      onDesktop: function() {
        $el.css({
          background: 'lightblue',
        });
      },
    });
  }
};

export default HomePage;
