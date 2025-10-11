import{o as q,g as Oe,c as $e,a as M,b as Te,d as F,e as E,f as u,h as Be,u as ae,t as y,i as h,m as D,k,l as v,n as $,s as Q,p as Ue,q as G,v as K,w as le,P as Le,x as _,S as ee,T as se,y as Ye,F as W,D as Ne,z as je,A as Re,B as pe,C as We,E as fe,G as qe}from"./index-CsITuAk2.js";import{c as B}from"./clsx-B-dksMZM.js";let Ge={data:""},Ke=r=>{if(typeof window=="object"){let e=(r?r.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(r||document.head).appendChild(e),e.firstChild}return r||Ge},Ve=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ze=/\/\*[^]*?\*\/|  +/g,ve=/\n+/g,O=(r,e)=>{let l="",a="",d="";for(let s in r){let t=r[s];s[0]=="@"?s[1]=="i"?l=s+" "+t+";":a+=s[1]=="f"?O(t,s):s+"{"+O(t,s[1]=="k"?"":e)+"}":typeof t=="object"?a+=O(t,e?e.replace(/([^,])+/g,i=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,o=>/&/.test(o)?o.replace(/&/g,i):i?i+" "+o:o)):s):t!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),d+=O.p?O.p(s,t):s+":"+t+";")}return l+(e&&d?e+"{"+d+"}":d)+a},P={},Se=r=>{if(typeof r=="object"){let e="";for(let l in r)e+=l+Se(r[l]);return e}return r},Je=(r,e,l,a,d)=>{let s=Se(r),t=P[s]||(P[s]=(o=>{let n=0,c=11;for(;n<o.length;)c=101*c+o.charCodeAt(n++)>>>0;return"go"+c})(s));if(!P[t]){let o=s!==r?r:(n=>{let c,g,f=[{}];for(;c=Ve.exec(n.replace(Ze,""));)c[4]?f.shift():c[3]?(g=c[3].replace(ve," ").trim(),f.unshift(f[0][g]=f[0][g]||{})):f[0][c[1]]=c[2].replace(ve," ").trim();return f[0]})(r);P[t]=O(d?{["@keyframes "+t]:o}:o,l?"":"."+t)}let i=l&&P.g?P.g:null;return l&&(P.g=P[t]),((o,n,c,g)=>{g?n.data=n.data.replace(g,o):n.data.indexOf(o)===-1&&(n.data=c?o+n.data:n.data+o)})(P[t],e,a,i),t},Xe=(r,e,l)=>r.reduce((a,d,s)=>{let t=e[s];if(t&&t.call){let i=t(l),o=i&&i.props&&i.props.className||/^go/.test(i)&&i;t=o?"."+o:i&&typeof i=="object"?i.props?"":O(i,""):i===!1?"":i}return a+d+(t??"")},"");function te(r){let e=this||{},l=r.call?r(e.p):r;return Je(l.unshift?l.raw?Xe(l,[].slice.call(arguments,1),e.p):l.reduce((a,d)=>Object.assign(a,d&&d.call?d(e.p):d),{}):l,Ke(e.target),e.g,e.o,e.k)}te.bind({g:1});te.bind({k:1});const X=(r,e)=>r===e||r.length===e.length&&r.every((l,a)=>l===e[a]),_e=q;function L(r,e,l,a){return r.addEventListener(e,l,a),_e(r.removeEventListener.bind(r,e,l,a))}function ce(r,e=Oe()){let l=0,a,d;return()=>(l++,q(()=>{l--,queueMicrotask(()=>{!l&&d&&(d(),d=a=void 0)})}),d||$e(s=>a=r(d=s),e),a)}function me(r,e){for(let l=r.length-1;l>=0;l--){const a=e.slice(0,l+1);if(!X(r[l],a))return!1}return!0}const ze=ce(()=>{const[r,e]=E(null);return L(window,"keydown",l=>{e(l),setTimeout(()=>e(null))}),r}),et=ce(()=>{const[r,e]=E([]),l=()=>e([]),a=ze();return L(window,"keydown",d=>{if(d.repeat||typeof d.key!="string")return;const s=d.key.toUpperCase(),t=r();if(t.includes(s))return;const i=[...t,s];t.length===0&&s!=="ALT"&&s!=="CONTROL"&&s!=="META"&&s!=="SHIFT"&&(d.shiftKey&&i.unshift("SHIFT"),d.altKey&&i.unshift("ALT"),d.ctrlKey&&i.unshift("CONTROL"),d.metaKey&&i.unshift("META")),e(i)}),L(window,"keyup",d=>{if(typeof d.key!="string")return;const s=d.key.toUpperCase();e(t=>t.filter(i=>i!==s))}),L(window,"blur",l),L(window,"contextmenu",d=>{d.defaultPrevented||l()}),r[0]=r,r[1]={event:a},r[Symbol.iterator]=function*(){yield r[0],yield r[1]},r}),tt=ce(()=>{const r=et();return F(e=>r().length===0?[]:[...e,r()],[])});function rt(r,e,l={}){if(!r.length)return;r=r.map(n=>n.toUpperCase());const{preventDefault:a=!0}=l,d=ze(),s=tt();let t=!1;const i=n=>{if(!n.length)return t=!1;if(t)return;const c=d();n.length<r.length?me(n,r.slice(0,n.length))?a&&c&&c.preventDefault():t=!0:(t=!0,me(n,r)&&(a&&c&&c.preventDefault(),e(c)))},o=n=>{const c=n.at(-1);if(!c)return;const g=d();if(a&&c.length<r.length){X(c,r.slice(0,r.length-1))&&g&&g.preventDefault();return}if(X(c,r)){const f=n.at(-2);(!f||X(f,r.slice(0,r.length-1)))&&(a&&g&&g.preventDefault(),e(g))}};M(Te(s,l.requireReset?i:o))}const Me=Be(void 0),ot=r=>{const[e,l]=E(r.theme);return M(()=>{l(r.theme)}),u(Me.Provider,{value:{theme:e,setTheme:l},get children(){return r.children}})};function nt(){const r=ae(Me);if(!r)throw new Error("useTheme must be used within a ThemeContextProvider");return r}const b={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},font:{size:{xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)",md:"var(--tsrd-font-size)"},lineHeight:{xs:"calc(var(--tsrd-font-size) * 1)"},weight:{medium:"500",semibold:"600",bold:"700"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}},border:{radius:{xs:"calc(var(--tsrd-font-size) * 0.125)",sm:"calc(var(--tsrd-font-size) * 0.25)",full:"9999px"}},size:{.5:"calc(var(--tsrd-font-size) * 0.125)",1:"calc(var(--tsrd-font-size) * 0.25)",1.5:"calc(var(--tsrd-font-size) * 0.375)",2:"calc(var(--tsrd-font-size) * 0.5)",2.5:"calc(var(--tsrd-font-size) * 0.625)",3:"calc(var(--tsrd-font-size) * 0.75)",4.5:"calc(var(--tsrd-font-size) * 1.125)",6.5:"calc(var(--tsrd-font-size) * 1.625)",12:"calc(var(--tsrd-font-size) * 3)"}},it={primary:{bg:b.colors.gray[900],hover:b.colors.gray[800],active:b.colors.gray[700],text:"#fff",border:b.colors.gray[900]},secondary:{bg:b.colors.gray[100],hover:b.colors.gray[200],active:b.colors.gray[300],text:b.colors.gray[900],border:b.colors.gray[300]},info:{bg:b.colors.blue[500],hover:b.colors.blue[600],active:b.colors.blue[700],text:"#fff",border:b.colors.blue[500]},warning:{bg:b.colors.yellow[500],hover:b.colors.yellow[600],active:b.colors.yellow[700],text:"#fff",border:b.colors.yellow[500]},danger:{bg:b.colors.red[500],hover:b.colors.red[600],active:b.colors.red[700],text:"#fff",border:b.colors.red[500]},success:{bg:b.colors.green[500],hover:b.colors.green[600],active:b.colors.green[700],text:"#fff",border:b.colors.green[500]}},p=te,be=(r="dark")=>{const{colors:e,font:l,size:a,border:d}=b,{fontFamily:s}=l,t=(o,n)=>r==="light"?o:n,i=320;return{logo:p`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      width: ${a[12]};
      height: ${a[12]};
      font-family: ${s.sans};
      gap: ${b.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
    `,selectWrapper:p`
      width: 100%;
      max-width: ${i}px;
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    `,selectContainer:p`
      width: 100%;
    `,selectLabel:p`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${t(e.gray[900],e.gray[100])};
      text-align: left;
    `,selectDescription:p`
      font-size: 0.8rem;
      color: ${t(e.gray[500],e.gray[400])};
      margin: 0;
      line-height: 1.3;
      text-align: left;
    `,select:p`
      appearance: none;
      width: 100%;
      padding: 0.5rem 3rem 0.5rem 0.75rem;
      border-radius: 0.375rem;
      background-color: ${t(e.gray[50],e.darkGray[800])};
      color: ${t(e.gray[900],e.gray[100])};
      border: 1px solid ${t(e.gray[200],e.gray[800])};
      font-size: 0.875rem;
      transition: all 0.15s ease;
      cursor: pointer;

      /* Custom arrow */
      background-image: url("data:image/svg+xml;utf8,<svg fill='%236b7280' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
      background-repeat: no-repeat;
      background-position: right 0.75rem center;
      background-size: 1.25rem;

      &:hover {
        border-color: ${t(e.gray[300],e.gray[700])};
      }

      &:focus {
        outline: none;
        border-color: ${e.gray[400]};
        box-shadow: 0 0 0 3px ${t(e.gray[200],e.gray[800])};
      }
    `,inputWrapper:p`
      width: 100%;
      max-width: ${i}px;
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    `,inputContainer:p`
      width: 100%;
    `,inputLabel:p`
      font-size: 0.875rem;
      font-weight: 500;
      color: ${t(e.gray[900],e.gray[100])};
      text-align: left;
    `,inputDescription:p`
      font-size: 0.8rem;
      color: ${t(e.gray[500],e.gray[400])};
      margin: 0;
      line-height: 1.3;
      text-align: left;
    `,input:p`
      appearance: none;
      box-sizing: border-box;
      width: 100%;
      padding: 0.5rem 0.75rem;
      border-radius: 0.375rem;
      background-color: ${t(e.gray[50],e.darkGray[800])};
      color: ${t(e.gray[900],e.gray[100])};
      border: 1px solid ${t(e.gray[200],e.gray[800])};
      font-size: 0.875rem;
      font-family: ${s.mono};
      transition: all 0.15s ease;

      &::placeholder {
        color: ${t(e.gray[400],e.gray[500])};
      }

      &:hover {
        border-color: ${t(e.gray[300],e.gray[700])};
      }

      &:focus {
        outline: none;
        border-color: ${t(e.gray[400],e.gray[600])};
        box-shadow: 0 0 0 3px ${t(e.gray[200],e.gray[800])};
      }
    `,checkboxWrapper:p`
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      cursor: pointer;
      user-select: none;
      padding: 0.375rem;
      border-radius: 0.375rem;
      transition: background-color 0.15s ease;

      &:hover {
        background-color: ${t(e.gray[50],e.darkGray[900])};
      }
    `,checkboxContainer:p`
      width: 100%;
    `,checkboxLabelContainer:p`
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      flex: 1;
    `,checkbox:p`
      appearance: none;
      width: 1.25rem;
      height: 1.25rem;
      border: 2px solid ${t(e.gray[300],e.gray[700])};
      border-radius: 0.25rem;
      background-color: ${t(e.gray[50],e.darkGray[800])};
      display: grid;
      place-items: center;
      transition: all 0.15s ease;
      flex-shrink: 0;
      margin-top: 0.125rem;

      &:hover {
        border-color: ${t(e.gray[400],e.gray[600])};
      }

      &:checked {
        background-color: ${t(e.gray[900],e.gray[100])};
        border-color: ${t(e.gray[900],e.gray[100])};
      }

      &:checked::after {
        content: '';
        width: 0.4rem;
        height: 0.6rem;
        border: solid ${t("#fff",e.gray[900])};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        margin-top: -3px;
      }
    `,checkboxLabel:p`
      color: ${t(e.gray[900],e.gray[100])};
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.4;
      text-align: left;
    `,checkboxDescription:p`
      color: ${t(e.gray[500],e.gray[400])};
      font-size: 0.8rem;
      line-height: 1.3;
      text-align: left;
    `,button:{base:p`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-family: ${b.font.fontFamily.sans};
        font-size: 0.8rem;
        font-weight: 500;
        border-radius: 0.375rem;
        padding: 0.375rem 0.75rem;
        cursor: pointer;
        transition:
          background 0.15s,
          color 0.15s,
          border 0.15s,
          box-shadow 0.15s;
        outline: none;
        border-width: 1px;
        border-style: solid;
      `,variant(o,n,c){const g=it[o];return c?p`
            background: transparent;
            color: ${t(g.bg,g.bg)};
            border-color: transparent;
            &:hover {
              background: ${t(e.gray[100],e.darkGray[800])};
            }
            &:active {
              background: ${t(e.gray[200],e.darkGray[700])};
            }
          `:n?p`
            background: transparent;
            color: ${t(g.bg,g.bg)};
            border-color: ${t(g.bg,g.bg)};
            &:hover {
              background: ${t(e.gray[50],e.darkGray[800])};
              border-color: ${t(g.hover,g.hover)};
            }
            &:active {
              background: ${t(e.gray[100],e.darkGray[700])};
              border-color: ${t(g.active,g.active)};
            }
          `:p`
          background: ${t(g.bg,g.bg)};
          color: ${t(g.text,g.text)};
          border-color: ${t(g.border,g.border)};
          &:hover {
            background: ${t(g.hover,g.hover)};
            border-color: ${t(g.hover,g.hover)};
          }
          &:active {
            background: ${t(g.active,g.active)};
            border-color: ${t(g.active,g.active)};
          }
        `}},tag:{dot:o=>p`
        width: ${b.size[1.5]};
        height: ${b.size[1.5]};
        border-radius: ${b.border.radius.full};
        background-color: ${t(b.colors[o][500],b.colors[o][500])};
      `,base:p`
        display: flex;
        gap: ${b.size[1.5]};
        box-sizing: border-box;
        height: ${b.size[6.5]};
        background: ${t(e.gray[50],e.darkGray[500])};
        color: ${t(e.gray[700],e.gray[300])};
        border-radius: ${b.border.radius.sm};
        font-size: ${l.size.sm};
        padding: ${b.size[1]};
        padding-left: ${b.size[1.5]};
        align-items: center;
        font-weight: ${l.weight.medium};
        border: ${t("1px solid "+e.gray[300],"1px solid transparent")};
        user-select: none;
        position: relative;
        &:focus-visible {
          outline-offset: 2px;
          outline: 2px solid ${t(e.blue[700],e.blue[800])};
        }
      `,label:p`
        font-size: ${l.size.xs};
      `,count:p`
        font-size: ${l.size.xs};
        padding: 0 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${t(e.gray[500],e.gray[400])};
        background-color: ${t(e.gray[200],e.darkGray[300])};
        border-radius: 2px;
        font-variant-numeric: tabular-nums;
        height: ${b.size[4.5]};
      `},tree:{info:p`
        color: ${t(e.gray[500],e.gray[500])};
        font-size: ${l.size.xs};
        margin-right: ${a[1]};
      `,actionButton:p`
        background-color: transparent;
        color: ${t(e.gray[500],e.gray[500])};
        border: none;
        display: inline-flex;
        padding: 0px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: ${a[3]};
        height: ${a[3]};
        position: relative;
        z-index: 1;

        &:hover svg {
          color: ${t(e.gray[600],e.gray[400])};
        }

        &:focus-visible {
          border-radius: ${d.radius.xs};
          outline: 2px solid ${t(e.blue[700],e.blue[800])};
          outline-offset: 2px;
        }
      `,expanderContainer:p`
        position: relative;
      `,expander:p`
        position: absolute;
        cursor: pointer;
        left: -16px;
        top: 3px;
        & path {
          stroke: ${t(e.blue[400],e.blue[300])};
        }
        & svg {
          width: ${a[3]};
          height: ${a[3]};
        }

        display: inline-flex;
        align-items: center;
        transition: all 0.1s ease;
      `,expandedLine:o=>p`
        display: block;
        padding-left: 0.75rem;
        margin-left: -0.7rem;
        ${o?`border-left: 1px solid ${t(e.blue[400],e.blue[300])};`:""}
      `,collapsible:p`
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover {
          background-color: ${t(e.gray[100],e.darkGray[700])};
          border-radius: ${b.border.radius.sm};
          padding: 0 ${b.size[1]};
        }
      `,actions:p`
        display: inline-flex;
        margin-left: ${a[2]};
        gap: ${a[2]};
        align-items: center;
        & svg {
          height: 12px;
          width: 12px;
        }
      `,valueCollapsed:p`
        color: ${t(e.gray[500],e.gray[400])};
      `,valueFunction:p`
        color: ${t(e.cyan[500],e.cyan[400])};
      `,valueString:p`
        color: ${t(e.green[500],e.green[400])};
      `,valueNumber:p`
        color: ${t(e.yellow[500],e.yellow[400])};
      `,valueBoolean:p`
        color: ${t(e.pink[500],e.pink[400])};
      `,valueNull:p`
        color: ${t(e.gray[500],e.gray[400])};
        font-style: italic;
      `,valueKey:p`
        color: ${t(e.blue[400],e.blue[300])};
      `,valueBraces:p`
        color: ${e.gray[500]};
      `,valueContainer:o=>p`
        display: block;
        margin-left: ${o?"0":"1rem"};

        &:not(:hover) .actions {
          display: none;
        }

        &:hover .actions {
          display: inline-flex;
        }
      `},header:{row:p`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${b.size[2]} ${b.size[2.5]};
        gap: ${b.size[2.5]};
        border-bottom: ${t(e.gray[300],e.darkGray[500])} 1px solid;
        align-items: center;
      `,logoAndToggleContainer:p`
        display: flex;
        gap: ${b.size[3]};
        align-items: center;
        & > button {
          padding: 0;
          background: transparent;
          border: none;
          display: flex;
          gap: ${a[.5]};
          flex-direction: column;
        }
      `,logo:p`
        cursor: pointer;
        display: flex;
        flex-direction: column;
        background-color: transparent;
        border: none;
        gap: ${b.size[.5]};
        padding: 0px;
        &:hover {
          opacity: 0.7;
        }
        &:focus-visible {
          outline-offset: 4px;
          border-radius: ${d.radius.xs};
          outline: 2px solid ${e.blue[800]};
        }
      `,tanstackLogo:p`
        font-size: ${l.size.md};
        font-weight: ${l.weight.bold};
        line-height: ${l.lineHeight.xs};
        white-space: nowrap;
        color: ${t(e.gray[700],e.gray[300])};
      `,flavorLogo:(o,n)=>p`
        font-weight: ${l.weight.semibold};
        font-size: ${l.size.xs};
        background: linear-gradient(to right, ${t(o,n)});
        background-clip: text;
        -webkit-background-clip: text;
        line-height: 1;
        -webkit-text-fill-color: transparent;
        white-space: nowrap;
      `},section:{main:p`
        margin-bottom: 1.5rem;
        padding: 1rem;
        background-color: ${t(e.gray[50],e.darkGray[800])};
        border: 1px solid ${t(e.gray[200],e.gray[800])};
        border-radius: 0.5rem;
        box-shadow: none;
      `,title:p`
        font-size: 1rem;
        font-weight: 600;
        color: ${t(e.gray[900],e.gray[100])};
        margin: 0 0 0.75rem 0;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid ${t(e.gray[200],e.gray[800])};
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-align: left;
      `,icon:p`
        height: 18px;
        width: 18px;
        & > svg {
          height: 100%;
          width: 100%;
        }
        color: ${t(e.gray[700],e.gray[400])};
      `,description:p`
        color: ${t(e.gray[500],e.gray[400])};
        font-size: 0.8rem;
        margin: 0 0 1rem 0;
        line-height: 1.4;
        text-align: left;
      `},mainPanel:{panel:o=>p`
        padding: ${o?b.size[3]:0};
        background: ${t(e.gray[50],e.darkGray[700])};
        overflow-y: auto;
        height: 100%;
      `}}};function H(){const{theme:r}=nt(),[e,l]=E(be(r()));return M(()=>{l(be(r()))}),e}var at=y("<div><label><input type=checkbox><div>"),ye=y("<span>");function Z(r){const e=H(),[l,a]=E(r.checked||!1),d=s=>{const t=s.target.checked;a(t),r.onChange?.(t)};return(()=>{var s=at(),t=s.firstChild,i=t.firstChild,o=i.nextSibling;return i.$$input=d,h(o,(()=>{var n=D(()=>!!r.label);return()=>n()&&(()=>{var c=ye();return h(c,()=>r.label),k(()=>v(c,e().checkboxLabel)),c})()})(),null),h(o,(()=>{var n=D(()=>!!r.description);return()=>n()&&(()=>{var c=ye();return h(c,()=>r.description),k(()=>v(c,e().checkboxDescription)),c})()})(),null),k(n=>{var c=e().checkboxContainer,g=e().checkboxWrapper,f=e().checkbox,x=e().checkboxLabelContainer;return c!==n.e&&v(s,n.e=c),g!==n.t&&v(t,n.t=g),f!==n.a&&v(i,n.a=f),x!==n.o&&v(o,n.o=x),n},{e:void 0,t:void 0,a:void 0,o:void 0}),k(()=>i.checked=l()),s})()}$(["input"]);var lt=y("<div><div><input>"),st=y("<label>"),ct=y("<p>");function oe(r){const e=H(),[l,a]=E(r.value||""),d=s=>{const t=s.target.value;a(i=>i!==t?t:i),r.onChange?.(t)};return(()=>{var s=lt(),t=s.firstChild,i=t.firstChild;return h(t,(()=>{var o=D(()=>!!r.label);return()=>o()&&(()=>{var n=st();return h(n,()=>r.label),k(()=>v(n,e().inputLabel)),n})()})(),i),h(t,(()=>{var o=D(()=>!!r.description);return()=>o()&&(()=>{var n=ct();return h(n,()=>r.description),k(()=>v(n,e().inputDescription)),n})()})(),i),i.$$input=d,k(o=>{var n=e().inputContainer,c=e().inputWrapper,g=r.type||"text",f=e().input,x=r.placeholder;return n!==o.e&&v(s,o.e=n),c!==o.t&&v(t,o.t=c),g!==o.a&&Q(i,"type",o.a=g),f!==o.o&&v(i,o.o=f),x!==o.i&&Q(i,"placeholder",o.i=x),o},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),k(()=>i.value=l()),s})()}$(["input"]);var dt=y("<div><div><select>"),gt=y("<label>"),ut=y("<p>"),ht=y("<option>");function ne(r){const e=H(),[l,a]=E(r.value||r.options[0]?.value),d=s=>{const t=s.target.value;a(i=>i!==t?t:i),r.onChange?.(t)};return(()=>{var s=dt(),t=s.firstChild,i=t.firstChild;return h(t,(()=>{var o=D(()=>!!r.label);return()=>o()&&(()=>{var n=gt();return h(n,()=>r.label),k(()=>v(n,e().selectLabel)),n})()})(),i),h(t,(()=>{var o=D(()=>!!r.description);return()=>o()&&(()=>{var n=ut();return h(n,()=>r.description),k(()=>v(n,e().selectDescription)),n})()})(),i),i.$$input=d,h(i,()=>r.options.map(o=>(()=>{var n=ht();return h(n,()=>o.label),k(()=>n.value=o.value),n})())),k(o=>{var n=e().selectContainer,c=e().selectWrapper,g=e().select;return n!==o.e&&v(s,o.e=n),c!==o.t&&v(t,o.t=c),g!==o.a&&v(i,o.a=g),o},{e:void 0,t:void 0,a:void 0}),k(()=>i.value=l()),s})()}$(["input"]);var pt=y('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M8 6h10"></path><path d="M6 12h9"></path><path d="M11 18h7">'),ft=y('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round class="lucide lucide-file-search2-icon lucide-file-search-2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><circle cx=11.5 cy=14.5 r=2.5></circle><path d="M13.3 16.3 15 18">'),vt=y('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93">'),Fe=y('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="m10 9-3 3 3 3"></path><path d="m14 15 3-3-3-3"></path><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719">'),mt=y('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M10 8h.01"></path><path d="M12 12h.01"></path><path d="M14 8h.01"></path><path d="M16 12h.01"></path><path d="M18 8h.01"></path><path d="M6 8h.01"></path><path d="M7 16h10"></path><path d="M8 12h.01"></path><rect width=20 height=16 x=2 y=4 rx=2>'),bt=y('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx=12 cy=10 r=3>'),yt=y('<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1=8 x2=16 y1=12 y2=12>'),wt=y('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M18 6 6 18"></path><path d="m6 6 12 12">'),xt=y('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M2 10h6V4"></path><path d="m2 4 6 6"></path><path d="M21 10V7a2 2 0 0 0-2-2h-7"></path><path d="M3 14v2a2 2 0 0 0 2 2h3"></path><rect x=12 y=14 width=10 height=7 rx=1>');function kt(){return pt()}function Ct(){return ft()}function At(){return vt()}function Et(){return Fe()}function Bt(){return mt()}function St(){return bt()}function zt(){return Fe()}function Mt(){return yt()}function Ft(){return wt()}function Dt(){return xt()}var Pt=y("<button>");function J(r){const e=H(),[l,a]=Ue(r,["variant","outline","ghost","children","className"]),d=l.variant||"primary",s=B(e().button.base,e().button.variant(d,l.outline,l.ghost),l.className);return(()=>{var t=Pt();return G(t,K(a,{class:s}),!1),h(t,()=>l.children),t})()}var Ht=y("<div>");const De=({className:r,children:e,class:l,withPadding:a})=>{const d=H();return(()=>{var s=Ht();return h(s,e),k(()=>v(s,B(d().mainPanel.panel(!!a),r,l))),s})()};var It=y("<section>"),Qt=y("<h3>"),Ot=y("<p>"),$t=y("<span>");const Y=({children:r,...e})=>{const l=H();return(()=>{var a=It();return G(a,K({get class(){return B(l().section.main,e.class)}},e),!1),h(a,r),a})()},N=({children:r,...e})=>{const l=H();return(()=>{var a=Qt();return G(a,K({get class(){return B(l().section.title,e.class)}},e),!1),h(a,r),a})()},j=({children:r,...e})=>{const l=H();return(()=>{var a=Ot();return G(a,K({get class(){return B(l().section.description,e.class)}},e),!1),h(a,r),a})()},R=({children:r,...e})=>{const l=H();return(()=>{var a=$t();return G(a,K({get class(){return B(l().section.icon,e.class)}},e),!1),h(a,r),a})()};var Tt=r=>{const[e,l]=E(!1),[a,d]=E(!1),s=F(()=>e()||a());let t=null;return q(()=>{t&&clearTimeout(t)}),{expanded:s,setForceExpand:d,hoverUtils:{enter:()=>{t&&(clearTimeout(t),t=null),l(!0)},leave:()=>{t=setTimeout(()=>{l(!1)},r.animationMs)}},animationMs:r.animationMs}},Pe=Be(void 0),Ut=r=>{const e=Tt({animationMs:r.animationMs});return u(Pe.Provider,{value:e,get children(){return r.children}})};function de(){const r=ae(Pe);if(r===void 0)throw new Error("useDrawContext must be used within a DrawClientProvider");return r}var ge=()=>{const r=ae(Ne);if(r===void 0)throw new Error("useDevtoolsShellContext must be used within a ShellContextProvider");return r};function ue(){const{settings:r,setSettings:e}=T();return{theme:F(()=>r().theme),setTheme:a=>e({theme:a})}}var Lt=()=>{const{store:r,setStore:e}=ge(),{setForceExpand:l}=de(),a=F(()=>r.plugins),d=F(()=>r.state.activePlugins);return M(()=>{d().length===0?l(!0):l(!1)}),{plugins:a,toggleActivePlugins:t=>{e(i=>{const n=i.state.activePlugins.includes(t)?i.state.activePlugins.filter(c=>c!==t):[...i.state.activePlugins,t];return n.length>3?i:{...i,state:{...i.state,activePlugins:n}}})},activePlugins:d}},re=()=>{const{store:r,setStore:e}=ge();return{state:F(()=>r.state),setState:d=>{e(s=>({...s,state:{...s.state,...d}}))}}},T=()=>{const{store:r,setStore:e}=ge(),l=F(()=>r.settings);return{setSettings:d=>{e(s=>({...s,settings:{...s.settings,...d}}))},settings:l}},Yt=()=>{const{state:r,setState:e}=re();return{persistOpen:F(()=>r().persistOpen),setPersistOpen:d=>{e({persistOpen:d})}}},He=()=>{const{state:r,setState:e}=re();return{height:F(()=>r().height),setHeight:d=>{e({height:d})}}},Ie=(r,e=!0)=>{e?r.setAttribute("tabIndex","-1"):r.removeAttribute("tabIndex");for(const l of r.children)Ie(l,e)},Nt=r=>{M(()=>{const e=document.getElementById(se);e&&Ie(e,!r())})},jt={colors:{black:"#000000",white:"#ffffff",darkGray:{700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},green:{500:"#12B76A",700:"#027A48"},red:{100:"#fee2e2",400:"#f87171",500:"#ef4444",700:"#b91c1c"},purple:{200:"#D9D6FE",800:"#4A1FB8"}},font:{size:{xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif"}},border:{radius:{full:"9999px"}},size:{2:"calc(var(--tsrd-font-size) * 0.5)",10:"calc(var(--tsrd-font-size) * 2.5)",48:"calc(var(--tsrd-font-size) * 12)"}},we=r=>`${(r/1e3).toFixed(2)}s`,xe=r=>{const{colors:e,font:l,size:a,border:d}=jt,{fontFamily:s,size:t}=l,i=te,o=(n,c)=>r==="light"?n:c;return{seoTabContainer:i`
      padding: 0;
      margin: 0 auto;
      background: ${o(e.white,e.darkGray[700])};
      border-radius: 8px;
      box-shadow: none;
      overflow-y: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 0;
      width: 100%;
      overflow-y: auto;
    `,seoTabTitle:i`
      font-size: 1.25rem;
      font-weight: 600;
      color: ${o(e.gray[900],e.gray[100])};
      margin: 0;
      padding: 1rem 1.5rem 0.5rem 1.5rem;
      text-align: left;
      border-bottom: 1px solid ${o(e.gray[200],e.gray[800])};
    `,seoTabSection:i`
      padding: 1.5rem;
      background: ${o(e.gray[50],e.darkGray[800])};
      border: 1px solid ${o(e.gray[200],e.gray[800])};
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: 2rem;
      border-radius: 0.75rem;
    `,seoPreviewSection:i`
      display: flex;
      flex-direction: row;
      gap: 16px;
      margin-bottom: 0;
      justify-content: flex-start;
      align-items: flex-start;
      overflow-x: auto;
      flex-wrap: wrap;
      padding-bottom: 0.5rem;
    `,seoPreviewCard:i`
      border: 1px solid ${o(e.gray[200],e.gray[800])};
      border-radius: 8px;
      padding: 12px 10px;
      background: ${o(e.white,e.darkGray[900])};
      margin-bottom: 0;
      box-shadow: 0 1px 3px ${o("rgba(0,0,0,0.05)","rgba(0,0,0,0.1)")};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 200px;
      max-width: 240px;
      font-size: 0.95rem;
      gap: 4px;
    `,seoPreviewHeader:i`
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 0;
      color: ${o(e.gray[700],e.gray[300])};
    `,seoPreviewImage:i`
      max-width: 100%;
      border-radius: 6px;
      margin-bottom: 6px;
      box-shadow: 0 1px 2px ${o("rgba(0,0,0,0.03)","rgba(0,0,0,0.06)")};
      height: 160px;
      object-fit: cover;
    `,seoPreviewTitle:i`
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 4px;
      color: ${o(e.gray[900],e.gray[100])};
    `,seoPreviewDesc:i`
      color: ${o(e.gray[600],e.gray[400])};
      margin-bottom: 4px;
      font-size: 0.8rem;
    `,seoPreviewUrl:i`
      color: ${o(e.gray[500],e.gray[500])};
      font-size: 0.75rem;
      margin-bottom: 0;
      word-break: break-all;
    `,seoMissingTagsSection:i`
      margin-top: 4px;
      font-size: 0.875rem;
      color: ${o(e.red[500],e.red[400])};
    `,seoMissingTagsList:i`
      margin: 4px 0 0 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      max-width: 240px;
    `,seoMissingTag:i`
      background: ${o(e.red[100],e.red[500]+"22")};
      color: ${o(e.red[700],e.red[500])};
      border-radius: 3px;
      padding: 2px 6px;
      font-size: 0.75rem;
      font-weight: 500;
    `,seoAllTagsFound:i`
      color: ${o(e.green[700],e.green[500])};
      font-weight: 500;
      margin-left: 0;
      padding: 0 10px 8px 10px;
      font-size: 0.875rem;
    `,devtoolsPanelContainer:(n,c)=>i`
      direction: ltr;
      position: fixed;
      overflow-y: hidden;
      overflow-x: hidden;
      ${n}: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      ${c?"":"max-height: 90%;"}
      border-top: 1px solid ${o(e.gray[200],e.gray[800])};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:n=>i`
        visibility: ${n?"visible":"hidden"};
        height: ${n?"auto":"0"};
      `,devtoolsPanelContainerResizing:n=>n()?i`
          transition: none;
        `:i`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(n,c,g)=>n?i`
          pointer-events: auto;
          transform: translateY(0);
        `:i`
        pointer-events: none;
        transform: translateY(${g==="top"?-c:c}px);
      `,devtoolsPanel:i`
      display: flex;
      font-size: ${t.sm};
      font-family: ${s.sans};
      background-color: ${o(e.white,e.darkGray[700])};
      color: ${o(e.gray[900],e.gray[300])};
      width: w-screen;
      flex-direction: row;
      overflow-x: hidden;
      overflow-y: hidden;
      height: 100%;
    `,dragHandle:n=>i`
      position: absolute;
      left: 0;
      ${n==="bottom"?"top":"bottom"}: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      user-select: none;
      z-index: 100000;
      &:hover {
        background-color: ${o(e.gray[400],e.gray[500])};
      }
    `,mainCloseBtn:i`
      background: transparent;
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      align-items: center;
      padding: 0;
      font-size: ${l.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;
      & > img {
        width: 56px;
        height: 56px;
        transition: all 0.3s ease;
        outline-offset: 2px;
        border-radius: ${d.radius.full};
        outline: 2px solid transparent;
      }
      &:hide-until-hover {
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      }
      &:hide-until-hover:hover {
        opacity: 1;
        pointer-events: auto;
        visibility: visible;
      }
      & > img:focus-visible,
      img:hover {
        outline: 2px solid ${o(e.black,e.black)};
      }
    `,mainCloseBtnPosition:n=>i`
        ${n==="top-left"?`top: ${a[2]}; left: ${a[2]};`:""}
        ${n==="top-right"?`top: ${a[2]}; right: ${a[2]};`:""}
        ${n==="middle-left"?`top: 50%; left: ${a[2]}; transform: translateY(-50%);`:""}
        ${n==="middle-right"?`top: 50%; right: ${a[2]}; transform: translateY(-50%);`:""}
        ${n==="bottom-left"?`bottom: ${a[2]}; left: ${a[2]};`:""}
        ${n==="bottom-right"?`bottom: ${a[2]}; right: ${a[2]};`:""}
      `,mainCloseBtnAnimation:(n,c)=>n?i`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:c?i`
              opacity: 0;

              &:hover {
                opacity: 1;
                pointer-events: auto;
                visibility: visible;
              }
            `:i`
              opacity: 1;
              pointer-events: auto;
              visibility: visible;
            `,tabContainer:i`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      background-color: ${o(e.gray[50],e.darkGray[900])};
      border-right: 1px solid ${o(e.gray[200],e.gray[800])};
      box-shadow: none;
      position: relative;
      width: ${a[10]};
    `,tab:i`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: ${a[10]};
      cursor: pointer;
      font-size: ${t.sm};
      font-family: ${s.sans};
      color: ${o(e.gray[600],e.gray[400])};
      background-color: transparent;
      border: none;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;
      &:hover:not(.close):not(.active):not(.detach) {
        background-color: ${o(e.gray[100],e.gray[800])};
        color: ${o(e.gray[900],e.gray[100])};
        border-left: 2px solid ${o(e.gray[900],e.gray[100])};
      }
      &.active {
        background-color: ${o(e.gray[100],e.gray[800])};
        color: ${o(e.gray[900],e.gray[100])};
        border-left: 2px solid ${o(e.gray[900],e.gray[100])};
      }
      &.detach {
        &:hover {
          background-color: ${o(e.gray[100],e.gray[800])};
        }
        &:hover {
          color: ${o(e.green[700],e.green[500])};
        }
      }
      &.close {
        margin-top: auto;
        &:hover {
          background-color: ${o(e.gray[100],e.gray[800])};
        }
        &:hover {
          color: ${o(e.red[700],e.red[500])};
        }
      }
      &.disabled {
        cursor: not-allowed;
        opacity: 0.2;
        pointer-events: none;
      }
      &.disabled:hover {
        background-color: transparent;
        color: ${e.gray[300]};
      }
    `,tabContent:i`
      transition: all 0.2s ease-in-out;
      width: 100%;
      height: 100%;
    `,pluginsTabPanel:i`
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      overflow: hidden;
    `,pluginsTabDraw:n=>i`
      width: ${n?a[48]:0};
      height: 100%;
      background-color: ${o(e.white,e.darkGray[900])};
      box-shadow: none;
      ${n?`border-right: 1px solid ${o(e.gray[200],e.gray[800])};`:""}
    `,pluginsTabDrawExpanded:i`
      width: ${a[48]};
      border-right: 1px solid ${o(e.gray[200],e.gray[800])};
    `,pluginsTabDrawTransition:n=>i`
        transition: width ${we(n)} ease;
      `,pluginsTabSidebar:n=>i`
      width: ${a[48]};
      overflow-y: auto;
      transform: ${n?"translateX(0)":"translateX(-100%)"};
    `,pluginsTabSidebarTransition:n=>i`
        transition: transform ${we(n)} ease;
      `,pluginName:i`
      font-size: ${t.xs};
      font-family: ${s.sans};
      color: ${o(e.gray[600],e.gray[400])};
      padding: ${a[2]};
      cursor: pointer;
      text-align: center;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;

      &:hover {
        background-color: ${o(e.gray[100],e.gray[800])};
        color: ${o(e.gray[900],e.gray[100])};
        padding: ${a[2]};
      }
      &.active {
        background-color: ${o(e.gray[100],e.gray[800])};
        color: ${o(e.gray[900],e.gray[100])};
        border-left: 2px solid ${o(e.gray[900],e.gray[100])};
      }
      &.active:hover {
        background-color: ${o(e.gray[200],e.gray[700])};
      }
    `,pluginsTabContent:i`
      width: 100%;
      height: 100%;
      overflow-y: auto;

      &:not(:last-child) {
        border-right: 5px solid ${o(e.purple[200],e.purple[800])};
      }
    `,settingsGroup:i`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `,conditionalSetting:i`
      margin-left: 1.5rem;
      padding-left: 1rem;
      border-left: 2px solid ${o(e.gray[300],e.gray[600])};
      background-color: ${o(e.gray[50],e.darkGray[900])};
      padding: 0.75rem;
      border-radius: 0.375rem;
      margin-top: 0.5rem;
    `,settingRow:i`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    `,settingsModifiers:i`
      display: flex;
      gap: 0.5rem;
    `}};function I(){const{theme:r}=ue(),[e,l]=E(xe(r()));return M(()=>{l(xe(r()))}),e}var ke="data:image/png;base64,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",Rt=y('<button type=button aria-label="Open TanStack Devtools"><img alt="TanStack Devtools">'),Wt=({isOpen:r,setIsOpen:e,image:l=ke})=>{const{settings:a}=T(),d=I(),s=F(()=>B(d().mainCloseBtn,d().mainCloseBtnPosition(a().position),d().mainCloseBtnAnimation(r(),a().hideUntilHover)));return u(ee,{get when(){return!a().triggerHidden},get children(){var t=Rt(),i=t.firstChild;return t.$$click=()=>e(!r()),Q(i,"src",l||ke),k(()=>v(t,s())),t}})};$(["click"]);var qt=y("<div>"),Gt=r=>{const e=I(),{height:l}=He(),{settings:a}=T(),d=le();return(()=>{var s=qt();return Q(s,"id",se),h(s,u(Ut,{animationMs:400,get children(){return r.children}})),k(t=>{var i=d().pipWindow?"100vh":l()+"px",o=B(e().devtoolsPanelContainer(a().panelLocation,!!d().pipWindow),e().devtoolsPanelContainerAnimation(r.isOpen(),l(),a().panelLocation),e().devtoolsPanelContainerVisibility(r.isOpen()),e().devtoolsPanelContainerResizing(r.isResizing));return i!==t.e&&((t.e=i)!=null?s.style.setProperty("height",i):s.style.removeProperty("height")),o!==t.t&&v(s,t.t=o),t},{e:void 0,t:void 0}),s})()},Ce=y("<div>"),Kt=r=>{const e=I(),{settings:l}=T();return(()=>{var a=Ce(),d=r.ref;return typeof d=="function"?_(d,a):r.ref=a,h(a,(()=>{var s=D(()=>!!r.handleDragStart);return()=>s()?(()=>{var t=Ce();return Ye(t,"mousedown",r.handleDragStart,!0),k(()=>v(t,e().dragHandle(l().panelLocation))),t})():null})(),null),h(a,()=>r.children,null),k(()=>v(a,e().devtoolsPanel)),a})()};$(["mousedown"]);var ie=y("<div>"),Vt=y("<div><div></div>Final shortcut is: "),Zt=y("<div><div>"),Jt=()=>{const{setSettings:r,settings:e}=T(),l=I(),a=F(()=>e().openHotkey),d=["Control","Alt","Meta","Shift"],s=t=>()=>{if(a().includes(t))return r({openHotkey:a().filter(n=>n!==t)});const i=a().filter(n=>d.includes(n)),o=a().filter(n=>!d.includes(n));r({openHotkey:[...i,t,...o]})};return u(De,{withPadding:!0,get children(){return[u(Y,{get children(){return[u(N,{get children(){return[u(R,{get children(){return u(Et,{})}}),"General"]}}),u(j,{children:"Configure general behavior of the devtools panel."}),(()=>{var t=ie();return h(t,u(Z,{label:"Default open",description:"Automatically open the devtools panel when the page loads",onChange:()=>r({defaultOpen:!e().defaultOpen}),get checked(){return e().defaultOpen}}),null),h(t,u(Z,{label:"Hide trigger until hovered",description:"Keep the devtools trigger button hidden until you hover over its area",onChange:()=>r({hideUntilHover:!e().hideUntilHover}),get checked(){return e().hideUntilHover}}),null),h(t,u(Z,{label:"Completely hide trigger",description:"Completely removes the trigger from the DOM (you can still open it with the hotkey)",onChange:()=>r({triggerHidden:!e().triggerHidden}),get checked(){return e().triggerHidden}}),null),h(t,u(oe,{label:"Trigger Image",description:"Specify the URL of the image to use for the trigger",get value(){return e().triggerImage},placeholder:"Default TanStack Logo",onChange:i=>r({triggerImage:i})}),null),h(t,u(ne,{label:"Theme",description:"Choose the theme for the devtools panel",get value(){return e().theme},options:[{label:"Dark",value:"dark"},{label:"Light",value:"light"}],onChange:i=>r({theme:i})}),null),k(()=>v(t,l().settingsGroup)),t})()]}}),u(Y,{get children(){return[u(N,{get children(){return[u(R,{get children(){return u(Mt,{})}}),"URL Configuration"]}}),u(j,{children:"Control when devtools are available based on URL parameters."}),(()=>{var t=ie();return h(t,u(Z,{label:"Require URL Flag",description:"Only show devtools when a specific URL parameter is present",get checked(){return e().requireUrlFlag},onChange:i=>r({requireUrlFlag:i})}),null),h(t,u(ee,{get when(){return e().requireUrlFlag},get children(){var i=ie();return h(i,u(oe,{label:"URL flag",description:"Enter the URL parameter name (e.g., 'debug' for ?debug=true)",placeholder:"debug",get value(){return e().urlFlag},onChange:o=>r({urlFlag:o})})),k(()=>v(i,l().conditionalSetting)),i}}),null),k(()=>v(t,l().settingsGroup)),t})()]}}),u(Y,{get children(){return[u(N,{get children(){return[u(R,{get children(){return u(Bt,{})}}),"Keyboard"]}}),u(j,{children:"Customize keyboard shortcuts for quick access."}),(()=>{var t=Vt(),i=t.firstChild,o=i.nextSibling;return h(i,u(ee,{keyed:!0,get when(){return a()},get children(){return[u(J,{variant:"success",get onclick(){return s("Shift")},get outline(){return!a().includes("Shift")},children:"Shift"}),u(J,{variant:"success",get onclick(){return s("Alt")},get outline(){return!a().includes("Alt")},children:"Alt"}),u(J,{variant:"success",get onclick(){return s("Meta")},get outline(){return!a().includes("Meta")},children:"Meta"}),u(J,{variant:"success",get onclick(){return s("Control")},get outline(){return!a().includes("Control")},children:"Control"})]}})),h(t,u(oe,{label:"Hotkey to open/close devtools",description:"Use '+' to combine keys (e.g., 'a+b' or 'd'). This will be used with the enabled modifiers from above",placeholder:"a",get value(){return a().filter(n=>!["Shift","Meta","Alt","Ctrl"].includes(n)).join("+")},onChange:n=>{const c=f=>{if(f.length===1)return[pe(f)];const x=[];for(const C of f){const m=pe(C);x.includes(m)||x.push(m)}return x},g=n.split("+").flatMap(f=>c(f)).filter(Boolean);return r({openHotkey:[...a().filter(f=>["Shift","Meta","Alt","Ctrl"].includes(f)),...g]})}}),o),h(t,()=>a().join(" + "),null),k(n=>{var c=l().settingsGroup,g=l().settingsModifiers;return c!==n.e&&v(t,n.e=c),g!==n.t&&v(i,n.t=g),n},{e:void 0,t:void 0}),t})()]}}),u(Y,{get children(){return[u(N,{get children(){return[u(R,{get children(){return u(St,{})}}),"Position"]}}),u(j,{children:"Adjust the position of the trigger button and devtools panel."}),(()=>{var t=Zt(),i=t.firstChild;return h(i,u(ne,{label:"Trigger Position",options:[{label:"Bottom Right",value:"bottom-right"},{label:"Bottom Left",value:"bottom-left"},{label:"Top Right",value:"top-right"},{label:"Top Left",value:"top-left"},{label:"Middle Right",value:"middle-right"},{label:"Middle Left",value:"middle-left"}],get value(){return e().position},onChange:o=>r({position:o})}),null),h(i,u(ne,{label:"Panel Position",get value(){return e().panelLocation},options:[{label:"Top",value:"top"},{label:"Bottom",value:"bottom"}],onChange:o=>r({panelLocation:o})}),null),k(o=>{var n=l().settingsGroup,c=l().settingRow;return n!==o.e&&v(t,o.e=n),c!==o.t&&v(i,o.t=c),o},{e:void 0,t:void 0}),t})()]}})]}})},Xt=y("<div><div><div>"),_t=y("<div><h3>"),er=y("<div>"),tr=()=>{const{plugins:r,activePlugins:e,toggleActivePlugins:l}=Lt(),{expanded:a,hoverUtils:d,animationMs:s}=de(),[t,i]=E(new Map),o=I(),{theme:n}=ue();return M(()=>{r()?.filter(g=>e().includes(g.id))?.forEach(g=>{const f=t().get(g.id);f&&g.render(f,n())})}),(()=>{var c=Xt(),g=c.firstChild,f=g.firstChild;return g.addEventListener("mouseleave",()=>d.leave()),g.addEventListener("mouseenter",()=>d.enter()),h(f,u(W,{get each(){return r()},children:x=>{let C;M(()=>{C&&(typeof x.name=="string"?C.textContent=x.name:x.name(C,n()))});const m=F(()=>e().includes(x.id));return(()=>{var w=_t(),A=w.firstChild;w.$$click=()=>{l(x.id)};var S=C;return typeof S=="function"?_(S,A):C=A,k(z=>{var V=B(o().pluginName,{active:m()}),U=`${je}-${x.id}`;return V!==z.e&&v(w,z.e=V),U!==z.t&&Q(A,"id",z.t=U),z},{e:void 0,t:void 0}),w})()}})),h(c,u(W,{get each(){return e()},children:x=>(()=>{var C=er();return _(m=>{i(w=>{const A=new Map(w);return A.set(x,m),A})},C),Q(C,"id",`${Re}-${x}`),k(()=>v(C,o().pluginsTabContent)),C})()}),null),k(x=>{var C=o().pluginsTabPanel,m=B(o().pluginsTabDraw(a()),{[o().pluginsTabDraw(a())]:a()},o().pluginsTabDrawTransition(s)),w=B(o().pluginsTabSidebar(a()),o().pluginsTabSidebarTransition(s));return C!==x.e&&v(c,x.e=C),m!==x.t&&v(g,x.t=m),w!==x.a&&v(f,x.a=w),x},{e:void 0,t:void 0,a:void 0}),c})()};$(["click"]);function rr(r,e={}){const{attributes:l=!0,childList:a=!0,subtree:d=!0,observeTitle:s=!0}=e;We(()=>{const t=new MutationObserver(o=>{for(const n of o)if(n.type==="childList")n.addedNodes.forEach(c=>r({kind:"added",node:c},n)),n.removedNodes.forEach(c=>r({kind:"removed",node:c},n));else if(n.type==="attributes"){const c=n.target;r({kind:"attr",target:c,name:n.attributeName,oldValue:n.oldValue??null},n)}else n.target.parentNode&&n.target.parentNode.tagName.toLowerCase()==="title"&&r({kind:"title",title:document.title},n)});t.observe(document.head,{childList:a,attributes:l,subtree:d,attributeOldValue:l,characterData:!0,characterDataOldValue:!1});let i;if(s){const o=document.head.querySelector("title")||document.head.appendChild(document.createElement("title"));i=new MutationObserver(()=>{r({kind:"title",title:document.title})}),i.observe(o,{childList:!0,characterData:!0,subtree:!0})}q(()=>{t.disconnect(),i?.disconnect()})})}var or=y("<div><div> Preview</div><div></div><div></div><div>"),nr=y("<img alt=Preview>"),ir=y("<div>No Image"),Ae=y("<div>"),ar=y("<div><strong>Missing tags for <!>:</strong><ul>"),lr=y("<li>"),Ee=[{network:"Facebook",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#4267B2"},{network:"X/Twitter",tags:[{key:"twitter:title",prop:"title"},{key:"twitter:description",prop:"description"},{key:"twitter:image",prop:"image"},{key:"twitter:url",prop:"url"}],color:"#1DA1F2"},{network:"LinkedIn",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#0077B5"},{network:"Discord",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#5865F2"},{network:"Slack",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#4A154B"},{network:"Mastodon",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#6364FF"},{network:"Bluesky",tags:[{key:"og:title",prop:"title"},{key:"og:description",prop:"description"},{key:"og:image",prop:"image"},{key:"og:url",prop:"url"}],color:"#1185FE"}];function sr(r){const e=I();return(()=>{var l=or(),a=l.firstChild,d=a.firstChild,s=a.nextSibling,t=s.nextSibling,i=t.nextSibling;return h(a,()=>r.network,d),h(l,(()=>{var o=D(()=>!!r.meta.image);return()=>o()?(()=>{var n=nr();return k(c=>{var g=r.meta.image,f=e().seoPreviewImage;return g!==c.e&&Q(n,"src",c.e=g),f!==c.t&&v(n,c.t=f),c},{e:void 0,t:void 0}),n})():(()=>{var n=ir();return n.style.setProperty("background","#222"),n.style.setProperty("color","#888"),n.style.setProperty("display","flex"),n.style.setProperty("align-items","center"),n.style.setProperty("justify-content","center"),n.style.setProperty("min-height","80px"),n.style.setProperty("width","100%"),k(()=>v(n,e().seoPreviewImage)),n})()})(),s),h(s,()=>r.meta.title||"No Title"),h(t,()=>r.meta.description||"No Description"),h(i,()=>r.meta.url||window.location.href),k(o=>{var n=e().seoPreviewCard,c=r.color,g=e().seoPreviewHeader,f=r.color,x=e().seoPreviewTitle,C=e().seoPreviewDesc,m=e().seoPreviewUrl;return n!==o.e&&v(l,o.e=n),c!==o.t&&((o.t=c)!=null?l.style.setProperty("border-color",c):l.style.removeProperty("border-color")),g!==o.a&&v(a,o.a=g),f!==o.o&&((o.o=f)!=null?a.style.setProperty("color",f):a.style.removeProperty("color")),x!==o.i&&v(s,o.i=x),C!==o.n&&v(t,o.n=C),m!==o.s&&v(i,o.s=m),o},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),l})()}var cr=()=>{const[r,e]=E(a()),l=I();function a(){const d=Array.from(document.head.querySelectorAll("meta")),s=[];for(const t of Ee){const i={},o=[];for(const n of t.tags){const c=d.find(g=>(n.key.includes("twitter:")?!1:g.getAttribute("property")===n.key)||g.getAttribute("name")===n.key);c&&c.getAttribute("content")?i[n.prop]=c.getAttribute("content")||void 0:o.push(n.key)}s.push({network:t.network,found:i,missing:o})}return s}return rr(()=>{e(a())}),u(De,{withPadding:!0,get children(){return u(Y,{get children(){return[u(N,{get children(){return[u(R,{get children(){return u(zt,{})}}),"Social previews"]}}),u(j,{children:"See how your current page will look when shared on popular social networks. The tool checks for essential meta tags and highlights any that are missing."}),(()=>{var d=Ae();return h(d,u(W,{get each(){return r()},children:(s,t)=>{const i=Ee[t()];return(()=>{var o=Ae();return h(o,u(sr,{get meta(){return s.found},get color(){return i.color},get network(){return i.network}}),null),h(o,(()=>{var n=D(()=>s.missing.length>0);return()=>n()?(()=>{var c=ar(),g=c.firstChild,f=g.firstChild,x=f.nextSibling;x.nextSibling;var C=g.nextSibling;return h(g,()=>i?.network,x),h(C,u(W,{get each(){return s.missing},children:m=>(()=>{var w=lr();return h(w,m),k(()=>v(w,l().seoMissingTag)),w})()})),k(m=>{var w=l().seoMissingTagsSection,A=l().seoMissingTagsList;return w!==m.e&&v(c,m.e=w),A!==m.t&&v(C,m.t=A),m},{e:void 0,t:void 0}),c})():null})(),null),o})()}})),k(()=>v(d,l().seoPreviewSection)),d})()]}})}})},Qe=[{name:"Plugins",id:"plugins",component:()=>u(tr,{}),icon:()=>u(kt,{})},{name:"SEO",id:"seo",component:()=>u(cr,{}),icon:()=>u(Ct,{})},{name:"Settings",id:"settings",component:()=>u(Jt,{}),icon:()=>u(At,{})}],dr=y("<div>"),gr=y("<button type=button>"),ur=y("<div><button type=button></button><button type=button>"),hr=r=>{const e=I(),{state:l,setState:a}=re(),d=le(),s=()=>{d().requestPipWindow(`width=${window.innerWidth},height=${l().height},top=${window.screen.height},left=${window.screenLeft}}`)},{hoverUtils:t}=de();return(()=>{var i=dr();return h(i,u(W,{each:Qe,children:o=>(()=>{var n=gr();return n.addEventListener("mouseleave",()=>{o.id==="plugins"&&t.leave()}),n.addEventListener("mouseenter",()=>{o.id==="plugins"&&t.enter()}),n.$$click=()=>a({activeTab:o.id}),h(n,()=>o.icon()),k(()=>v(n,B(e().tab,{active:l().activeTab===o.id}))),n})()}),null),h(i,(()=>{var o=D(()=>d().pipWindow!==null);return()=>o()?null:(()=>{var n=ur(),c=n.firstChild,g=c.nextSibling;return n.style.setProperty("margin-top","auto"),c.$$click=s,h(c,u(Dt,{})),g.$$click=()=>r.toggleOpen(),h(g,u(Ft,{})),k(f=>{var x=B(e().tab,"detach"),C=B(e().tab,"close");return x!==f.e&&v(c,f.e=x),C!==f.t&&v(g,f.t=C),f},{e:void 0,t:void 0}),n})()})(),null),k(()=>v(i,e().tabContainer)),i})()};$(["click"]);var pr=y("<div>"),fr=()=>{const{state:r}=re(),e=I(),l=F(()=>Qe.find(a=>a.id===r().activeTab)?.component||null);return(()=>{var a=pr();return h(a,()=>l()?.()),k(()=>v(a,e().tabContent)),a})()},vr=y("<div>");function yr(){const{settings:r}=T(),{setHeight:e}=He(),{persistOpen:l,setPersistOpen:a}=Yt(),[d,s]=E(),[t,i]=E(r().defaultOpen||l()),o=le();let n;const[c,g]=E(!1),f=()=>{if(o().pipWindow)return;const m=t();i(!m),a(!m)},x=(m,w)=>{if(w.button!==0||!m)return;g(!0);const A={originalHeight:m.getBoundingClientRect().height,pageY:w.pageY},S=V=>{const U=A.pageY-V.pageY,he=r().panelLocation==="bottom"?A.originalHeight+U:A.originalHeight-U;e(he),he<70?i(!1):i(!0)},z=()=>{g(!1),document.removeEventListener("mousemove",S),document.removeEventListener("mouseUp",z)};document.addEventListener("mousemove",S),document.addEventListener("mouseup",z)};M(()=>{if(t()){const m=d()?.parentElement?.style.paddingBottom,w=()=>{n&&d()?.parentElement&&s(A=>(A?.parentElement,A))};if(w(),typeof window<"u")return(o().pipWindow??window).addEventListener("resize",w),()=>{(o().pipWindow??window).removeEventListener("resize",w),d()?.parentElement&&typeof m=="string"&&s(A=>A)}}else d()?.parentElement&&s(m=>(m?.parentElement&&m.parentElement.removeAttribute("style"),m))}),M(()=>{window.addEventListener("keydown",m=>{m.key==="Escape"&&t()&&f()})}),Nt(t),M(()=>{if(d()){const m=d(),w=getComputedStyle(m).fontSize;m?.style.setProperty("--tsrd-font-size",w)}}),M(()=>{const m=r().openHotkey.filter(S=>fe.includes(S)),w=r().openHotkey.filter(S=>!fe.includes(S)),A=qe(m);for(const S of A){const z=[...S,...w];rt(z,()=>{f()})}}),M(()=>{const m=w=>{const A=w.shiftKey,S=w.ctrlKey||w.metaKey;if(!(!A||!S)&&w.target instanceof HTMLElement){const z=w.target.getAttribute("data-tsd-source");window.getSelection()?.removeAllRanges(),z&&(w.preventDefault(),w.stopPropagation(),fetch(`${location.origin}/__tsd/open-source?source=${encodeURIComponent(z)}`).catch(()=>{}))}};window.addEventListener("click",m),q(()=>{window.removeEventListener("click",m)})});const{theme:C}=ue();return u(ot,{get theme(){return C()},get children(){return u(Le,{get mount(){return(o().pipWindow??window).document.body},get children(){var m=vr();return _(s,m),Q(m,"data-testid",se),h(m,u(ee,{get when(){return D(()=>o().pipWindow!==null)()?!0:D(()=>!!r().requireUrlFlag)()?window.location.search.includes(r().urlFlag):!0},get children(){return[u(Wt,{isOpen:t,setIsOpen:f,get image(){return r().triggerImage}}),u(Gt,{isResizing:c,isOpen:t,get children(){return u(Kt,{ref:w=>n=w,handleDragStart:w=>x(n,w),get children(){return[u(hr,{toggleOpen:f}),u(fr,{})]}})}})]}})),m}})}})}export{yr as default};
