<style>
  .logoBlock {
    grid-column-gap: 0.75em;
    grid-template-columns: auto auto;
  }
  .logo {
    stroke: white;
    background-color: var(--accent-color);
  }
  .mx-3 {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
  }
  .mx-4 {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  nav {
    margin-top: 0;
    margin-bottom: 0;
  }
  .font-medium {
    font-weight: 500;
  }
  .text-xl {
    font-size: 1.25rem;
  }
  @media (max-width: 768px) {
    nav {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 768px) {
    .md\:ml-auto {
      margin-left: auto;
    }
  }
</style>

<header class="body-text body-bg">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href="#a" class="logoBlock grid font-medium items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 10.054166 10.054166" class="logo">
        <g transform="translate(-11.223271,-248.751622)" style="fill:#ffffff">
          <path
            d="m 14.368697,250.65729 a 1.3007583,1.300758 0 0 0 -1.300758,1.30076 1.3007583,1.300758 0 0 0 1.009148,1.26637
            1.5960997,1.5960997 0 0 1 1.552505,-1.58069 1.3007583,1.300758 0 0 0 -1.260895,-0.98644 z m 4.841172,1.58093 a
            1.5081255,1.5081255 0 0 0 -1.470202,1.17775 l -0.824437,-0.0999 a 0.12567713,0.12567713 0 0 0 -0.139889,0.10965
            0.12567713,0.12567713 0 0 0 0.109624,0.13989 l 0.820853,0.0995 a 1.5081255,1.5081255 0 0 0 -0.0041,0.0812 1.5081255,1.5081255 0
            0 0 1.508126,1.50813 1.5081255,1.5081255 0 0 0 1.508125,-1.50813 1.5081255,1.5081255 0 0 0 -1.508125,-1.50812 z m
            -4.331148,1.68937 a 0.12567712,0.12567712 0 0 0 -0.07784,0.028 l -0.843043,0.68281 a 1.3007583,1.300758 0 0 0 -0.87434,-0.3398
            1.3007583,1.300758 0 0 0 -1.300758,1.30076 1.3007583,1.300758 0 0 0 1.300758,1.30076 1.3007583,1.300758 0 0 0 1.300759,-1.30076
            1.3007583,1.300758 0 0 0 -0.257418,-0.77439 l 0.832219,-0.67406 a 0.12567712,0.12567712 0 0 0 0.01858,-0.17676
            0.12567712,0.12567712 0 0 0 -0.09892,-0.0466 z" />
          <path
            d="m 15.672524,251.73018 a 1.5081255,1.5081254 0 0 0 -1.508126,1.50813 1.5081255,1.5081254 0 0 0 0.296741,0.89542 l
            0.292273,-0.23672 a 0.20108339,0.20108339 0 0 1 0.282822,0.0297 0.20108339,0.20108339 0 0 1 -0.0297,0.28282 l -0.2651,0.21471 a
            1.5081255,1.5081254 0 0 0 0.931091,0.32219 1.5081255,1.5081254 0 0 0 1.444403,-1.07677 l -0.241045,-0.0292 a
            0.20108339,0.20108339 0 0 1 -0.175408,-0.22384 0.20108339,0.20108339 0 0 1 0.223814,-0.17541 l 0.254668,0.0309 a
            1.5081255,1.5081254 0 0 0 0.0017,-0.0337 1.5081255,1.5081254 0 0 0 -1.508125,-1.50813 z"
            style="opacity:0.7" />
        </g>
      </svg>
      <span class="text-xl body-text">Periodic-Table.io</span>
    </a>
    <nav class="md:ml-auto mx-4 flex flex-wrap items-center justify-center">
      <a class="mx-3" href="#a">Periodic-Table</a>
      <a class="mx-3" href="#a">Printables</a>
      <a class="mx-3" href="#a">Store</a>
      <a class="mx-3" href="#a">
        <span id="themeIcon" class="iconFont">t</span>
        Theme
      </a>
    </nav>
  </div>
</header>

<!-- <div class="top-container">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-label="Expand">
      <span class="icon-bar" />
      <span class="icon-bar" />
      <span class="icon-bar" />
    </button>
    <h1>
      <a id="navLogo" class="navbar-brand" href="./" aria-label="Home">
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 10.054166 10.054166" class="periodic-table-logo">
          <g transform="translate(-11.223271,-248.751622)" style="fill:#ffffff">
            <path
              d="m 14.368697,250.65729 a 1.3007583,1.300758 0 0 0 -1.300758,1.30076 1.3007583,1.300758 0 0 0 1.009148,1.26637
              1.5960997,1.5960997 0 0 1 1.552505,-1.58069 1.3007583,1.300758 0 0 0 -1.260895,-0.98644 z m 4.841172,1.58093 a
              1.5081255,1.5081255 0 0 0 -1.470202,1.17775 l -0.824437,-0.0999 a 0.12567713,0.12567713 0 0 0 -0.139889,0.10965
              0.12567713,0.12567713 0 0 0 0.109624,0.13989 l 0.820853,0.0995 a 1.5081255,1.5081255 0 0 0 -0.0041,0.0812 1.5081255,1.5081255
              0 0 0 1.508126,1.50813 1.5081255,1.5081255 0 0 0 1.508125,-1.50813 1.5081255,1.5081255 0 0 0 -1.508125,-1.50812 z m
              -4.331148,1.68937 a 0.12567712,0.12567712 0 0 0 -0.07784,0.028 l -0.843043,0.68281 a 1.3007583,1.300758 0 0 0 -0.87434,-0.3398
              1.3007583,1.300758 0 0 0 -1.300758,1.30076 1.3007583,1.300758 0 0 0 1.300758,1.30076 1.3007583,1.300758 0 0 0
              1.300759,-1.30076 1.3007583,1.300758 0 0 0 -0.257418,-0.77439 l 0.832219,-0.67406 a 0.12567712,0.12567712 0 0 0
              0.01858,-0.17676 0.12567712,0.12567712 0 0 0 -0.09892,-0.0466 z" />
            <path
              d="m 15.672524,251.73018 a 1.5081255,1.5081254 0 0 0 -1.508126,1.50813 1.5081255,1.5081254 0 0 0 0.296741,0.89542 l
              0.292273,-0.23672 a 0.20108339,0.20108339 0 0 1 0.282822,0.0297 0.20108339,0.20108339 0 0 1 -0.0297,0.28282 l -0.2651,0.21471
              a 1.5081255,1.5081254 0 0 0 0.931091,0.32219 1.5081255,1.5081254 0 0 0 1.444403,-1.07677 l -0.241045,-0.0292 a
              0.20108339,0.20108339 0 0 1 -0.175408,-0.22384 0.20108339,0.20108339 0 0 1 0.223814,-0.17541 l 0.254668,0.0309 a
              1.5081255,1.5081254 0 0 0 0.0017,-0.0337 1.5081255,1.5081254 0 0 0 -1.508125,-1.50813 z"
              style="opacity:0.7" />
          </g>
        </svg>
      </a>
    </h1>
    <div class="navbar-header no-overflow">
      <h1 id="pageHeader" />
    </div>
  </div>
  <div id="listNavbar" class="navbar-collapse navbar-right collapse">
    <ul class="nav navbar-nav">
      <li>
        <a id="listList" href="https://periodic-table.io/list.html">
          <span class="iconFont">j</span>
          <span id="listLink" class="linkText">LIST</span>
        </a>
      </li>
      <li>
        <a id="compareList" href="https://periodic-table.io/compare.html">
          <span class="iconFont">K</span>
          <span id="compareLink" class="linkText">COMPARE</span>
        </a>
      </li>
      <li>
        <a id="printableList" href="https://periodic-table.io/printables.html">
          <span class="iconFont">E</span>
          <span id="printableLink" class="linkText">PRINTABLES</span>
          <span id="newHeader" class="newHeader new" >NEW</span>
        </a>
      </li>
      <li>
        <a id="storeList" href="https://periodic-table.io/store.html">
          <span class="iconFont">I</span>
          <span id="storeLink" class="linkText">STORE</span>
        </a>
      </li>
      <li>
        <a id="translateList" href="https://periodic-table.io/translation.html">
          <span class="iconFont">B</span>
          <span id="translateLink" class="linkText">TRANSLATE</span>
          <span class="newHeader new" >NEW</span>
        </a>
      </li>
      <li>
        <a id="settingsList" href="#" data-toggle="modal" data-target="#settingsModal">
          <span class="iconFont">f</span>
          <span id="settingsLink" class="linkText">SETTINGS</span>
        </a>
      </li>
      <li>
        <a id="themeList" href="#">
          <span id="themeIcon" class="iconFont">t</span>
          <span id="themeLink" class="linkText">THEME</span>
        </a>
      </li>
    </ul>
  </div>
</div> -->
