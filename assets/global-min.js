function getFocusableElements(e){return Array.from(e.querySelectorAll("summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"))}const trapFocusHandlers={};function trapFocus(e,t=e){var i=getFocusableElements(e),n=i[0],s=i[i.length-1];removeTrapFocus(),trapFocusHandlers.focusin=t=>{t.target!==e&&t.target!==s&&t.target!==n||document.addEventListener("keydown",trapFocusHandlers.keydown)},trapFocusHandlers.focusout=function(){document.removeEventListener("keydown",trapFocusHandlers.keydown)},trapFocusHandlers.keydown=function(t){"TAB"===t.code.toUpperCase()&&(t.target!==s||t.shiftKey||(t.preventDefault(),n.focus()),t.target!==e&&t.target!==n||!t.shiftKey||(t.preventDefault(),s.focus()))},document.addEventListener("focusout",trapFocusHandlers.focusout),document.addEventListener("focusin",trapFocusHandlers.focusin),t.focus()}try{document.querySelector(":focus-visible")}catch{focusVisiblePolyfill()}function focusVisiblePolyfill(){const e=["ARROWUP","ARROWDOWN","ARROWLEFT","ARROWRIGHT","TAB","ENTER","SPACE","ESCAPE","HOME","END","PAGEUP","PAGEDOWN"];let t=null,i=null;window.addEventListener("keydown",(t=>{e.includes(t.code.toUpperCase())&&(i=!1)})),window.addEventListener("mousedown",(e=>{i=!0})),window.addEventListener("focus",(()=>{t&&t.classList.remove("focused"),i||(t=document.activeElement,t.classList.add("focused"))}),!0)}function pauseAllMedia(){document.querySelectorAll(".js-youtube").forEach((e=>{e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})),document.querySelectorAll(".js-vimeo").forEach((e=>{e.contentWindow.postMessage('{"method":"pause"}',"*")})),document.querySelectorAll("video").forEach((e=>e.pause())),document.querySelectorAll("product-model").forEach((e=>{e.modelViewerUI&&e.modelViewerUI.pause()}))}function removeTrapFocus(e=null){document.removeEventListener("focusin",trapFocusHandlers.focusin),document.removeEventListener("focusout",trapFocusHandlers.focusout),document.removeEventListener("keydown",trapFocusHandlers.keydown),e&&e.focus()}function onKeyUpEscape(e){if("ESCAPE"!==e.code.toUpperCase())return;const t=e.target.closest("details[open]");if(!t)return;const i=t.querySelector("summary");t.removeAttribute("open"),i.focus()}class QuantityInput extends HTMLElement{constructor(){super(),this.input=this.querySelector("input"),this.changeEvent=new Event("change",{bubbles:!0}),this.querySelectorAll("button").forEach((e=>e.addEventListener("click",this.onButtonClick.bind(this))))}onButtonClick(e){e.preventDefault();const t=this.input.value;"plus"===e.target.name?this.input.stepUp():this.input.stepDown(),t!==this.input.value&&this.input.dispatchEvent(this.changeEvent)}}function debounce(e,t){let i;return(...n)=>{clearTimeout(i),i=setTimeout((()=>e.apply(this,n)),t)}}customElements.define("quantity-input",QuantityInput);const serializeForm=e=>{const t={},i=new FormData(e);for(const e of i.keys()){const n=/(?:^(properties\[))(.*?)(?:\]$)/;n.test(e)?(t.properties=t.properties||{},t.properties[n.exec(e)[2]]=i.get(e)):t[e]=i.get(e)}return JSON.stringify(t)};function fetchConfig(e="json"){return{method:"POST",headers:{"Content-Type":"application/json",Accept:`application/${e}`}}}void 0===window.Shopify&&(window.Shopify={}),Shopify.bind=function(e,t){return function(){return e.apply(t,arguments)}},Shopify.setSelectorByValue=function(e,t){for(var i=0,n=e.options.length;i<n;i++){var s=e.options[i];if(t==s.value||t==s.innerHTML)return e.selectedIndex=i,i}},Shopify.addListener=function(e,t,i){e.addEventListener?e.addEventListener(t,i,!1):e.attachEvent("on"+t,i)},Shopify.postLink=function(e,t){var i=(t=t||{}).method||"post",n=t.parameters||{},s=document.createElement("form");for(var r in s.setAttribute("method",i),s.setAttribute("action",e),n){var o=document.createElement("input");o.setAttribute("type","hidden"),o.setAttribute("name",r),o.setAttribute("value",n[r]),s.appendChild(o)}document.body.appendChild(s),s.submit(),document.body.removeChild(s)},Shopify.CountryProvinceSelector=function(e,t,i){this.countryEl=document.getElementById(e),this.provinceEl=document.getElementById(t),this.provinceContainer=document.getElementById(i.hideElement||t),Shopify.addListener(this.countryEl,"change",Shopify.bind(this.countryHandler,this)),this.initCountry(),this.initProvince()},Shopify.CountryProvinceSelector.prototype={initCountry:function(){var e=this.countryEl.getAttribute("data-default");Shopify.setSelectorByValue(this.countryEl,e),this.countryHandler()},initProvince:function(){var e=this.provinceEl.getAttribute("data-default");e&&this.provinceEl.options.length>0&&Shopify.setSelectorByValue(this.provinceEl,e)},countryHandler:function(e){var t=(s=this.countryEl.options[this.countryEl.selectedIndex]).getAttribute("data-provinces"),i=JSON.parse(t);if(this.clearOptions(this.provinceEl),i&&0==i.length)this.provinceContainer.style.display="none";else{for(var n=0;n<i.length;n++){var s;(s=document.createElement("option")).value=i[n][0],s.innerHTML=i[n][1],this.provinceEl.appendChild(s)}this.provinceContainer.style.display=""}},clearOptions:function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},setOptions:function(e,t){var i=0;for(t.length;i<t.length;i++){var n=document.createElement("option");n.value=t[i],n.innerHTML=t[i],e.appendChild(n)}}};class MenuDrawer extends HTMLElement{constructor(){super(),this.mainDetailsToggle=this.querySelector("details");const e=this.querySelectorAll("summary");this.addAccessibilityAttributes(e),"iPhone"===navigator.platform&&document.documentElement.style.setProperty("--viewport-height",`${window.innerHeight}px`),this.addEventListener("keyup",this.onKeyUp.bind(this)),this.addEventListener("focusout",this.onFocusOut.bind(this)),this.bindEvents()}bindEvents(){this.querySelectorAll("summary").forEach((e=>e.addEventListener("click",this.onSummaryClick.bind(this)))),this.querySelectorAll("button").forEach((e=>e.addEventListener("click",this.onCloseButtonClick.bind(this))))}addAccessibilityAttributes(e){e.forEach((e=>{e.setAttribute("role","button"),e.setAttribute("aria-expanded",!1),e.setAttribute("aria-controls",e.nextElementSibling.id)}))}onKeyUp(e){if("ESCAPE"!==e.code.toUpperCase())return;const t=e.target.closest("details[open]");t&&(t===this.mainDetailsToggle?this.closeMenuDrawer(this.mainDetailsToggle.querySelector("summary")):this.closeSubmenu(t))}onSummaryClick(e){const t=e.currentTarget,i=t.parentNode,n=i.hasAttribute("open");i===this.mainDetailsToggle?(n&&e.preventDefault(),n?this.closeMenuDrawer(t):this.openMenuDrawer(t)):(trapFocus(t.nextElementSibling,i.querySelector("button")),setTimeout((()=>{i.classList.add("menu-opening")})))}openMenuDrawer(e){setTimeout((()=>{this.mainDetailsToggle.classList.add("menu-opening")})),e.setAttribute("aria-expanded",!0),trapFocus(this.mainDetailsToggle,e),document.body.classList.add(`overflow-hidden-${this.dataset.breakpoint}`)}closeMenuDrawer(e,t=!1){void 0!==e&&(this.mainDetailsToggle.classList.remove("menu-opening"),this.mainDetailsToggle.querySelectorAll("details").forEach((e=>{e.removeAttribute("open"),e.classList.remove("menu-opening")})),this.mainDetailsToggle.querySelector("summary").setAttribute("aria-expanded",!1),document.body.classList.remove(`overflow-hidden-${this.dataset.breakpoint}`),removeTrapFocus(t),this.closeAnimation(this.mainDetailsToggle))}onFocusOut(e){setTimeout((()=>{this.mainDetailsToggle.hasAttribute("open")&&!this.mainDetailsToggle.contains(document.activeElement)&&this.closeMenuDrawer()}))}onCloseButtonClick(e){const t=e.currentTarget.closest("details");this.closeSubmenu(t)}closeSubmenu(e){e.classList.remove("menu-opening"),removeTrapFocus(),this.closeAnimation(e)}closeAnimation(e){let t;const i=n=>{void 0===t&&(t=n);n-t<400?window.requestAnimationFrame(i):(e.removeAttribute("open"),e.closest("details[open]")&&trapFocus(e.closest("details[open]"),e.querySelector("summary")))};window.requestAnimationFrame(i)}}customElements.define("menu-drawer",MenuDrawer);class HeaderDrawer extends MenuDrawer{constructor(){super()}openMenuDrawer(e){this.header=this.header||document.getElementById("shopify-section-header"),this.borderOffset=this.borderOffset||this.closest(".header-wrapper").classList.contains("header-wrapper--border-bottom")?1:0,document.documentElement.style.setProperty("--header-bottom-position",`${parseInt(this.header.getBoundingClientRect().bottom-this.borderOffset)}px`),setTimeout((()=>{this.mainDetailsToggle.classList.add("menu-opening")})),e.setAttribute("aria-expanded",!0),trapFocus(this.mainDetailsToggle,e),document.body.classList.add(`overflow-hidden-${this.dataset.breakpoint}`)}}customElements.define("header-drawer",HeaderDrawer);class ModalDialog extends HTMLElement{constructor(){super(),this.querySelector('[id^="ModalClose-"]').addEventListener("click",this.hide.bind(this)),this.addEventListener("keyup",(e=>{"ESCAPE"===e.code.toUpperCase()&&this.hide()})),this.classList.contains("media-modal")?this.addEventListener("pointerup",(e=>{"mouse"!==e.pointerType||e.target.closest("deferred-media, product-model")||this.hide()})):this.addEventListener("click",(e=>{"MODAL-DIALOG"===e.target.nodeName&&this.hide()}))}show(e){this.openedBy=e;const t=this.querySelector(".template-popup");document.body.classList.add("overflow-hidden"),this.setAttribute("open",""),t&&t.loadContent(),trapFocus(this,this.querySelector('[role="dialog"]')),window.pauseAllMedia()}hide(){document.body.classList.remove("overflow-hidden"),this.removeAttribute("open"),removeTrapFocus(this.openedBy),window.pauseAllMedia()}}customElements.define("modal-dialog",ModalDialog);class ModalOpener extends HTMLElement{constructor(){super();const e=this.querySelector("button");e&&e.addEventListener("click",(()=>{const t=document.querySelector(this.getAttribute("data-modal"));t&&t.show(e)}))}}customElements.define("modal-opener",ModalOpener);class DeferredMedia extends HTMLElement{constructor(){super();const e=this.querySelector('[id^="Deferred-Poster-"]');e&&e.addEventListener("click",this.loadContent.bind(this))}loadContent(){if(window.pauseAllMedia(),!this.getAttribute("loaded")){const e=document.createElement("div");e.appendChild(this.querySelector("template").content.firstElementChild.cloneNode(!0)),this.setAttribute("loaded",!0),this.appendChild(e.querySelector("video, model-viewer, iframe")).focus()}}}customElements.define("deferred-media",DeferredMedia);class SliderComponent extends HTMLElement{constructor(){if(super(),this.slider=this.querySelector("ul"),this.sliderItems=this.querySelectorAll("li"),this.pageCount=this.querySelector(".slider-counter--current"),this.pageTotal=this.querySelector(".slider-counter--total"),this.prevButton=this.querySelector('button[name="previous"]'),this.nextButton=this.querySelector('button[name="next"]'),!this.slider||!this.nextButton)return;new ResizeObserver((e=>this.initPages())).observe(this.slider),this.slider.addEventListener("scroll",this.update.bind(this)),this.prevButton.addEventListener("click",this.onButtonClick.bind(this)),this.nextButton.addEventListener("click",this.onButtonClick.bind(this))}initPages(){const e=Array.from(this.sliderItems).filter((e=>e.clientWidth>0));this.sliderLastItem=e[e.length-1],0!==e.length&&(this.slidesPerPage=Math.floor(this.slider.clientWidth/e[0].clientWidth),this.totalPages=e.length-this.slidesPerPage+1,this.update())}update(){this.pageCount&&this.pageTotal&&(this.currentPage=Math.round(this.slider.scrollLeft/this.sliderLastItem.clientWidth)+1,1===this.currentPage?this.prevButton.setAttribute("disabled",!0):this.prevButton.removeAttribute("disabled"),this.currentPage===this.totalPages?this.nextButton.setAttribute("disabled",!0):this.nextButton.removeAttribute("disabled"),this.pageCount.textContent=this.currentPage,this.pageTotal.textContent=this.totalPages)}onButtonClick(e){e.preventDefault();const t="next"===e.currentTarget.name?this.slider.scrollLeft+this.sliderLastItem.clientWidth:this.slider.scrollLeft-this.sliderLastItem.clientWidth;this.slider.scrollTo({left:t})}}customElements.define("slider-component",SliderComponent);class VariantSelects extends HTMLElement{constructor(){super(),this.addEventListener("change",this.onVariantChange)}onVariantChange(){this.updateOptions(),this.updateMasterId(),this.toggleAddButton(!0,"",!1),this.updatePickupAvailability(),this.removeErrorMessage(),this.currentVariant?(this.updateMedia(),this.updateURL(),this.updateVariantInput(),this.renderProductInfo()):(this.toggleAddButton(!0,"",!0),this.setUnavailable())}updateOptions(){this.options=Array.from(this.querySelectorAll("select"),(e=>e.value))}updateMasterId(){this.currentVariant=this.getVariantData().find((e=>!e.options.map(((e,t)=>this.options[t]===e)).includes(!1)))}updateMedia(){if(!this.currentVariant)return;if(!this.currentVariant.featured_media)return;const e=document.querySelector(`[data-media-id="${this.dataset.section}-${this.currentVariant.featured_media.id}"]`);if(!e)return;const t=document.querySelector(`#ProductModal-${this.dataset.section} .product-media-modal__content`),i=t.querySelector(`[data-media-id="${this.currentVariant.featured_media.id}"]`),n=e.parentElement;n.firstChild!=e&&(t.prepend(i),n.prepend(e),this.stickyHeader=this.stickyHeader||document.querySelector("sticky-header"),this.stickyHeader&&this.stickyHeader.dispatchEvent(new Event("preventHeaderReveal")),window.setTimeout((()=>{n.querySelector("li.product__media-item").scrollIntoView({behavior:"smooth"})})))}updateURL(){this.currentVariant&&"false"!==this.dataset.updateUrl&&window.history.replaceState({},"",`${this.dataset.url}?variant=${this.currentVariant.id}`)}updateVariantInput(){document.querySelectorAll(`#product-form-${this.dataset.section}, #product-form-installment`).forEach((e=>{const t=e.querySelector('input[name="id"]');t.value=this.currentVariant.id,t.dispatchEvent(new Event("change",{bubbles:!0}))}))}updatePickupAvailability(){const e=document.querySelector("pickup-availability");e&&(this.currentVariant&&this.currentVariant.available?e.fetchAvailability(this.currentVariant.id):(e.removeAttribute("available"),e.innerHTML=""))}removeErrorMessage(){const e=this.closest("section");if(!e)return;const t=e.querySelector("product-form");t&&t.handleErrorMessage()}renderProductInfo(){fetch(`${this.dataset.url}?variant=${this.currentVariant.id}&section_id=${this.dataset.section}`).then((e=>e.text())).then((e=>{const t=`price-${this.dataset.section}`,i=(new DOMParser).parseFromString(e,"text/html"),n=document.getElementById(t),s=i.getElementById(t);s&&n&&(n.innerHTML=s.innerHTML);const r=document.getElementById(`price-${this.dataset.section}`);r&&r.classList.remove("visibility-hidden"),this.toggleAddButton(!this.currentVariant.available,window.variantStrings.soldOut)}))}toggleAddButton(e=!0,t,i=!0){const n=document.getElementById(`product-form-${this.dataset.section}`);if(!n)return;const s=n.querySelector('[name="add"]'),r=n.querySelector('[name="add"] > span');s&&(e?(s.setAttribute("disabled",!0),t&&(r.textContent=t)):(s.removeAttribute("disabled"),r.textContent=window.variantStrings.addToCart))}setUnavailable(){const e=document.getElementById(`product-form-${this.dataset.section}`),t=e.querySelector('[name="add"]'),i=e.querySelector('[name="add"] > span'),n=document.getElementById(`price-${this.dataset.section}`);t&&(i.textContent=window.variantStrings.unavailable,n&&n.classList.add("visibility-hidden"))}getVariantData(){return this.variantData=this.variantData||JSON.parse(this.querySelector('[type="application/json"]').textContent),this.variantData}}customElements.define("variant-selects",VariantSelects);class VariantRadios extends VariantSelects{constructor(){super()}updateOptions(){const e=Array.from(this.querySelectorAll("fieldset"));this.options=e.map((e=>Array.from(e.querySelectorAll("input")).find((e=>e.checked)).value))}}customElements.define("variant-radios",VariantRadios);