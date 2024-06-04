import { Injectable } from '@angular/core';
import { words } from '../../const/words.const';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private wordList: Array<string> = words.split(',');

    public wordExists(word: string): Boolean{   
        return this.wordList.includes(word)
    }

    public getWords(piece: string){
        return this.wordList.filter((word)=> word.startsWith(piece))
    }
}
