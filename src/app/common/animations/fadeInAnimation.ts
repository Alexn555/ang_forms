// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
    trigger('myFadeInAnimation', [
        transition(
            ':enter', [
                style({transform: 'opacity(0.1)', opacity: 0}),
                animate('500ms', style({transform: 'opacity(1)', 'opacity': 1}))
            ]
        ),
        transition(
            ':leave', [
                style({transform: 'opacity(1)', 'opacity': 1}),
                animate('100ms', style({transform: 'opacity(0)', 'opacity': 0}))
            ]
        )],
);

export const fadeInAnimationLight =
        trigger('visibilityChanged', [
            state('true' , style({ opacity: 1, transform: 'scale(1)' })),
            state('false', style({ opacity: 0, transform: 'scale(0.0)' })),
            transition('1 => 0', animate('1500ms')),
            transition('0 => 1', animate('900ms'))
        ]
);