(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){e.exports=a.p+"static/media/earth.64331c81.png"},112:function(e,t,a){e.exports=a.p+"static/media/planet.1f3b64b8.png"},113:function(e,t,a){e.exports=a.p+"static/media/spaceship.374a9963.png"},116:function(e,t,a){e.exports=a.p+"static/media/ik.4e1cacca.jpg"},123:function(e,t,a){e.exports=a(269)},128:function(e,t,a){},129:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},268:function(e,t,a){},269:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(110),o=a.n(i),c=(a(128),a(5)),l=a(6),s=a(8),m=a(7),d=a(9),p=a(273),u=a(271),g=a(111),h=a.n(g),v=(a(129),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement(u.a,{className:"link-no-style left",to:"/"},r.a.createElement("img",{src:h.a,className:"earth",alt:"earth"}),r.a.createElement("span",null,"Jurian Vink")),r.a.createElement("div",{className:"right"},r.a.createElement("ul",{className:"nav-wrapper"},r.a.createElement(u.a,{className:"link-no-style",to:"/about"},r.a.createElement("span",{className:"nav-link"},"About me")),r.a.createElement(u.a,{className:"link-no-style",to:"/projects"},r.a.createElement("span",{className:"nav-link"},"My Projects")),r.a.createElement(u.a,{className:"link-no-style",to:"/contact"},r.a.createElement("span",{className:"nav-link"},"Contact")))))}}]),t}(n.Component)),b=a(274),E=a(272),w=a(112),f=a.n(w),k=a(113),j=a.n(k),N=(a(132),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(v,null),r.a.createElement("div",{className:"front-page-wrapper"},r.a.createElement("div",{className:"introduction"},r.a.createElement("span",{style:{fontSize:26,marginBottom:"1em"}},"Welcome! My name is Jurian Vink,"),r.a.createElement("span",{style:{fontSize:20,lineHeight:"30px",marginLeft:".5em"}},"I am a passionate software developer with a sense of design and a passion for making valuable, (re)usable and beautiful software!"),r.a.createElement("div",{className:"button-container"},r.a.createElement(u.a,{to:"/about",id:"button-style"},"Get to know more"),r.a.createElement(u.a,{to:"/projects",id:"button-style"},"Check out my projects"))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{id:"circle-orbit-container"},r.a.createElement("img",{src:f.a,className:"planet",alt:"planet"}),r.a.createElement("div",{id:"outer-orbit"},r.a.createElement("div",{className:"outer-orbit-cirlces"})),r.a.createElement("div",{id:"middle-orbit"},r.a.createElement("div",{className:"middle-orbit-cirlces"})),r.a.createElement("div",{id:"inner-orbit"},r.a.createElement("div",{className:"inner-orbit-cirlces"}),r.a.createElement("img",{src:j.a,className:"inner-orbit-cirlces",alt:"satellite",style:{width:"2em",height:"auto"}}))))))}}]),t}(n.Component)),y=a(275),x=(a(133),a(45)),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("span",{className:"title-text"},"Some projects I worked on"),r.a.createElement("div",{className:"projects-wrapper"},x.map(function(t){return r.a.createElement("div",{className:"project-wrapper",key:t.id},r.a.createElement("span",{className:"date"},t.beginDate),r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{className:"image",src:t.coverImage,alt:"prjImg"})),r.a.createElement("br",null),r.a.createElement("h3",null,t.name),r.a.createElement("p",null,t.shortDescription),r.a.createElement("div",{className:"actions"},r.a.createElement("button",{onClick:function(){return e.goToProject(t.id)}},"Read more")))})))}},{key:"goToProject",value:function(e){this.props.history.push("projects/"+e)}}]),t}(n.Component),C=Object(y.a)(O),D=(a(135),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;if(this.props.match.params.projectid){var t=x.filter(function(t){return t.id.toString()===e.props.match.params.projectid.toString()})[0];return r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("div",{className:"project-detail"},r.a.createElement("div",{className:"project-detail-header"},r.a.createElement("div",{className:"project-detail-header-image-wrapper"},r.a.createElement("img",{className:"project-detail-header-image",src:t.coverImage,alt:"prjImg"})),r.a.createElement("span",{className:"project-detail-header-title"},t.name),r.a.createElement("span",{className:"project-detail-header-date"},t.beginDate)),r.a.createElement("div",{className:"project-detail-content"},r.a.createElement("h3",null,"Product Owner: ",r.a.createElement("i",null,t.productOwner)),r.a.createElement("p",null,t.longDescription),t.screenshots.map(function(e,t){return r.a.createElement("img",{src:e,alt:t,className:"project-detail-content-screenshot"})}))))}return r.a.createElement("span",null,"404")}}]),t}(n.Component)),I=a(115),S=a.n(I),V=(a(136),a(116)),R=a.n(V),J=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("div",{className:"content-left"},r.a.createElement("h2",null,"Introduction"),r.a.createElement("p",null,"Hi there, my name is Jurian Vink. I am a ",S()("1998-09-28").toNow(!0)," old student, living in the Netherlands. As you might guess, one of my hobbies is programming. I love making things out of nothing, and ending up with a beautiful product I can be proud of. Front-end development is something I like doing the most. Although, the combination of developing back-end features and implementing this in the front-end is even better, because you will have much more knowledge of what is going on, than if someone else would develop the back-end feature.",r.a.createElement("br",null),r.a.createElement("br",null),"More hobbies of mine are gaming, hanging out with friends and fitness. I usually visit the gym about 4 to 5 times a week. It is most satisfying after programming and thinking the whole day, just to clear your mind.",r.a.createElement("br",null),r.a.createElement("br",null),"I am in my second year of my study Computer Science at Hogeschool Rotterdam. This study is about programming, analysing, setting up requirements and communication with all the parties involved.",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("h2",null,"Experience"),r.a.createElement("p",null,"I achieved most of my experience at my current work, ",r.a.createElement("a",{style:{color:"green"},href:"https://gdksoftware.nl/",rel:"noopener noreferrer",target:"_blank"},"GDK Software"),". The employees were experienced programmers who teached me fundemental industry coding standards, object orientated programming, advanced programming patterns, working in agile and teamwork.",r.a.createElement("br",null),"I have participated in smaller up to larger scaled projects for all sorts of customers.",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("h2",null,"Skills"),r.a.createElement("div",null,r.a.createElement("div",{className:"skill-wrapper"},r.a.createElement("div",{style:{width:"95%",backgroundColor:"#40407a",textIndent:"1em",padding:"8px",borderRadius:"10px"}},"React")),r.a.createElement("div",{className:"skill-wrapper"},r.a.createElement("div",{style:{width:"90%",backgroundColor:"#40407a",textIndent:"1em",padding:"8px",borderRadius:"10px"}},"React Native")),r.a.createElement("div",{className:"skill-wrapper"},r.a.createElement("div",{style:{width:"65%",backgroundColor:"#40407a",textIndent:"1em",padding:"8px",borderRadius:"10px"}},"Angular")),r.a.createElement("div",{className:"skill-wrapper"},r.a.createElement("div",{style:{width:"93%",backgroundColor:"#40407a",textIndent:"1em",padding:"8px",borderRadius:"10px"}},"NodeJS")),r.a.createElement("div",{className:"skill-wrapper"},r.a.createElement("div",{style:{width:"98%",backgroundColor:"#40407a",textIndent:"1em",padding:"8px",borderRadius:"10px"}},"HTML/CSS")),r.a.createElement("div",{className:"skill-wrapper"},r.a.createElement("div",{style:{width:"80%",backgroundColor:"#40407a",textIndent:"1em",padding:"8px",borderRadius:"10px"}},"UX Design")),r.a.createElement("div",{className:"skill-wrapper"},r.a.createElement("div",{style:{width:"80%",backgroundColor:"#40407a",textIndent:"1em",padding:"8px",borderRadius:"10px"}},"Databases")))),r.a.createElement("div",{className:"content-right"},r.a.createElement("img",{src:R.a,alt:"ik",style:{maxWidth:"500px",borderRadius:"100%"}}),r.a.createElement("h1",null,"Jurian Vink"),r.a.createElement("h3",null,"Junior Software Developer"),r.a.createElement("h4",null,"at GDK Software")))}}]),t}(r.a.Component),z=a(122),B=a(31),T=a(120),H=a.n(T),A=a(121),G=a.n(A),W=(a(268),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"Contact"),r.a.createElement("p",null,"Dit doet nu nog bijzonder weinig."),r.a.createElement(z.a,{initialValues:{name:"",email:"",message:""},onSubmit:function(e,t){t.setSubmitting(!1)},validationSchema:B.object().shape({name:B.string().required("Dit veld is vereist"),email:B.string().email().required("Dit veld is vereist"),message:B.string().required("Dit veld is vereist")}),render:function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:"contact-form"},r.a.createElement("div",{className:"contact-form-input"},r.a.createElement("label",null,"Naam"),r.a.createElement("input",{type:"text",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.name,name:"name"}),e.errors.name&&r.a.createElement("div",{id:"feedback"},e.errors.name)),r.a.createElement("div",{className:"contact-form-input"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"text",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email,name:"email"}),e.errors.email&&r.a.createElement("div",{id:"feedback"},e.errors.email)),r.a.createElement("div",{className:"contact-form-input"},r.a.createElement("label",null,"Bericht"),r.a.createElement("input",{type:"text",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.message,name:"message"}),e.errors.message&&r.a.createElement("div",{id:"feedback"},e.errors.message)),r.a.createElement("button",{type:"submit"},"Verstuur"))}}),r.a.createElement("div",{className:"social-media"},r.a.createElement("a",{className:"icon-text",target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/jurianvink/"},r.a.createElement(H.a,{className:"icon"}),r.a.createElement("span",{className:"text"},"jurianvink")),r.a.createElement("a",{className:"icon-text",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/jurian-vink-282465141/"},r.a.createElement(G.a,{className:"icon"}),r.a.createElement("span",null,"Jurian Vink"))))}}]),t}(r.a.Component)),M=function(){return r.a.createElement(b.a,null,r.a.createElement(E.a,{exact:!0,path:"/",component:N}),r.a.createElement(E.a,{exact:!0,path:"/about",component:J}),r.a.createElement(E.a,{exact:!0,path:"/projects",component:C}),r.a.createElement(E.a,{exact:!0,path:"/projects/:projectid",component:D}),r.a.createElement(E.a,{exact:!0,path:"/contact",component:W}))},q=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{id:"root"},r.a.createElement(v,null),r.a.createElement(M,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e){e.exports=[{id:1,name:"FineAid Web",shortDescription:"Voor dit project moesten wij een website en een app maken voor FineAid.",beginDate:"08-20-2018",productOwner:"FineAid",longDescription:"Voor dit project moesten wij een website en een app maken voor FineAid. Dit is een goede klant van GDK Software. Ze vertrouwden ons toe om hun huidige portaal te vertalen naar een nieuwe versie, die bovendien ook als app gestart kan worden op de mobiele telefoon. FineAid is een bedrijf dat zich bezig houdt met financi\xebn van mensen die in de schuld zitten. Bewindvoerders kunnen dossiers van deze mensen inzien en kunnen de mensen sturen om een stabielere financi\xeble toekomst tegemoet te gaan.",coverImage:"https://drive.google.com/uc?export=view&id=1HlrMGnMaASIKurfrUVJSgiK6p4TG-ifV",screenshots:["https://drive.google.com/uc?export=view&id=1dxHmHdL-gIlilj_TCcA-H1O4D4wEz8wQ","https://drive.google.com/uc?export=view&id=1iZ5TThJbnWXrsvrXDrEP95qvnRMO8pJA","https://drive.google.com/uc?export=view&id=11CojlSVsiFHHTFcUA9GgBd0uIyfJzgzq"]},{id:2,name:"StudentShop - Project C",shortDescription:"Project C was een schoolproject. We moesten een webshop maken door gebruik te maken van een front-end framework. We hebben ReactJS gebruikt voor de front-end en .NET voor de back-end.",beginDate:"09-12-2018",productOwner:"Hogeschool Rotterdam",longDescription:"Tijdens dit project heb ik veel ervaring opgedaan voor React en .NET. We kregen een iets minder dan een half schooljaar om het product te voltooien. Het idee was om een studenten webshop te maken, waarmee klanten Het project ging me goed af en we hebben er dan ook een 8.1 voor gekregen. De front-end heb ik volledig zelf gemaakt, en ik heb ook meegewerkt aan de back-end. Ik heb veel inspiratie opgedaan door het bekijken van andere webshops. Echter heb ik het design zelf ontworpen en zijn er geen externe UI libraries te pas gekomen.",coverImage:"https://drive.google.com/uc?export=view&id=1ByWhuOSWDYZRujrQX8ec5doqLRAbtb6N",screenshots:["https://drive.google.com/uc?export=view&id=1Sqa50JX_jf1ce1bT-9nMKB2XZepa_mo5","https://drive.google.com/uc?export=view&id=11hSst7oOYLG4NnRBuJEI3ebrB1YVDf5d","https://drive.google.com/uc?export=view&id=1UGKkmw0qYyAklkU-n2U8inbfdLT5sl1n","https://drive.google.com/uc?export=view&id=1soQ6r_NCCHi6T1m2BzlL_XHYoJRYjmoZ","https://drive.google.com/uc?export=view&id=1uOwEZPVlTwMijNJ51AyIBWyEeX4qcNJY","https://drive.google.com/uc?export=view&id=1ZXPTCgacZQjfcQ1F0l26T35CRhlbDbPd","https://drive.google.com/uc?export=view&id=1tY4fKkzPSsqU6dAvphjz4GC2DepxoH-3"]},{id:3,name:"Dierenambulance Gooi en Vechtstreek",shortDescription:"Voor dit project moesten wij een website en een app maken voor de Dierambulance van regio Gooi en Vechtstreek.",beginDate:"08-20-2018",productOwner:"Dierenambulance Gooi en Vechtstreek",longDescription:"Voor dit project moesten wij een website en een app maken voor de Dierambulance van regio Gooi en Vechtstreek. Voor dit project moesten wij een website en een app maken voor de Dierambulance van regio Gooi en Vechtstreek. Voor dit project moesten wij een website en een app maken voor de Dierambulance van regio Gooi en Vechtstreek.",coverImage:"https://www.dierenambulance-gooienvechtstreek.nl/uploads/1/1/9/1/119192036/published/img-20180427-101816-773.jpg?1537038783",screenshots:["https://drive.google.com/uc?export=view&id=1W26NMtI3LtZ_bUm1C3CapwviAZiLHH-w","https://drive.google.com/uc?export=view&id=1bRyniYiKWw-f_X4oSz_W9HMkp-hqbrWG","https://drive.google.com/uc?export=view&id=1NgBiqvinrbcMmx0V7z7hsj39_M3Fnaqy","https://drive.google.com/uc?export=view&id=1frzJOS7URTMPYCVJOyL1YPMJnPfsDXBL","https://drive.google.com/uc?export=view&id=1x_g3fh4bSZUS2O23rR-1p18XgVE6EUyv"]}]}},[[123,1,2]]]);
//# sourceMappingURL=main.fbbf9af2.chunk.js.map