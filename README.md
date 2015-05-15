


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>flux/README.md at master · facebook/flux · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="facebook/flux" name="twitter:title" /><meta content="flux - Application Architecture for Building User Interfaces" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/69631?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/69631?v=3&amp;s=400" property="og:image" /><meta content="facebook/flux" property="og:title" /><meta content="https://github.com/facebook/flux" property="og:url" /><meta content="flux - Application Architecture for Building User Interfaces" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="0807E4FC:5956:194F391:55523B6D" name="octolytics-dimension-request_id" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged Out">
    <meta class="js-ga-set" name="dimension2" content="Header v3">
    <meta name="is-dotcom" content="true">
    <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="YA6JXF22JAtCj1J8eI97ikPlHStp23dAGryUlV6xvDDTxLo7AJrCxFlQYOzpJwLMtYff+Hd7oBHMDsOWeg519A==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github/index-834f87d435ddbe4f496a39540eedb8fc44948c9eb9ed4e0c3255ca6473c51d2a.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2/index-011c393a02ad23c882d7f6071aa1e6fbde635f06f3a283edfc58a6f7eca37c7b.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="9f7354a6a76446d7316b7ef92586daa7">

      
  <meta name="description" content="flux - Application Architecture for Building User Interfaces">
  <meta name="go-import" content="github.com/facebook/flux git https://github.com/facebook/flux.git">

  <meta content="69631" name="octolytics-dimension-user_id" /><meta content="facebook" name="octolytics-dimension-user_login" /><meta content="22046023" name="octolytics-dimension-repository_id" /><meta content="facebook/flux" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="22046023" name="octolytics-dimension-repository_network_root_id" /><meta content="facebook/flux" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/facebook/flux/commits/master.atom" rel="alternate" title="Recent Commits to flux:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production  vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        
        <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Ffacebook%2Fflux%2Fblob%2Fmaster%2Fexamples%2Fflux-todomvc%2FREADME.md" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <form accept-charset="UTF-8" action="/facebook/flux/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/facebook/flux/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="(Logged out) Header, go to blog, text:blog">Blog</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Ffacebook%2Fflux"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/facebook/flux/watchers">
    378
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Ffacebook%2Fflux"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/facebook/flux/stargazers">
      6,093
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Ffacebook%2Fflux"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/facebook/flux/network" class="social-count">
        1,060
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/facebook" class="url fn" itemprop="url" rel="author"><span itemprop="title">facebook</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/facebook/flux" class="js-current-repository" data-pjax="#js-repo-pjax-container">flux</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/facebook/flux/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/facebook/flux" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /facebook/flux">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/facebook/flux/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /facebook/flux/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/facebook/flux/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /facebook/flux/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/facebook/flux/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /facebook/flux/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/facebook/flux/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /facebook/flux/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/facebook/flux.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/facebook/flux" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a> or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>




                <a href="/facebook/flux/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of facebook/flux as a zip file"
                   title="Download the contents of facebook/flux as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/facebook/flux/blob/ac1e4970c2a85d5030b65696461c271ba981a2a6/examples/flux-todomvc/README.md" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:fb15e9d2938cf17aafff9fd013056984 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/facebook/flux/blob/gh-pages/examples/flux-todomvc/README.md"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/facebook/flux/blob/master/examples/flux-todomvc/README.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/facebook/flux/tree/2.0.2/examples/flux-todomvc/README.md"
                 data-name="2.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.2">2.0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/facebook/flux/tree/2.0.1/examples/flux-todomvc/README.md"
                 data-name="2.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.1">2.0.1</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/facebook/flux/find/master"
          class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/facebook/flux" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">flux</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/facebook/flux/tree/master/examples" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">examples</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/facebook/flux/tree/master/examples/flux-todomvc" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">flux-todomvc</span></a></span><span class="separator">/</span><strong class="final-path">README.md</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="@Youmoo" class="avatar" data-user="2532886" height="24" src="https://avatars1.githubusercontent.com/u/2532886?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/Youmoo" rel="contributor">Youmoo</a></span>
        <time datetime="2015-03-23T10:55:26Z" is="relative-time">Mar 23, 2015</time>
        <div class="commit-title">
            <a href="/facebook/flux/commit/f8c05fa28e92d8f7512fce0bd3129fd696c3c6af" class="message" data-pjax="true" title="fix typo">fix typo</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>7</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="Youmoo" href="/facebook/flux/commits/master/examples/flux-todomvc/README.md?author=Youmoo"><img alt="@Youmoo" class="avatar" data-user="2532886" height="20" src="https://avatars3.githubusercontent.com/u/2532886?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="vjeux" href="/facebook/flux/commits/master/examples/flux-todomvc/README.md?author=vjeux"><img alt="@vjeux" class="avatar" data-user="197597" height="20" src="https://avatars0.githubusercontent.com/u/197597?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="zpao" href="/facebook/flux/commits/master/examples/flux-todomvc/README.md?author=zpao"><img alt="@zpao" class="avatar" data-user="8445" height="20" src="https://avatars3.githubusercontent.com/u/8445?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jDeppen" href="/facebook/flux/commits/master/examples/flux-todomvc/README.md?author=jDeppen"><img alt="@jDeppen" class="avatar" data-user="32324" height="20" src="https://avatars1.githubusercontent.com/u/32324?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="fisherwebdev" href="/facebook/flux/commits/master/examples/flux-todomvc/README.md?author=fisherwebdev"><img alt="@fisherwebdev" class="avatar" data-user="169760" height="20" src="https://avatars2.githubusercontent.com/u/169760?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="melpomene" href="/facebook/flux/commits/master/examples/flux-todomvc/README.md?author=melpomene"><img alt="@melpomene" class="avatar" data-user="763476" height="20" src="https://avatars1.githubusercontent.com/u/763476?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="AlexKVal" href="/facebook/flux/commits/master/examples/flux-todomvc/README.md?author=AlexKVal"><img alt="@AlexKVal" class="avatar" data-user="847572" height="20" src="https://avatars2.githubusercontent.com/u/847572?v=3&amp;s=40" width="20" /> </a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="@Youmoo" data-user="2532886" height="24" src="https://avatars1.githubusercontent.com/u/2532886?v=3&amp;s=48" width="24" />
            <a href="/Youmoo">Youmoo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@vjeux" data-user="197597" height="24" src="https://avatars2.githubusercontent.com/u/197597?v=3&amp;s=48" width="24" />
            <a href="/vjeux">vjeux</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@zpao" data-user="8445" height="24" src="https://avatars1.githubusercontent.com/u/8445?v=3&amp;s=48" width="24" />
            <a href="/zpao">zpao</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jDeppen" data-user="32324" height="24" src="https://avatars3.githubusercontent.com/u/32324?v=3&amp;s=48" width="24" />
            <a href="/jDeppen">jDeppen</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@fisherwebdev" data-user="169760" height="24" src="https://avatars0.githubusercontent.com/u/169760?v=3&amp;s=48" width="24" />
            <a href="/fisherwebdev">fisherwebdev</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@melpomene" data-user="763476" height="24" src="https://avatars3.githubusercontent.com/u/763476?v=3&amp;s=48" width="24" />
            <a href="/melpomene">melpomene</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@AlexKVal" data-user="847572" height="24" src="https://avatars0.githubusercontent.com/u/847572?v=3&amp;s=48" width="24" />
            <a href="/AlexKVal">AlexKVal</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="btn-group">
        <a href="/facebook/flux/raw/master/examples/flux-todomvc/README.md" class="btn btn-sm " id="raw-url">Raw</a>
          <a href="/facebook/flux/blame/master/examples/flux-todomvc/README.md" class="btn btn-sm js-update-url-with-hash">Blame</a>
        <a href="/facebook/flux/commits/master/examples/flux-todomvc/README.md" class="btn btn-sm " rel="nofollow">History</a>
      </div>


          <button type="button" class="octicon-btn disabled tooltipped tooltipped-n" aria-label="You must be signed in to make or propose changes">
            <span class="octicon octicon-pencil"></span>
          </button>

        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-n" aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </button>
    </div>

    <div class="file-info">
        158 lines (88 sloc)
        <span class="file-info-divider"></span>
      15.059 kb
    </div>
  </div>
    <div id="readme" class="blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a id="user-content-flux-todomvc-example" class="anchor" href="#flux-todomvc-example" aria-hidden="true"><span class="octicon octicon-link"></span></a>Flux TodoMVC Example</h1>

<blockquote>
<p>An application architecture for React utilizing a unidirectional data flow.</p>
</blockquote>

<h2>
<a id="user-content-learning-flux" class="anchor" href="#learning-flux" aria-hidden="true"><span class="octicon octicon-link"></span></a>Learning Flux</h2>

<p>The <a href="http://facebook.github.io/flux">Flux</a> and <a href="http://facebook.github.io/react">React</a> websites are great resources for getting started.</p>

<p>Read the blog post announcing Flux: <a href="http://facebook.github.io/react/blog/2014/05/06/flux.html">"An Application Architecture for React"</a>, then read more about the <a href="http://facebook.github.io/react/docs/flux-overview.html">Flux architecture</a> and a <a href="http://facebook.github.io/flux/docs/todo-list.html">TodoMVC tutorial</a> explaining the structure of the files in this folder.  After you feel comfortable with the TodoMVC example, you may be interested in the <a href="/facebook/flux/blob/master/examples/flux-chat">Chat App example</a>, which is more complex.</p>

<h2>
<a id="user-content-overview" class="anchor" href="#overview" aria-hidden="true"><span class="octicon octicon-link"></span></a>Overview</h2>

<p>Flux applications have three major parts: the <strong><em>dispatcher</em></strong>, the <strong><em>stores</em></strong>, and the <strong><em>views</em></strong> (React components).  These should not be confused with Model-View-Controller.  Controllers do exist in a Flux application, but they are <strong><em>controller-views</em></strong> -- views often found at the top of the hierarchy that retrieve data from the stores and pass this data down to their children.  Additionally, <strong><em>action creators</em></strong> — dispatcher helper methods — are often used to support a semantic dispatcher API.  It can be useful to think of them as a fourth part of the Flux update cycle.</p>

<p>Flux eschews MVC in favor of a unidirectional data flow. When a user interacts with a React <strong><em>view</em></strong>, the view propagates an <strong><em>action</em></strong> through a central <strong><em>dispatcher</em></strong>, to the various <strong><em>stores</em></strong> that hold the application's data and business logic, which updates all of the views that are affected. This works especially well with React's declarative programming style, which allows the store to send updates without specifying how to transition views between states.</p>

<p>We originally set out to deal correctly with derived data: for example, we wanted to show an unread count for message threads while another view showed a list of threads, with the unread ones highlighted. This was difficult to handle with MVC — marking a single thread as read would update the thread model, and then also need to update the unread count model.  These dependencies and cascading updates often occur in a large MVC application, leading to a tangled weave of data flow and unpredictable results.</p>

<p>Control is inverted with <strong><em>stores</em></strong>: the stores accept updates and reconcile them as appropriate, rather than depending on something external to update its data in a consistent way. Nothing outside the store has any insight into how it manages the data for its domain, helping to keep a clear separation of concerns. This also makes stores more testable than models, especially since stores have no direct setter methods like <code>setAsRead()</code>, but instead have only an input point for a data payload, which is delivered through the <strong><em>dispatcher</em></strong> and originates with <strong><em>action creators</em></strong>.</p>

<h2>
<a id="user-content-structure-and-data-flow" class="anchor" href="#structure-and-data-flow" aria-hidden="true"><span class="octicon octicon-link"></span></a>Structure and Data Flow</h2>

<p>Data in a Flux application flows in a single direction, in a cycle:</p>

<p><a href="/facebook/flux/blob/master/docs/img/flux-diagram-white-background.png" target="_blank"><img src="/facebook/flux/raw/master/docs/img/flux-diagram-white-background.png" style="max-width:100%;"></a></p>

<p>A unidirectional data flow is central to the Flux pattern, and in fact Flux takes its name from the Latin word for flow. In the above diagram, the <strong><em>dispatcher</em></strong>, <strong><em>stores</em></strong> and <strong><em>views</em></strong> are independent nodes with distinct inputs and outputs. The <strong><em>action creators</em></strong> are simply discrete, semantic helper functions that facilitate passing data to the <strong><em>dispatcher</em></strong> in the form of an <strong><em>action</em></strong>.</p>

<p>All data flows through the <strong><em>dispatcher</em></strong> as a central hub.  <strong><em>Actions</em></strong> most often originate from user interactions with the <strong><em>views</em></strong>, and <strong><em>action creators</em></strong> are nothing more than a call into the <strong><em>dispatcher</em></strong>.  The <strong><em>dispatcher</em></strong> then invokes the callbacks that the <strong><em>stores</em></strong> have registered with it, effectively dispatching the data payload contained in the <strong><em>actions</em></strong> to all <strong><em>stores</em></strong>.  Within their registered callbacks, <strong><em>stores</em></strong> determine which <strong><em>actions</em></strong> they are interested in, and respond accordingly.  The <strong><em>stores</em></strong> then emit a "change" event to alert the <strong><em>controller-views</em></strong> that a change to the data layer has occurred.  <strong><em>Controller-views</em></strong> listen for these events and retrieve data from the <strong><em>stores</em></strong> in an event handler.  The <strong><em>controller-views</em></strong> call their own <code>render()</code> method via <code>setState()</code> or <code>forceUpdate()</code>, updating themselves and all of their children.</p>

<p>This structure allows us to reason easily about our application in a way that is reminiscent of functional reactive programming, or more specifically data-flow programming or flow-based programming, where data flows through the application in a single direction — there are no two-way bindings. Application state is maintained only in the <strong><em>stores</em></strong>, allowing the different parts of the application to remain highly decoupled. Where dependencies do occur between <strong><em>stores</em></strong>, they are kept in a strict hierarchy, with synchronous updates managed by the <strong><em>dispatcher</em></strong>.</p>

<p>We found that two-way data bindings led to cascading updates, where changing one object led to another object changing, which could also trigger more updates. As applications grew, these cascading updates made it very difficult to predict what would change as the result of one user interaction. When updates can only change data within a single round, the system as a whole becomes more predictable.</p>

<p>Let's look at the various parts of the Flux update cycle up close. A good place to start is the dispatcher.</p>

<h3>
<a id="user-content-a-single-dispatcher" class="anchor" href="#a-single-dispatcher" aria-hidden="true"><span class="octicon octicon-link"></span></a>A Single Dispatcher</h3>

<p>The dispatcher is the central hub that manages all data flow in a Flux application. It is essentially a registry of callbacks into the stores. Each store registers itself and provides a callback. When the dispatcher is invoked in an action creator method, all stores in the application are sent a data payload via the callbacks in the registry.</p>

<p>As an application grows, the dispatcher becomes more vital, as it can manage dependencies between stores by invoking the registered callbacks in a specific order.  Stores can declaratively wait for other stores to finish updating, and then update themselves accordingly.</p>

<h3>
<a id="user-content-stores" class="anchor" href="#stores" aria-hidden="true"><span class="octicon octicon-link"></span></a>Stores</h3>

<p>Stores contain the application state and logic. Their role is somewhat similar to a model in a traditional MVC, but they manage the state of many objects — they are not instances of one object. Nor are they the same as Backbone's collections. More than simply managing a collection of ORM-style objects, stores manage the application state for a particular <strong>domain</strong> within the application.</p>

<p>For example, Facebook's <a href="https://facebook.com/lookback/edit">Lookback Video Editor</a> utilized a TimeStore that kept track of the playback time position and the playback state. On the other hand, the same application's ImageStore kept track of a collection of images.  The TodoStore in our TodoMVC example is similar in that it manages a collection of to-do items.  A store exhibits characteristics of both a collection of models and a singleton model of a logical domain.</p>

<p>As mentioned above, a store registers itself with the dispatcher and provides it with a callback. This callback receives a data payload as a parameter. The payload contains an action with an attribute identifying the action's type. Within the store's registered callback, a switch statement based on the action's type is used to interpret the payload and to provide the proper hooks into the store's internal methods. This allows an action to result in an update to the state of the store, via the dispatcher. After the stores are updated, they broadcast an event declaring that their state has changed, so the views may query the new state and update themselves.</p>

<h3>
<a id="user-content-views-and-controller-views" class="anchor" href="#views-and-controller-views" aria-hidden="true"><span class="octicon octicon-link"></span></a>Views and Controller-Views</h3>

<p>React provides the kind of composable views we need for the view layer. Close to the top of the nested view hierarchy, a special kind of view listens for events that are broadcast by the stores that it depends on. One could call this a <strong><em>controller-view</em></strong>, as it provides the glue code to get the data from the stores and to pass this data down the chain of its descendants. We might have one of these controller-views governing any significant section of the page.</p>

<p>When it receives the event from the store, it first requests the new data it needs via the stores' public getter methods. It then calls its own <code>setState()</code> or <code>forceUpdate()</code> methods, causing its <code>render()</code> method and the <code>render()</code> method of all its descendants to run.</p>

<p>We often pass the entire state of the store down the chain of views in a single object, allowing different descendants to use what they need. In addition to keeping the controller-like behavior at the top of the hierarchy, and thus keeping our descendant views as functionally pure as possible, passing down the entire state of the store in a single object also has the effect of reducing the number of props we need to manage.</p>

<p>Occasionally we may need to add additional controller-views deeper in the hierarchy to keep components simple.  This might help us to better encapsulate a section of the hierarchy related to a specific  data domain.  Be aware, however, that controller-views deeper in the hierarchy can violate the singular flow of data by introducing a new, potentially conflicting entry point for the data flow.  In making the decision of whether to add a deep controller-view, balance the gain of simpler components against the complexity of multiple data updates flowing into the hierarchy at different points.  These multiple data updates can lead to odd effects, with React's render method getting invoked repeatedly by updates from different controller-views, potentially increasing the difficulty of debugging.</p>

<h3>
<a id="user-content-actions-and-action-creators" class="anchor" href="#actions-and-action-creators" aria-hidden="true"><span class="octicon octicon-link"></span></a>Actions and Action Creators</h3>

<p>The dispatcher exposes a method that allows a view to trigger a dispatch to the stores, and to include a payload of data.  This data payload contains an action, an object literal containing the various fields of data and a specific action type. The action construction may be wrapped into a semantic helper method, which we refer to as action creators. These methods provide the payload to the dispatcher. For example, we may want to change the text of a to-do item in a to-do list application. We would create an action creator method like <code>updateText(todoId, newText)</code> in our <code>TodoActions</code> module. This method may be invoked from within our views' event handlers, so we can call it in response to a user interaction. The action creator method also adds the type to the action, so that when the payload is interpreted in the store, it can respond appropriately to a payload with a particular action type. In our example, this type might be named something like <code>TODO_UPDATE_TEXT</code>.</p>

<p>Actions may also come from other places, such as the server. This happens, for example, during data initialization. It may also happen when the server returns an error code or when the server has updates to provide to the application. We'll talk more about server actions in a future article. In this example application we're only concerned with the basics of the data flow.</p>

<h3>
<a id="user-content-what-about-that-dispatcher" class="anchor" href="#what-about-that-dispatcher" aria-hidden="true"><span class="octicon octicon-link"></span></a>What About that Dispatcher?</h3>

<p>As mentioned earlier, the dispatcher is also able to manage dependencies between stores. This functionality is available through the Dispatcher's <code>waitFor()</code> method.  The TodoMVC application is extremely simple, so we did not need to use this method, but in a larger, more complex application, this method becomes vital.</p>

<p>Within the TodoStore's registered callback we can explicitly wait for any dependencies to first update before moving forward:</p>

<pre><code>case 'TODO_CREATE':
  Dispatcher.waitFor([
    PrependedTextStore.dispatchToken,
    YetAnotherStore.dispatchToken
  ]);
  TodoStore.create(PrependedTextStore.getText() + ' ' + action.text);
  TodoStore.emit('change');
  break;
</code></pre>

<p>The arguments for <code>waitFor()</code> are an array of dipatcher registry indexes, which we refer to here as each store's dispatchToken. When waitFor() is encountered in a callback, it tells the Dispatcher to invoke the callbacks for the required stores. After these callbacks complete, the original callback can continue to execute. Thus the store that is invoking <code>waitFor()</code> can depend on the state of another store to inform how it should update its own state.</p>

<p>A problem arises if we create circular dependencies. If Store A waits for Store B, and B waits for A, then we could wind up in an endless loop. The Dispatcher will flag these circular dependencies with console errors.</p>

<h2>
<a id="user-content-todomvc-example-implementation" class="anchor" href="#todomvc-example-implementation" aria-hidden="true"><span class="octicon octicon-link"></span></a>TodoMVC Example Implementation</h2>

<p>In this TodoMVC example application, we can see the elements of Flux in our directory structure. Views here are referred to as "components" as they are React components.</p>

<pre>./
  index.html
  js/
    actions/
      TodoActions.js
    app.js
    bundle.js
    dispatcher/
      AppDispatcher.js
    components/
      Footer.react.js
      Header.react.js
      MainSection.react.js
      TodoApp.react.js
      TodoItem.react.js
      TodoTextInput.react.js
    stores/
      TodoStore.js
</pre>

<p>The primary entry point into the application is app.js.  This file bootstraps the React rendering inside of index.html.  TodoApp.react.js is our controller-view and it passes all data down into its child React components.</p>

<p>TodoActions.js is a collection of action creator methods that views may call from within their event handlers, in response to user interactions.  They are nothing more than helpers that call into the AppDispatcher.</p>

<p>Dispatcher.js is a base class for AppDispatcher.js which extends it with a small amount of application-specific code.</p>

<p>TodoStore.js is our only store.  It provides all of the application logic and in-memory storage.  Based on EventEmitter from Node.js, it emits "change" events after responding to actions in the callback it registers with the dispatcher.</p>

<p>The bundle.js file is automatically genenerated by the build process, explained below.</p>

<h2>
<a id="user-content-running" class="anchor" href="#running" aria-hidden="true"><span class="octicon octicon-link"></span></a>Running</h2>

<p>You must have <a href="https://www.npmjs.org/">npm</a> installed on your computer.
From the root project directory run these commands from the command line:</p>

<pre><code>npm install
</code></pre>

<p>This will install all dependencies.</p>

<p>To build the project, first run this command:</p>

<pre><code>npm start
</code></pre>

<p>This will perform an initial build and start a watcher process that will update bundle.js with any changes you wish to make.  This watcher is based on <a href="http://browserify.org/">Browserify</a> and <a href="https://github.com/substack/watchify">Watchify</a>, and it transforms React's JSX syntax into standard JavaScript with <a href="https://github.com/andreypopp/reactify">Reactify</a>.</p>

<p>To run the app, spin up an HTTP server and visit http://localhost/.../todomvc-flux/.  Or simply open the index.html file in a browser.</p>

<h2>
<a id="user-content-credit" class="anchor" href="#credit" aria-hidden="true"><span class="octicon octicon-link"></span></a>Credit</h2>

<p>This TodoMVC application was created by <a href="https://www.facebook.com/bill.fisher.771">Bill Fisher</a>.  This README document was written by Bill Fisher and the principal creator of Flux, <a href="https://www.facebook.com/jing">Jing Chen</a>.</p>

<h2>
<a id="user-content-license" class="anchor" href="#license" aria-hidden="true"><span class="octicon octicon-link"></span></a>License</h2>

<p>Flux is BSD-licensed. We also provide an additional patent grant.</p>
</article>
  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.03189s from github-fe142-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-06533d99d3f0ca9115a0563dec4017e1bfad7758231e12b95a178cef2cdc3d4c.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github/index-8fcc27809ac43bcefa8b0389ae4f8e82f2c3a36ba74f3165d954e49031544c6d.js"></script>
      
      

  </body>
</html>

