<template>
  <div>
    <p class="h2">Layout view</p>
    <div class="gap-8 columns-1">
      <img w-full aspect-square desktop src="../assets/download.jpeg" />
      <img w-full aspect-square desktop src="../assets/download.jpeg" />
      <img w-full aspect-square desktop  src="../assets/download.jpeg" />
    </div>
    <div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p >Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
<span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
  Hello<br>
  World
</span>
<span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
  Hello<br>
  World
</span>

<div class="box-border w-32 h-32 border-4 p-4 hover:box-content">
 ,e je
</div>
<div>
  When controlling the flow of text, using the CSS property
  <span class="inline">display: inline</span>
  will cause the text inside the element to wrap normally.

  While using the property <span class="inline-block">display: inline-block</span>
  will wrap the element to prevent the text inside from extending beyond its parent.

  Lastly, using the property <span class="block">display: block</span>
  will put the element on its own line and fill its parent.
</div>
    <div class="p-4">
  <div class="flow-root ...">
    <div class="my-4 ...">Well, let me tell you something, ...</div>
  </div>
  <div class="flow-root ...">
    <div class="my-4 ...">Sure, go ahead, laugh if you want...</div>
  </div>
</div>
<div class="flex items-center">
      <img class="h-32 w-32 items-center" src="../assets/download.jpeg" />
      <div>
          <stron>Nagarjuna</stron>
          <strong>Web Developer</strong>
      </div>

</div>
<div class="grid gap-5 grid-cols-5 grid-rows-3">
  <span>01</span>
  <span>02</span>
  <span>03</span>
  <span>04</span>
  <span>05</span>
  <span>06</span>
    <span>01</span>
  <span>02</span>
  <span>03</span>
  <span>04</span>
  <span>05</span>
  <span>06</span>
</div>

<div>
    <div class="static ...">
  <p>Static parent</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute child</p>
  </div>
</div>
</div>
<div>
<div class="z-40 ...">05</div>
<div class="z-30 ...">04</div>
<div class="z-20 ...">03</div>
<div class="z-10 ...">02</div>
<div class="z-0 ...">01</div> 
</div>

  </div>
</template>

<script>
export default {};
</script>

<style></style>
