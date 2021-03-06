// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
  {
    title: "How to remove a specific item from an array? (JAVASCRIPT)",
    slug: "how-to-remove-a-specific-item-from-an-array",
    tags: ["JAVASCRIPT", "ES6"],
    description: "",
    keywords: "",
    thumb: "",
    html: `
    <section class="container"><pre data-lang="javascript" class="svelte-1fwm5ja language-javascript"><code class=" svelte-1fwm5ja language-javascript" dir="ltr">const removeArrayValue = (array, value) =&gt; {
      return array.filter((item) =&gt; item !== value);
    };</code></pre>
    
    Since there is only a single return line, you can further simplify this as 
      
    
    <pre data-lang="javascript" class="language-javascript"><code class=" svelte-1fwm5ja language-javascript" dir="ltr">const removeArrayValue = (array, value) =&gt;
      array.filter((item) =&gt; item !== value);</code></pre>
    check
    <pre data-lang="css" class="language-css"><code class=" svelte-1fwm5ja language-css" dir="ltr">pre[data-lang] {
      position: relative;
      padding: 1.5rem;
      background-color: #1a202c;
      margin: 10px 0;
    }
    pre[data-lang]::before {
      content: attr(data-lang);
      display: block;
      position: absolute;
      z-index: 3;
      top: 0.375rem;
      right: 0.5rem;
      color: #467790;
      text-transform: uppercase;
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.1em;
    }
    </code></pre></section>			
		`
  },

  {
    title: "How to use Sapper (SVELTE)",
    slug: "how-to-use-sapper",
    tags: ["SVELTE"],
    description: "",
    keywords: "",
    thumb: "",
    html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
  },

  {
    title: "Why the name? (CSS)",
    slug: "why-the-name",
    tags: ["CSS"],
    description: "",
    keywords: "",
    thumb: "",
    html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
  },

  {
    title: "How is Sapper different from Next.js? (SVG)",
    slug: "how-is-sapper-different-from-next",
    tags: ["SVG"],
    description: "",
    keywords: "",
    thumb: "",
    html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
  },

  {
    title: "How can I get involved? (HTML)",
    slug: "how-can-i-get-involved",
    tags: ["HTML"],
    description: "",
    keywords: "",
    thumb: "",
    html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
  },

  {
    title: "To react How can I get involved? (REACT)",
    slug: "react-how-can-i-get-involved",
    tags: ["REACT"],
    description: "",
    keywords: "",
    thumb: "",
    html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
  },

  {
    title: "To react How can I get involved? (TAILWIND CSS)",
    slug: "tailwind-how-can-i-get-involved",
    tags: ["TAILWIND CSS"],
    description: "",
    keywords: "",
    thumb: "",
    html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
  }
];

posts.forEach(post => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
