(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/Vectorll.c6f11019.svg"},23:function(e,t,a){e.exports=a.p+"static/media/success.e38b395c.svg"},24:function(e,t,a){e.exports=a.p+"static/media/fail.4072126c.svg"},27:function(e,t,a){e.exports=a(38)},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(18),r=a.n(c),s=(a(32),a(25)),i=a(1),l=a(2),u=a(19),m=a.n(u),p="https://localhost:3000",d=function(e){return fetch("".concat(p,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).then((function(e){return e}))},f=a(6);function _(e){var t=e.onOut,a=o.a.useState(""),n=Object(i.a)(a,2),c=n[0],r=n[1],s=o.a.useState(""),u=Object(i.a)(s,2),p=u[0],_=u[1],h=o.a.useState(),g=Object(i.a)(h,2),E=g[0],b=g[1],v=o.a.useState(""),N=Object(i.a)(v,2),O=N[0],j=N[1],k=Object(l.h)();return o.a.useEffect((function(){if("/sign-in"===k.pathname)b(!1),_("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),j("/sign-up"),r("");else if("/sign-up"===k.pathname)b(!1),_("\u0412\u043e\u0439\u0442\u0438"),j("/sign-in"),r("");else{j("/"),b(!0);var e=localStorage.getItem("token");e&&d(e).then((function(e){e&&r(e.data.email)})).catch((function(e){return console.log(e)}))}}),[k.pathname]),o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"header__logo",src:m.a,alt:"Mesto"}),o.a.createElement("nav",{className:"header__signconteiner"},o.a.createElement("p",{className:"header__email"},c),E?o.a.createElement("p",{className:"header__signout",onClick:t},"\u0412\u044b\u0439\u0442\u0438"):o.a.createElement(f.b,{to:O,className:"header__signin"},p)))}var h=o.a.createContext();function g(e){var t=Object(n.useContext)(h),a=e.card,c=e.onCardClick,r=e.onCardLike,s=e.onCardDelete,i=a.owner._id===t._id,l="element__remove ".concat(i&&"element__remove_active"),u=a.likes.some((function(e){return e._id===t._id})),m="element__heart ".concat(u&&"element__heart_active");return o.a.createElement("li",{className:"element"},o.a.createElement("img",{className:"element__pic",src:a.link,alt:a.name,onClick:function(){c(a)}}),o.a.createElement("button",{className:l,type:"button",onClick:function(){s(a)}}),o.a.createElement("div",{className:"element__content"},o.a.createElement("h2",{className:"element__name"},a.name),o.a.createElement("div",{className:"element__counter"},o.a.createElement("button",{className:m,onClick:function(){r(a)}}),o.a.createElement("p",{className:"element__heart-counter"},a.likes.length))))}function E(e){var t=Object(n.useContext)(h),a=e.onEditAvatar,c=e.onEditProfile,r=e.onAddPlace,s=e.onCardClick,i=e.cards,l=e.onCardLike,u=e.onCardDelete;return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__content"},o.a.createElement("button",{className:"profile__avatar-button"},o.a.createElement("img",{className:"profile__avatar",src:t.avatar,onClick:a,alt:"Avatar"})),o.a.createElement("div",{className:"profile__info-container"},o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__info-heading"},t.name),o.a.createElement("button",{className:"profile__info-edit",onClick:c})),o.a.createElement("p",{className:"profile__info-text"},t.about))),o.a.createElement("button",{className:"profile__add-button popup-add-place",onClick:r})),o.a.createElement("section",{className:"elements-section"},o.a.createElement("ul",{className:"elements"},i.map((function(e){return o.a.createElement(g,{key:e._id,card:e,onCardClick:s,onCardLike:l,onCardDelete:u})})))))}function b(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__text"},"\xa9 2020 Mesto Russia"))}function v(e){var t=e.isOpen,a=e.onClose,n=e.name,c=e.link;return o.a.createElement("section",{className:"popup ".concat(t&&"popup_opened")},o.a.createElement("figure",{className:"element__container popup-mouse"},o.a.createElement("button",{className:"popup__close popup-pic-close",onClick:a}),o.a.createElement("img",{className:"element__pic element__pic_active element-pic-full",src:c,alt:n}),o.a.createElement("figcaption",{className:"element__name element__name_active element-name-full"},n)))}var N=a(21),O=a(22),j=new(function(){function e(t){Object(N.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(O.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"".concat(t?"PUT":"DELETE"),headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"postCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.url})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"updateProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({baseUrl:"https://georgy.nomoreparties.xyz",headers:{authorization:"Bearer ".concat(localStorage.getItem("token")),"Content-Type":"application/json"}});function k(e){var t=e.name,a=e.isOpen,n=e.title,c=e.children,r=e.submit,s=e.onClose,i=e.onSubmit,l=e.isLoading;return o.a.createElement("section",{className:"popup popup_".concat(t," \n      ").concat(a&&"popup_opened")},o.a.createElement("div",{className:"popup__container popup-mouse"},o.a.createElement("button",{className:"popup__close popup-edit-close",onClick:s}),o.a.createElement("div",{className:"popup__content"},o.a.createElement("h2",{className:"popup__heading"},n),o.a.createElement("form",{className:"popup__form popup-".concat(t),action:"#",onSubmit:i},c,o.a.createElement("button",{className:"popup__save popup-edit-save"},l?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":r)))))}function C(e){var t=Object(n.useContext)(h),a=e.isOpen,c=e.onClose,r=e.onUpdateUser,s=e.isLoading,l=o.a.useState(""),u=Object(i.a)(l,2),m=u[0],p=u[1],d=o.a.useState(""),f=Object(i.a)(d,2),_=f[0],g=f[1];return o.a.useEffect((function(){p(t.name),g(t.about)}),[t]),o.a.createElement(k,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a,onClose:c,onSubmit:function(e){e.preventDefault(),r({name:m,about:_})},isLoading:s},o.a.createElement("label",{htmlFor:"name",className:"popup__fields"},o.a.createElement("input",{type:"text",className:"popup__input",id:"name-input",name:"userName",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0,value:m||"",onChange:function(e){p(e.target.value)}}),o.a.createElement("span",{className:"popup__input-error",id:"name-input-error"})),o.a.createElement("label",{htmlFor:"about",className:"popup__fields"},o.a.createElement("input",{type:"text",className:"popup__input",id:"prof-input",name:"userProf",placeholder:"\u0420\u043e\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",minLength:"2",maxLength:"200",required:!0,value:_||"",onChange:function(e){g(e.target.value)}}),o.a.createElement("span",{className:"popup__input-error",id:"prof-input-error"})))}function S(e){var t=Object(n.useRef)(""),a=e.isOpen,c=e.onClose,r=e.onUpdateAvatar,s=e.isLoading;return o.a.useEffect((function(){t.current.value=""}),[a]),o.a.createElement(k,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a,onClose:c,onSubmit:function(e){e.preventDefault(),r({url:t.current.value})},isLoading:s},o.a.createElement("label",{htmlFor:"url",className:"popup__fields"},o.a.createElement("input",{type:"url",className:"popup__input",id:"ava-url-input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,ref:t}),o.a.createElement("span",{className:"popup__input-error",id:"ava-url-input-error"})))}function y(e){var t=e.isOpen,a=e.onClose,c=e.isLoading,r=e.onAddPlace,s=Object(n.useRef)(""),l=Object(n.useRef)(""),u=o.a.useState(""),m=Object(i.a)(u,2),p=m[0],d=m[1],f=o.a.useState(""),_=Object(i.a)(f,2),h=_[0],g=_[1];return o.a.useEffect((function(){d(""),g("")}),[t]),o.a.createElement(k,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submit:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),r({name:p,link:h})},isLoading:c},o.a.createElement("label",{htmlFor:"name",className:"popup__fields"},o.a.createElement("input",{className:"popup__input",id:"text-input",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0,ref:s,onChange:function(e){d(e.target.value)}}),o.a.createElement("span",{className:"popup__input-error",id:"text-input-error"})),o.a.createElement("label",{htmlFor:"link",className:"popup__fields"},o.a.createElement("input",{type:"url",className:"popup__input",id:"pic-url-input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,ref:l,onChange:function(e){g(e.target.value)}}),o.a.createElement("span",{className:"popup__input-error",id:"pic-url-input-error"})))}function L(e){var t=e.isOpen,a=e.onClose,n=e.isLoading,c=e.onDeletePlace;return o.a.createElement(k,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submit:"\u0414\u0430",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),c()},isLoading:n})}var P=a(26),x=function(e){var t=e.loggedIn,a=Object(P.a)(e,["loggedIn"]);return t?o.a.createElement(l.b,a):o.a.createElement(l.a,{to:"./sign-in"})},w=Object(l.i)((function(e){var t=e.onLogin,a=o.a.useState(""),n=Object(i.a)(a,2),c=n[0],r=n[1],s=o.a.useState(""),l=Object(i.a)(s,2),u=l[0],m=l[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c&&u?(t(c,u),r(""),m("")):console.log("error")},className:"login"},o.a.createElement("h4",{className:"login__title"},"\u0412\u0445\u043e\u0434"),o.a.createElement("label",{htmlFor:"email",className:"login__fields"},o.a.createElement("input",{type:"text",className:"login__input",id:"log-email",name:"email",placeholder:"Email",value:c,onChange:function(e){r(e.target.value)},required:!0}),o.a.createElement("span",{className:"popup__input-error",id:"popup-input-error"})),o.a.createElement("label",{htmlFor:"password",className:"login__fields"},o.a.createElement("input",{type:"password",className:"login__input",id:"log-pas",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:u,onChange:function(e){m(e.target.value)},required:!0}),o.a.createElement("span",{className:"popup__input-error",id:"popup-input-error"})),o.a.createElement("button",{type:"submit",className:"login__button"},"\u0412\u043e\u0439\u0442\u0438"),o.a.createElement("div",{className:"login__signup"},o.a.createElement("p",{className:"login__question"},"\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"),o.a.createElement(f.b,{to:"/sign-up",className:"login__link"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))})),U=Object(l.i)((function(e){var t=e.onRegister,a=o.a.useState(""),n=Object(i.a)(a,2),c=n[0],r=n[1],s=o.a.useState(""),l=Object(i.a)(s,2),u=l[0],m=l[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c,u),r(""),m("")},className:"register"},o.a.createElement("h4",{className:"register__title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),o.a.createElement("label",{htmlFor:"email",className:"register__fields"},o.a.createElement("input",{type:"text",className:"register__input",id:"reg-email",name:"email",placeholder:"Email",value:c,onChange:function(e){r(e.target.value)},required:!0}),o.a.createElement("span",{className:"popup__input-error",id:"popup-input-error"})),o.a.createElement("label",{htmlFor:"password",className:"register__fields"},o.a.createElement("input",{type:"password",className:"register__input",id:"reg-pas",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:u,onChange:function(e){m(e.target.value)},required:!0}),o.a.createElement("span",{className:"popup__input-error",id:"popup-input-error"})),o.a.createElement("button",{type:"submit",className:"register__button"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),o.a.createElement("div",{className:"register__signup"},o.a.createElement("p",{className:"register__question"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"),o.a.createElement(f.b,{to:"/sign-in",className:"register__link"},"\u0412\u043e\u0439\u0442\u0438")))})),A=a(23),I=a.n(A),D=a(24),T=a.n(D);function q(e){var t=e.isOpen,a=e.onClose,n=e.loggedIn,c=o.a.useState(""),r=Object(i.a)(c,2),s=r[0],l=r[1],u=o.a.useState(""),m=Object(i.a)(u,2),p=m[0],d=m[1];return o.a.useEffect((function(){n?(l(I.a),d("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!")):(l(T.a),d("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."))}),[t,n]),o.a.createElement("section",{className:"popup \n      ".concat(t&&"popup_opened")},o.a.createElement("div",{className:"popup__container popup-mouse"},o.a.createElement("button",{className:"popup__close popup-edit-close",onClick:a}),o.a.createElement("div",{className:"popup__content"},o.a.createElement("form",{className:"popup__form",action:"#"},o.a.createElement("div",{className:"popup__answer"},o.a.createElement("img",{className:"popup__image",src:s,alt:"success/fail"}),o.a.createElement("h4",{className:"popup__text"},p))))))}var F=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),u=Object(i.a)(r,2),m=u[0],f=u[1],g=Object(n.useState)(!1),N=Object(i.a)(g,2),O=N[0],k=N[1],P=Object(n.useState)(!1),A=Object(i.a)(P,2),I=A[0],D=A[1],T=Object(n.useState)(!1),F=Object(i.a)(T,2),J=F[0],R=F[1],z=Object(n.useState)({isImageOpen:!1,link:"",name:""}),B=Object(i.a)(z,2),M=B[0],H=B[1],W=Object(n.useState)({}),G=Object(i.a)(W,2),V=G[0],$=G[1],K=o.a.useState([]),Q=Object(i.a)(K,2),X=Q[0],Y=Q[1],Z=Object(n.useState)(!1),ee=Object(i.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)({}),oe=Object(i.a)(ne,2),ce=oe[0],re=oe[1],se=Object(n.useState)(!1),ie=Object(i.a)(se,2),le=ie[0],ue=ie[1],me=Object(l.g)();function pe(){c(!1),k(!1),f(!1),D(!1),R(!1),H({isImageOpen:!1,link:"",name:""})}function de(e){var t=e.link,a=e.name;H({isImageOpen:!0,link:t,name:a})}function fe(e){ue(!!e),R(!0)}return o.a.useEffect((function(){Promise.all([j.getCards(),j.getUserInfo()]).then((function(e){$(e[1]),Y(e[0])})).catch((function(e){return console.log(e)}))}),[]),o.a.useEffect((function(){!function(){var e=localStorage.getItem("token");e&&d(e).then((function(e){e&&(ue(!0),me.push("/"))})).catch((function(e){fe(!1),401===e&&console.log("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435")}))}()}),[]),o.a.createElement(h.Provider,{value:V},o.a.createElement("div",{className:"page"},o.a.createElement(_,{onOut:function(){localStorage.removeItem("token"),me.push("/sign-in")}}),o.a.createElement(l.d,null,o.a.createElement(x,{exact:!0,path:"/",loggedIn:le},o.a.createElement(E,{cards:X,onCardClick:de,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===V._id}));j.changeLikeCardStatus(e._id,!t).then((function(t){var a=X.map((function(a){return a._id===e._id?t:a}));Y(a)})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){D(!0),re(e)},onEditProfile:function(){c(!0)},onAddPlace:function(){f(!0)},onEditAvatar:function(){k(!0)},handleCardClick:de}),o.a.createElement(b,null)),o.a.createElement(l.b,{path:"/sign-up"},o.a.createElement(U,{onRegister:function(e,t){(function(e,t){return fetch("".concat(p,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))})(e,t).then((function(e){me.push("/sign-in"),fe(!0)})).catch((function(e){fe(!1),400===e&&console.log("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439")}))}})),o.a.createElement(l.b,{path:"/sign-in"},o.a.createElement(w,{onLogin:function(e,t){(function(e,t){return fetch("".concat(p,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).then((function(e){if(e.token)return localStorage.setItem("token",e.token),e}))})(e,t).then((function(e){e.token&&(fe(!0),ue(!0),me.push("/"))})).catch((function(e){fe(!1),400===e?console.log("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"):401===e&&console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")}))}})),o.a.createElement(l.b,null,le?o.a.createElement(l.a,{to:"/"}):o.a.createElement(l.a,{to:"/sign-in"}))),o.a.createElement(q,{isOpen:J,onClose:pe,loggedIn:le}),o.a.createElement(C,{isOpen:a,onClose:pe,isLoading:te,onUpdateUser:function(e){ae(!0),j.updateProfile(e).then((function(e){$(e),pe()})).catch((function(e){return console.log(e)})).finally((function(){return ae(!1)}))}}),o.a.createElement(y,{isOpen:m,onClose:pe,onAddPlace:function(e){ae(!0),j.postCard(e).then((function(e){Y([e].concat(Object(s.a)(X))),pe()})).catch((function(e){return console.log(e)})).finally((function(){return ae(!1)}))},isLoading:te}),o.a.createElement(S,{isOpen:O,onClose:pe,isLoading:te,onUpdateAvatar:function(e){ae(!0),j.updateAvatar(e).then((function(e){$(e),pe()})).catch((function(e){return console.log(e)})).finally((function(){return ae(!1)}))}}),o.a.createElement(L,{isOpen:I,onClose:pe,isLoading:te,onDeletePlace:function(){ae(!0),j.deleteCard(ce._id).then((function(){Y(X.filter((function(e){return e!==ce}))),pe()})).catch((function(e){return console.log(e)})).finally((function(){return ae(!1)}))}}),o.a.createElement(v,{name:M.name,link:M.link,onClose:pe,isOpen:M.isImageOpen})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f.a,null,o.a.createElement(F,null))),document.querySelector(".page")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.6a83c6a3.chunk.js.map