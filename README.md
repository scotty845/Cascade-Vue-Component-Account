# Cascade-Vue-Component-Account
Cascade Vue component

Two files
DisplayAccount.html
vueDisplayAccount.js

Build a VUE component to display account data tranactions
and balance information 


DisplayAccount.html
Use VUE component built
to 
display account balance 
display account tranactions

place  script tag to acess VUE api via unpkg.com

place script tag to acess VUE component built to 
display accouint information via vueDisplayAccount.js

place  style css for display
place links for fondation and google for style display

connect to VUE app and component 
via
<div class="container" id="app">
and 
<div id="enable-vue-here">


connect to specific VUE component for display
via
<div class="components-demo">

and access VUE component 
using html tags
via 
<running-balance></running-balance>



vueDisplayAccount.js

create VUE Component 
via 
VUE syntax
Vue.component('running-balance', {
this will be used in HTML 
to reference the component via 
HTML tags   
such as <running-balance></running-balance>

set properties in VUE component
current balance

via
balancetwo:


JSON data for account information 
via
property:
accountdata: 

set methods in VUE component to 
acess JSON account data

via 
methods:

searchObject: function() {}
 iterate over json object to get transactions and obtain balance
 loop through transactions and push to array
 loop through temp array and look for successful transactions to get current balance 


Set VUE template to display in html
  via
  template:
  get current account balance and display via HTML
  for rendering in VUE
  itterate over results from method searchObject
  which obtains successful transactions
  and display those transactions via a HTML for rendering in VUE 


  Tested in Chrome and FireFox
  From Notepadd++
  or can use other  
  via
  run view in browser 
  
