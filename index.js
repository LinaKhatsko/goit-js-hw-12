import{a as f,S as p,i as a}from"./assets/vendor-CRsTpldL.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="51604264-079f506f95e2e038e0ca1ef24",g="https://pixabay.com/api/";async function h(i){const o={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return console.log(i),f.get(g,{params:o}).then(r=>r.data).catch(r=>{throw console.error("Error fetching images:",r),new Error("Sorry, there are no images matching your search query. Please try again!")})}const l=document.querySelector(".gallery"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function v(i){function o({webformatURL:s,largeImageURL:e,tags:t,likes:n,views:u,comments:d,downloads:m}){return`<li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img class="gallery-image" src="${s}" alt="${t}" />
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
          <p>${d}</p>
        </div>
        <div class="img-info">
          <b>Downloads</b>
          <p>${m}</p>
        </div>
        </div>
      </li>
    `}const r=i.map(o).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function L(){l.innerHTML=""}function S(){document.querySelector(".loader").classList.remove("is-hidden")}function w(){document.querySelector(".loader").classList.add("is-hidden")}const c=document.querySelector(".form"),q=document.querySelector('input[name="search-text"]');c.addEventListener("submit",E);async function E(i){i.preventDefault();const o=q.value.trim();if(o===""){c.reset(),a.warning({title:"Error",message:"Search field cannot be empty!",position:"topRight"});return}L(),S();try{const r=await h(o);if(r.hits.length===0){a.info({timeout:7e3,displayMode:"once",title:"Try another one",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}else v(r.hits),c.reset()}catch{a.error({title:"Error",message:"There is some error, please try another time",position:"topRight"})}finally{w()}}
//# sourceMappingURL=index.js.map
