import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { NOMEM } from 'dns';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Carta comida mexicana';

  categorias = [
    { nombre: 'Desayunos', platos: [
      { nombre:'Chilaquiles verdes con huevo y frijoles refritos.', precio: 10, descripcion: 'Comida mexicana tradicional.'}, 
      { nombre:'Huevos rancheros con salsa roja, arroz y tortillas.', precio: 15, descripcion: 'Comida mexicana tradicional.'},  
      { nombre:'Molletes con queso, frijoles y pico de gallo.', precio: 20, descripcion: 'Comida mexicana tradicional.'},
    ] },

    { nombre: 'Almuerzos', platos: [
      { nombre: 'Tacos de carne asada con guacamole y salsa verde.', precio: 25, descripcion: 'Comida mexicana tradicional.'},
      { nombre: 'Enchiladas suizas de pollo con arroz y frijoles charros.', precio: 30, descripcion: 'Comida mexicana tradicional.'},
      { nombre: 'Pozole rojo con tostadas y guarniciones.',precio: 35, descripcion: 'Comida mexicana tradicional.'},
    ] },

    { nombre: 'Bebidas', platos: [
      { nombre: 'Agua fresca de horchata.', precio: 10, descripcion: 'Comida mexicana tradicional.'},
      { nombre: 'Margarita tradicional con limón y sal.', precio: 15, descripcion: 'Comida mexicana tradicional.'},
      { nombre: 'Tequila con refresco de toronja (Paloma).' ,precio: 20, descripcion: 'Comida mexicana tradicional.'},
    ] },

    { nombre: 'Comidas', platos: [
      { nombre: 'Tostadas de ceviche de camarón.', precio: 25, descripcion: 'Comida mexicana tradicional.'},
      { nombre: 'Tamales de mole con crema y queso fresco.', precio: 30, descripcion: 'Comida mexicana tradicional.'},
      { nombre: 'Pescado a la veracruzana con arroz blanco.' ,precio: 35, descripcion: 'Comida mexicana tradicional.'},
    ] },

    { nombre: 'Entradas', platos: [
      { nombre:'Guacamole con totopos y salsa de chile habanero.', precio: 10, descripcion: 'Comida mexicana tradicional.'},
      { nombre:'Tostadas de tinga de pollo con aguacate.', precio: 15, descripcion: 'Comida mexicana tradicional.'},
      { nombre:'Sopa de tortilla con aguacate y queso fresco.',precio: 20, descripcion: 'Comida mexicana tradicional.'},
    ] },

    { nombre: 'Menu infantil', platos: [
      { nombre: 'Tacos de carne molida con queso y guacamole.', precio: 25, descripcion: 'Comida mexicana tradicional.'},
      { nombre: 'Quesadillas de pollo con crema y guacamole.', precio: 30, descripcion: 'Comida mexicana tradicional.'},
      { nombre: 'Tostadas de pollo con crema y queso fresco.' ,precio: 35, descripcion: 'Comida mexicana tradicional.'},
    ] }
];

recomendados: any[] = [];

    constructor() {
        this.seleccionarPlatosRecomendados();
    }

    seleccionarPlatosRecomendados() {
      const numRecomendados = 3; 
      this.recomendados = [];

      for (let i = 0; i < numRecomendados; i++) {
          const categoriaAleatoria = this.categorias[Math.floor(Math.random() * this.categorias.length)];
          const platoAleatorio = categoriaAleatoria.platos[Math.floor(Math.random() * categoriaAleatoria.platos.length)];
          this.recomendados.push(platoAleatorio);
      }
  }
}