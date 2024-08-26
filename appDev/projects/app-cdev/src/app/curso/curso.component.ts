import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
  imports: [],
  standalone: true,
})
export class CursoComponent {
  title = signal<string>('CursosDev @2024');
  cursos = signal<Array<string>>([
    'Angular',
    'Microfrontends',
    'React',
    'Vue',
    'NodeJS',
    'NestJS',
    'Docker',
    'Kubernetes',
  ]);

  sumando1 = signal<number>(20);
  sumando2 = signal<number>(45);
  resultado = computed<number>(() => this.getSum());

  resultList: Array<number> = [];

  userLoggedIn = signal<string>('Juan Perez is logged in');
  displayLogin = signal<boolean>(false);

  displayMessage = computed<string>(() => {
    return this.displayLogin()
      ? `Welcome back, ${this.userLoggedIn()}`
      : 'Please log in';
  });

  constructor() {
    effect(() => {
      sessionStorage.setItem('title', this.title());
    });

    setTimeout(() => {
      //const prevValue = this.cursos();
      this.cursos.set([...this.cursos(), 'Kotlin']);
      //this.cursos.update((currentValue) => [...currentValue, 'Kotlin']);
      this.displayLogin.set(true);

      this.title.set('CursosDev @2025');
    }, 2000);

    setTimeout(() => {
      //this.sumando2.set(100);
      this.sumando2.update((currentValue) => {
        console.log(currentValue);

        return currentValue * 2;
      });
      this.userLoggedIn.set('Maria Perez is logged in');
    }, 4000);

    effect(() => {
      this.resultList.push(this.resultado());
      console.log(this.resultList);
    });
  }

  getSum() {
    return this.sumando1() + this.sumando2();
  }

  getTitle() {
    return this.title();
  }

  getCourses() {
    return this.cursos();
  }
}
