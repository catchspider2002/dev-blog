<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
  import NavBar from "../components/NavBar.svelte";
  import Hero from "../components/Hero.svelte";

  let theme = "dark";
</script>

<style>
  /* :global(pre[data-lang]) {
    position: relative;
    display: block;
    padding: 1.5rem;
    margin: 1.5rem 0;
    border-radius: var(--border-radius);
    background-color: red;
    border: none;
    box-shadow: none;
  }
  :global(code[class*="language-"]) {
    text-shadow: none;
  }
  :global(pre[data-lang]::before) {
    content: attr(data-lang);
    position: absolute;
    z-index: 3;
    top: 0.375rem;
    right: 0.5rem;
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-shadow: none;
    color: #a0aec0;
  } */
</style>

<svelte:head>
  <title>{post.title}</title>
  <link rel="canonical" href="https://blog.periodic-table.io/{post.slug}" />
  <meta name="description" content={post.description} />
  <meta name="keywords" content={post.keywords} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="blog" />
  <meta property="og:url" content="https://blog.periodic-table.io/{post.slug}" />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={post.description} />
  <meta property="og:image" content="https://blog.periodic-table.io/social/{post.slug}.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://blog.periodic-table.io/{post.slug}" />
  <meta property="twitter:title" content={post.title} />
  <meta property="twitter:description" content={post.description} />
  <meta property="twitter:image" content="https://blog.periodic-table.io/social/{post.slug}.png" />
</svelte:head>

<!-- {#if theme == 'dark'}
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-twilight.min.css" rel="stylesheet" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-okaidia.min.css" rel="stylesheet" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-dark.min.css" rel="stylesheet" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-tomorrow.min.css" rel="stylesheet" />
{:else}
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism.min.css" rel="stylesheet" />
{/if} -->

<NavBar />

<Hero title={post.title} tags={post.tags} />

<div class="content">
  {@html post.html}
</div>
