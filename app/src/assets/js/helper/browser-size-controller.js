class BrowserSizeController {
  constructor(options) {
    this.initBrowserSizeController(options);
  }

  initBrowserSizeController(options) {
    var defaults = {
      currentWidth: 0,
      currentHeight: 0,
      currentOrientation: null,
      newOrientation: null,
      onSmartphone: function() {
        $('html')
          .removeClass('desktop-view')
          .removeClass('tablet-view')
          .addClass('mobile-view');
      },
      onTablet: function() {
        $('html')
          .removeClass('desktop-view')
          .removeClass('mobile-view')
          .addClass('tablet-view');
      },
      onDesktop: function() {
        $('html')
          .removeClass('mobile-view')
          .removeClass('tablet-view')
          .addClass('desktop-view');
      },
    };
    var opts = $.extend(defaults, options);

    var win = $(window),
      layoutSmartphone = {
        minimumWidth: 0,
        maximumWidth: 767,
        orientation: 'smartphone',
      },
      layoutTablet = {
        minimumWidth: 768,
        maximumWidth: 1079,
        orientation: 'tablet',
      },
      layoutDesktop = {
        minimumWidth: 1080,
        maximumWidth: Number.POSITIVE_INFINITY,
        orientation: 'desktop',
      };

    function initialize() {
      opts.newOrientation = detectLayout();

      if (opts.currentOrientation == null) {
        handleCurrentLayoutChange(opts.newOrientation);
        opts.currentOrientation = opts.newOrientation;
      } else {
        if (opts.newOrientation != opts.currentOrientation) {
          handleCurrentLayoutChange(opts.newOrientation);
          opts.currentOrientation = opts.newOrientation;
        }
      }
    }

    function detectLayout() {
      let winWidth = win.width();
      var getLayout = null;

      if (winWidth >= layoutSmartphone.minimumWidth && winWidth <= layoutSmartphone.maximumWidth) {
        getLayout = layoutSmartphone.orientation;
      } else {
        if (winWidth >= layoutTablet.minimumWidth && winWidth <= layoutTablet.maximumWidth) {
          getLayout = layoutTablet.orientation;
        } else {
          getLayout = layoutDesktop.orientation;
        }
      }
      return getLayout;
    }

    function handleCurrentLayoutChange(layout) {
      switch (layout) {
        case 'smartphone':
          opts.onSmartphone();
          break;
        case 'tablet':
          opts.onTablet();
          break;
        case 'desktop':
          opts.onDesktop();
          break;
        default:
          break;
      }
    }

    initialize();

    $(window).resize(function() {
      opts.newOrientation = detectLayout();

      if (opts.newOrientation != opts.currentOrientation) {
        handleCurrentLayoutChange(opts.newOrientation);
        opts.currentOrientation = opts.newOrientation;
      }
    });
  }
}

export default BrowserSizeController;
