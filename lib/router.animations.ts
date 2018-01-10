import { trigger, state, animate, style, transition, AnimationTriggerMetadata } from '@angular/core';
/**
 * Animates element to move and fade in on enter and move and fade out on leave
 * 
 * @export
 * @returns 
 */
export function moveIn(): AnimationTriggerMetadata {
    return trigger('moveIn', [
        state('void', style({ position: 'fixed', width: '100%' })),
        state('*', style({ position: 'fixed', width: '100%' })),
        transition(':enter', [
            style({ opacity: '0', transform: 'translateX(100px)' }),
            animate('.6s ease-in-out', style({ opacity: '1', transform: 'translateX(0)' }))
        ]),
        transition(':leave', [
            style({ opacity: '1', transform: 'translateX(0)' }),
            animate('.3s ease-in-out', style({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
/**
 * Animates element to fall and fade in on enter and fall and fade out on leave
 * 
 * @export
 * @returns 
 */
export function fallIn(): AnimationTriggerMetadata {
    return trigger('fallIn', [
        transition(':enter', [
            style({ opacity: '0', transform: 'translateY(40px)' }),
            animate('.4s .2s ease-in-out', style({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        transition(':leave', [
            style({ opacity: '1', transform: 'translateX(0)' }),
            animate('.3s ease-in-out', style({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
/**
 * Animates element to fade in on enter and fade out on leave
 * 
 * @export
 * @returns {AnimationTriggerMetadata} 
 */
export function fadeInOut(): AnimationTriggerMetadata {
    return trigger('fadeInOut', [
        transition(':enter', [
            style({ opacity: '0' }),
            animate('.7s ease', style({ opacity: '1' }))
        ]),
        transition(':leave', [
            style({ opacity: '1' }),
            animate('.7s ease', style({ opacity: '0' }))
        ]),
        transition('active => inactive', [
            animate('.7s ease', style({ opacity: '1' }))
        ]),
        transition('inactive => active', [
            animate('.7s ease', style({ opacity: '0' }))
        ])
    ]);
}
/**
 * Animates element to grow on enter and shrink on leave
 * 
 * @export
 * @returns 
 */
export function growShrink(): AnimationTriggerMetadata {
    return trigger('growShrink', [
        transition(':enter', [
            style({ width: '0%' }),
            animate('.5s ease', style({ width: '100%' }))
        ]),
        transition(':leave', [
            style({ width: '100%' }),
            animate('.5s ease', style({ width: '0%' }))
        ])
    ]);
}