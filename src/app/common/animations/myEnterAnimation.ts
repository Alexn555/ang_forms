// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';
//import { trigger, state, transition, style, animate } from '@angular/core';

export const myEnterAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
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
        )]
    );