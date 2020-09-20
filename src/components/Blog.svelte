<script>
  let color = "53.4,93.1%,54.3%";
  // import PageProgress from "svelte-page-progress"
  import { onMount } from "svelte";

  import HeroNew from "./Hero_new.svelte";

  export let title, tags;
</script>

<style>
</style>

<!-- <PageProgress color=hsl({color}) /> -->

<div class="body-text body-bg">
  <HeroNew {color} {title} {tags} />
  <section class="container">Since there is only a single return line, you can further simplify this as check</section>
</div>
