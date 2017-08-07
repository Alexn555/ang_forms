import { Injectable } from '@angular/core';
import { getRandNumber } from '../../common/util/index';

import { Hero } from './hero';
import { HEROES } from '../../server/heroes';


@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    // See the "Take it slow" appendix
    getHeroesHttp(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), getRandNumber(1, 1.5) * 1000);
        });
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id))
            .catch(this.handleError);
    }

    remove(id: number): boolean{
        for(let i = HEROES.length - 1; i >= 0; i--) {
            if(HEROES[i].id === id) {
                HEROES.splice(i, 1);
                return true;
            }
        }
        this.handleError('err', 'Error finding id delete movement');
        return false
    }

    handleError(code: string = 'err', msg: string = 'Common error'){
        if(code === 'warn'){
           return console.warn(msg);
        }
        console.error(msg);
    }


}
