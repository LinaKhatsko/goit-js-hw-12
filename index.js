import{a as f,S as p,i as a}from"./assets/vendor-CRsTpldL.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="51604264-079f506f95e2e038e0ca1ef24",g="https://pixabay.com/api/",h=15;async function b(s,r=1){const o={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:h};try{return(await f.get(g,{params:o})).data}catch(i){throw console.error("❌ Error fetching images:",i.message),new Error("Sorry, there are no images matching your search query. Please try again!")}}const l=document.querySelector(".gallery"),v=new p(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function L(s){function r({webformatURL:i,largeImageURL:e,tags:t,likes:n,views:u,comments:m,downloads:d}){return`<li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img class="gallery-image" src="${i}" alt="${t}" />
        </a>
        <div class="image-describe">
        <div class="img-info">
          <b>Likes</b>
          <p>${n}</p>
        </div>
        <div class="img-info">
          <b>Views</b>
          <p>${u}</p>
        </div>
        <div class="img-info">
          <b>Comments</b>
          <p>${m}</p>
        </div>
        <div class="img-info">
          <b>Downloads</b>
          <p>${d}</p>
        </div>
        </div>
      </li>
    `}const o=s.map(r).join("");l.insertAdjacentHTML("beforeend",o),v.refresh()}function S(){l.innerHTML=""}function w(){document.querySelector(".loader").classList.remove("is-hidden")}function q(){document.querySelector(".loader").classList.add("is-hidden")}const c=document.querySelector(".form"),E=document.querySelector('input[name="search-text"]');c.addEventListener("submit",P);async function P(s){s.preventDefault();const r=E.value.trim();if(r===""){c.reset(),a.warning({title:"Error",message:"Search field cannot be empty!",position:"topRight"});return}S(),w();try{const o=await b(r);if(o.hits.length===0){a.info({timeout:7e3,displayMode:"once",title:"Try another one",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}else L(o.hits),c.reset()}catch{a.error({title:"Error",message:"There is some error, please try another time",position:"topRight"})}finally{q()}}
//# sourceMappingURL=index.js.map
