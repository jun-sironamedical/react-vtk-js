import{r as h}from"./vendor.6bdb1e91.js";import{V as m,G as c,P as p,a as u,D as l}from"./index.b36608c5.js";import{j as n,a as e}from"./index.6fba4bcd.js";const t=[],d=[];for(let o=0;o<1e3;o++)d.push(Math.random()),t.push(Math.random()),t.push(Math.random()),t.push(Math.random()-.5);let r=0;function g(o){const s=h.exports.useRef(null),i=a=>{s.current.innerHTML=a};return n("div",{style:{width:"100%",height:"100%"},children:[e("pre",{style:{position:"absolute",top:"10px",left:"10px",zIndex:1,margin:0},ref:s}),n(m,{pickingModes:["hover","click","select"],onClick:a=>{if(r){r--;return}i(`Click: ${JSON.stringify(a,null,2)}`)},onHover:a=>{r||i(`Hover: ${JSON.stringify(a,null,2)}`)},onSelect:a=>{r=2,i(`Select: ${JSON.stringify(a,null,2)}`)},children:[e(c,{id:"plan",mapper:{interpolateScalarsBeforeMapping:!0},colorDataRange:[0,.7],colorMapPreset:"Black-Body Radiation",showScalarBar:!0,scalarBarTitle:"Plan",children:e(p,{points:[0,0,0,1,0,0,1,1,0,0,1,0],polys:[4,0,3,2,1],children:n(u,{children:[e(l,{registration:"setScalars",name:"Temperature",values:[0,.7,.3,1]}),e(l,{name:"Pressure",values:[1,.3,.7,0]})]})})}),e(c,{id:"cloud",colorDataRange:[0,1],property:{pointSize:5},showScalarBar:!0,scalarBarTitle:"Cloud",scalarBarStyle:{automated:!1,boxPosition:[-.9,-.95],boxSize:[1.7,.25]},children:e(p,{points:t,connectivity:"points",children:e(u,{children:e(l,{registration:"setScalars",values:d})})})})]})]})}export{g as default};
