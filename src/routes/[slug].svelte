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
  import Blog from "../components/Blog.svelte";
</script>

<style>
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
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
<NavBar />

<Blog title={post.title} tags={post.tags} />

<div class="content">
  {@html post.html}
</div>
