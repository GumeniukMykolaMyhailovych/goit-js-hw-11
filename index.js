import{a as f,S as p,i as a}from"./assets/vendor-MgecxatS.js";/* empty css                      */(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="54212177-5339591b3f1ced8f604dc8066",h="https://pixabay.com/api/";function g(i){const r={key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(h,{params:r}).then(o=>o.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:d})=>`
          <li class="gallery-item">
            <a href="${n}">
              <img src="${o}" alt="${e}" />
            </a>
            <div class="info">
              <p><b>Likes</b> ${t}</p>
              <p><b>Views</b> ${s}</p>
              <p><b>Comments</b> ${u}</p>
              <p><b>Downloads</b> ${d}</p>
            </div>
          </li>
        `).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){c.innerHTML=""}function S(){l.classList.remove("is-hidden")}function q(){l.classList.add("is-hidden")}const P=document.querySelector(".form");P.addEventListener("submit",i=>{i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(!r){a.error({message:"Please enter a search query!",position:"topRight"});return}L(),S(),g(r).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}).catch(()=>{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q()})});
//# sourceMappingURL=index.js.map
