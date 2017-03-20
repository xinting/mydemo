;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xiangyou" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M349.5284 931.0338 288.0295 869.6104l386.4838-385.9333L288.0295 97.7437l61.4988-61.4224 448.0066 447.3567L349.5284 931.0338z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangzuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M744.648153 142.774751c17.845437-18.047028 17.845437-47.220465 0-65.204048-17.784038-17.983583-46.688345-17.983583-64.533782 0L283.508517 479.385185c-17.847483 18.052145-17.847483 47.15702 0 65.205071l396.599713 401.814482c17.851577 17.98256 46.688345 18.052145 64.533782 0 17.851577-18.048051 17.851577-47.284933 0.071631-65.205071L393.994887 511.958044 744.648153 142.774751 744.648153 142.774751 744.648153 142.774751zM744.648153 142.774751"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-apple" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M791.487729 544.095473c-1.279999-129.695874 105.759898-191.871814 110.527893-194.975811-60.159942-88.031915-153.855851-100.063903-187.231819-101.471902-79.743923-8.063992-155.583849 46.943955-196.06381 46.943955-40.351961 0-102.8159-45.759956-168.959836-44.543957-86.911916 1.279999-167.071838 50.527951-211.807795 128.383876-90.303913 156.703848-23.135978 388.831623 64.895937 515.9355 43.007958 62.20794 94.303909 132.063872 161.631843 129.567874 64.831937-2.591997 89.375913-41.951959 167.743837-41.951959s100.415903 41.951959 169.055836 40.671961c69.759932-1.311999 113.98389-63.391939 156.703848-125.791878 49.375952-72.15993 69.727932-142.047862 70.911931-145.631859-1.535999-0.703999-136.063868-52.223949-137.407867-207.135799zM662.559854 163.519842c35.743965-43.359958 59.871942-103.5199 53.279948-163.519842-51.48795 2.111998-113.88789 34.303967-150.815854 77.535925-33.151968 38.367963-62.14394 99.615903-54.367947 158.431847 57.471944 4.479996 116.127888-29.215972 151.903853-72.44793z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M559.8 512 808 263.8c13.2-13.2 13.2-34.6 0-47.8-13.2-13.2-34.6-13.2-47.8 0L512 464.2 263.8 216c-13.2-13.2-34.6-13.2-47.8 0-13.2 13.2-13.2 34.6 0 47.8L464.2 512 216 760.2c-13.2 13.2-13.2 34.6 0 47.8 6.6 6.6 15.2 9.9 23.9 9.9 8.6 0 17.3-3.3 23.9-9.9L512 559.8 760.2 808c6.6 6.6 15.2 9.9 23.9 9.9 8.6 0 17.3-3.3 23.9-9.9 13.2-13.2 13.2-34.6 0-47.8L559.8 512z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-s" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M862.71671 1019.416612 193.694467 1019.416612c-27.101241 0-49.157583-22.056342-49.157583-49.157583L144.536884 320.885288c0-27.101241 22.056342-49.157583 49.157583-49.157583l669.022243 0c27.101241 0 49.157583 22.056342 49.157583 49.157583l0 649.372717C911.874293 997.36027 889.817951 1019.416612 862.71671 1019.416612zM193.694467 320.486198l-0.399089 649.77283 669.421332 0.399089c0.217964 0 0.399089-0.181125 0.399089-0.399089L863.115799 320.885288 193.694467 320.486198z"  ></path>' +
    '' +
    '<path d="M276.608875 299.04691l-49.339732-4.743024C243.191788 128.512932 374.670262 3.494591 533.10569 3.494591c153.426345 0 284.409538 120.589472 304.699654 280.501532l-49.169863 6.243191C771.491009 155.021679 661.632949 53.052287 533.10569 53.052287 400.332734 53.052287 290.063305 158.808936 276.608875 299.04691z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibiaoti1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M118.279 336.402h754.531v68.618h-754.531v-68.618z"  ></path>' +
    '' +
    '<path d="M118.279 647.52h754.531v68.618h-754.531v-68.618z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-hanbaobao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M362.474498 627.133204M73.591065 278.392498c-29.520337 0-53.537334-24.016996-53.537334-53.53631 0-29.520337 24.016996-53.537334 53.537334-53.537334l876.816846 0c29.521361 0 53.537334 24.016996 53.537334 53.537334 0 29.519314-24.015973 53.53631-53.537334 53.53631L73.591065 278.392498zM73.591065 592.350003c-29.520337 0-53.537334-24.01802-53.537334-53.541427 0-29.520337 24.016996-53.537334 53.537334-53.537334l876.816846 0c29.521361 0 53.537334 24.016996 53.537334 53.537334 0 29.523407-24.015973 53.541427-53.537334 53.541427L73.591065 592.350003zM73.591065 903.797337c-29.520337 0-53.537334-24.015973-53.537334-53.537334 0-29.521361 24.016996-53.537334 53.537334-53.537334l876.816846 0c29.521361 0 53.537334 24.015973 53.537334 53.537334 0 29.521361-24.015973 53.537334-53.537334 53.537334L73.591065 903.797337z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo_sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M873.244444 830.448485c6.852525 8.016162 10.214141 16.808081 10.214142 26.50505 0 10.860606-3.878788 20.169697-11.507071 27.79798-6.852525 7.111111-16.549495 11.636364-27.280808 11.636364h-0.646465c-4.525253 0-8.921212-0.775758-13.187878-2.19798-6.464646-2.19798-11.894949-5.818182-16.032324-10.731313l0.129293 0.90505-211.652525-213.20404c-50.812121 35.943434-107.70101 53.915152-170.537374 53.915151-6.335354 0-12.670707-0.258586-19.264646-0.775757-12.929293-1.163636-24.824242-3.232323-36.20202-6.335354-35.555556-2.456566-82.618182-22.49697-121.276768-52.622222-23.40202-13.834343-55.466667-47.709091-79.385859-89.987879-19.523232-32.711111-32.711111-71.369697-36.848484-112.743434 2.19798 25.341414-2.456566-3.232323-2.715152-32.969697 0.258586 10.214141 0 3.878788 0-2.456566 0-17.842424 1.551515-35.29697 4.654546-52.234343 7.49899-46.674747 26.505051-89.6 54.044444-125.672727 13.705051-25.6 57.276768-64.646465 109.381818-88.565657-27.151515 11.119192 1.034343-4.266667 32.064647-15.127273 28.444444-10.343434 61.284848-16.290909 95.547474-16.290909 13.705051 0 26.892929 0.905051 39.434344 2.585859 33.745455 4.525253 65.939394 14.868687 96.840404 30.771717 49.907071 25.987879 90.117172 64.646465 117.268687 111.838384-9.826263-22.238384 10.60202 10.860606 24.565656 49.131313s20.169697 77.058586 18.488889 116.363636c-2.327273 65.680808-24.824242 124.767677-67.749495 177.260606L874.020202 830.448485h-0.775758zM684.735354 439.208081c0.258586-3.878788 0.387879-8.274747 0.387878-12.8 0-32.452525-6.464646-63.353535-18.10101-91.539394-13.705051-36.20202-35.814141-68.137374-63.870707-93.608081 21.850505 20.945455 7.111111 5.171717-9.69697-8.791919-31.288889-26.246465-69.559596-45.252525-111.70909-53.785859 26.634343 4.525253-9.438384-4.008081-47.321213-4.008081-10.214141 0-20.29899 0.646465-30.125252 1.810101-1.680808-0.129293-4.525253 0.258586-7.111111 0.905051l-4.525253 0.775758c-46.157576 7.369697-87.014141 26.763636-120.113131 54.949495-24.824242 15.515152-57.535354 57.923232-74.60202 107.70101-2.068687-7.111111-13.705051 31.806061-15.773738 74.60202-1.939394 42.79596 5.818182 82.488889 23.531314 118.949495 21.591919 47.450505 56.630303 85.591919 100.331313 110.416161-0.129293 5.688889 44.606061 26.505051 93.995959 32.711111 1.551515 3.10303 38.4 5.171717 75.507071-1.163636 32.064646-5.818182 60.638384-16.937374 86.238384-32.452525 8.921212-1.680808 41.244444-26.505051 66.585858-57.147475-9.826263 16.420202 18.230303-18.230303 36.202021-58.440404-25.858586 46.028283-15.127273 29.608081-6.59394 12.024243 16.420202-31.547475 26.246465-68.783838 26.763637-108.218182v7.111111z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)