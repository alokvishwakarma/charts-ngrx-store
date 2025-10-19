import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CharterActions = createActionGroup({
  source: 'Charter',
  events: {
    'SetRange30 Charter': emptyProps(),
    'SetRange60 Charter': emptyProps(),
    'SetRange90 Charter': emptyProps(),
    'Store Charter': props<{ val: number}>(),
  },
});
