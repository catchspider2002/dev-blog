<script>
  export let lang = "javascript";
</script>

<style>
  pre[data-lang] {
    position: relative;
    display: block;
    padding: 1.5rem;
    margin: 1.5rem 0;
    border-radius: var(--border-radius);
    /* background-color: var(--button-hover-bg); */
    background-color: red;
    border: none;
    box-shadow: none;
  }
  code[class*="language-"] {
    text-shadow: none;
  }
  pre[data-lang]::before {
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
  }
</style>

<pre data-lang={lang}><code class="language-{lang}" dir="ltr">
        <slot />
    </code></pre>
