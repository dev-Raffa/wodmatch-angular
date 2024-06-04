import { Injectable } from '@angular/core';
import { BookService } from '../book/book.service';
import { WordsCombination } from '../../interfaces/words- combination/words-combination.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private Book: BookService) {}

  public getCombinations (word: string): WordsCombination[]{
    if(!this.Book.wordExists(word)){
      throw new Error('Word not found in dictionary')
    }
    const wordsCombinations: WordsCombination[] = []
    const secondsWordsList = this.Book.getWords(word.substring(2,4))

    secondsWordsList.forEach((secondWord)=>{
      const thirdWordPiece: string = `${word.substring(4,6)}${secondWord.substring(4,6)}`
      const thirdsWordsList = this.Book.getWords(thirdWordPiece)

      thirdsWordsList.forEach((thirdWord)=>{
        wordsCombinations.push({
          firstWord: word,
          secondWord: secondWord,
          thirdWord: thirdWord
        })
      })
    })

    return wordsCombinations;
  }
}
