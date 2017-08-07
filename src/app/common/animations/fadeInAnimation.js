"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import the required animation functions from the angular animations module
var animations_1 = require("@angular/animations");
exports.fadeInAnimation = animations_1.trigger('myFadeInAnimation', [
    animations_1.transition(':enter', [
        animations_1.style({ transform: 'opacity(0.1)', opacity: 0 }),
        animations_1.animate('500ms', animations_1.style({ transform: 'opacity(1)', 'opacity': 1 }))
    ]),
    animations_1.transition(':leave', [
        animations_1.style({ transform: 'opacity(1)', 'opacity': 1 }),
        animations_1.animate('100ms', animations_1.style({ transform: 'opacity(0)', 'opacity': 0 }))
    ])
]);
exports.fadeInAnimationLight = animations_1.trigger('visibilityChanged', [
    animations_1.state('true', animations_1.style({ opacity: 1, transform: 'scale(1)' })),
    animations_1.state('false', animations_1.style({ opacity: 0, transform: 'scale(0.0)' })),
    animations_1.transition('1 => 0', animations_1.animate('1500ms')),
    animations_1.transition('0 => 1', animations_1.animate('900ms'))
]);
//# sourceMappingURL=fadeInAnimation.js.map