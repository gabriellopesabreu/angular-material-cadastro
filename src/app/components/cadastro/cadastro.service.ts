import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cadastro } from './cadastro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  baseURL = 'http://localhost:3001/cadastros';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  create(cadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.baseURL, cadastro);
  }

  read(): Observable<Cadastro[]> {
    return this.http.get<Cadastro[]>(this.baseURL);
  }

  readById(id: string): Observable<Cadastro> {
    const url = `${this.baseURL}/${id}`
    return this.http.get<Cadastro>(url)
  }

  update(cadastro: Cadastro): Observable<Cadastro> {
    const url = `${this.baseURL}/${cadastro.id}`
    return this.http.put<Cadastro>(url, cadastro)
  }

  delete(id: string): Observable<Cadastro> {
    const url = `${this.baseURL}/${id}`
    return this.http.delete<Cadastro>(url)
  }
}
