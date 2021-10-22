// https://github.com/hasura/gatsby-gitbook-starter

const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://stampang.github.io/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://stampang.com/main/assets/images/common/bg_logo.png',
    logoLink: '/',
    title:
      "가이드",
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://blog.naver.com/spangman" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://stampang.com/main/assets/images/common/bg_sns_ico02.png' alt={'Naver Blog'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://www.facebook.com/makestampang" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://stampang.com/main/assets/images/common/bg_sns_ico01.png' alt={'Facebook'}/>
		      </div>
		    </a>
		  </li>
      <li>
      <a href="https://www.instagram.com/stampang/" target="_blank" rel="noopener">
        <div class="discordBtn">
          <img src='https://stampang.com/main/assets/images/common/bg_sns_ico03.png' alt={'Instagram'}/>
        </div>
      </a>
    </li>      
      `,
    links: [{ text: '🏠스탬프팡', link: 'https://stampang.com' }],
    search: {
      enabled: true,
      indexName: 'Stampang',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/', // add trailing slash if enabled above
      // '/wpos'
      // '/codeblock',
    ],
    collapsedNav: [
      // '/wpos'
    ],
    links: [{ text: '🏠스탬프팡', link: 'https://stampang.com' },
    { text: '🏠스탬프팡 사장님', link: 'https://ceo.stampang.com' },
    { text: '🌐가맹점 관리자', link: 'https://stampang.com/store2/login' },
    
  ],
    frontline: false,
    ignoreIndex: true,
    title:
      "<div class='greenCircle'></div>목차",
  },
  siteMetadata: {
    title: '스탬프팡 가이드',
    description: '스탬프팡 가이드',
    ogImage: null,
    docsLocation: '',
    favicon: 'https://stampang.com/main/images/favicon.ico',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/test',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
