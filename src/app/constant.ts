import { Option } from './type';

export const HEADER_MENU_OPTIONS: Option[] = [
  {
    label: 'HOME',
    value: '/'
  },
  {
    label: 'GAMES',
    value: '/games',
    children: [
      {
        label: 'GAME A',
        value: '/game-a'
      },
      {
        label: 'GAME B',
        value: '/game-b'
      }
    ]
  },
  {
    label: 'COMMUNITY',
    value: '/community'
  },
  {
    label: 'WHITEPAPER',
    value: '/whitepaper'
  },
  {
    label: 'CONNECT',
    value: '/connect'
  }
];

export const FOOTER_MENU_OPTIONS: Option[] = [
  {
    label: 'ABOUT RETROCRAFT',
    value: '',
    children: [
      {
        label: 'Games',
        value: ''
      },
      {
        label: 'Community',
        value: ''
      },
      {
        label: 'Whitepaper',
        value: ''
      }
    ]
  },
  {
    label: 'MORE INFOMATION',
    value: '',
    children: [
      {
        label: 'Term of use',
        value: ''
      },
      {
        label: 'Privacy Policy',
        value: ''
      }
    ]
  },
  {
    label: 'CONTACT US',
    value: '',
    children: [
      {
        label: 'Facebook',
        value: '',
        image: '/facebook.svg'
      },
      {
        label: 'Telegram',
        value: '',
        image: '/telegram.svg'
      }
    ]
  }
];

export const CURRENT_GAMES = [
  {
    image: 'https://www.youtube.com/embed/-OD7DFPRbIc?si=FtmtNZvVq3A6Oy0y',
    name: 'SUPER MARIO BROS 2',
    desc: 'With new games, new updates, and new ways to play, join one of the biggest communities in gaming and start crafting today!'
  },
  {
    image: 'https://www.youtube.com/embed/_ZEuArX6sCU?si=CeULbfwCwohDJkdo',
    name: 'OUTRUN',
    desc: 'With new games, new updates, and new ways to play, join one of the biggest communities in gaming and start crafting today!'
  },
  {
    image: 'https://www.youtube.com/embed/7VR8uPfJIMo?si=wA8cUkhhfeCuh_Kz',
    name: 'DONKEY KONG',
    desc: 'With new games, new updates, and new ways to play, join one of the biggest communities in gaming and start crafting today!'
  }
];

export const FEATURE_GAMES = [
  {
    image: '/feature-games/supper-mario-bros.png',
    name: 'SUPER MARIO BROS 2',
    desc: 'With new games, new updates, and new ways to play, join one of the biggest communities in gaming and start crafting today!'
  },
  {
    image: '/feature-games/out-run.png',
    name: 'OUTRUN',
    desc: 'With new games, new updates, and new ways to play, join one of the biggest communities in gaming and start crafting today!'
  },
  {
    image: '/feature-games/donkey-kong.png',
    name: 'DONKEY KONG',
    desc: 'With new games, new updates, and new ways to play, join one of the biggest communities in gaming and start crafting today!'
  }
];
