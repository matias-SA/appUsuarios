import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuarios',
  templateUrl: './card-usuarios.component.html',
  styleUrls: ['./card-usuarios.component.css'],
})
export class CardUsuariosComponent implements OnInit {
  @Input() user: any;
  imgUrl: string =
    'https://i.pinimg.com/originals/fa/8e/2c/fa8e2cca57eafc94bba3fc49d8aec40c.jpg';
  fisrtName: string;
  email: string;
  id: number;
  constructor() {}

  ngOnInit(): void {
    this.fisrtName = this.user.name;
    this.email = this.user.email;
    this.id = this.user.id;
  }
}
