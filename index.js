import{a as w,S as q,i as c}from"./assets/vendor-CRsTpldL.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const E="51604264-079f506f95e2e038e0ca1ef24",P="https://pixabay.com/api/",M=15;async function m(o,t=1){const n={key:E,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:M};try{return(await w.get(P,{params:n})).data}catch(i){throw console.error("❌ Error fetching images:",i.message),new Error("Sorry, there are no images matching your search query. Please try again!")}}const f=document.querySelector(".gallery"),R=new q(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function y(o){function t({webformatURL:i,largeImageURL:e,tags:r,likes:a,views:L,comments:v,downloads:S}){return`<li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img class="gallery-image" src="${i}" alt="${r}" />
        </a>
        <div class="image-describe">
        <div class="img-info">
          <b>Likes</b>
          <p>${a}</p>
        </div>
        <div class="img-info">
          <b>Views</b>
          <p>${L}</p>
        </div>
        <div class="img-info">
          <b>Comments</b>
          <p>${v}</p>
        </div>
        <div class="img-info">
          <b>Downloads</b>
          <p>${S}</p>
        </div>
        </div>
      </li>
    `}const n=o.map(t).join("");f.insertAdjacentHTML("beforeend",n),R.refresh()}function B(){f.innerHTML=""}function h(){document.querySelector(".loader").classList.remove("is-hidden")}function p(){document.querySelector(".loader").classList.add("is-hidden")}function g(){document.querySelector(".load-more").classList.remove("is-hidden")}function d(){document.querySelector(".load-more").classList.add("is-hidden")}const b=document.querySelector(".form"),$=document.querySelector('input[name="search-text"]'),O=document.querySelector(".load-more");let u=0,s=1,l="";b.addEventListener("submit",T);O.addEventListener("click",x);async function T(o){if(o.preventDefault(),l=$.value.trim(),s=1,l===""){c.warning({title:"Error",message:"Search field cannot be empty!",position:"topRight"});return}B(),d(),h();try{const t=await m(l,s);if(u=t.totalHits,t.hits.length===0){c.info({timeout:7e3,displayMode:"once",title:"Try another one",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits),u>s*15?g():d(),b.reset()}catch{c.error({title:"Error",message:"There is some error, please try another time",position:"topRight"})}finally{p()}}async function x(){d(),h();try{const o=await m(l,s+1);y(o.hits),s+=1,A(),s*15>=u?(d(),c.info({title:"Notice",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):g()}catch{c.error({title:"Error",message:"There is some error, please try another time",position:"topRight"})}finally{p()}}function A(){const o=document.querySelector(".gallery-item");if(!o)return;const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
