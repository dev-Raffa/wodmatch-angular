import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './common/services/app/app.service';
import {FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { WordsCombination } from './common/interfaces/words- combination/words-combination.interface';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,  
    MatIconModule, 
    MatCardModule,
    ReactiveFormsModule, 
    NgFor,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[AppService]
})
export class AppComponent {
  firstWord = new FormControl('', [Validators.minLength(6), Validators.maxLength(6)])
  combinations: WordsCombination[] = []
 

  constructor(private service: AppService){}
  
  buttonOnclick(){
    if(this.firstWord.value && this.firstWord.value.length > 5){
      try {
        this.combinations = this.service.getCombinations(this.firstWord.value)
      } catch (error: any) {
        if(error.message = 'Word not found in dictionary'){
          this.firstWord.setErrors({
            notfound: true
          })
        }
      }
    }
  }
}
