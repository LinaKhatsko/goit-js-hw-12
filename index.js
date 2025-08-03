import{a as S,S as w,i as c}from"./assets/vendor-CRsTpldL.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const q="51604264-079f506f95e2e038e0ca1ef24",E="https://pixabay.com/api/",P=15;async function m(o,t=1){const s={key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:P};try{return(await S.get(E,{params:s})).data}catch(i){throw console.error("❌ Error fetching images:",i.message),new Error("Sorry, there are no images matching your search query. Please try again!")}}const f=document.querySelector(".gallery"),M=new w(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function y(o){function t({webformatURL:i,largeImageURL:e,tags:r,likes:a,views:b,comments:L,downloads:v}){return`<li class="gallery-item">
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
          <p>${b}</p>
        </div>
        <div class="img-info">
          <b>Comments</b>
          <p>${L}</p>
        </div>
        <div class="img-info">
          <b>Downloads</b>
          <p>${v}</p>
        </div>
        </div>
      </li>
    `}const s=o.map(t).join("");f.insertAdjacentHTML("beforeend",s),M.refresh()}function R(){f.innerHTML=""}function h(){document.querySelector(".loader").classList.remove("is-hidden")}function p(){document.querySelector(".loader").classList.add("is-hidden")}function g(){document.querySelector(".load-more").classList.remove("is-hidden")}function d(){document.querySelector(".load-more").classList.add("is-hidden")}const B=document.querySelector(".form"),$=document.querySelector('input[name="search-text"]'),O=document.querySelector(".load-more");let u=0,n=1,l="";B.addEventListener("submit",T);O.addEventListener("click",x);async function T(o){if(o.preventDefault(),l=$.value.trim(),n=1,l===""){c.warning({title:"Error",message:"Search field cannot be empty!",position:"topRight"});return}R(),d(),h();try{const t=await m(l,n);if(u=t.totalHits,t.hits.length===0){c.info({timeout:7e3,displayMode:"once",title:"Try another one",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits),u>n*15?g():d()}catch{c.error({title:"Error",message:"There is some error, please try another time",position:"topRight"})}finally{p()}}async function x(){d(),h();try{const o=await m(l,n+1);y(o.hits),n+=1,A(),n*15>=u?(d(),c.info({title:"Notice",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):g()}catch{c.error({title:"Error",message:"There is some error, please try another time",position:"topRight"})}finally{p()}}function A(){const o=document.querySelector(".gallery-item");if(!o)return;const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
