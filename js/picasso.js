(function() {
  $(function() {

    /*  Globals
    -------------------------------------------------- */
    var PROPERTIES =               ['translateX', 'translateY', 'opacity', 'rotate', 'scale', 'filter'],
        $window =                  $(window),
        $body =                    $('body'),
        wrappers =                 [],
        currentWrapper =           null,
        scrollTimeoutID =          0,
        bodyHeight =               0,
        windowHeight =             0,
        windowWidth =              0,
        prevKeyframesDurations =   0,
        scrollTop =                0,
        relativeScrollTop =        0,
        currentKeyframe =          0,
        keyframes = [
          {
            'wrapper' : '#intro',
            'duration' : '200%',
            'animations' :  [
              {
                'selector'    : '.name',
                'translateY'  : -140,
                'opacity'     : 0
              } , {
                'selector'    : '.byline',
                'translateY'  : -110,
                'opacity'     : 0
              } , {
                'selector'    : '.twitter',
                'opacity'     : [1, 0]
              }
            ]
          } ,{
            'wrapper' : '#intro',
            'duration' : '300%',
            'animations' :  [
              {
                'selector'    : '.bamboobg',
                'translateY'  : ['100%', '-5%'],
                'opacity'     : [0, 1] // hack to accelrate opacity speed
              } , {
                'selector'    : '.background',
                'filter'      : '0%'
              }
            ]
          } , {
            'wrapper' : '#explosion',
            'duration' : '300%',
            'animations' :  [
                  {
                'selector'    : '#explosiontitle',
                'translateX'  : ['0%', '50%'],
                'opacity'     : [0, 1] // hack to accelrate opacity speed
              } , {
                'selector'    : '#domExplosionList',
                'translateY'  : '-20%',
                'opacity'     : [0, 1] // hack to accelrate opacity speed
              } 
            ]
          } , {
            'wrapper' : '#explosion',
            'duration' : '300%',
            'animations' :  [ 
              {
                'selector'    : '.dei-1',
                'translateY'  : '-15%',
                'translateX'  : '-10%',
                'opacity'     : [1, 0],
                'scale'       : 2,
              } , {
                'selector'    : '.dei-6',
                'translateY'  : '-1%',
                'translateX'  : '-7%',
                'opacity'     : [1, 0], // hack to decelrate opacity speed
                'scale'       : 1.2,
              } ,  {
                'selector'    : '.dei-16',
                'translateY'  : '6%',
                'translateX'  : '9%',
                'opacity'     : [1, 0], // hack to accelrate opacity speed
                'scale'       : 2,
              }
            ]
          } , {
            'wrapper' : '#explosion',
            'duration' : '200%',
            'animations' :  [
             {
                'selector'    : '#explosiontitle',
                'translateX'  : ['34%', '0%'],
                'opacity'     : [1, 0] // hack to accelrate opacity speed
              } 
            ]
          } , {
            'wrapper' : '#images',
            'duration' : '200%',
            'animations' :  []
          }, {
            'wrapper' : '#images',
            'duration' : '100%',
            'animations' :  [
              {
                'selector'    : '.images-byline',
                'translateY'  : '-25%',
                'opacity'     : [0, 1.75] // hack to accelrate opacity speed
              } , {
                'selector'    : '#mgs',
                'translateY'  : '-75%'
              }
            ]
          }, {
            'wrapper' : '#images',
            'duration' : '200%',
            'animations' :  [
              {
                'selector'    : '#mgs',
                'translateY'  : ['-75%', '-70%'],
              } , {
                'selector'    : '#bullet',
                'opacity'    : 1,
                'translateY'  : '-105%',
                'translateX'  : '-105%',
                'rotate'      : -10 
              }
            ]
          } , {
            'wrapper' : '#images',
            'duration' : '500%',
            'animations' :  [
             {
                'selector'    : '#mgs',
                'translateY'  : ['-70%', '5%'],
                'scale'       : [1, 1.3],
                'opacity'     : [1 ,0],
                'rotate'      : 90 
              } , {
                'selector'    : '.images-byline',
                'translateY'  : ['-25%', '5%'],
                'opacity'     : [1.75, 0] // hack to accelrate opacity speed
              }
            ]
          } , {
            'wrapper' : '#images2',
            'duration' : '200%',
            'animations' :  [
              {
                'selector'    : '.bamboobg',
                'translateY'  : ['-5%', '100%'],
                'opacity'     : [1, 0] // hack to accelrate opacity speed
              }, {
                'selector'    : '#che',
                'translateX'  : ['-30%', '35%'],
                'scale'       : [.75, 1.2],
                'opacity'     : 1 
              } , {
                'selector'    : '#fans',
                'translateY'  :  ['-100%', '0%'],
                'opacity'     : [.75, 1], // hack to accelrate opacity speed
                'filter'      : '.1'
              } , {
                'selector'    : '#grass',
                'translateY'  : ['25%', '0%'],
                'opacity'     : [0, 1] // hack to accelrate opacity speed
              }, {
                'selector'    : '.images-byline2',
                'translateY'  : ['-25%', '5%'],
                'opacity'     : [1, 0] // hack to accelrate opacity speed
              }
            ]
          } , {
            'wrapper' : '#images2',
            'duration' : '100%',
            'animations' :  []
          } , {
            'wrapper' : '#images2',
            'duration' : '200%',
            'animations' :  [
               {
                'selector'    : '#che',
                'translateX'  : ['35%', '-35%'],
                'scale'       : [1.2, 1.4],
                'opacity'     :  1
              } 
            ]
          }  ,{
            'wrapper' : '#images2',
            'duration' : '200%',
            'animations' :  [
              {
                'selector'    : '.background',
                'opacity'     : 0 // hack to accelrate opacity speed
              } ,{
                'selector'    : '.backgroundtwo',
                'opacity'     : [0, 1] // hack to accelrate opacity speed
              } , {
                'selector'    : '#grass',
                'translateY'  : ['0%', '250%'],
                'opacity'     : [1, 0] // hack to accelrate opacity speed
              },
            ]
          }  , {
            'wrapper' : '#links',
            'duration' : '200%',
            'animations' :  [
                 {
                'selector'    : '#links',
                'opacity'     : [0, 2],
                'scale'       : [.8, 1]
              } 
            ]
          } , {
            'wrapper' : '#links',
            'duration' : '200%',
            'animations' :  [
                {
                'selector'    : '#reference',
                'opacity'     : [0, 1]
              }
              ]
          }
        ]

    /*  Construction
    -------------------------------------------------- */
    init = function() {
      scrollIntervalID = setInterval(updatePage, 10);
      setupValues();
      $window.resize(throwError)
      if(isTouchDevice) {
        $window.resize(throwError)
      }
    }

    setupValues = function() {
      scrollTop = $window.scrollTop();
      windowHeight = $window.height();
      windowWidth = $window.width();
      convertAllPropsToPx();
      buildPage();
    }

    buildPage = function() {
      var i, j, k;
      for(i=0;i<keyframes.length;i++) { // loop keyframes
          bodyHeight += keyframes[i].duration;
          if($.inArray(keyframes[i].wrapper, wrappers) == -1) {
            wrappers.push(keyframes[i].wrapper);
          }
          for(j=0;j<keyframes[i].animations.length;j++) { // loop animations
            Object.keys(keyframes[i].animations[j]).forEach(function(key) { // loop properties
              value = keyframes[i].animations[j][key];
              if(key !== 'selector' && value instanceof Array === false) {
                var valueSet = [];
                valueSet.push(getDefaultPropertyValue(key), value);
                value = valueSet;
              }
              keyframes[i].animations[j][key] = value;
            });
          }
      }
      $body.height(bodyHeight);
      $window.scroll(0);
      currentWrapper = wrappers[0];
      $(currentWrapper).show();
    }

    convertAllPropsToPx = function() {
      var i, j, k;
      for(i=0;i<keyframes.length;i++) { // loop keyframes
        keyframes[i].duration = convertPercentToPx(keyframes[i].duration, 'y');
        for(j=0;j<keyframes[i].animations.length;j++) { // loop animations
          Object.keys(keyframes[i].animations[j]).forEach(function(key) { // loop properties
            value = keyframes[i].animations[j][key];
            if(key !== 'selector') {
              if(value instanceof Array) { // if its an array
                for(k=0;k<value.length;k++) { // if value in array is %
                  if(typeof value[k] === "string") {
                    if(key === 'translateY') {
                      value[k] = convertPercentToPx(value[k], 'y');
                    } else {
                      value[k] = convertPercentToPx(value[k], 'x');
                    }
                  }
                } 
              } else {
                if(typeof value === "string") { // if single value is a %
                  if(key === 'translateY') {
                    value = convertPercentToPx(value, 'y');
                  } else {
                    value = convertPercentToPx(value, 'x');
                  }
                }
              }
              keyframes[i].animations[j][key] = value;
            }
          });
        }
      }
    }

    getDefaultPropertyValue = function(property) {
      switch (property) {
        case 'translateX':
          return 0;
        case 'translateY':
          return 0;
        case 'scale':
          return 1;
        case 'rotate':
          return 0;
        case 'opacity':
          return 1;
        default:
          return null;
      }
    }

    /*  Animation/Scrolling
    -------------------------------------------------- */
    updatePage = function() {
      window.requestAnimationFrame(function() {
        setScrollTops();
        if(scrollTop > 0 && scrollTop <= (bodyHeight - windowHeight)) {
          animateElements();
          setKeyframe();
        }
      });
    }

    setScrollTops = function() {
      scrollTop = $window.scrollTop();
      relativeScrollTop = scrollTop - prevKeyframesDurations;
    }

    animateElements = function() {
      var animation, translateY, translateX, scale, rotate, opacity, filter;
      for(var i=0;i<keyframes[currentKeyframe].animations.length;i++) {
        animation   = keyframes[currentKeyframe].animations[i];
        translateY  = calcPropValue(animation, 'translateY');
        translateX  = calcPropValue(animation, 'translateX');
        scale       = calcPropValue(animation, 'scale');
        rotate      = calcPropValue(animation, 'rotate');
        opacity     = calcPropValue(animation, 'opacity');
        filter     = calcPropValue(animation, 'filter');


        $(animation.selector).css({
          'transform':    'translate3d(' + translateX +'px, ' + translateY + 'px, 0) scale('+ scale +') rotate('+ rotate +'deg)',
          'opacity' : opacity,
        })

        $(animation.selector).css({
          '-webkit-filter'  : 'grayscale('+ filter +')',
          '-moz-filter'     :  'grayscale('+ filter +')',
          'filter'     :  'grayscale(' + filter +')'
        })
      }
    }

    calcPropValue = function(animation, property) {
      var value = animation[property];
      if(value) {
        value = easeInOutQuad(relativeScrollTop, value[0], (value[1]-value[0]), keyframes[currentKeyframe].duration);
      } else {
        value = getDefaultPropertyValue(property);
      }
      // value = +value.toFixed(2) 
      // TEMPORARILY REMOVED CAUSE SCALE DOESN'T WORK WITHA AGRESSIVE ROUNDING LIKE THIS
      return value;
    }

    easeInOutQuad = function (t, b, c, d) {
      //sinusoadial in and out
      return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    };

    setKeyframe = function() {
      if(scrollTop > (keyframes[currentKeyframe].duration + prevKeyframesDurations)) {
          prevKeyframesDurations += keyframes[currentKeyframe].duration;
          currentKeyframe++;
          showCurrentWrappers();
      } else if(scrollTop < prevKeyframesDurations) {
          currentKeyframe--;
          prevKeyframesDurations -= keyframes[currentKeyframe].duration;
          showCurrentWrappers();
      }
    }

    showCurrentWrappers = function() {
      var i;
      if(keyframes[currentKeyframe].wrapper != currentWrapper) {
        $(currentWrapper).hide();
        $(keyframes[currentKeyframe].wrapper).show();
        currentWrapper = keyframes[currentKeyframe].wrapper;
      }
    }

    /*  Helpers
    -------------------------------------------------- */

    convertPercentToPx = function(value, axis) {
      if(typeof value === "string" && value.match(/%/g)) {
        if(axis === 'y') value = (parseFloat(value) / 100) * windowHeight;
        if(axis === 'x') value = (parseFloat(value) / 100) * windowWidth;
      }
      return value;
    }

    throwError = function() {
      $body.addClass('page-error')
    }

    isTouchDevice = function() {
      return 'ontouchstart' in window // works on most browsers 
      || 'onmsgesturechange' in window; // works on ie10
    }

    init();

  })
}).call(this);