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
    label: 'GAMES',
    value: '/#game-expore',
    blank: false
  },
  {
    label: 'WHITEPAPER',
    value: 'https://whitepaper.retrocraft.io',
    blank: true
  },
  {
    label: 'BUY $RETRO',
    value: 'https://momo.vn/',
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
        label: 'Community',
        value: 'https://github.com/nguyenngocbao/retro'
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
        value: 'https://twitter.com/?lang=vi',
        image: '/x.svg'
      },
      {
        label: 'Telegram',
        value: 'https://web.telegram.org/',
        image: '/telegram.svg'
      }
    ]
  }
];

export const WELCOME_BANNER = {
  games: [
    {
      name: 'SUPER MARIO BROS 2',
      icon: CrossbowIcon,
      image: '/character1.png',
      description:
        'Over the last two weeks, how often have you been bothered by the following problems? feel Exhausted all the time base on the collecting date of users',
      backgroundImage: ['/welcome-banner-bg.png', '/welcome-banner-bg-pc.png']
    },
    {
      name: 'OUT RUN',
      icon: SwordIcon,
      image: '/character2.png',
      description:
        'Over the last two weeks, how often have you been bothered by the following problems? feel Exhausted all the time base on the collecting date of users',
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
  SUPPER_MARIO_BROS_2: {
    name: 'SUPER MARIO BROS 2',
    icon: CrossbowIcon,
    image: '/game-cd1.png',
    description:
      'Over the last two weeks, how often have you been bothered by the following problems? feel Exhausted all the time base on the collecting date of users',
    levelToPlay: 100,
    bossToBeat: 20,
    buttonLink: '/',
    buttonName: 'PLAY NOW'
  },
  OUT_RUN: {
    name: 'OUT RUN',
    icon: SwordIcon,
    image: '/game-cd2.png',
    description:
      'Over the last two weeks, how often have you been bothered by the following problems? feel Exhausted all the time base on the collecting date of users',
    levelToPlay: 100,
    bossToBeat: 20,
    buttonLink: '/',
    buttonName: 'PLAY NOW'
  },
  DONKEY_KONG: {
    name: 'DONKEY KONG',
    icon: CrossbowIcon,
    image: '/game-cd3.png',
    description:
      'Over the last two weeks, how often have you been bothered by the following problems? feel Exhausted all the time base on the collecting date of users',
    levelToPlay: 100,
    bossToBeat: 20,
    buttonLink: '/',
    buttonName: 'PLAY NOW'
  },
  OUT_RUN_VER_2: {
    name: 'OUT RUN VER 2.0',
    icon: SwordIcon,
    image: '/game-cd1.png',
    description:
      'Over the last two weeks, how often have you been bothered by the following problems? feel Exhausted all the time base on the collecting date of users',
    levelToPlay: 100,
    bossToBeat: 20,
    buttonLink: '/',
    buttonName: 'PLAY NOW'
  }
};

export const GAME_OVERVIEW = {
  title: 'THE NEW BEGINNING',
  description: `Kratos is a father again. As mentor and protector to Atreus, a son
  determined to earn his respect, he is forced to deal with and control
  the rage that has long defined him while out in a very dangerous world
  with his son. His vengeance against the Gods of Olympus behind him,
  Kratos now lives in the realm of Norse deities and monsters.`
};

export const FEATURE_GAMES = {
  title: 'FEATURED GAMES',
  description: `Immerse yourself in the Cyberpunk universe, from the original
  storyline of Cyberpunk 2077 and its gripping spy-thriller expansion
  Phantom Liberty to the award-winning anime series Cyberpunk:
  Edgerunners — there are countless stories to discover in the deadly
  megalopolis of Night City.`,
  games: [
    {
      image: '/supper-mario-bros-2-bg.png',
      name: 'SUPER MARIO BROS 2',
      shortDesc: 'desc',
      learnMore:
        'https://whitepaper.retrocraft.io/what-is-retrocraft-games/overview'
    },
    {
      image: '/out-run-bg.png',
      name: 'OUT RUN',
      shortDesc: 'desc',
      learnMore:
        'https://whitepaper.retrocraft.io/what-is-retrocraft-games/overview'
    },
    {
      image: '/donkey-kong-bg.png',
      name: 'DONKEY KONG',
      shortDesc: 'desc',
      learnMore:
        'https://whitepaper.retrocraft.io/what-is-retrocraft-games/overview'
    },
    {
      image: '/supper-mario-bros-v2-bg.png',
      name: 'OUT RUN VER 2.0',
      shortDesc: 'desc',
      learnMore:
        'https://whitepaper.retrocraft.io/what-is-retrocraft-games/overview'
    }
  ]
};

export const JOIN_THE_WORLD = {
  title: 'JOIN THE WOLRD OF RETROCRAFT',
  description: `With new games, new updates, and new ways to play, join one of the
  biggest communities in gaming and start crafting today!`,
  joinNowLink:
    'https://whitepaper.retrocraft.io/what-is-retrocraft-games/overview'
};
