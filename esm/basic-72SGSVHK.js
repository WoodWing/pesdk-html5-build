import{A as So,C as Io,G as go,H as U,I as yo,J as vo,L as xo,M as Uo,N as ko,O as Fo,P as Lo,Q as Ao,R as N,S as e,a as s,b as Co,c as d,p as uo,q as p,t as l,u as bo,v as To,w as ho,x as b,y as j,z as Bo}from"./chunk-472HNRVK.js";import{Sa as x,Wa as h,Xa as fo,c as w}from"./chunk-2FC7YEBB.js";import to from"react";import{ThemeProvider as bt}from"styled-components";import v from"react";import dt from"styled-components";import V from"react";var Oo=s(function o(){const{config:r,active:t,custom:n}=l();const{tools:i}=r;const a=t.tool;const m=f=>{const O=r.state.config[f];if("icon"in O){const eo=O.icon;return V.createElement(eo,null)}const Z=To[f];return V.createElement(Z,null)||null};const c=f=>{return r.locale[f].title};const u=(f,O)=>f&&V.createElement(e.Toolbar.Item,{onClick:()=>t.selectTool(f),key:f,label:c(f),isActive:a===f,isDisabled:!(t.image||f==="library"||f==="customTool")},m(f))||V.createElement(e.Toolbar.Separator,{key:f+O,active:!!a});const S=n.getBasicToolbar();if(!S){return null}return V.createElement(S,{show:!!a},i.map(u))});import T from"react";import D from"react";var Ur=({adjustmentsTool:o,custom:r})=>{const t=o.selectedAdjustmentType.toLowerCase();const n=o[t];const i=r.getButton("toolControlBarSecondaryButton");return D.createElement(e.ControlsbarContainer,{show:Boolean(t)},i&&D.createElement(i,{tool:"adjustment",ariaLabel:o.locale.controls.buttonReset,onClick:o.reset,icon:D.createElement(b.reset,null),label:o.locale.controls.buttonReset}),D.createElement(e.Other.ControlsWrapper,null,D.createElement(p.Spacer,{count:2}),D.createElement(e.Slider,{tool:"adjustment","aria-hidden":!t,adjust:true,style:{width:"280px"},label:o.selectedOptionLabel,value:n,onChange:a=>{o.editAdjustments({type:t,value:a})},onMouseUp:()=>o.toolSnapshot(),onTouchEnd:()=>o.toolSnapshot(),snap:0}),D.createElement(p.Spacer,{count:2}),D.createElement(e.BarSeparator,null)),D.createElement(e.Other.EmptyDiv,null))};var wo=d("adjustmentsTool","custom")(s(Ur));import k from"react";import R from"react";var Eo=s(()=>{const{brushTool:o}=l();const{colorList:r,locale:t,localeColor:n}=o;const i=t.controls;const a=n.colorPicker;return R.createElement(R.Fragment,null,R.createElement(p.Input.Selection,{showLabel:false,label:i.selectColor},R.createElement(U,{tool:"brush",activeColor:o.color,colors:r,labelsColor:a,colorPickerDirection:"top",onChange:o.changeColor})))});import kr from"react";var Do=s(()=>{const{brushTool:o}=l();const{locale:r}=o;const t=r.controls;return kr.createElement(e.Slider,{tool:"brush","data-test":x.BrushHardness,style:{width:"280px"},showLabel:false,label:t.sliderHardness,value:o.hardness,min:0,max:1,onChange:o.changeHardness})});import Fr from"react";var Mo=s(()=>{const{brushTool:o}=l();const{locale:r}=o;const t=r.controls;return Fr.createElement(e.Slider,{tool:"brush","data-test":x.BrushSize,style:{width:"280px"},showLabel:false,label:t.sliderSize,value:o.relativeSize,min:1,max:100,divider:1,onChange:o.changeRelativeSize})});var Lr=e.TabWrapper;var{Tab:no}=e;var Po=s(()=>{const{brushTool:o,custom:r}=l();const{locale:t,config:n}=o;const{basicUIToolControlBarTabsOrder:i}=n;const a=t.controls;const m=r.getButton("toolControlBarSecondaryButton");const c=u=>{switch(u){case"brushColor":return k.createElement(no,{key:u,label:a.tabColor},k.createElement(Eo,null));case"brushSize":return k.createElement(no,{key:u,label:a.tabSize},k.createElement(Mo,null));case"brushHardness":return k.createElement(no,{key:u,label:a.tabHardness},k.createElement(Do,null));default:return null}};return k.createElement(e.ControlsbarContainer,{style:{justifyContent:"center"},show:true},m&&k.createElement(m,{tool:"brush",ariaLabel:a.buttonReset,onClick:o.reset,icon:k.createElement(b.reset,null),isDisabled:!o.isDirty,label:a.buttonReset}),k.createElement(e.Other.ControlsWrapper,null,k.createElement(p.Input.Form,null,k.createElement(Lr,null,i.map(u=>c(u))))))});import Y from"react";import X from"react";var Wo=s(()=>{const{filterTool:o}=l();const{state:r}=o;const t=o.locale.controls;const n=()=>{o.toolSnapshot()};return X.createElement(e.Other.ControlsWrapper,null,X.createElement(p.Spacer,{count:2}),X.createElement(e.Slider,{tool:"filter","aria-hidden":!o.isOptionSelected,style:{width:"280px"},label:t.sliderIntensity,value:r.intensity,min:0,max:1,onMouseUp:n,onTouchEnd:n,onChange:o.changeIntensity,snap:r.isDuotone?.5:null}),X.createElement(p.Spacer,{count:2}),X.createElement(e.BarSeparator,null))});var $o=s(()=>{const{filterTool:o,custom:r}=l();const{config:t}=o;const{basicUIToolControlBarTabsOrder:n}=t;const i=r.getButton("toolControlBarSecondaryButton");const a=m=>{switch(m){case"filterIntensity":return Y.createElement(Wo,{key:m});default:return null}};return Y.createElement(e.ControlsbarContainer,{show:o.isOptionSelected},i&&Y.createElement(i,{tool:"filter",ariaLabel:o.locale.controls.buttonReset,onClick:o.reset,icon:Y.createElement(b.reset,null),label:o.locale.controls.buttonReset}),n.map(m=>a(m)),Y.createElement(e.Other.EmptyDiv,null))});import M from"react";var zo=s(()=>{const{focusTool:o,custom:r}=l();const t=o.locale.controls;const n=r.getButton("toolControlBarSecondaryButton");const i=()=>{o.toolSnapshot(t.sliderIntensity)};return M.createElement(e.ControlsbarContainer,{show:o.isOptionSelected},n&&M.createElement(n,{tool:"focus",ariaLabel:t.buttonReset,onClick:o.reset,icon:M.createElement(b.reset,null),label:t.buttonReset}),M.createElement(e.Other.ControlsWrapper,null,M.createElement(p.Spacer,{count:2}),M.createElement(e.Slider,{tool:"focus","aria-hidden":!o.isOptionSelected,style:{width:"280px"},label:t.sliderIntensity,value:o.relativeIntensity,min:0,max:100,divider:1,onChange:o.changeRelativeIntensity,onMouseUp:i,onTouchEnd:i}),M.createElement(p.Spacer,{count:2}),M.createElement(e.BarSeparator,null)),M.createElement(e.Other.EmptyDiv,null))});import I from"react";import Ho from"react";var No=s(()=>{const{frameTool:o}=l();const r=o.locale.controls;const t=o.localeColor.colorPicker;const{colorList:n}=o;return Ho.createElement(p.Input.Selection,{label:r.selectColor,showLabel:false},Ho.createElement(U,{tool:"frame",activeColor:o.color,colors:n,labelsColor:t,colorPickerDirection:"top",onChange:o.changeColor,onAddSnapshot:o.colorSnapshot}))});import Ar from"react";var jo=s(()=>{const{frameTool:o}=l();const r=o.locale.controls;const t=()=>{o.toolSnapshot(r.sliderOpacity)};return Ar.createElement(e.Slider,{tool:"frame","aria-hidden":!o.isOptionSelected,showLabel:false,style:{width:"280px"},label:r.sliderOpacity,value:o.opacity,min:0,max:1,onChange:o.changeOpacity,onMouseUp:t,onTouchEnd:t})});import Or from"react";var Vo=s(()=>{const{frameTool:o}=l();const r=o.locale.controls;const t=()=>{o.toolSnapshot(r.sliderSize)};return Or.createElement(e.Slider,{tool:"frame","aria-hidden":!o.isOptionSelected,showLabel:false,style:{width:"280px"},label:r.sliderSize,value:o.size,min:o.minSize,max:o.maxSize,divider:1,onChange:o.changeWidth,onMouseUp:t,onTouchEnd:t})});var wr=e.TabWrapper;var{Tab:io}=e;var Xo=s(()=>{const{frameTool:o,custom:r}=l();const t=o.locale.controls;const{tintable:n,config:i}=o;const{basicUIToolControlBarTabsOrder:a}=i;const m=r.getButton("toolControlBarSecondaryButton");const c=u=>{switch(u){case"frameOpacity":return I.createElement(io,{key:u,label:t.tabOpacity},I.createElement(jo,null));case"frameSize":return I.createElement(io,{key:u,label:t.tabSize},I.createElement(Vo,null));case"frameColor":return n&&I.createElement(io,{key:u,label:t.tabColor},I.createElement(No,null));default:return null}};return I.createElement(e.ControlsbarContainer,{show:o.isOptionSelected},m&&I.createElement(m,{tool:"frame",ariaLabel:t.buttonReset,onClick:o.reset,icon:I.createElement(b.reset,null),label:t.buttonReset}),I.createElement(e.Other.ControlsWrapper,null,I.createElement(p.Spacer,null),I.createElement(wr,null,a.map(u=>c(u))),I.createElement(e.BarSeparator,null)),I.createElement(e.Other.EmptyDiv,null))});import P from"react";import Er,{css as Dr}from"styled-components";var Mr=Er(e.ControlsbarContainer)`
  ${o=>o.firstChildMargin&&Dr`
      > :first-child {
        margin-right: 16px;
      }
    `}
`;var Pr=({library:o,active:r,custom:t})=>{const n=o.locale.controls.placeholderSearch;const{config:i}=o;const a=t.getButton("toolControlBarPrimaryButton");const m=f=>{o.fetchImages(f)};const c=f=>{const{files:O}=f.target;if(O.length){const Z=new FileReader;Z.onload=eo=>{r.newImage(eo.target.result)};Z.readAsDataURL(O[0])}};const u=()=>{r.selectWebcam(true)};const S=()=>{const f=document.getElementById("fileUpload");if(f){f.click()}};return P.createElement(Mr,{firstChildMargin:i.enableWebcam&&!o.libraryProvider,show:true},i.enableUpload&&a&&P.createElement(a,{tool:"library","data-test":x.LibraryUploadButton,ariaLabel:o.locale.controls.buttonUpload,onClick:S,icon:P.createElement(b.uploadImage,null),label:o.locale.controls.buttonUpload},P.createElement(p.Input.File,{onChange:c})),o.libraryProvider&&P.createElement(e.Other.ControlsWrapper,null,P.createElement(p.Input.Search,{onChange:m,placeholder:n})),i.enableWebcam&&P.createElement(Ao,{tool:"library",onClick:u,icon:P.createElement(b.openWebcam,null),label:o.locale.controls.buttonWebcamOpen}),P.createElement(e.BarSeparator,null))};var Yo=d("library","active","custom")(s(Pr));import F from"react";import Wr from"react";var Go=s(()=>{const{overlayTool:o}=l();const r=o.locale.controls;const{blendMode:t,allBlendModes:n}=o;const i=a=>{o.changeBlendMode(a)};return Wr.createElement(p.Input.CarouselSlider,{showLabel:false,label:r.carouselBlendMode,defaultIdentifier:t,onSelect:i,list:n})});import $r from"react";var _o=s(()=>{const{overlayTool:o}=l();const r=o.locale.controls;const{state:t}=o;const n=()=>{o.toolSnapshot()};return $r.createElement(e.Slider,{tool:"overlay","aria-hidden":!o.isOptionSelected,showLabel:false,style:{width:"280px"},label:r.sliderOpacity,value:t.opacity,min:0,max:1,onChange:o.changeOpacity,onMouseUp:n,onTouchEnd:n})});var zr=e.TabWrapper;var{Tab:Ko}=e;var Jo=s(()=>{const{overlayTool:o,custom:r}=l();const{config:t}=o;const{basicUIToolControlBarTabsOrder:n}=t;const i=o.locale.controls;const a=r.getButton("toolControlBarSecondaryButton");const m=c=>{switch(c){case"overlayBlendMode":return F.createElement(Ko,{key:c,label:i.tabBlendMode},F.createElement(Go,null));case"overlayOpacity":return F.createElement(Ko,{key:c,label:i.tabOpacity},F.createElement(_o,null));default:return null}};return F.createElement(e.ControlsbarContainer,{show:o.isOptionSelected},a&&F.createElement(a,{tool:"overlay",ariaLabel:i.buttonReset,onClick:o.reset,icon:F.createElement(b.reset,null),label:i.buttonReset}),F.createElement(e.Other.ControlsWrapper,null,F.createElement(p.Spacer,null),F.createElement(zr,null,n.map(c=>m(c))),F.createElement(e.BarSeparator,null)),F.createElement(e.Other.EmptyDiv,null))});import L from"react";import Nr from"styled-components";import oo from"react";var qo=s(()=>{const{stickerTool:o}=l();const r=o.locale.controls;const t=o.localeColor.colorPicker;const{colorList:n}=o;return oo.createElement(oo.Fragment,null,oo.createElement(p.Input.Selection,{isDisabled:!o.isStickerSelected,showLabel:false,label:r.selectColor},oo.createElement(U,{tool:"sticker",activeSprite:o.id,activeColor:o.tintColor,colors:n,labelsColor:t,isDisabled:!o.isStickerSelected,colorPickerDirection:"top",onChange:o.changeTintColor,onAddSnapshot:o.tintColorSnapshot})))});import Hr from"react";var Qo=s(()=>{const{stickerTool:o}=l();const r=o.locale.controls;const t=()=>{o.toolSnapshot()};return Hr.createElement(e.Slider,{tool:"sticker",isDisabled:!o.isStickerSelected,showLabel:false,style:{width:"280px"},label:r.sliderOpacity,value:o.opacity,min:0,max:1,onMouseUp:t,onTouchEnd:t,onChange:o.changeOpacity})});var jr=e.TabWrapper;var{Tab:Zo}=e;var Vr=Nr.input.attrs({type:"file",id:"fileUpload",accept:"image/*",multiple:true})`
  ${uo.VisuallyHidden}
`;var Ro=s(()=>{const{stickerTool:o,custom:r}=l();const{config:t}=o;const{basicUIToolControlBarTabsOrder:n}=t;const i=o.locale.controls;const a=r.getButton("toolControlBarPrimaryButton");const m=()=>{const f=document.getElementById("fileUpload");if(f){f.value=null;f.click()}};const c=f=>{const{files:O}=f.target;o.addFiles(O)};const u=f=>{switch(f){case"stickerColor":if(!o.tintable)return null;return L.createElement(Zo,{key:f,label:i.tabColor},L.createElement(qo,null));case"stickerOpacity":return L.createElement(Zo,{key:f,label:i.tabOpacity},L.createElement(Qo,null));default:return null}};const S=()=>{if(o.isCustomStickerEnabled&&a){return L.createElement(a,{tool:"sticker",ariaLabel:i.buttonUpload,onClick:m,icon:L.createElement(b.uploadImage,null),label:i.buttonUpload},L.createElement(Vr,{onChange:c}))}return null};return L.createElement(e.ControlsbarContainer,{show:true},S(),L.createElement(e.Other.ControlsWrapper,null,L.createElement(jr,null,n.map(f=>u(f))),L.createElement(e.BarSeparator,null)),L.createElement(e.Other.EmptyDiv,null))});import B from"react";import or from"react";var rr=s(()=>{const{textTool:o}=l();const{backgroundColorList:r}=o;const t=o.locale.controls;const n=o.localeColor.colorPicker;return or.createElement(p.Input.Selection,{isDisabled:!o.isTextSelected,showLabel:false,label:t.selectBackgroundColor},or.createElement(U,{tool:"text",activeSprite:o.id,activeColor:o.backgroundColor,colors:r,labelsColor:n,colorPickerDirection:"top",isDisabled:!o.isTextSelected,onChange:o.changeBackgroundColor,onAddSnapshot:o.backgroundColorSnapshot}))});import Xr from"react";import Yr from"styled-components";var Gr=Yr(p.Input.NumericInput)`
  max-width: 55px;
  > div > input {
    text-align: center;
  }
`;var tr=s(()=>{const{textTool:o}=l();const r=t=>{const n=t?parseFloat(t):0;o.setFontSize(Math.max(10,Math.min(690,n)))};return Xr.createElement(Gr,{value:o.fontSize.toFixed(0),onSubmit:r,isDisabled:!o.isTextSelected})});import _r from"react";var er=s(()=>{const{textTool:o}=l();const r=o.locale.controls;const t=()=>{o.toolSnapshot()};return _r.createElement(e.Slider,{tool:"text",isDisabled:!o.isTextSelected,showLabel:false,label:r.sliderLineSpacing,value:o.lineHeight,min:.5,max:3,onChange:o.changeLineHeight,onMouseUp:t,onTouchEnd:t,snap:1,divider:1,decimal:1})});import so from"react";var nr=s(()=>{const{textTool:o,custom:r}=l();const t=o.locale.controls;const n=["left","center","right"];const i=r.getButton("textAlignment");return so.createElement(p.Input.Selection,{isDisabled:!o.isTextSelected,showLabel:false,label:t.selectAlignment,"data-test":x.TextAlignment},n.map(a=>{const m=ho[a];return so.createElement(i,{tool:a,isDisabled:!o.isTextSelected,ariaLabel:`Align ${a}`,isActive:a===o.alignment,key:a,icon:so.createElement(m,null),onClick:()=>o.changeAlignment(a)})}))});import ir from"react";var sr=s(()=>{const{textTool:o}=l();const{colorList:r}=o;const t=o.locale.controls;const n=o.localeColor.colorPicker;return ir.createElement(p.Input.Selection,{isDisabled:!o.isTextSelected,showLabel:false,label:t.selectFontColor},ir.createElement(U,{tool:"text",activeSprite:o.id,activeColor:o.textColor,colors:r,labelsColor:n,colorPickerDirection:"top",isDisabled:!o.isTextSelected,onChange:o.changeColor,onAddSnapshot:o.colorSnapshot}))});var Kr=e.ResponsiveTabWrapper;var ar=s(()=>{const{textTool:o,custom:r}=l();const{config:t}=o;const{basicUIToolControlBarTabsOrder:n}=t;const i=o.locale.controls;const a=r.getButton("toolControlBarPrimaryButton");const m=c=>{switch(c){case"fontSize":return B.createElement(N,{key:c,label:i.tabFontSize},B.createElement(tr,null));case"textAlignment":return B.createElement(N,{key:c,label:i.tabAlignment},B.createElement(nr,null));case"textColor":return B.createElement(N,{key:c,label:i.tabColor},B.createElement(sr,null));case"backgroundColor":return B.createElement(N,{key:c,label:i.tabBgColor},B.createElement(rr,null));case"lineSpacing":return B.createElement(N,{key:c,label:i.tabLineHeight},B.createElement(er,null));default:return null}};return B.createElement(e.ControlsbarContainer,{show:true},B.createElement(a,{tool:"text",ariaLabel:i.buttonNew,onClick:o.add,icon:B.createElement(b.addText,null),label:i.buttonNew}),B.createElement(e.Other.ControlsWrapper,null,B.createElement(p.Spacer,null),B.createElement(Kr,null,n.map(c=>m(c))),B.createElement(e.BarSeparator,null)),B.createElement(e.Other.EmptyDiv,null))});import W from"react";var Jr=({textDesignTool:o,custom:r})=>{const t=o.locale.controls;const n=o.localeColor.colorPicker;const{colorList:i}=o;const a=r.getButton("toolControlBarSecondaryButton");const m=r.getButton("toolControlBarPrimaryButton");return W.createElement(e.ControlsbarContainer,{show:true},m&&W.createElement(m,{tool:"textdesign",ariaLabel:t.buttonNew,onClick:o.add,icon:W.createElement(b.addText,null),label:t.buttonNew}),W.createElement(e.Other.ControlsWrapper,null,W.createElement(p.Input.Selection,{isDisabled:!o.isTextDesignSelected,label:t.selectColor},W.createElement(U,{tool:"textdesign",activeSprite:o.id,activeColor:o.color,colors:i,labelsColor:n,colorPickerDirection:"top",isDisabled:!o.isTextDesignSelected,onChange:o.changeColor,onAddSnapshot:o.colorSnapshot}))),a&&W.createElement(a,{tool:"textdesign",ariaLabel:t.buttonShuffle,onClick:o.changeSeed,icon:W.createElement(b.shuffle,null),label:t.buttonShuffle}),W.createElement(e.BarSeparator,null))};var lr=d("textDesignTool","custom")(s(Jr));import g from"react";import qr from"react";var mr=s(()=>{const{transformTool:o}=l();const r=o.locale.controls;const{forceDimensions:t}=o;return qr.createElement(ko,{isDisabled:t,showLabel:false,valueHeight:o.localOutputHeight,valueWidth:o.localOutputWidth,onSubmitWidth:o.onPixelWidth,onSubmitHeight:o.onPixelHeight,label:r.inputCropSize,labelHeight:r.inputHeight,labelWidth:r.inputWidth})});import Qr from"react";var pr=()=>Qr.createElement(yo,null);import Zr from"react";var cr=s(()=>{const{transformTool:o,custom:r}=l();const t=o.locale.controls;const{forceDimensions:n}=o;const i=r.getCheckbox();if(!i){return null}return Zr.createElement(i,{tool:"transform",isDisabled:n,style:{paddingTop:"5px",justifyContent:"center"},value:o.lockResolution,checkMarkPosition:"left",label:t.checkboxKeepResolution,onClick:o.changeLockResolution})});var Rr=e.ResponsiveTabWrapper;var{Tab:ao}=e;var Cr=s(()=>{const{transformTool:o,custom:r}=l();const{config:t}=o;const{basicUIToolControlBarTabsOrder:n}=t;const i=o.locale.controls;const a=r.getButton("toolControlBarSecondaryButton");const m=c=>{switch(c){case"flipRotate":return g.createElement(ao,{key:c,label:i.tabFlipAndRotate},g.createElement(pr,null));case"resolution":return g.createElement(ao,{key:c,label:i.tabResolution},g.createElement(cr,null));case"cropSize":return g.createElement(ao,{key:c,label:i.tabCropSize},g.createElement(mr,null));default:return null}};return g.createElement(e.ControlsbarContainer,{show:true},a&&g.createElement(a,{tool:"transform",ariaLabel:o.locale.controls.buttonReset,onClick:o.reset,icon:g.createElement(b.reset,null),label:o.locale.controls.buttonReset}),g.createElement(e.Other.ControlsWrapper,null,g.createElement(p.Spacer,null),g.createElement(Rr,null,n.map(c=>m(c))),g.createElement(e.BarSeparator,null)),g.createElement(e.Other.EmptyDiv,null))});var fr=s(function o(){const{active:r,custom:t}=l();const n=r.tool;const i=t.getBasicToolControlBar();if(!i){return null}return T.createElement(i,{show:!!n,tool:n},T.createElement(p.Switch.Index,{type:n},T.createElement(p.Switch.Case,{value:"filter"},T.createElement($o,null)),T.createElement(p.Switch.Case,{value:"focus"},T.createElement(zo,null)),T.createElement(p.Switch.Case,{value:"adjustment"},T.createElement(wo,null)),T.createElement(p.Switch.Case,{value:"overlay"},T.createElement(Jo,null)),T.createElement(p.Switch.Case,{value:"sticker"},T.createElement(Ro,null)),T.createElement(p.Switch.Case,{value:"text"},T.createElement(ar,null)),T.createElement(p.Switch.Case,{value:"textdesign"},T.createElement(lr,null)),T.createElement(p.Switch.Case,{value:"library"},T.createElement(Yo,null)),T.createElement(p.Switch.Case,{value:"frame"},T.createElement(Xo,null)),T.createElement(p.Switch.Case,{value:"brush"},T.createElement(Po,null)),T.createElement(p.Switch.Case,{value:"transform"},T.createElement(Cr,null))))});import A,{useMemo as ft}from"react";import G from"react";import ot from"styled-components";var rt=ot.div`
  position: relative;
  top: -8px;
  color: ${o=>o.theme.card.foreground};
`;var tt=({adjustmentsTool:o})=>{const r=(t,n)=>{const i=Bo[t.identifier];return G.createElement(e.Card,{"data-test":t.identifier,tool:"adjustment",type:"medium",onClick:()=>o.toggleOptionSelection(t.identifier),isActive:t.identifier===o.selectedAdjustmentType,key:`${t.identifier}-${n}`,label:t.name,style:{animationDelay:`${h(n)}s`}},G.createElement(rt,null,G.createElement(i,null)),G.createElement(e.CardLabel,null,o.locale.items[t.identifier]||t.name))};return G.createElement(e.CardContainer,null,o.items.map(r))};var dr=d("adjustmentsTool")(s(tt));import et from"react";var ur=()=>{const{config:o}=l();const r=o.state.config["customTool"].toolControlBar;return et.createElement(r,{language:o.state.locale["customTool"]})};import z from"react";var _=class extends z.Component{constructor(){super(...arguments);this.onCategoryClick=r=>{const{filterTool:t}=this.props;t.toggleCategorySelection(r)};this.renderItem=(r,t)=>{const{filterTool:n}=this.props;return z.createElement(e.Card,{tool:"filter",type:"medium",onClick:()=>n.selectFilter(r.identifier,r.defaultIntensity),isActive:n.identifier===r.identifier,key:`${r.identifier}-${t}`,image:r.thumbnailURI,label:r.name,style:{animationDelay:`${h(t)}s`}},z.createElement(e.CardLabel,{withBackground:true},n.locale.categories[r.identifier]||n.locale.items[r.identifier]||r.name))};this.renderCategory=(r,t)=>{const{filterTool:n}=this.props;const{selectedCategoryIdentifier:i}=n;const a=i===r.identifier;if(!r.items)return null;return z.createElement(e.CategoryContainer,{key:r.identifier},z.createElement(e.Card,{tool:"filter",type:"large",onClick:()=>this.onCategoryClick(r.identifier),image:r.thumbnailURI,label:r.name,style:{animationDelay:`${h(t)}s`}},z.createElement(e.CardLabel,{withBackground:true},r.name)),z.createElement(e.ExpandableContainer,{show:a},r.items.map(this.renderItem)))}}render(){const{filterTool:r}=this.props;const{categories:t,config:n,items:i}=r;if(n.flattenCategories)return z.createElement(e.CardContainer,null,i.map(this.renderItem));return z.createElement(e.CardContainer,null,t.map(this.renderCategory))}};_=w([d("filterTool","active"),s],_);import lo from"react";var nt=({focusTool:o})=>{const r=n=>{o.selectFocus(n)};const t=(n,i)=>lo.createElement(e.Card,{isActive:n.identifier===o.identifier,tool:"focus",type:"medium",onClick:()=>r(n.identifier),key:`${n.identifier}-${i}`,image:n.thumbnailURI,label:n.name,style:{animationDelay:`${h(i)}s`}},lo.createElement(e.CardLabel,{withBackground:true},o.locale.items[n.identifier]||n.name));return lo.createElement(e.CardContainer,null,o.items.map(t))};var br=d("focusTool")(s(nt));import mo from"react";var it=({frameTool:o})=>{const r=o.identifier;const t=(n,i)=>mo.createElement(e.Card,{tool:"frame",type:"medium",onClick:()=>o.selectFrame(n.identifier),isActive:n.identifier===r,key:`${n.identifier}-${i}`,image:n.thumbnailURI,label:n.name,style:{animationDelay:`${h(i)}s`,backgroundSize:"60%"}}," ",mo.createElement(e.CardLabel,{hidden:true},o.locale.items[n.identifier]||n.name));return mo.createElement(e.CardContainer,null,o.items.map(t))};var Tr=d("frameTool")(s(it));import E from"react";import st from"styled-components";var hr=st.p`
  height: ${o=>o.theme.measurements.basicUIToolControlBar.itemsBarHeight}px;
`;var K=class extends E.Component{constructor(){super(...arguments);this.onCategoryClick=r=>{const{library:t}=this.props;t.toggleCategorySelection(r)};this.renderItem=(r,t)=>{const{active:n}=this.props;return E.createElement(e.Card,{tool:"library",type:"medium",onClick:()=>n.newImage(r.rawUrl),key:`${r.identifier}-${t}`,image:r.thumbnailURI,label:r.name,style:{animationDelay:`${h(t)}s`}})};this.renderCategory=(r,t)=>{const{library:n}=this.props;const{selectedCategoryIdentifier:i}=n;const a=i===r.identifier;if(!r.items)return null;return E.createElement(e.CategoryContainer,{key:r.identifier},E.createElement(e.Card,{tool:"library",type:"large",onClick:()=>this.onCategoryClick(r.identifier),image:r.thumbnailURI,label:r.name,style:{animationDelay:`${h(t)}s`}},E.createElement(e.CardLabel,{withBackground:true},r.name)),E.createElement(e.ExpandableContainer,{show:a},r.items.map(this.renderItem)))}}render(){const{library:r}=this.props;const{query:t,categories:n,items:i,locale:a,config:m}=r;if(t){return i.length?E.createElement(e.CardContainer,null,i.map(this.renderItem)):E.createElement(hr,{"data-test":x.NoResult},a.controls.noResults)}if(m.flattenCategories)return E.createElement(e.CardContainer,null,i.map(this.renderItem));return E.createElement(e.CardContainer,null,n.map(this.renderCategory))}};K=w([d("library","active"),s],K);import po from"react";var at=({overlayTool:o})=>{const{identifier:r,items:t,selectOverlay:n,locale:i}=o;const a=(m,c)=>po.createElement(e.Card,{tool:"overlay",type:"medium",onClick:()=>n(m.identifier),isActive:m.identifier===r,key:`${m.identifier}-${c}`,image:m.thumbnailURI,label:m.name,style:{animationDelay:`${h(c)}s`}},po.createElement(e.CardLabel,{withBackground:true},i.items[m.identifier]||m.name));return po.createElement(e.CardContainer,null,t.map(a))};var Br=d("overlayTool")(s(at));import H from"react";var J=class extends H.Component{constructor(){super(...arguments);this.onCategoryClick=r=>{const{stickerTool:t}=this.props;t.toggleCategorySelection(r)};this.renderItem=(r,t)=>{const{stickerTool:n}=this.props;return H.createElement(e.Card,{tool:"sticker",type:"medium",onClick:()=>n.add(r.identifier),key:`${r.identifier}-${t}`,image:r.thumbnailURI,label:r.name,style:{backgroundSize:"55%",animationDelay:`${fo(t)}s`}},H.createElement(e.CardLabel,{hidden:true},n.locale.items[r.identifier]||r.name))};this.renderCategory=(r,t)=>{const{stickerTool:n}=this.props;const{selectedCategoryIdentifier:i,locale:a}=n;const m=i===r.identifier;if(!r.items)return null;return H.createElement(e.CategoryContainer,{key:r.identifier},H.createElement(e.Card,{tool:"sticker",type:"large",onClick:()=>this.onCategoryClick(r.identifier),image:r.thumbnailURI,label:r.name,style:{animationDelay:`${h(t)}s`}},H.createElement(e.CardLabel,{withBackground:true},a.categories[r.identifier]||r.name)),H.createElement(e.ExpandableContainer,{show:m},r.items.map(this.renderItem)))}}render(){const{stickerTool:r}=this.props;const{categories:t,items:n,config:i}=r;if(i.flattenCategories)return H.createElement(e.CardContainer,null,n.map(this.renderItem));return H.createElement(e.CardContainer,null,t.map(this.renderCategory))}};J=w([d("stickerTool","active"),s],J);import ro from"react";import lt from"styled-components";var mt=lt.div`
  font-size: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: left top;
`;var Sr=class extends ro.Component{constructor(){super(...arguments);this.getWidth=({fontFamily:r,fontStyle:t,fontWeight:n},i)=>{const a=document.createElement("canvas");const m=a.getContext("2d");m.font=`${t} ${n} 20px ${r}`;m.fillText(i,0,0);return m.measureText(i).width};this.renderItem=(r,t)=>{const{config:n,textTool:i}=this.props;const{fontFamily:a,fontWeight:m,fontStyle:c,identifier:u}=r;const S=`${r.fontFamily} ${Io.getDisplayFontStyle(r)}`;const f=this.getWidth(r,S);const O=(n.measurements.basicCard.medium.width-20)/f;return ro.createElement(e.Card,{tool:"text",type:"medium",onClick:()=>i.changeFont(u),isDisabled:!this.textTool.isTextSelected,isActive:i.identifier===u,key:`${r.identifier}-${t}`,label:S,style:{animationDelay:`${h(t)}s`}},ro.createElement(mt,{style:{transform:`scale(${O}) translate(-50%, -50%)`,fontFamily:a,fontStyle:c,fontWeight:m}},S))}}get textTool(){return this.props.textTool}render(){const{textTool:r}=this.props;const{fontsLoaded:t,fontFamilies:n}=r;if(!t)return null;return ro.createElement(e.CardContainer,null,n.map(this.renderItem))}};var Ir=d("textTool","config")(s(Sr));import co from"react";var pt=({textDesignTool:o})=>{const{items:r,changeIdentifier:t,isTextDesignSelected:n,identifier:i}=o;const a=(m,c)=>{return co.createElement(e.Card,{tool:"textdesign",type:"medium",onClick:()=>t(m.identifier),isDisabled:!n,isActive:i===m.identifier,key:`${m.identifier}-${c}`,image:m.thumbnailURI,label:m.name,style:{animationDelay:`${h(c)}s`,backgroundSize:"60%"}},co.createElement(e.CardLabel,{hidden:true},m.name))};return co.createElement(e.CardContainer,null,r.map(a))};var gr=d("textDesignTool")(s(pt));import y from"react";import yr from"styled-components";var ct=yr.div`
  svg {
    margin-bottom: 12px;
  }
`;var Ct=yr.div`
  svg {
    width: ${o=>o.theme.measurements.basicCard.medium.height}px;
    height: ${o=>o.theme.measurements.basicCard.medium.height}px;
  }

  ${bo} {
    width: ${o=>o.theme.measurements.basicCard.medium.width-32}px;
    height: ${o=>o.theme.measurements.basicCard.medium.height-32}px;
    padding: 6px 0px 24px;
  }
`;var q=class extends y.Component{constructor(){super(...arguments);this.onCategoryClick=r=>{const{transformTool:t}=this.props;t.toggleCategorySelection(r)};this.renderItem=(r,t)=>{const{transformTool:n,config:i}=this.props;const{locale:a,identifier:m}=n;const c=n.checkIfTransformThumbnailExits(r.thumbnailURI);const u=j.crops[r.identifier]||j.crops.imgly_transform_common_custom;const S=y.createElement(e.CardLabel,null,a.items[r.identifier]||r.name);const f=c?S:y.createElement(Ct,null,y.createElement(u,{main:i.theme.transform.crops.main,highlight:i.theme.transform.crops.highlight,shadow:i.theme.transform.crops.shadow}),S);return y.createElement(e.Card,{tool:"transform",type:"medium",onClick:()=>n.changeIdentifier(r.identifier,true),key:`${r.identifier}-${t}`,image:r.thumbnailURI,label:r.name,isActive:r.identifier===m,style:{backgroundSize:"55%",animationDelay:`${h(t)}s`}},f)};this.renderCategory=(r,t)=>{const{transformTool:n}=this.props;const{selectedCategoryIdentifier:i,locale:a}=n;const m=i===r.identifier;if(!r.items)return null;const c=n.checkIfTransformThumbnailExits(r.thumbnailURI);const u=y.createElement(e.CardLabel,null,a.categories[r.identifier]||r.name);const S=c?u:y.createElement(ct,null,j.categories[r.identifier]&&y.createElement(j.categories[r.identifier]),u);return y.createElement(e.CategoryContainer,{key:r.identifier},y.createElement(e.Card,{tool:"transform",type:"large",onClick:()=>this.onCategoryClick(r.identifier),image:c?r.thumbnailURI:"",label:r.name,style:{animationDelay:`${h(t)}s`}},S),y.createElement(e.ExpandableContainer,{show:m},r.items.map(this.renderItem)))}}render(){const{transformTool:r}=this.props;const{categories:t,config:n,items:i}=r;if(n.flattenCategories)return y.createElement(e.CardContainer,null,i.map(this.renderItem));return y.createElement(e.CardContainer,null,t.map(this.renderCategory))}};q=w([d("transformTool","config"),s],q);var vr=s(function o(){const{active:r,library:t,custom:n}=l();const i=r.tool;const a=ft(()=>{switch(i){case"library":return A.createElement(K,null);case"filter":return A.createElement(_,null);case"focus":return A.createElement(br,null);case"adjustment":return A.createElement(dr,null);case"overlay":return A.createElement(Br,null);case"sticker":return A.createElement(J,null);case"text":return A.createElement(Ir,null);case"textdesign":return A.createElement(gr,null);case"frame":return A.createElement(Tr,null);case"transform":return A.createElement(q,null);case"customTool":return A.createElement(ur,null);default:return null}},[i]);const m=n.getBasicToolItemsBar();if(!m||i==="brush"||i==="library"&&!t.libraryProvider){return null}return A.createElement(m,{show:!!i},a)});var ut=dt.div`
  position: absolute;
  width: 100%;
  height: ${o=>o.theme.measurements.basicUIToolControlBar.maxHeight}px;
  bottom: 0;
  left: 0;
  background: ${o=>o.theme.webcam.backdrop};
  z-index: ${o=>o.theme.measurements.zIndex.disable};
`;var Q=class extends v.Component{static getDerivedStateFromError(r){console.error(r);return{hasError:true}}render(){const{active:r,custom:t}=this.props;const n=t.getWindowContainer();return v.createElement(p.Container,{"data-test":x.EditorContainer},r.isWebcam?v.createElement(ut,null):null,v.createElement(Uo,null),v.createElement(So,null,v.createElement(go,null),n&&v.createElement(n,{tool:r.tool},v.createElement(Lo,null,r.isWebcam?v.createElement(Fo,null):null,r.image&&v.createElement(vo,null))),v.createElement(fr,null),v.createElement(vr,null),v.createElement(Oo,null)))}};Q=w([d("active","custom"),s],Q);var xr=class extends to.Component{constructor(){super(...arguments);this.componentWillUnmount=()=>{this.editor.cleanUpCanvasMemory()}}componentDidMount(){const{editor:r,storeProps:t}=this.props;this.editor=r;this.storeProps=t;const n=new xo(this.editor.configStore.config.custom.components,{basicUIToolbar:e.Toolbar.Index,basicUIToolControlBar:e.Controlsbar,basicUIToolItemsBar:e.Itemsbar});const i={getDialog:n.getDialog,getButton:n.getButton,getColorItem:n.getColorItem,getCheckbox:n.getCheckbox,getSlider:n.getSlider,getBasicToolbar:n.getBasicToolbar,getBasicToolControlBar:n.getBasicToolControlBar,getBasicToolItemsBar:n.getBasicToolItemsBar,getWindowContainer:n.getWindowContainer};this.storeProps.custom=i;this.forceUpdate()}render(){return this.storeProps?to.createElement(Co,{...this.storeProps},to.createElement(bt,{theme:{...this.editor.configStore.theme,measurements:this.editor.configStore.measurements}},to.createElement(Q,null))):null}};export{xr as default};