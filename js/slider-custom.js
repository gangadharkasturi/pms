var tpj=jQuery;         
      var revapi34;
      tpj(document).ready(function() {
        if(tpj("#rev_slider_home").revolution == undefined){
          revslider_showDoubleJqueryError("#rev_slider_home");
        }else{
          revapi34 = tpj("#rev_slider_home").show().revolution({
            sliderType:"standard",
            jsFileLocation:"js/revolution-slider/js/",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:2500,
            navigation: {
              keyboardNavigation:"on",
              keyboard_direction: "horizontal",
              mouseScrollNavigation:"off",
              onHoverStop:"on",
              touch:{
                touchenabled:"on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
              }
              ,
              arrows: {
                style:"zeus",
                enable:true,
                hide_onmobile:true,
                hide_under:600,
                hide_onleave:true,
                hide_delay:200,
                hide_delay_mobile:1200,
                tmp:'',
                left: {
                  h_align:"left",
                  v_align:"center",
                  h_offset:30,
                  v_offset:0
                },
                right: {
                  h_align:"right",
                  v_align:"center",
                  h_offset:30,
                  v_offset:0
                }
              },
              bullets: {
                enable:false,
                hide_onmobile:false,
                hide_under:600,
                style:"metis",
                hide_onleave:false,
                hide_delay:200,
                hide_delay_mobile:1200,
                direction:"horizontal",
                h_align:"center",
                v_align:"bottom",
                h_offset:0,
                v_offset:30,
                space:5,
                tmp:''
              }
            },
            viewPort: {
              enable:true,
              outof:"pause",
              visible_area:"80%"
            },
            responsiveLevels:[1140,1024,778,480],
            gridwidth:[1140,1024,778,480],
            gridheight:[450,350,220,150],
            lazyType:"none",
            parallax: {
              type:"scroll",
              origo:"enterpoint",
              speed:400,
              levels:[5,10,15,20,25,30,35,40,45,50],
            },
            shadow:0,
            spinner:"off",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:"off",
              nextSlideOnWindowFocus:"off",
              disableFocusListener:false,
            }
          });
        }
      }); /*ready*/