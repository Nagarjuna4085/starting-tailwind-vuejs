<template>
  <div>
    <div class="columns-1">
      <img desktop src="../assets/download.jpeg" />
      <img desktop src="../assets/download.jpeg" />
    </div>
    <div class="columns-2">
      <img desktop src="../assets/download.jpeg" />
      <img desktop src="../assets/download.jpeg" />
    </div>
    <div class="md:container md:mx-auto bg-pink">
      <h1>Sanam Nagarjuna</h1>
    </div>
    <div class="card rounded-none">
      <!-- ... -->
    </div>
    <div class="card">
      <iframe
        class="w-full aspext-[4/3] hover:aspect-square"
        src="http://localhost:8081/"
      ></iframe>
    </div>
    <article class="prose lg:prose-xl">
      <h1>Garlic bread with cheese: What the science tells us</h1>
      <p>
        For years parents have espoused the health benefits of eating garlic
        bread with cheese to their children, with the food earning such an
        iconic status in our culture that kids will often dress up as warm,
        cheesy loaf for Halloween.
      </p>
      <p>
        But a recent study shows that the celebrated appetizer may be linked to
        a series of rabies cases springing up around the country.
      </p>
      <!-- ... -->
    </article>
    <button class="bg-sky-400 btn">Save changes</button>
    <button class="dark:md:hover:bg-fuchsia-600 ...">Save changes</button>
    <button
      class="bg-violet-500 hover:bg-red-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-yellow-300 ..."
    >
      Save changes
    </button>
    <input
      type="text"
      value="tbone"
      class="mt-1 block px-7 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    />
    <div
      class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
    >
      <div>
        <span
          class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"
        >
          <svg
            class="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <!-- ... -->
          </svg>
        </span>
      </div>
      <h3
        class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight"
      >
        Writes Upside-Down
      </h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including
        upside-down. It even works in outer space.
      </p>
    </div>
    <div class="bg-slate-100 w-1/2 justify-center m-4 p-4 text-justify text-xl">
      <img desktop src="../assets/download.jpeg" />
      <p class="text-blue text-[20px]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione nam
        maiores nobis aliquam a? Excepturi vitae dolorum alias mollitia iure
        molestiae, dolor tenetur dolorem, vero fugiat aliquid, quasi quo fuga?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
