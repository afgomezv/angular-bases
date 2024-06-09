import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './page/main-page.component';
import { ListdbzComponent } from './components/listdbz/listdbz.component';
import { AddCharactersComponent } from './components/addCharacters/addCharacters.component';

@NgModule({
  declarations: [MainPageComponent, ListdbzComponent, AddCharactersComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
