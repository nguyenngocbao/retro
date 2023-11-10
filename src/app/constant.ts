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
      'https://whitepaper.retrocraft.io/retrocaft-tokenomics/token-information',
    blank: true
  }
];

export const FOOTER_MENU_OPTIONS: Option[] = [
  {
    label: 'ABOUT RETROCRAFT',
    value: '',
    children: [
      {
        label: 'Games',
        value: '/#game-expore'
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
        label: 'X',
        value: 'https://twitter.com/RetroCraftio',
        image: '/x.svg'
      },
      {
        label: 'Telegram',
        value: 'https://t.me/retrocraftio',
        image: '/telegram.svg'
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
  OUT_RUN: {
    name: 'TANK WAR',
    icon: SwordIcon,
    image: '/game-cd2.png',
    description:
      'Experience 90s tank warfare meets Minecraft battles! Destroy enemies, earn money, and dominate the battlefield for thrilling rewards!',
    levelToPlay: 5,
    levelToPlayContent: 'Mode to battle',
    buttonLink: '',
    buttonName: 'BATTlE TO EARN'
  },
  DONKEY_KONG: {
    name: 'CAR RACING',
    icon: CrossbowIcon,
    image: '/game-cd1.png',
    description:
      'Experience nostalgic pixel-art arcade racing in RetroCraft - customize vintage vehicles and compete against friends on retro-styled tracks.',
    levelToPlay: 70,
    levelToPlayContent: 'Level to race',
    buttonLink: '',
    buttonName: 'RACE TO EARN'
  },
  OUT_RUN_VER_2: {
    name: 'MARIO CART',
    icon: SwordIcon,
    image: '/game-cd3.png',
    description:
      'Experience nostalgic pixel-art arcade racing in RetroCraft - customize vintage vehicles and compete against friends on retro-styled tracks.',
    levelToPlay: 20,
    levelToPlayContent: 'Level to play',
    buttonLink: '',
    buttonName: 'SKILL TO EARN'
  }
};

export const GAME_OVERVIEW = {
  title: 'THE NEW BEGINNING',
  description: `RetroCraft is a unique nostalgic blockchain game developed by veteran indie studios,
   recreating iconic retro titles like Super Mario, Car Racing and Tank War in pixel-perfect detail.
  Players can quest through faithfully remastered classics, craft voxel worlds, compete in battles and minigames to earn $Retro tokens. The game also features survival mode, rare NFT trading marketplace, and overall aims to deliver the ultimate retro gaming experience coupled with real play-to-earn rewards.`
};

export const FEATURE_GAMES = {
  title: 'FEATURED GAMES',
  description: `Reimagined pixel-perfect classics. Faithfully remastered arcade favorites with smooth modern controls. Supercharged blockchain versions of iconic retro hits - now with new challenges to master and rewards to earn.`,
  games: [
    {
      image: '/supper-mario-bros-2-bg.png',
      name: 'MARIO BROS 2',
      shortDesc: 'desc',
      learnMore:
        'https://whitepaper.retrocraft.io/what-is-retrocraft-games/game-world'
    },
    {
      image: '/out-run-bg.png',
      name: 'CAR RACING',
      shortDesc: 'desc',
      learnMore:
        'https://whitepaper.retrocraft.io/what-is-retrocraft-games/game-world'
    },
    {
      image: '/donkey-kong-bg.png',
      name: 'TANK WAR',
      shortDesc: 'desc',
      learnMore:
        'https://whitepaper.retrocraft.io/what-is-retrocraft-games/game-world'
    },
    {
      image: '/supper-mario-bros-v2-bg.png',
      name: 'CAR RACING VER 2.0',
      shortDesc: 'desc',
      learnMore:
        'https://whitepaper.retrocraft.io/what-is-retrocraft-games/game-world'
    }
  ]
};

export const JOIN_THE_WORLD = {
  title: 'JOIN THE WOLRD OF RETROCRAFT',
  description: `Step into the ultimate retro gaming. 
  Play through reimagined classics, battle to win, craft unique worlds, trade NFTs and earn as you game.`,
  joinNowLink:
    'https://whitepaper.retrocraft.io/how-to-start-playing-retrocraft/how-to-download-and-play-retrocraft'
};
