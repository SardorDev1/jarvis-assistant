document.addEventListener('DOMContentLoaded',() => {
    let wrap = document.querySelector('.wrap')
const refresh = document.querySelector('#refresh')
const h1 = document.querySelector('#h1'),
    h2 = document.querySelector('#h2'),
    h3 = document.querySelector('#h3'),
    h4 = document.querySelector('#h4'),
    h5 = document.querySelector('#h5'),
    h6 = document.querySelector('#h6'),
    h7 = document.querySelector('#h7'),
    h8 = document.querySelector('#h8'),
    h9 = document.querySelector('#h9'),
    h10 = document.querySelector('#h10'),
      h11 = document.querySelector('#h11'),
      h12 = document.querySelector('#h12'),
      h13 = document.querySelector('#h13'),
      h14 = document.querySelector('#h14');
 
const myAudio = document.querySelector('#musicdancin');
const myAudio2 = document.querySelector('#musicicf');
const myAudio3 = document.querySelector('#musicdf');
const myAudio4 = document.querySelector('#musicli');
const myAudio5 = document.querySelector('#musicmlt');
const myAudio6 = document.querySelector('#musicfm');
const myAudio7 = document.querySelector('#musicml');

const myAudio8= document.querySelector('#musicun');
const myAudio9 = document.querySelector('#musicgs');
const myAudio10 = document.querySelector('#musicbib');
const loader = document.querySelector('.preloader');
const loaderimg = document.querySelector('.loaderimg');
const loaderbox = document.querySelector('.laoder');
const searchbar = document.querySelector('.searchbar');

setTimeout(() => {
   setTimeout(() => {
    loader.style.display="none"
    loaderimg.style.display="none"
    loaderbox.style.display="none"
   }, 1500); 
   loader.style.opacity="0"
},2000 );
setTimeout(() => {
    var alanBtnInstance = alanBtn({
        key: "d6fb9dcbdb4bb853647bc516eb2998242e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: function (commandData) {
            if (commandData.command === "playingdancin") {
    
              
                setTimeout(() => {
                    wrap.style.display = "flex"
                }, 500);
    
    
                myAudio.play();
            }
                                      else if (commandData.command === "stop") {
                setTimeout(() => {
                    wrap.style.display = "none"
                }, 500);
    
                myAudio.pause();
    
            }
                           if (commandData.command === "musicicf") {
                setTimeout(() => {
                    wrap.style.display = "flex"
                }, 500);
    
                myAudio2.play();
            }
    
    
                                    else if (commandData.command === "stop") {
                setTimeout(() => {
                    wrap.style.display = "none"
                }, 500);
    
                myAudio2.pause();
            }
                   if (commandData.command === "musicdf") {
                setTimeout(() => {
                    wrap.style.display = "flex"
                }, 500);
                myAudio3.play();
            }
                                           else if (commandData.command === "stop") {
                setTimeout(() => {
                    wrap.style.display = "none"
                }, 500);
    
                myAudio3.pause();
            }
                                  if (commandData.command === "musicli") {
                setTimeout(() => {
                    wrap.style.display = "flex"
                }, 500);
                myAudio4.play();
    
            }
                                                else if (commandData.command === "stop") {
                setTimeout(() => {
                    wrap.style.display = "none"
                }, 500);
    
                myAudio4.pause();
            }
                                   if (commandData.command === "musicmlt") {
                setTimeout(() => {
                    wrap.style.display = "flex"
                }, 500);
                myAudio5.play();
            }
                                                else if (commandData.command === "stop") {
                setTimeout(() => {
                    wrap.style.display = "none"
                }, 500);
    
                myAudio5.pause();
            }
                                     if (commandData.command === "musicfm") {
                setTimeout(() => {
                    wrap.style.display = "flex"
                }, 500);
                myAudio6.play();
            }
                   else if (commandData.command === "stop") {
                setTimeout(() => {
                    wrap.style.display = "none"
                }, 500);
    
                myAudio6.pause();
            }
    
                      if (commandData.command === "musicml") {
                setTimeout(() => {
                    wrap.style.display = "flex"
                }, 500);
                myAudio7.play();
            }
                                     else if (commandData.command === "stop") {
                setTimeout(() => {
                    wrap.style.display = "none"
                }, 500);
    
                myAudio7.pause();
            }
            if (commandData.command === "musicun") {
                setTimeout(() => {
                    wrap.style.display = "flex"
                }, 500);
    
                myAudio8.play();
            }
            else if (commandData.command === "stop") {
                setTimeout(() => {
                    wrap.style.display = "none"
                }, 500);
    
                myAudio8.pause();
            }
            if (commandData.command === "musicgs") {
                setTimeout(() => {
                    wrap.style.display = "flex"
                }, 500);
    
                myAudio9.play();
            }
            else if (commandData.command === "stop") {
                setTimeout(() => {
                    wrap.style.display = "none"
                }, 500);
    
                myAudio9.pause();
            }
            if (commandData.command === "musicbib") {
                setTimeout(() => {
                    wrap.style.display = "flex"
                }, 500);
    
                myAudio10.play();
            }
            else if (commandData.command === "stop") {
                setTimeout(() => {
                    wrap.style.display = "none"
                }, 500);
    
                myAudio10.pause();
            }
                                          if (commandData.command === "refresh") {
                                    refresh.click()
              }
                           if (commandData.command === "h1") {
                            searchbar.style.display="flex"      
                            setTimeout(() => {
                                        h1.click()
                                     }, 2500);
            }
    
                               if (commandData.command === "h2") {
                                searchbar.style.display="flex"     
                                setTimeout(() => {
                            h2.click()
                          }, 1500);
            }
                                                       if (commandData.command === "h3") {
                                                        searchbar.style.display="flex"     
                                                        setTimeout(() => {
                            h3.click()
                          }, 1500);
            }
    
                    if (commandData.command === "h4") {
                        searchbar.style.display="flex"     
                        setTimeout(() => {
                                        h4.click()
                                     },    1500);
            }
    
                                     if (commandData.command === "h5") {
                                        searchbar.style.display="flex"     
                                        setTimeout(() => {
                        h5.click()
                      }, 1500);
            }
    
                                                if (commandData.command === "h6") {
                                                    searchbar.style.display="flex"     
                                                    setTimeout(() => {
                                h6.click()
                               }, 1500);
               }
                   if (commandData.command === "h7") {
                    searchbar.style.display="flex"       
                    setTimeout(() => {
                            h7.click()
                           }, timeout);
            }
                       if (commandData.command === "h8") {
                        searchbar.style.display="flex"      
                        setTimeout(() => {
                                        h8.click()
                                      }, 1500);
            }
                                             if (commandData.command === "h9") {
                                  setTimeout(() => {
                                       h9.click()
                                  }, 1500);
            }
                           if (commandData.command === "h10") {
                            searchbar.style.display="flex"     
                            setTimeout(() => {
                                        h10.click()
                                      }, 1500);
            }
    
            if (commandData.command === "h11") {
                searchbar.style.display="flex"     
                setTimeout(() => {
                h11.click()
             }, 1500);
}
if (commandData.command === "h12") {
    searchbar.style.display="flex"     
    setTimeout(() => {
    h12.click()

   }, 1500);
}
if (commandData.command === "h13") {
    searchbar.style.display="flex"     
    setTimeout(() => {
    h13.click()
   }, 1500);
}
if (commandData.command === "h14") {
    searchbar.style.display="flex"     
    setTimeout(() => {
    h14.click()
   }, 1500);
}
    

    
    
    
    
    
        },
        rootEl: document.getElementById("alan-btn"),
    }); 
}, 2700);
})