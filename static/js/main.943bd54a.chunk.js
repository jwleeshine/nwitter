(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{38:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(24),r=a.n(s),i=a(15),j=a(5),l=a(16);a(30),a(39),a(40);l.a.initializeApp({apiKey:"AIzaSyACkkHgtEy2t-3LCK1uEleA9Iu6da_nc1E",authDomain:"nwitter-dfe84.firebaseapp.com",projectId:"nwitter-dfe84",storageBucket:"nwitter-dfe84.firebasestorage.app",messagingSenderId:"223362557320",appId:"1:223362557320:web:b46547d0b56755c609063d"});const d=l.a,u=l.a.auth(),o=l.a.firestore(),b=l.a.storage();var h=a(1);var O=()=>{const[e,t]=Object(n.useState)(""),[a,c]=Object(n.useState)(""),[s,r]=Object(n.useState)(!0),[i,j]=Object(n.useState)(""),l=e=>{const{target:{name:a,value:n}}=e;"email"===a?t(n):"password"===a&&c(n)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{onSubmit:async t=>{t.preventDefault();try{let t;t=s?await u.createUserWithEmailAndPassword(e,a):await u.signInWithEmailAndPassword(e,a)}catch(i){j(i.message)}},children:[Object(h.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:e,onChange:l}),Object(h.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:a,onChange:l}),Object(h.jsx)("input",{type:"submit",value:s?"Create Account":"Log In"}),i]}),Object(h.jsx)("span",{onClick:()=>r((e=>!e)),children:s?"Sign In":"Create Account"})]})};var p=()=>{const e=async e=>{const{target:{name:t}}=e;let a;"google"===t?a=new d.auth.GoogleAuthProvider:"github"===t&&(a=new d.auth.GithubAuthProvider);await u.signInWithPopup(a)};return Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:e,name:"google",children:"Continue with Google"}),Object(h.jsx)("button",{onClick:e,name:"github",children:"Continue with Github"})]})]})};var x=e=>{let{nweetObj:t,isOwner:a}=e;const[c,s]=Object(n.useState)(!1),[r,i]=Object(n.useState)(t.text),j=()=>s((e=>!e));return Object(h.jsx)("div",{children:c?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),await o.doc(`nweets/${t.id}`).update({text:r}),s(!1)},children:[Object(h.jsx)("input",{onChange:e=>{const{target:{value:t}}=e;i(t)},value:r,required:!0}),Object(h.jsx)("input",{type:"submit",value:"Update Nweet"})]}),Object(h.jsx)("button",{onClick:j,children:"Cancel"})]}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(h.jsx)("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),a&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{onClick:async()=>{window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(await o.doc(`nweets/${t.id}`).delete(),""!==t.attachmentUrl&&await b.refFromURL(t.attachmentUrl).delete())},children:"Delete Nweet"}),Object(h.jsx)("button",{onClick:j,children:"Edit Nweet"})]})]})})},m=a(42);var g=e=>{let{userObj:t}=e;const[a,c]=Object(n.useState)(""),[s,r]=Object(n.useState)("");return Object(h.jsxs)("form",{onSubmit:async e=>{e.preventDefault();let n="";if(""!==s){const e=b.ref().child(`${t.uid}/${Object(m.a)()}`),a=await e.putString(s,"data_url");n=await a.ref.getDownloadURL()}const i={text:a,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n};await o.collection("nweets").add(i),c(""),r("")},children:[Object(h.jsx)("input",{value:a,onChange:e=>{e.preventDefault();const{target:{value:t}}=e;c(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(h.jsx)("input",{type:"submit",value:"Nweet"}),s&&Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:s,width:"50px",height:"50px"}),Object(h.jsx)("button",{onClick:()=>r(""),children:"Clear"})]})]})};var w=e=>{let{userObj:t}=e;const[a,c]=Object(n.useState)([]);return Object(n.useEffect)((()=>{o.collection("nweets").onSnapshot((e=>{const t=e.docs.map((e=>({id:e.id,...e.data()})));c(t)}))}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{userObj:t}),Object(h.jsx)("div",{children:a.map((e=>Object(h.jsx)(x,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)))})]})};var f=e=>{let{userObj:t,refreshUser:a}=e;const c=Object(j.f)(),[s,r]=Object(n.useState)(t.displayName);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),t.displayName!==s&&(await t.updateProfile({displayName:s}),a())},children:[Object(h.jsx)("input",{onChange:e=>{const{target:{value:t}}=e;r(t)},type:"text",placeholder:"Display name",value:s}),Object(h.jsx)("input",{type:"submit",value:"Update Profile"})]}),Object(h.jsx)("button",{onClick:()=>{u.signOut(),c.push("/")},children:"Log Out"})]})};var v=e=>{let{userObj:t}=e;return Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsxs)(i.b,{to:"/profile",children:[t.displayName,"\uc758 Profile"]})})]})})};var y=e=>{let{isLoggedIn:t,userObj:a,refreshUser:n}=e;return Object(h.jsxs)(i.a,{children:[t&&Object(h.jsx)(v,{userObj:a}),Object(h.jsx)(j.c,{children:t?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.a,{exact:!0,path:"/",children:Object(h.jsx)(w,{userObj:a})}),Object(h.jsx)(j.a,{exact:!0,path:"/profile",children:Object(h.jsx)(f,{refreshUser:n,userObj:a})})]}):Object(h.jsx)(j.a,{exact:!0,path:"/",children:Object(h.jsx)(p,{})})})]})};var S=function(){const[e,t]=Object(n.useState)(!1),[a,c]=Object(n.useState)(null);return Object(n.useEffect)((()=>{u.onAuthStateChanged((e=>{c(!!e&&{uid:e.uid,displayName:e.displayName,updateProfile:t=>e.updateProfile(t)}),t(!0)}))}),[]),Object(h.jsx)(h.Fragment,{children:e?Object(h.jsx)(y,{refreshUser:()=>{const e=u.currentUser;c({uid:e.uid,displayName:e.displayName,updateProfile:t=>e.updateProfile(t)})},isLoggedIn:Boolean(a),userObj:a}):"initializing..."})};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.943bd54a.chunk.js.map