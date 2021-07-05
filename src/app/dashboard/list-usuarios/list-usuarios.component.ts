import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css'],
})
export class ListUsuariosComponent implements OnInit {
  listUsuarios: any[] = [];
  loading: boolean = true;
  constructor(private usuariosSvc: UsuariosService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }
  getUsuarios() {
    this.usuariosSvc.getUsuarios().subscribe((data) => {
      console.log(data);
      this.listUsuarios = data.data;
      this.loading = false;
    });
  }
}
