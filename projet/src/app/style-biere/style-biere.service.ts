import { Injectable } from '@angular/core';
import { styleBiere } from './style-biere.component';
import { STYLES } from './mock-styles'

@Injectable()
export class StyleBiereService {
    getStyles(): Promise<[styleBiere]>{
        return Promise.resolve(STYLES);
    }

}
