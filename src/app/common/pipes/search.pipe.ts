import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'searchPipe',
})
export class SearchPipe implements PipeTransform {
    public transform(value: any, key: string, term: string) {
        if( typeof value === 'undefined') { return false; }
        return value.filter((item: any) => {
            if (item.hasOwnProperty(key)) {
                if (term) {
                    let regExp = new RegExp('\\b' + term, 'gi');
                    item[key].replace(regExp, (match: any) => `<b>${match}</b>`);
                    return regExp.test(item[key]);
                } else {
                    return true;
                }
            } else {
                return false;
            }
        });
    }
}

