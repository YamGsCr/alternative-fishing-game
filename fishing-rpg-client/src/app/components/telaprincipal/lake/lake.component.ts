import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '../../../features/layout/top-bar/top-bar.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-lake',
  imports: [RouterOutlet,TopBarComponent,NgOptimizedImage],
  templateUrl: './lake.component.html',
  styleUrl: './lake.component.scss'
})
export class LakeComponent {

}
