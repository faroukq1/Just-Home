"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[5147],{5147:(V,O,s)=>{s.r(O),s.d(O,{SettingsPage:()=>c,default:()=>b});var e=s(92132),D=s(21272),P=s(38413),h=s(55356),p=s(85963),v=s(4198),C=s(42455),r=s(83997),A=s(94061),L=s(30893),y=s(90151),_=s(68074),g=s(7441),o=s(2129),T=s(54514),I=s(56336),x=s(14718),R=s(54894),M=s(74930),i=s(34185),Y=s(98908),Z=s(5409),B=s(88761),U=s(48940),k=s(61535),w=s(12083),q=s(40495),ss=s(50837),es=s(77965);const K=t=>t,W={initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},j=(t,n)=>(0,B.Ay)(t,l=>{switch(n.type){case"GET_DATA_SUCCEEDED":{l.initialData=n.data,l.modifiedData=n.data;break}case"ON_CHANGE":{U(l,["modifiedData",...n.keys.split(".")],n.value);break}default:return t}}),c=()=>{const{formatMessage:t}=(0,R.A)(),{lockApp:n,unlockApp:l}=(0,o.MA)(),z=(0,o.hN)(),{get:S,put:N}=(0,o.ry)();(0,o.L4)();const[{initialData:G,modifiedData:d},f]=(0,D.useReducer)(j,W,K),{data:E,isLoading:F,refetch:H}=(0,M.useQuery)({queryKey:["upload","settings"],async queryFn(){const{data:{data:a}}=await S("/upload/settings");return a}});D.useEffect(()=>{E&&f({type:"GET_DATA_SUCCEEDED",data:E})},[E]);const u=I(G,d),{mutateAsync:Q,isLoading:J}=(0,M.useMutation)({async mutationFn(a){return N("/upload/settings",a)},onSuccess(){H(),z({type:"success",message:{id:"notification.form.success.fields"}})},onError(a){console.error(a)}}),X=async a=>{a.preventDefault(),!u&&(n(),await Q(d),l())},m=({target:{name:a,value:$}})=>{f({type:"ON_CHANGE",keys:a,value:$})};return(0,e.jsxs)(P.g,{tabIndex:-1,children:[(0,e.jsx)(x.m,{title:t({id:(0,i.g)("page.title"),defaultMessage:"Settings - Media Libray"})}),(0,e.jsxs)("form",{onSubmit:X,children:[(0,e.jsx)(h.Q,{title:t({id:(0,i.g)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:(0,e.jsx)(p.$,{disabled:u,loading:J,type:"submit",startIcon:(0,e.jsx)(T.A,{}),size:"S",children:t({id:"global.save",defaultMessage:"Save"})}),subtitle:t({id:(0,i.g)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),(0,e.jsx)(v.s,{children:F?(0,e.jsx)(o.Bl,{}):(0,e.jsx)(C.P,{children:(0,e.jsx)(r.s,{direction:"column",alignItems:"stretch",gap:12,children:(0,e.jsx)(A.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(r.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(r.s,{children:(0,e.jsx)(L.o,{variant:"delta",as:"h2",children:t({id:(0,i.g)("settings.blockTitle"),defaultMessage:"Asset management"})})}),(0,e.jsxs)(y.x,{gap:6,children:[(0,e.jsx)(_.E,{col:6,s:12,children:(0,e.jsx)(g.l,{"aria-label":"responsiveDimensions",checked:d.responsiveDimensions,hint:t({id:(0,i.g)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:t({id:(0,i.g)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:a=>{m({target:{name:"responsiveDimensions",value:a.target.checked}})}})}),(0,e.jsx)(_.E,{col:6,s:12,children:(0,e.jsx)(g.l,{"aria-label":"sizeOptimization",checked:d.sizeOptimization,hint:t({id:(0,i.g)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:t({id:(0,i.g)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:a=>{m({target:{name:"sizeOptimization",value:a.target.checked}})}})}),(0,e.jsx)(_.E,{col:6,s:12,children:(0,e.jsx)(g.l,{"aria-label":"autoOrientation",checked:d.autoOrientation,hint:t({id:(0,i.g)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:t({id:(0,i.g)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:a=>{m({target:{name:"autoOrientation",value:a.target.checked}})}})})]})]})})})})})]})]})},b=()=>(0,e.jsx)(o.kz,{permissions:i.P.settings,children:(0,e.jsx)(c,{})})}}]);
