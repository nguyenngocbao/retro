import { CrossbowIcon } from './assets/icons/Crossbow';
import { SwordIcon } from './assets/icons/Sword';
import { Option } from './type';

export const HEADER_MENU_OPTIONS: Option[] = [
  {
    label: 'HOME',
    value: '/',
    blank: false
  },
  {
    label: 'HOW TO PLAY',
    value:
      'https://whitepaper.retrocraft.io/how-to-start-playing-retrocraft/how-to-download-and-play-retrocraft',
    blank: false
  },
  {
    label: 'WHITEPAPER',
    value: 'https://whitepaper.retrocraft.io',
    blank: true
  },
  {
    label: 'BUY $RETRO',
    value:
      'https://pancakeswap.finance/swap?outputCurrency=0xD6eF2222Cc850fDc7Ee30F2B2D5384e0167700A3&chainId=56',
    blank: true
  }
];

export const FOOTER_MENU_OPTIONS: Option[] = [
  {
    label: 'ABOUT RETROCRAFT',
    value: '',
    children: [
      {
        label: 'How to Play',
        value:
          'https://whitepaper.retrocraft.io/how-to-start-playing-retrocraft/how-to-download-and-play-retrocraft'
      },
      {
        label: 'Whitepaper',
        value: 'https://whitepaper.retrocraft.io'
      }
    ]
  },
  {
    label: 'MORE INFOMATION',
    value: '',
    children: [
      {
        label: 'Term of use',
        value: '/term-of-use'
      },
      {
        label: 'Privacy Policy',
        value: '/privacy-policy'
      }
    ]
  },
  {
    label: 'CONTACT US',
    value: '',
    children: [
      {
        label: '',
        value: 'https://twitter.com/RetroCraftio',
        image: '/x.svg'
      },
      {
        label: 'Group',
        value: 'https://t.me/RetroCraftglobal',
        image: '/telegram.svg'
      },
      {
        label: 'Channel',
        value: 'https://t.me/retrocraftio',
        image: '/telegram.svg'
      },
      {
        label: '',
        value: 'https://www.youtube.com/@RetroCraft-global',
        image: '/youtube.svg'
      },
      {
        label: '',
        value: 'mailto:team@retrocraft.io',
        image: '/gmail.svg'
      }
    ]
  }
];

export const WELCOME_BANNER = {
  games: [
    {
      name: 'CAR RACING',
      icon: CrossbowIcon,
      image: '/character1.png',
      description:
        'Revisit the dreamy land of Subcon as Mario or Luigi - use unique abilities, battle enemies and explore in this faithfully recreated 8-bit classic.',
      backgroundImage: ['/welcome-banner-bg.png', '/welcome-banner-bg-pc.png']
    },
    {
      name: 'TANK WAR',
      icon: SwordIcon,
      image: '/character2.png',
      description:
        'Battle with pixelated tanks in destructible terrain - take aim, fire missiles, and blow up opponents in this reimagined retro arcade tank shooter.',
      backgroundImage: ['/welcome-banner-bg2.png', '/welcome-banner-bg2-pc.png']
    }
  ],
  horizontalScrollImages: [
    {
      image: '/scroll-bg1.png',
      description: 'desc'
    },
    {
      image: '/scroll-bg2.png',
      description: 'desc'
    },
    {
      image: '/scroll-bg3.png',
      description: 'desc'
    },
    {
      image: '/scroll-bg4.png',
      description: 'desc'
    },
    {
      image: '/scroll-bg5.png',
      description: 'desc'
    }
  ]
};

export const GAME_EXPORES = {
  TANK_WAR: {
    name: 'TANK WAR',
    icon: SwordIcon,
    image: '/game-cd1.png',
    description:
      "Battle through 90s tank warfare fused with Minecraft chaos! Fight, conquer, and skill your way to epic rewards. It's not just a game; it's a relentless quest for domination and glory!",
    levelToPlay: 'Battle',
    levelToPlayContent: 'To Earn',
    buttonLink: '',
    buttonName: 'Battle to Earn'
  },
  CAR_RACING: {
    name: 'CAR RACING',
    icon: CrossbowIcon,
    image: '/game-cd2.webp',
    description:
      "Race to earn in RetroCraft! Customize, compete, and conquer on pixel-art tracks. It's not just a race; it's a competitive thrill with rewards at every turn!",
    levelToPlay: 'RACE',
    levelToPlayContent: 'To Earn',
    buttonLink: '',
    buttonName: 'RACE TO EARN'
  },
  SKILLFUL_SURVIVOR: {
    name: 'SKILLFUL SURVIVOR',
    icon: SwordIcon,
    image: '/game-cd3.png',
    description:
      'Survive Pac-Man mazes, showcase skills, and stack $Retro tokens! Outlast challenges, level up — become the ultimate survivor!',
    levelToPlay: 'SKILL',
    levelToPlayContent: 'To Earn',
    buttonLink: '',
    buttonName: 'SKILL TO EARN'
  }
};

export const GAME_OVERVIEW = {
  title: 'THE NEW BEGINNING',
  description: `Immerse yourself in the ultimate retro 90s gaming showdown with RetroCraft! Battle with friends or dive into free-for-all chaos, conquering tank battles, racing, and showcasing skills for legendary $Retro tokens. Relive the magic of classic 90s games, crush challenges, and embark on a pulse-pounding journey to retro glory!`
};

export const FEATURE_GAMES = {
  title: 'FEATURED GAMES',
  description: `Reimagined pixel-perfect classics. Faithfully remastered arcade favorites with smooth modern controls. Supercharged blockchain versions of iconic retro hits - now with new challenges to master and rewards to earn.`,
  games: [
    {
      image: '/skillfull-survivor-bg.png',
      name: 'SKILLFUL SURVIVOR',
      shortDesc: 'desc',
      learnMore:
        'https://whitepaper.retrocraft.io/what-is-retrocraft-games/game-world'
    },
    {
      image: '/car-racing-bg.webp',
      name: 'CAR RACING',
      shortDesc: 'desc',
      learnMore:
        'https://whitepaper.retrocraft.io/what-is-retrocraft-games/game-world'
    },
    {
      image: '/tank-war-bg.png',
      name: 'TANK WAR',
      shortDesc: 'desc',
      learnMore:
        'https://whitepaper.retrocraft.io/what-is-retrocraft-games/game-world'
    },
    {
      image: '/supper-mario-bros-bg.png',
      name: 'SUPER MARIO BROS',
      shortDesc: 'desc',
      learnMore:
        'https://whitepaper.retrocraft.io/what-is-retrocraft-games/game-world'
    }
  ]
};

export const PARTNERSHIP = {
  title: 'PARTNERSHIP',
  members: [
    // {
    //   name: '',
    //   logo: '/partnerships/tcvn.png'
    // },
    {
      name: '',
      logo: '/partnerships/arena_game.png',
      link: 'https://arenavs.com/'
    },
    {
      name: '',
      logo: '/partnerships/gem_insights.png',
      link: 'https://geminsights.substack.com'
    },
    {
      name: '',
      logo: '/partnerships/xplus.png',
      link: 'https://xplus.com'
    },
    {
      name: '',
      link: 'https://www.xland.vip/',
      logo: '/partnerships/xland.png'
    },
    {
      name: '',
      logo: '/partnerships/r.png',
      link: 'https://payrue.com'
    },
    {
      name: '',
      logo: '/partnerships/dpt.png',
      link: 'https://app.diviner.finance'
    },
    {
      name: '',
      logo: '/partnerships/trikon.png',
      link: 'https://trikon.io'
    },
    {
      name: '',
      logo: '/partnerships/vc.png',
      link: 'https://www.vcgamers.com/'
    },
    {
      name: '',
      logo: '/partnerships/hikemove.png',
      link: 'https://hikemove.com'
    },
    {
      name: '',
      logo: '/partnerships/brc.png',
      link: 'https://brclife.com'
    },
    {
      name: '',
      logo: '/partnerships/auto.png',
      link: 'https://twitter.com/Autosultan_team'
    },
    {
      name: '',
      logo: '/partnerships/vertex.png',
      link: 'https://vertexprotocol.com/'
    },
    {
      name: '',
      logo: '/partnerships/AGD.png',
      link: 'https://avisagamesguild.com/'
    },
    {
      name: '',
      logo: '/partnerships/bitmetis.png',
      link: 'https://bitmetis.io'
    }
  ]
};

export const POWEDBY = {
  title: 'POWERED BY',
  members: [
    {
      name: '',
      link: 'https://twitter.com/chainlink/status/1733933898470396267?s=46&t=F52SV87pKOBZGOOd9wkQSQ',
      logo: '/powedof/chainlink.png'
    },
    {
      name: '',
      link: 'https://www.bnbchain.org/',
      logo: '/powedof/bnbchain.png'
    },
    {
      name: '',
      link: 'https://myria.com',
      logo: '/powedof/myria.png'
    }
  ]
};
export const MENTIONEDBY = {
  title: 'MENTIONED BY',
  members: [
    {
      name: '',
      link: 'https://finance.yahoo.com/news/retrocraft-emerges-ultimate-retro-gaming-180000978.html?guccounter=1',
      logo: '/mentionedby/yahoo.png'
    },
    {
      name: '',
      link: 'https://blockchainhub.kr/bbs/board.php?bo_table=promotion&wr_id=86904',
      logo: '/mentionedby/blockchainhub.png'
    },
    {
      name: '',
      link: 'https://www.ddengle.com/index.php?mid=ann&document_srl=19529858',
      logo: '/mentionedby/ddengle.png'
    },
    {
      name: '',
      link: 'https://cobak.co.kr/community/145/post/1101474',
      logo: '/mentionedby/cobak.png'
    }
  ]
};

export const JOIN_THE_WORLD = {
  title: 'JOIN THE WORLD OF RETROCRAFT',
  description: `Step into the ultimate retro gaming. 
  Play through reimagined classics, battle to win, craft unique worlds, trade NFTs and earn as you game.`,
  joinNowLink:
    'https://whitepaper.retrocraft.io/how-to-start-playing-retrocraft/how-to-download-and-play-retrocraft'
};
