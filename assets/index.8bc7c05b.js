import{R as l,j as u,B as h,a as e,I as y,d as ht,F as K,b as J,S as Q,M as b,c as pt,D as X,e as mt,T as k,f as Y,g as gt,h as ft,i as Ct,k as xt,l as yt,m as vt,n as St,P as Z,o as Tt,p as bt,q as ee,r as v,s as wt,t as Dt,u as Pt,v as Lt,N as Rt,w as te,x as Ut,C as kt}from"./vendor.6d2a4eb3.js";const Mt=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const C of s.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&m(C)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}};Mt();function Bt(o){const[a,i]=l.useState("multi");function m(r){let s=r.target.value,C=o.nvUpdateSliceType;i(s),C(s)}return u(h,{sx:{display:"flex",width:"100%",height:"64px",flexDirection:"row",justifyItems:"left",alignItems:"center",backgroundColor:"white"},children:[e(y,{onClick:o.toggleLayers,children:e(ht,{})}),u(K,{size:"small",sx:{m:2,minWidth:120},children:[e(J,{id:"slice-type-label",children:"Display mode"}),u(Q,{labelId:"slice-type-label",id:"slice-type",value:a,label:"Display mode",onChange:m,children:[e(b,{value:"axial",children:"Axial"}),e(b,{value:"coronal",children:"Coronal"}),e(b,{value:"sagittal",children:"Sagittal"}),e(b,{value:"multi",children:"Multi"}),e(b,{value:"3d",children:"3D"})]})]}),e(y,{onClick:o.toggleSettings,style:{marginLeft:"auto"},children:e(pt,{})})]})}function It(o){return e(X,{open:o.open,variant:"temporary",anchor:"right",sx:{width:o.width},children:u(h,{sx:{width:o.width,role:"presentation",display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[e(h,{sx:{display:"flex",marginBottom:"10px"},children:e(y,{onClick:o.toggleMenu,style:{marginRight:"auto"},children:e(mt,{})})}),o.children]})})}function D(o){const[a,i]=l.useState("#ff0000");l.useEffect(()=>{let c=m(o.colorRGB01),p=s(c);console.log(o.title),console.log(c),console.log(p),console.log("end use effect"),i(p)},[]);function m(c){return[Math.round(c[0]*255),Math.round(c[1]*255),Math.round(c[2]*255)]}function r(c){var p=c.toString(16);return p.length==1?"0"+p:p}function s(c){return"#"+r(c[0])+r(c[1])+r(c[2])}function C(c){return[parseInt(c.substring(1,3),16),parseInt(c.substring(3,5),16),parseInt(c.substring(5),16)]}function w(c){let p=c.target.value;console.log(p),i(p);let g=C(p).map(S=>S/255);o.onSetColor(g)}return u(h,{sx:{display:"flex"},m:1,children:[e(k,{style:{marginRight:"auto"},children:o.title}),e(Y,{disableUnderline:!1,autoFocus:!1,type:"color",style:{width:"50px",height:"20px"},onInput:w,value:a})]})}function x(o){const[a,i]=l.useState(o.value);l.useEffect(()=>{i(o.value)},[]);function m(r){let s=r.target.value;s<o.min&&(s=o.min),s>o.max&&(s=o.max),i(s),o.onChange(s)}return u(h,{sx:{display:"flex"},m:1,children:[e(k,{style:{marginRight:"auto"},children:o.title}),e(Y,{disableUnderline:!0,type:"number",style:{width:"50px",height:"20px"},onInput:m,value:a,inputProps:{step:o.step}})]})}function Ot(o){function a(){let i=document.createElement("input");i.type="file",i.onchange=async function(){o.onAddLayer(i.files[0])},i.click()}return e(X,{open:o.open,variant:"temporary",anchor:"left",sx:{width:o.width},children:u(h,{sx:{width:o.width,display:"flex",flexDirection:"row",height:"100%"},children:[u(h,{sx:{width:48,display:"flex",flexDirection:"column",backgroundColor:"#F8F8F8",height:"100%",alignItems:"center"},children:[e(y,{style:{marginTop:"36px"},children:e(gt,{color:"primary"})}),e(y,{style:{marginTop:"8px"},children:e(ft,{})})]}),u(h,{sx:{width:o.width,role:"presentation",display:"flex",height:"100%",flexDirection:"column",justifyContent:"flex-start",ml:1,mr:1},children:[e(h,{sx:{display:"flex"},children:e(y,{onClick:o.onToggleMenu,style:{marginLeft:"auto"},children:e(Ct,{})})}),e(h,{sx:{display:"flex"},children:e(xt,{onClick:a,endIcon:e(yt,{}),size:"small",children:"Add Layer"})}),o.children]})]})})}function Vt(o){const a=l.useRef(null);return l.useEffect(async()=>{const i=o.nv;i.attachToCanvas(a.current),await i.loadVolumes(o.volumes)},[]),e(h,{sx:{display:"flex",width:"100%",height:"90"},children:e("canvas",{ref:a,height:480,width:640})})}function f(o){function a(){o.onChange()}return u(h,{sx:{display:"flex",alignItems:"center"},m:1,children:[e(k,{onClick:a,style:{marginRight:"auto"},children:o.title}),e(vt,{checked:o.checked,onChange:a})]})}function Nt(o){let a="none";return o.isVisible?a="":a="none",e(St,{sx:{display:a,marginTop:"auto",maxHeight:"30%",flexGrow:1},component:Z,children:u(Tt,{sx:{minWidth:300},children:[e(bt,{children:u(ee,{children:[e(v,{children:"Image"}),e(v,{align:"right",children:"Value"}),e(v,{align:"right",children:"MM"}),e(v,{align:"right",children:"Vox"})]})}),e(wt,{children:o.tableData.map(i=>u(ee,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(v,{component:"th",scope:"row",children:i.name}),e(v,{align:"right",children:i.value.toFixed(o.decimalPrecision)}),e(v,{align:"right",children:`${i.mm[0].toFixed(o.decimalPrecision)} ${i.mm[1].toFixed(o.decimalPrecision)} ${i.mm[2].toFixed(o.decimalPrecision)}`}),e(v,{align:"right",children:`${i.vox[0]} ${i.vox[1]} ${i.vox[2]}`})]},i.id))})]})})}function $t(o){const a=o.image,[i,m]=l.useState(!1),[r,s]=l.useState(a.colorMap);let C=i?e(Pt,{}):e(Lt,{}),w=a.colorMaps().map(g=>e(b,{value:g,children:g},g));function c(){m(!i)}function p(g){let S=g.target.value,L=a.id;console.log(S),o.onColorMapChange(L,S),s(S)}function P(){o.onRemoveLayer(a)}return e(h,{sx:{display:"flex",flexDirection:"column"},children:u(Z,{elevation:2,sx:{marginTop:.5,marginBottom:.5},children:[u(h,{sx:{margin:1,display:"flex",flexDirection:"row",alignItems:"center"},children:[e(k,{children:a.name}),e(y,{onClick:c,style:{marginLeft:"auto"},children:C})]}),e(h,{sx:{display:i?"flex":"none"},children:u(h,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%"},m:1,children:[u(K,{children:[e(J,{children:"Color"}),e(Q,{style:{width:"200px"},value:r,label:"Color",size:"small",onChange:p,children:w})]}),e(y,{onClick:P,children:e(Dt,{})})]})})]})})}const t=new Rt({loadingText:"loading..."});function Ft(o){const[a,i]=l.useState(!1),[m,r]=l.useState(!1),[s,C]=l.useState(t.opts.crosshairColor),[w,c]=l.useState(t.opts.selectionBoxColor),[p,P]=l.useState(t.opts.backColor),[g,S]=l.useState(t.opts.clipPlaneColor),[L,R]=l.useState(t.volumes),[M,ne]=l.useState(!1),[B,oe]=l.useState(!1),[I,le]=l.useState(!1),[ie,ae]=l.useState(t.opts.textHeight),[O,se]=l.useState(t.opts.isColorbar),[V,re]=l.useState(t.opts.isSliceMM),[H,N]=l.useState(t.currentClipPlaneIndex>0),[ce,ue]=l.useState(t.opts.crosshairColor[3]),[de,he]=l.useState(t.opts.clipPlaneColor[3]),[$,pe]=l.useState(!1),[me,ge]=l.useState([]),[z,fe]=l.useState(2),[F,Ce]=l.useState(t.opts.isOrientCube),[T,j]=l.useState(t.opts.isRuler),[xe,ye]=l.useState(t.opts.multiplanarPadPixels),[ve,Se]=l.useState(t.opts.maxDrawUndoBitmaps),[_,Te]=l.useState(t.opts.sagittalNoseLeft),[be,we]=l.useState(t.opts.rulerWidth),[De,Pe]=l.useState(t.opts.longTouchTimeout),[Le,Re]=l.useState(t.opts.doubleTouchTimeout),[W,Ue]=l.useState(t.opts.isDragShowsMeasurementTool),[U,ke]=l.useState(t.opts.rulerColor),[Me,Be]=l.useState(t.opts.rulerColor[3]),[G,Ie]=l.useState(!1);l.useEffect(()=>{o.volumes.map(async n=>{let d=await te.loadFromUrl({url:n.url});t.addVolume(d),R([...t.volumes])})},[]),t.opts.onImageLoaded=()=>{R([...t.volumes])},t.opts.onLocationChange=n=>{ge(n.values)};const Oe=L.map(n=>e($t,{image:n,onColorMapChange:ut,onRemoveLayer:dt},n.name));async function Ve(n){const d=await te.loadFromFile({file:n});t.addVolume(d),R([...t.volumes])}function A(){i(!a)}function E(){r(!m)}function Ne(){pe(!$)}function $e(n,d=1){C([...n,d]),t.setCrosshairColor([...n,d])}function Fe(){t.opts.isOrientCube=!F,Ce(!F),t.drawScene()}function _e(){t.setHighResolutionCapable(!G),Ie(!G)}function We(n){t.opts.multiplanarPadPixels=n,ye(n),t.drawScene()}function Ge(){t.opts.isRuler=!T,j(!T),t.drawScene()}function He(){t.opts.sagittalNoseLeft=!_,Te(!_),t.drawScene()}function ze(n){t.opts.rulerWidth=n,we(n),t.drawScene()}function je(n){t.opts.rulerColor=[U[0],U[1],U[2],n],Be(n),t.drawScene()}function Ae(n){t.opts.longTouchTimeout=n,Pe(n)}function Ee(n){t.opts.doubleTouchTimeout=n,Re(n)}function qe(){t.opts.isDragShowsMeasurementTool=!W,Ue(!W)}function Ke(n){t.opts.maxDrawUndoBitmaps=n,Se(n)}function Je(n,d=1){P([...n,d]),t.opts.backColor=[...n,d],t.drawScene()}function Qe(n,d=1){ke([...n,d]),t.opts.rulerColor=[...n,d],T||(t.opts.isRuler=!T,j(!T)),t.drawScene()}function Xe(n,d=1){S([...n,d]),t.opts.clipPlaneColor=[...n,d],N(!0),t.setClipPlane([0,270,0]),t.updateGLVolume()}function Ye(){H?(N(!1),t.setClipPlane([2,0,0])):(N(!0),t.setClipPlane([0,270,0]))}function Ze(){se(!O),t.opts.isColorbar=!O,t.drawScene()}function et(n){ae(n),t.opts.textHeight=n,t.drawScene()}function tt(n){fe(n)}function nt(){q(),re(!V),t.setSliceMM(!V)}function ot(){t.setCornerOrientationText(!M),ne(!M)}function q(){t.opts.show3Dcrosshair=!I,t.updateGLVolume(),le(!I)}function lt(){t.setRadiologicalConvention(!B),oe(!B)}function it(n){t.setCrosshairColor([s[0],s[1],s[2],n]),ue(n)}function at(n){t.opts.clipPlaneColor=[g[0],g[1],g[2],n],he(n),t.updateGLVolume()}function st(n){t.opts.crosshairWidth=n,t.drawScene()}function rt(n){c([...n,.5]),t.setSelectionBoxColor([...n,.5])}function ct(n){n==="axial"?t.setSliceType(t.sliceTypeAxial):n==="coronal"?t.setSliceType(t.sliceTypeCoronal):n==="sagittal"?t.setSliceType(t.sliceTypeSagittal):n==="multi"?t.setSliceType(t.sliceTypeMultiplanar):n==="3d"&&t.setSliceType(t.sliceTypeRender)}function ut(n,d){t.volumes[t.getVolumeIndexByID(n)].setColorMap(d),t.updateGLVolume()}function dt(n){t.removeVolume(n),R([...t.volumes])}return t.on("intensityRange",n=>{}),u(h,{sx:{display:"flex",flexDirection:"column",height:"100vh",backgroundColor:"black"},children:[u(It,{open:a,width:300,toggleMenu:A,children:[e(D,{colorRGB01:p,onSetColor:Je,title:"Background color"}),e(D,{colorRGB01:g,onSetColor:Xe,title:"Clip plane color"}),e(x,{value:de,onChange:at,title:"Clip plane opacity",min:0,max:1,step:.1}),e(D,{colorRGB01:s,onSetColor:$e,title:"Crosshair color"}),e(x,{value:ce,onChange:it,title:"Crosshair opacity",min:0,max:1,step:.1}),e(D,{colorRGB01:w,onSetColor:rt,title:"Selection box color"}),e(x,{value:t.opts.crosshairWidth,onChange:st,title:"Crosshair size",min:0,max:10,step:1}),e(x,{value:ie,onChange:et,title:"Text size",min:0,max:.2,step:.01}),e(D,{colorRGB01:U,onSetColor:Qe,title:"Ruler color"}),e(x,{value:be,onChange:ze,title:"Ruler thickness",min:0,max:10,step:1}),e(x,{value:Me,onChange:je,title:"Ruler opacity",min:0,max:1,step:.1}),e(f,{checked:$,title:"Location table",onChange:Ne}),e(f,{checked:F,title:"Orientation cube",onChange:Fe}),e(f,{checked:T,title:"Ruler",onChange:Ge}),e(f,{checked:H,title:"Clip plane",onChange:Ye}),e(f,{checked:M,title:"Corner text",onChange:ot}),e(f,{checked:B,title:"radiological",onChange:lt}),e(f,{checked:I,title:"3D crosshair",onChange:q}),e(f,{checked:O,title:"Show color bar",onChange:Ze}),e(f,{checked:V,title:"World space",onChange:nt}),e(f,{checked:_,title:"Nose left",onChange:He}),e(f,{checked:W,title:"Drag to measure",onChange:qe}),e(f,{checked:G,title:"High DPI",onChange:_e}),e(x,{value:z,onChange:tt,title:"Decimal precision",min:0,max:8,step:1}),e(x,{value:xe,onChange:We,title:"Multiplanar padding",min:0,max:20,step:2}),e(x,{value:ve,onChange:Ke,title:"Max Draw Undos",min:8,max:28,step:1}),e(x,{value:De,onChange:Ae,title:"Long touch timeout msec",min:1e3,max:5e3,step:100}),e(x,{value:Le,onChange:Ee,title:"Double touch timeout msec",min:500,max:999,step:25})]}),e(Ot,{open:m,width:320,onToggleMenu:E,onAddLayer:Ve,children:Oe}),e(Bt,{nvUpdateSliceType:ct,toggleSettings:A,toggleLayers:E}),e(Vt,{nv:t,volumes:L}),e(Nt,{tableData:me,isVisible:$,decimalPrecision:z})]})}const _t=[{url:"./mni152.nii",name:"mni152"}];Ut.render(u(l.StrictMode,{children:[e(kt,{enableColorScheme:!0}),e(Ft,{volumes:_t})]}),document.getElementById("root"));
