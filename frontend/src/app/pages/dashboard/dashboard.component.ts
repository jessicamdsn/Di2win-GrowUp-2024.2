import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { GraficosComponent } from '../../sections/graficos/graficos.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BtnDownloadComponent } from '../../components/btn-download/btn-download.component';
//teste
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavbarComponent,
    GraficosComponent,
    RouterLink,
    BtnDownloadComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500)
      ]),
      transition(':leave', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class DashboardComponent {
  mostrarConteudo: boolean = true;

  toggleConteudo() {
    this.mostrarConteudo = !this.mostrarConteudo;
  }
}
