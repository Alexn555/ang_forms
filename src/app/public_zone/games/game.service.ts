import { Injectable } from '@angular/core';
import { getRandNumber } from '../../common/util/index';

import { Game } from './game';
import { GAMES } from '../../server/games';


@Injectable()
export class GameService {
    getGames(): Promise<Game[]> {
        return Promise.resolve(GAMES);
    }

    // See the "Take it slow" appendix
    getGamesHttp(): Promise<Game[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getGames()), getRandNumber(0.3, 0.8) * 1000);
        });
    }

    getHero(id: number): Promise<Game> {
        return this.getGames()
            .then(games => games.find(game => game.id === id));
    }

}
