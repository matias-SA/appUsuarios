import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  id: number;
  email: string;
  gender: string;
  name: string;
  status: string;
  created: string;
  imgUrl: string =
    'https://i.pinimg.com/originals/fa/8e/2c/fa8e2cca57eafc94bba3fc49d8aec40c.jpg';
  loading: boolean = true;

  constructor(
    private aRouter: ActivatedRoute,
    private usuarioSvc: UsuariosService
  ) {
    this.id = +this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getUsuario();
  }
  getUsuario() {
    this.usuarioSvc.getUsuario(this.id).subscribe((data) => {
      this.email = data.data.email;
      this.gender = data.data.gender;
      this.name = data.data.name;
      this.status = data.data.status;
      this.created = data.data.created_at;
      this.loading = false;
    });
  }
}
