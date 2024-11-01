import{S as u,i as f}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const p="https://pixabay.com/api/",h="46797369-0299d472bccce8abfeee5d8f9";function m(n){const i=`${p}?key=${h}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(i).then(r=>{if(!r.ok)throw new Error("Failed to fetch images");return r.json()}).catch(r=>{throw console.error("Error fetching images:",r),r})}let d;function y(){d=new u(".gallery a",{})}function g(n){const i=document.querySelector(".gallery"),r=n.map(t=>`
    <a href="${t.largeImageURL}">
      <img src="${t.webformatURL}" alt="${t.tags}" title="${t.tags}" />
      <div class="info">
        <div>
          <p class="main-p">Likes</p>
          <p class="add-p">${t.likes}</p>
        </div>
        <div>
          <p class="main-p">Views</p>
          <p class="add-p">${t.views}</p>
        </div>
        <div>
          <p class="main-p">Comments</p>
          <p class="add-p">${t.comments}</p>
        </div>
        <div>
          <p class="main-p">Downloads</p>
          <p class="add-p">${t.downloads}</p>
        </div>
      </div>
    </a>
  `).join("");i.innerHTML=r,d.refresh()}function v(){document.querySelector(".gallery").innerHTML=""}function L(){document.querySelector(".loader").classList.remove("hidden")}function a(){document.querySelector(".loader").classList.add("hidden")}function c(n){f.error({title:"Error",message:n})}const w=document.querySelector(".search-form"),l=document.querySelector(".search-input");y();w.addEventListener("submit",n=>{n.preventDefault();const i=l.value.trim();if(!i){c("Please enter a search term");return}v(),L(),l.value="",m(i).then(r=>{if(a(),r.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}g(r.hits)}).catch(()=>{a(),c("An error occurred while fetching images")})});
//# sourceMappingURL=index.js.map
