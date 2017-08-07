import * as _ from 'lodash';

export function getRandNumber(min: number, max: number) :number {
    console.log('lodash version:', _.VERSION);
    return _.random(min, max);
}
