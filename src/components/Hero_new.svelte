<script>
  export let title, tags;
  let newtags = [];
  tags.forEach(letter => {
    newtags.push({ tag: letter });
  });
  console.log(title);
  let lang = tags[0];
  let color;

  switch (lang) {
    case "JAVASCRIPT":
      color = "53.4,93.1%,54.3%";
      break;
    case "SVELTE":
      color = "14.6,100%,50%";
      break;
    case "CSS":
      color = "228,78%,52%";
      break;
    case "TAILWIND CSS":
      color = "177,52%,46%";
      break;
    case "SVG":
      color = "36,100%,62%";
      break;
    case "HTML":
      color = "13,77%,52%";
      break;
    case "REACT":
      color = "192.9,95.1%,68.2%";
      break;
  }

  import html2canvas from "html2canvas";
  import JavascriptSvg from "./JavascriptSVG.svelte";

  function screenshot() {
    console.log("screenshot");
    // html2canvas(document.getElementById("target1")).then(function(canvas) {
    html2canvas(document.body, {
      width: 1200,
      height: 627,
      y: 50
    }).then(function (canvas) {
      console.log("before append");
      document.body.appendChild(canvas);
    });
  }
</script>

<style>
  :root {
    --bg: black;
    --fg: white;
    /* 		--bg: white;
		--fg: black; */
  }
  :global(body) {
    font-size: 20px;
  }
  @media (max-width: 1440px) {
    :global(body) {
      font-size: 18px;
    }
  }
  @media (max-width: 768px) {
    :global(body) {
      font-size: 16px;
    }
  }
  @media (max-width: 400px) {
    :global(body) {
      font-size: 14px;
    }
  }
  .header {
    /* min-height: 630px; */
    /* padding: 2em; */
    display: grid;
    grid-template-columns: 1fr;
    place-content: center;
    place-items: center;
    background-color: hsl(var(--theme-color));
  }
</style>

-
<section class="header" style="background-color: hsl({color});">
  <JavascriptSvg {color} {lang} />
</section>

<button on:click={screenshot}>to image</button>
