!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["mml-to-tex"]=t():e["mml-to-tex"]=t()}(window,(function(){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var a;function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=(n(a={"+":"+","-":"-","=":"=","<":"<",">":">","|":"|","\\%":"%",",":",",".":".",$:"$","(":"(",")":")","[":"[","]":"]","!":"!","\\leq":"≤","\\geq":"≥","\\ll":"≪","\\gg":"≫","\\subset":"⊂","\\supset":"⊃","\\subseteq":"⊆","\\supseteq":"⊇","\\nsubseteq":"⊈","\\nsupseteq":"⊉","\\sqsubset":"⊏","\\sqsupset":"⊐","\\sqsubseteq":"⊑","\\sqsupseteq":"⊒","\\preceq":"⪯","\\succeq":"⪰","\\doteq":"≐","\\equiv":"≡","\\approx":"≈","\\cong":"≅","\\simeq":"≃","\\sim":"∼","\\propto":"∝","\\neq":"≠","\\parallel":"∥","\\asymp":"≍","\\vdash":"⊢","\\in":"∈","\\smile":"⌣","\\models":"⊨","\\perp":"⊥","\\prec":"≺","\\sphericalangle":"∢","\\nparallel":"∦","\\bowtie":"⋈","\\dashv":"⊣","\\ni":"∋","\\frown":"⌢","\\notin":"∉","\\mid":"∣","\\succ":"≻","\\measuredangle":"∡","\\pm":"±","\\div":"÷","\\times":"×","\\cdot":"⋅","\\mp":"∓"},"\\times","×"),n(a,"\\ast","∗"),n(a,"\\star","⋆"),n(a,"\\dagger","†"),n(a,"\\ddagger","‡"),n(a,"\\cap","∩"),n(a,"\\cup","∪"),n(a,"\\uplus","⊎"),n(a,"\\sqcap","⊓"),n(a,"\\sqcup","⊔"),n(a,"\\vee","∨"),n(a,"\\wedge","∧"),n(a,"\\diamond","⋄"),n(a,"\\bigtriangleup","△"),n(a,"\\bigtriangledown","▽"),n(a,"\\triangleleft","◃"),n(a,"\\triangleright","▹"),n(a,"\\bigcirc","◯"),n(a,"\\bullet","∙"),n(a,"\\wr","≀"),n(a,"\\oplus","⊕"),n(a,"\\ominus","⊖"),n(a,"\\otimes","⊗"),n(a,"\\odot","⊙"),n(a,"\\circ","∘"),n(a,"\\setminus","∖"),n(a,"\\amalg","⨿"),n(a,"\\exists","∃"),n(a,"\\nexists","∄"),n(a,"\\forall","∀"),n(a,"\\neg","¬"),n(a,"\\land","∧"),n(a,"\\lor","∨"),n(a,"\\rightarrow","→"),n(a,"\\leftarrow","←"),n(a,"\\mapsto","↦"),n(a,"\\implies","⟹"),n(a,"\\Rightarrow","⇒"),n(a,"\\leftrightarrow","↔"),n(a,"\\iff","⟺"),n(a,"\\Leftrightarrow","⇔"),n(a,"\\top","⊤"),n(a,"\\bot","⊥"),n(a,"\\emptyset","∅"),n(a,"\\varnothing","∅"),n(a,"\\{","{"),n(a,"\\uparrow","↑"),n(a,"\\downarrow","↓"),n(a,"\\|","‖"),n(a,"\\}","}"),n(a,"\\Uparrow","⇑"),n(a,"\\Downarrow","⇓"),n(a,"/","/"),n(a,"\\angle","∠"),n(a,"\\lceil","⌈"),n(a,"\\lfloor","⌊"),n(a,"\\backslash","∖"),n(a,"\\rangle","⟩"),n(a,"\\rceil","⌉"),n(a,"\\rfloor","⌋"),n(a,"\\int","∫"),a);function s(e){for(var t={},r=0,a=Object.keys(e);r<a.length;r++){var n=a[r];t[e[n]]=n}return t}r.d(t,"default",(function(){return l}));var i=s({"\\sin":"sin","\\cos":"cos","\\tan":"tan","\\cot":"cot","\\arcsin":"arcsin","\\arccos":"arccos","\\arctan":"arctan","\\arccot":"arccot","\\sinh":"sinh","\\cosh":"cosh","\\tanh":"tanh","\\coth":"coth","\\sec":"sec","\\csc":"csc","\\alpha":"α","\\beta":"β","\\gamma":"γ","\\Gamma":"Γ","\\delta":"δ","\\Delta":"Δ","\\epsilon":"ϵ","\\varepsilon":"ε","\\zeta":"ζ","\\eta":"η","\\theta":"θ","\\vartheta":"ϑ","\\Theta":"Θ","\\iota":"ι","\\kappa":"κ","\\Lambda":"Λ","\\lambda":"λ","\\mu":"μ","\\nu":"ν","\\xi":"ξ","\\Xi":"Ξ","\\pi":"π","\\Pi":"Π","\\rho":"ρ","\\varrho":"ϱ","\\sigma":"σ","\\Sigma":"Σ","\\tau":"τ","\\upsilon":"υ","\\Upsilon":"Υ","\\phi":"ϕ","\\varphi":"φ","\\Phi":"Φ","\\chi":"χ","\\psi":"ψ","\\Psi":"Ψ","\\omega":"ω","\\Omega":"Ω","\\partial":"∂","\\eth":"ð","\\hbar":"ℏ","\\imath":"ı","\\jmath":"ȷ","\\ell":"ℓ","\\Re":"ℜ","\\Im":"ℑ","\\wp":"℘","\\nabla":"∇","\\infty":"∞","\\aleph":"ℵ","\\beth":"ℶ","\\gimel":"ℷ"}),c=s(o);function l(e){var t="";return function e(r){var a,n=r.children,o=r.innerHTML,s=r.tagName.toLowerCase();switch(s){case"math":case"msup":case"msub":case"msubsup":break;case"mn":t+=o;break;case"mi":(a=i[o])?t+=a+("\\"===a[0]?" ":""):t+=o;break;case"mo":(a=c[o])?t+=a+("\\"===a[0]?" ":""):t+="?";break;case"mrow":var l=r.parentNode,u=l.tagName.toLowerCase();if(l.lastElementChild===r)switch(u){case"msubsup":t+="^"}t=t.trim()+"{";break;case"mspace":switch(r.getAttribute("linebreak")){case"newline":t+="\\\\"}break;case"mroot":t+="\\sqrt";break;default:t+="\\".concat(s.substr(1)," ")}switch(s){case"mroot":t+="[",e(n[1]),t+="]",e(n[0]);break;default:for(var p=0;p<n.length;p++)e(n[p])}switch(s){case"mrow":var m=r.parentNode,f=m.tagName.toLowerCase();if(t+="}",m.firstElementChild===r)switch(f){case"msubsup":t+="_";break;case"msup":t+="^";break;case"msub":t+="_"}}}(e),t}}]).default}));