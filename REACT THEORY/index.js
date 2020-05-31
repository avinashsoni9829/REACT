import React from 'react';
import ReactDOM from 'react-dom';

/*react DOM has two input
input 1: what to render
input 2: where to render

in input 1 we will give the root  as a div-id from the index.html file by using the getELementById function  

NOTE: we cant render two different arguments one after the other:
  ReactDOM.render(<h1>Hello world </h1>, document.getElementById('root'));   [✔]
  ReactDOM.render(<h1>Hello world </h1><p> this is a para </p>, document.getElementById('root'); [❌]
  but instead of using these one after the other we can put them in a div ,whcih will act as a single entity
   
ReactDOM.render(
  <div>
<h1>Hello world </h1>
<p> this is a para </p> 
</div>
,document.getElementById('root'));    [✔]
   
  */
 
ReactDOM.render(
  <div>
<h1>Hello world </h1>
<p> this is a para </p> 
</div>
,document.getElementById('root'));
