import{r as s}from"./vendor.0d147815.js";import{w as i,u,b as l,P as p}from"./index.6003c5c3.js";import{a as e,j as c}from"./index.1979a454.js";function m(o){const t=s.exports.useContext(p.ViewContext),r=a=>{const n=Number(a.currentTarget.value);o.setValue(n),setTimeout(t.renderView,0)};return e("input",{type:"range",min:"3",max:"100",value:o.value,onChange:r,style:{position:"absolute",zIndex:100,left:"20px",top:"20px"}})}function v(o){const[t,r]=s.exports.useState(24);return e("div",{style:{width:"100%",height:"100%"},children:c(i,{cameraViewUp:[0,0,-1],cameraPosition:[1,1,0],children:[e(m,{value:t,setValue:r}),e(u,{property:{color:[.3,.3,1]},children:e(l,{vtkClass:"vtkConeSource",state:{height:2,radius:.75,resolution:t}})})]})})}export{v as default};
