<script>
  // let root = document.documentElement;

  let color = "53.4,93.1%,54.3%";
  // import PageProgress from "svelte-page-progress"
  import { onMount } from "svelte";

  import HeroNew from "./Hero_new.svelte";
  // import HeroOld from "./Hero_old.svelte";
  // import Hero from "./Hero.svelte";

  export let title, tags;

  // onMount(async () => {
  //   html2canvas(document.body).then(function(canvas) {
  //     // console.log("Added in onmount")
  //     // document.body.appendChild(canvas);
  //   });
  // });

  // root.style.setProperty("--theme-color", color);
</script>

<style>
  :root {
    --theme-color: 53.4, 93.1%, 54.3%;
  }
</style>

<!-- <PageProgress color=hsl({color}) /> -->

<div class="body-text body-bg">
  <HeroNew {color} {title} {tags} />
  <!-- <Hero {color} {title} {tags} />
  <HeroOld {color} {title} {tags} /> -->
  <section class="container">Since there is only a single return line, you can further simplify this as check</section>
</div>
