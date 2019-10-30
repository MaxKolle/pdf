// flow

import {Types} from '../../../utils/alert';

const CONFIGS = {
  [Types.ERROR_SERVER_CONNECTION]: {
    middleText:
      'Seems like that we had some trouble with your connection with the Server.',
    bottomText: 'Try again later.',
    iconName: 'server-network-off',
    topText: 'Oops...',
  },

  [Types.INITIAL_SEARCH]: {
    middleText: 'Search for Restaurants that fits with what do you want eat!',
    bottomText: '',
    iconName: 'room-service',
    topText: 'Are you hungry?!',
  },

  [Types.SEARCH_EMPTY]: {
    middleText: "There's no Restaurants that matches with your search.",
    bottomText: 'How about looking for something else?',
    iconName: 'food-off',
    topText: 'Nothing here...',
  },

  [Types.BORING_CITY]: {
    middleText: "Unfortunately, there's nothing happening in your City today.",
    bottomText: 'More luck tomorrow!',
    iconName: 'city',
    topText: 'So Boring...',
  },

  [Types.YOU_MIGHT_LIKE_EMPTY]: {
    middleText:
      "Seems like that we don't have nothing that matches with your taste.",
    bottomText: 'Sorry for that.',
    iconName: 'food-off',
    topText: 'Wow...',
  },

  [Types.POPULAR_EMPTY]: {
    middleText: 'Seems like that everyone is eating at home today.',
    bottomText: 'Sorry for that.',
    iconName: 'food-off',
    topText: 'What the H...?!',
  },

  [Types.HOME_EMPTY]: {
    middleText:
      "This is weird...\n\nSeems like that we don't have nothing to offer you today.",
    bottomText: 'Sorry for that.',
    iconName: 'alert-decagram',
    topText: "I'm empty :(",
  },
};

export const getAlertConfig = (type: string): Object => CONFIGS[type];
