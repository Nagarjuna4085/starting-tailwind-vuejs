<template>
  <div>
<h1>Flex Basics</h1>
<div class="flex flex-row ">
  <div class=" bg-pink basis-1/4 md:basis-1/2">01</div>
  <div class="bg-orange basis-1/4 md:basis-1/3">02</div>
  <div class="bg-gray-dark basis-1/2 md:basis-1/3">03</div>
</div>
<div class="flex flex-wrap ">
  <div class="bg-pink">01</div>
  <div class="bg-orange">02</div>
  <div class="bg-gray">03</div>
</div>
<div class="grid grid-rows-4 grid-flow-col gap-4">
  <div>01</div>
  <div>01</div>
  <div>01</div>
  <div>01</div>
  <!-- ... -->
  <div>09</div>
  <div>01</div>
</div>
<div class="flex justify-end ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
<div class="flex ...">
  <div class="w-1/2 ... ">w-1/2</div>
  <div class="w-1/2 ... ">w-1/2</div>
</div>
<div class="flex ...">
  <div class="w-2/5 ...">w-2/5</div>
  <div class="w-3/5 ...">w-3/5</div>
</div>
<div class="flex ...">
  <div class="w-1/3 ...">w-1/3</div>
  <div class="w-2/3 ...">w-2/3</div>
</div>
<div class="flex ...">
  <div class="w-1/4 ...">w-1/4</div>
  <div class="w-3/4 ...">w-3/4</div>
</div>
<div class="flex ...">
  <div class="w-1/5 ...">w-1/5</div>
  <div class="w-4/5 ...">w-4/5</div>
</div>
<div class="flex ...">
  <div class="w-1/6 ...">w-1/6</div>
  <div class="w-5/6 ...">w-5/6</div>
</div>
<div class="w-full ...">w-full</div>
<div>
  <div class="w-3/4 ...">
  <div class="whitespace-normal ...">Hey everyone!

It's almost 2022       and we still don't know if there is aliens living among us, or do we? Maybe the person writing this is an alien.

You will never know.</div>
</div>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>