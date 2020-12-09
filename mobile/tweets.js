/*********************************************************************
    *  #### Twitter Post Fetcher v18.0.4 ####
    *  Coded by Jason Mayes 2015. A present to all the developers out there.
    *  www.jasonmayes.com
    *  Please keep this disclaimer with my code if you use it. Thanks. :-)
    *  Got feedback or questions, ask here:
    *  http://www.jasonmayes.com/projects/twitterApi/
    *  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
    *  Updates will be posted to this site.
    *********************************************************************/
   !function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():t()}(0,function(){var e="",t=20,i=!0,n=[],a=!1,l=!0,s=!0,r=null,o=!0,c=!0,m=null,d=!0,p=!1,u=!1,g=!0,h=!0,w=!1,f=null;function b(e){return e.replace(/<b[^>]*>(.*?)<\/b>/gi,function(e,t){return t}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function v(e){for(var t=e.getElementsByTagName("a"),i=t.length-1;i>=0;i--)t[i].setAttribute("target","_blank"),t[i].setAttribute("rel","noopener")}function _(e,t){for(var i=[],n=new RegExp("(^| )"+t+"( |$)"),a=e.getElementsByTagName("*"),l=0,s=a.length;l<s;l++)n.test(a[l].className)&&i.push(a[l]);return i}function y(e){if(void 0!==e&&e.innerHTML.indexOf("data-image")>=0){for(var t=e.innerHTML.match(/data-image=\"([^"]+)\"/gi),i=0;i<t.length;i++)t[i]=t[i].match(/data-image=\"([^"]+)\"/i)[1],t[i]=decodeURIComponent(t[i])+".jpg";return t}}var T={fetch:function(o){if(void 0===o.maxTweets&&(o.maxTweets=20),void 0===o.enableLinks&&(o.enableLinks=!0),void 0===o.showUser&&(o.showUser=!0),void 0===o.showTime&&(o.showTime=!0),void 0===o.dateFunction&&(o.dateFunction="default"),void 0===o.showRetweet&&(o.showRetweet=!0),void 0===o.customCallback&&(o.customCallback=null),void 0===o.showInteraction&&(o.showInteraction=!0),void 0===o.showImages&&(o.showImages=!1),void 0===o.useEmoji&&(o.useEmoji=!1),void 0===o.linksInNewWindow&&(o.linksInNewWindow=!0),void 0===o.showPermalinks&&(o.showPermalinks=!0),void 0===o.dataOnly&&(o.dataOnly=!1),a)n.push(o);else{a=!0,e=o.domId,t=o.maxTweets,i=o.enableLinks,s=o.showUser,l=o.showTime,c=o.showRetweet,r=o.dateFunction,m=o.customCallback,d=o.showInteraction,p=o.showImages,u=o.useEmoji,g=o.linksInNewWindow,h=o.showPermalinks,w=o.dataOnly;var b=document.getElementsByTagName("head")[0];null!==f&&b.removeChild(f),(f=document.createElement("script")).type="text/javascript",void 0!==o.list?f.src="https://syndication.twitter.com/timeline/list?callback=__twttrf.callback&dnt=false&list_slug="+o.list.listSlug+"&screen_name="+o.list.screenName+"&suppress_response_codes=true&lang="+(o.lang||"en")+"&rnd="+Math.random():void 0!==o.profile?f.src="https://syndication.twitter.com/timeline/profile?callback=__twttrf.callback&dnt=false&screen_name="+o.profile.screenName+"&suppress_response_codes=true&lang="+(o.lang||"en")+"&rnd="+Math.random():void 0!==o.likes?f.src="https://syndication.twitter.com/timeline/likes?callback=__twttrf.callback&dnt=false&screen_name="+o.likes.screenName+"&suppress_response_codes=true&lang="+(o.lang||"en")+"&rnd="+Math.random():void 0!==o.collection?f.src="https://syndication.twitter.com/timeline/collection?callback=__twttrf.callback&dnt=false&collection_id="+o.collection.collectionId+"&suppress_response_codes=true&lang="+(o.lang||"en")+"&rnd="+Math.random():f.src="https://cdn.syndication.twimg.com/widgets/timelines/"+o.id+"?&lang="+(o.lang||"en")+"&callback=__twttrf.callback&suppress_response_codes=true&rnd="+Math.random(),b.appendChild(f)}},callback:function(f){if(void 0===f||void 0===f.body)return a=!1,void(n.length>0&&(T.fetch(n[0]),n.splice(0,1)));u||(f.body=f.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g,"")),p||(f.body=f.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g,"")),s||(f.body=f.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g,""));var k=document.createElement("div");function C(e){var t=e.getElementsByTagName("img")[0];if(t)t.src=t.getAttribute("data-src-2x");else{var i=e.getElementsByTagName("a")[0].getAttribute("href").split("twitter.com/")[1],n=document.createElement("img");n.setAttribute("src","https://twitter.com/"+i+"/profile_image?size=bigger"),e.prepend(n)}return e}k.innerHTML=f.body,void 0===k.getElementsByClassName&&(o=!1);var E=[],x=[],N=[],A=[],B=[],I=[],M=[],L=0;if(o)for(var j=k.getElementsByClassName("timeline-Tweet");L<j.length;)j[L].getElementsByClassName("timeline-Tweet-retweetCredit").length>0?B.push(!0):B.push(!1),(!B[L]||B[L]&&c)&&(E.push(j[L].getElementsByClassName("timeline-Tweet-text")[0]),I.push(j[L].getAttribute("data-tweet-id")),s&&x.push(C(j[L].getElementsByClassName("timeline-Tweet-author")[0])),N.push(j[L].getElementsByClassName("dt-updated")[0]),M.push(j[L].getElementsByClassName("timeline-Tweet-timestamp")[0]),void 0!==j[L].getElementsByClassName("timeline-Tweet-media")[0]?A.push(j[L].getElementsByClassName("timeline-Tweet-media")[0]):A.push(void 0)),L++;else for(j=_(k,"timeline-Tweet");L<j.length;)_(j[L],"timeline-Tweet-retweetCredit").length>0?B.push(!0):B.push(!1),(!B[L]||B[L]&&c)&&(E.push(_(j[L],"timeline-Tweet-text")[0]),I.push(j[L].getAttribute("data-tweet-id")),s&&x.push(C(_(j[L],"timeline-Tweet-author")[0])),N.push(_(j[L],"dt-updated")[0]),M.push(_(j[L],"timeline-Tweet-timestamp")[0]),void 0!==_(j[L],"timeline-Tweet-media")[0]?A.push(_(j[L],"timeline-Tweet-media")[0]):A.push(void 0)),L++;E.length>t&&(E.splice(t,E.length-t),x.splice(t,x.length-t),N.splice(t,N.length-t),B.splice(t,B.length-t),A.splice(t,A.length-t),M.splice(t,M.length-t));var H=[],P=(L=E.length,0);if(w)for(;P<L;)H.push({tweet:E[P].innerHTML,tweetText:E[P].textContent,author:x[P]?x[P].innerHTML:"Unknown Author",author_data:{profile_url:x[P]?x[P].querySelector('[data-scribe="element:user_link"]').href:null,profile_image:x[P]?"https://twitter.com/"+x[P].querySelector('[data-scribe="element:screen_name"]').title.split("@")[1]+"/profile_image?size=bigger":null,profile_image_2x:x[P]?"https://twitter.com/"+x[P].querySelector('[data-scribe="element:screen_name"]').title.split("@")[1]+"/profile_image?size=original":null,screen_name:x[P]?x[P].querySelector('[data-scribe="element:screen_name"]').title:null,name:x[P]?x[P].querySelector('[data-scribe="element:name"]').title:null},time:N[P].textContent,timestamp:N[P].getAttribute("datetime").replace("+0000","Z").replace(/([\+\-])(\d\d)(\d\d)/,"$1$2:$3"),image:y(A[P])?y(A[P])[0]:void 0,images:y(A[P]),rt:B[P],tid:I[P],permalinkURL:void 0===M[P]?"":M[P].href}),P++;else for(;P<L;){if("string"!=typeof r){var R=N[P].getAttribute("datetime"),F=new Date(N[P].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),S=r(F,R);if(N[P].setAttribute("aria-label",S),E[P].textContent)if(o)N[P].textContent=S;else{var q=document.createElement("p"),O=document.createTextNode(S);q.appendChild(O),q.setAttribute("aria-label",S),N[P]=q}else N[P].textContent=S}var U="";if(i?(g&&(v(E[P]),s&&v(x[P])),s&&(U+='<div class="user">'+b(x[P].innerHTML)+"</div>"),U+='<p class="tweet">'+b(E[P].innerHTML)+"</p>",l&&(U+=h?'<p class="timePosted"><a href="'+M[P]+'">'+N[P].getAttribute("aria-label")+"</a></p>":'<p class="timePosted">'+N[P].getAttribute("aria-label")+"</p>")):(E[P].textContent,s&&(U+='<p class="user">'+x[P].textContent+"</p>"),U+='<p class="tweet">'+E[P].textContent+"</p>",l&&(U+='<p class="timePosted">'+N[P].textContent+"</p>")),d&&(U+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+I[P]+'" class="twitter_reply_icon"'+(g?' target="_blank" rel="noopener">':">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+I[P]+'" class="twitter_retweet_icon"'+(g?' target="_blank" rel="noopener">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+I[P]+'" class="twitter_fav_icon"'+(g?' target="_blank" rel="noopener">':">")+"Favorite</a></p>"),p&&void 0!==A[P]&&void 0!==y(A[P]))for(var D=y(A[P]),$=0;$<D.length;$++)U+='<div class="media"><img src="'+D[$]+'" alt="Image from tweet" /></div>';p?H.push(U):!p&&E[P].textContent.length&&H.push(U),P++}!function(t){if(null===m){for(var i=t.length,n=0,a=document.getElementById(e),l="<ul>";n<i;)l+="<li>"+t[n]+"</li>",n++;l+="</ul>",a.innerHTML=l}else m(t)}(H),a=!1,n.length>0&&(T.fetch(n[0]),n.splice(0,1))}};return window.__twttrf=T,window.twitterFetcher=T,T}),[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach(function(e){e.hasOwnProperty("prepend")||Object.defineProperty(e,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach(function(e){var i=e instanceof Node;t.appendChild(i?e:document.createTextNode(String(e)))}),this.insertBefore(t,this.firstChild)}})});
    
    
   /**
    * ### HOW TO CREATE A VALID ID TO USE: ###
    * Go to www.twitter.com and sign in as normal, go to your settings page.
    * Go to "Widgets" on the left hand side.
    * Create a new widget for what you need eg "user time line" or "search" etc.
    * Feel free to check "exclude replies" if you don't want replies in results.
    * Now go back to settings page, and then go back to widgets page and
    * you should see the widget you just created. Click edit.
    * Look at the URL in your web browser, you will see a long number like this:
    * 345735908357048478
    * Use this as your ID below instead!
    */
   
   /**
    * How to use TwitterFetcher's fetch function:
    * 
    * @function fetch(object) Fetches the Twitter content according to
    *     the parameters specified in object.
    * 
    * @param object {Object} An object containing case sensitive key-value pairs
    *     of properties below.
    * 
    * You may specify at minimum the following two required properties:
    * 
    * @param object.id {string} The ID of the Twitter widget you wish
    *     to grab data from (see above for how to generate this number).
    * @param object.domId {string} The ID of the DOM element you want
    *     to write results to.
    *
    * You may also specify one or more of the following optional properties
    *     if you desire:
    *
    * @param object.maxTweets [int] The maximum number of tweets you want
    *     to return. Must be a number between 1 and 20. Default value is 20.
    * @param object.enableLinks [boolean] Set false if you don't want
    *     urls and hashtags to be hyperlinked.
    * @param object.showUser [boolean] Set false if you don't want user
    *     photo / name for tweet to show.
    * @param object.showTime [boolean] Set false if you don't want time of tweet
    *     to show.
    * @param object.dateFunction [function] A function you can specify
    *     to format date/time of tweet however you like. This function takes
    *     a JavaScript date as a parameter and returns a String representation
    *     of that date.
    * @param object.showRetweet [boolean] Set false if you don't want retweets
    *     to show.
    * @param object.customCallback [function] A function you can specify
    *     to call when data are ready. It also passes data to this function
    *     to manipulate them yourself before outputting. If you specify
    *     this parameter you must output data yourself!
    * @param object.showInteraction [boolean] Set false if you don't want links
    *     for reply, retweet and favourite to show.
    * @param object.showImages [boolean] Set true if you want images from tweet
    *     to show.
    * @param object.lang [string] The abbreviation of the language you want to use
    *     for Twitter phrases like "posted on" or "time ago". Default value
    *     is "en" (English).
    */
   
   
   var configProfile = {
     "profile": {"screenName": 'itsdailyff'},
     "domId": 'example1',
     "maxTweets": 10,
     "enableLinks": true, 
     "showUser": true,
     "showTime": true,
     "showImages": true,
     "lang": 'en'
   };
   twitterFetcher.fetch(configProfile);
   
   
   //var configLikes = {
    // "likes": {"screenName": 'jason_mayes'},
     //"domId": 'example2',
     //"maxTweets": 3,
     //"enableLinks": true, 
     //"showUser": true,
     //"showTime": true,
     //"showImages": true,
     //"lang": 'en'
   //};
   //twitterFetcher.fetch(configLikes);
   
   
   var configList = {
     "list": {"listSlug": ' ', "screenName": 'itsdailyff'},
     "domId": 'example3',
     "maxTweets": 3,
     "enableLinks": true, 
     "showUser": true,
     "showTime": true,
     "showImages": true,
     "lang": 'en'
   };
   twitterFetcher.fetch(configList);
   