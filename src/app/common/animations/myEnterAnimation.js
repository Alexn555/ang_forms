"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import the required animation functions from the angular animations module
var animations_1 = require("@angular/animations");
//import { trigger, state, transition, style, animate } from '@angular/core';
exports.myEnterAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
animations_1.trigger('myFadeInAnimation', [
    animations_1.transition(':enter', [
        animations_1.style({ transform: 'opacity(0.1)', opacity: 0 }),
        animations_1.animate('500ms', animations_1.style({ transform: 'opacity(1)', 'opacity': 1 }))
    ]),
    animations_1.transition(':leave', [
        animations_1.style({ transform: 'opacity(1)', 'opacity': 1 }),
        animations_1.animate('100ms', animations_1.style({ transform: 'opacity(0)', 'opacity': 0 }))
    ])
]);
//# sourceMappingURL=myEnterAnimation.js.map