import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '../../../features/layout/top-bar/top-bar.component';

@Component({
  selector: 'app-lake',
  imports: [RouterOutlet,TopBarComponent],
  templateUrl: './lake.component.html',
  styleUrl: './lake.component.scss'
})
export class LakeComponent {

}
