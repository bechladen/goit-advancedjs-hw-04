import{a as v,S as L,i as w}from"./assets/vendor-C4-ZuMk8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const b="https://pixabay.com/api/",q="46797369-0299d472bccce8abfeee5d8f9",S=15;async function h(o,e=1){const n=`${b}?key=${q}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${S}&page=${e}`;try{return(await v.get(n)).data}catch(t){throw console.error("Error fetching images:",t),t}}let m;function $(){m=new L(".gallery a",{})}function y(o){const e=document.querySelector(".gallery"),n=o.map(t=>`
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
  `).join("");e.insertAdjacentHTML("beforeend",n),m.refresh()}function E(){document.querySelector(".gallery").innerHTML=""}function g(){document.querySelector(".loader").classList.remove("hidden")}function d(){document.querySelector(".loader").classList.add("hidden")}function a(o){w.error({title:"Error",message:o})}const P=document.querySelector(".search-form"),f=document.querySelector(".search-input"),i=document.querySelector(".load-more");document.querySelector(".loader");let l="",c=1,p=0;$();P.addEventListener("submit",async o=>{if(o.preventDefault(),l=f.value.trim(),!l){a("Please enter a search term");return}E(),c=1,i.classList.add("hidden"),g();try{const e=await h(l,c);if(d(),e.hits.length===0){a("No images found. Please try a different search query.");return}p=e.totalHits,y(e.hits),p>e.hits.length&&i.classList.remove("hidden")}catch{d(),a("An error occurred while fetching images")}f.value=""});i.addEventListener("click",async()=>{c+=1,i.classList.add("hidden"),g();try{const o=await h(l,c);if(d(),o.hits.length===0){a("No more images available.");return}y(o.hits);const e=document.querySelector(".gallery a").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),c*15>=p?(i.classList.add("hidden"),a("We're sorry, but you've reached the end of search results.")):i.classList.remove("hidden")}catch{d(),a("An error occurred while loading more images")}});
//# sourceMappingURL=index.js.map
