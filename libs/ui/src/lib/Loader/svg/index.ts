// export { default as spinner } from './spinner.svg';
// export { default as bars } from './bars.svg';
// export { default as bubbles } from './bubbles.svg';

export const spinner = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
<path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
<path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
  <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite"/>
</path>
</svg>`;

export const bars = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
<path transform="translate(2)" d="M0 12 V20 H4 V12z"> 
  <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"/>
</path>
<path transform="translate(8)" d="M0 12 V20 H4 V12z">
  <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.2" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"/>
</path>
<path transform="translate(14)" d="M0 12 V20 H4 V12z">
  <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.4" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"/>
</path>
<path transform="translate(20)" d="M0 12 V20 H4 V12z">
  <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"/>
</path>
<path transform="translate(26)" d="M0 12 V20 H4 V12z">
  <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.8" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"/>
</path>
</svg>`;

export const bubbles = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
<circle transform="translate(8 0)" cx="0" cy="16" r="0"> 
  <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"/>
</circle>
<circle transform="translate(16 0)" cx="0" cy="16" r="0"> 
  <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3" keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"/>
</circle>
<circle transform="translate(24 0)" cx="0" cy="16" r="0"> 
  <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"/>
</circle>
</svg>`;

export const cyclon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
<path transform="translate(0 0)" d="M0 12 V20 H4 V12z">
  <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/>
</path>
<path opacity="0.5" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
  <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.1s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/>
</path>
<path opacity="0.25" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
  <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.2s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"/>
</path>
</svg>`;

export const spokes = `<svg xmlns="http://www.w3.org/2000/svg" id="loading" viewBox="0 0 32 32">
<path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(0 16 16)">
  <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0"/>
</path>
<path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(45 16 16)">
  <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.125s"/>
</path>
<path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(90 16 16)">
  <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.25s"/>
</path>
<path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(135 16 16)">
  <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.375s"/>
</path>
<path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(180 16 16)">
  <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.5s"/>
</path>
<path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(225 16 16)">
  <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.675s"/>
</path>
<path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(270 16 16)">
  <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.75s"/>
</path>
<path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(315 16 16)">
  <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.875s"/>
</path>
</svg>`;
