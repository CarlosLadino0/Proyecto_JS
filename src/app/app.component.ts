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

  categorias = [{
    nombre: 'Desayunos',
    platos: [
      { nombre: 'Chilaquiles verdes con huevo y frijoles refritos.', precio: 10, descripcion: 'Comida mexicana tradicional.', image: 'https://cocina-casera.com/mx/wp-content/uploads/2017/11/chilauiles-verdes-con-huevos.jpg' },
      { nombre: 'Huevos rancheros c|on salsa roja, arroz y tortillas.', precio: 15, descripcion: 'Comida mexicana tradicional.', image: 'https://cdn.elcocinerocasero.com/imagen/paso-receta/1000/2017-12-26-00-18-33/huevos-rancheros-mexicanos-paso-6.jpeg' },
      { nombre: 'Molletes con queso, frijoles y pico de gallo.', precio: 20, descripcion: 'Comida mexicana tradicional.', image: 'https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/695857c6830e854209ac056a183fc09c.png' },
    ]
  },

  {
    nombre: 'Almuerzos',
    platos: [
      { nombre: 'Tacos de carne asada con guacamole y salsa verde.', precio: 25, descripcion: 'Comida mexicana tradicional.', image: 'https://i.pinimg.com/564x/49/02/1c/49021c015908493f61048969ad381357.jpg' },
      { nombre: 'Enchiladas suizas de pollo con arroz y frijoles charros.', precio: 30, descripcion: 'Comida mexicana tradicional.', image: 'https://thumbs.dreamstime.com/b/enchiladas-verdes-salsa-verde-arroz-y-frijoles-una-cena-mexicana-de-tres-con-refritos-mexicano-168117545.jpg' },
      { nombre: 'Pozole rojo con tostadas y guarniciones.', precio: 35, descripcion: 'Comida mexicana tradicional.', image: 'https://www.sierralagoresort.com/blog/wp-content/uploads/2022/09/Co%CC%81mo-Hacer-Pozole-Rojo-1140x694.jpg' },
    ]
  },

  {
    nombre: 'Bebidas',
    platos: [
      { nombre: 'Agua fresca de horchata.', precio: 10, descripcion: 'Comida mexicana tradicional.', image: 'https://cdn7.kiwilimon.com/recetaimagen/31780/36562.jpg' },
      { nombre: 'Margarita tradicional con limón y sal.', precio: 15, descripcion: 'Comida mexicana tradicional.', image: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/2023-03/margarita%C2%A9iStock.jpg' },
      { nombre: 'Tequila con refresco de toronja (Paloma).', precio: 20, descripcion: 'Comida mexicana tradicional.', image: 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/2023-06/ES%20SEO%20Paloma%20cocktail.jpg' },
    ]
  },

  {
    nombre: 'Comidas',
    platos: [
      { nombre: 'Tostadas de ceviche de camarón.', precio: 25, descripcion: 'Comida mexicana tradicional.', image: 'https://guerrerotortillas.com/wp-content/uploads/2021/04/SIDE-1_Avocado-Shrimp-Ceviche-Tostadas-1.jpg' },
      { nombre: 'Tamales de mole con crema y queso fresco.', precio: 30, descripcion: 'Comida mexicana tradicional.', image: 'https://www.recetasnestle.com.co/sites/default/files/2022-06/plato-tamales-dulces-salados-de-la-region.jpg' },
      { nombre: 'Pescado a la veracruzana con arroz blanco.', precio: 35, descripcion: 'Comida mexicana tradicional.', image: 'https://sabrosano.com/wp-content/uploads/2020/05/Pescado-Veracruzana_07.jpg' },
    ]
  },

  {
    nombre: 'Entradas',
    platos: [
      { nombre: 'Guacamole con totopos y salsa de chile habanero.', precio: 10, descripcion: 'Comida mexicana tradicional.', image: 'https://cdn7.kiwilimon.com/recetaimagen/38665/49665.jpg' },
      { nombre: 'Tostadas de tinga de pollo con aguacate.', precio: 15, descripcion: 'Comida mexicana tradicional.', image: 'https://storage.googleapis.com/avena-recipes/2019/10/1571780659884.jpeg' },
      { nombre: 'Sopa de tortilla con aguacate y queso fresco.', precio: 20, descripcion: 'Comida mexicana tradicional.', image: 'https://www.laylita.com/recetas/wp-content/uploads/2011/12/1-Sopa-de-tortilla-con-pollo-o-pavo.jpg' },
    ]
  },

  {
    nombre: 'Menu infantil',
    platos: [
      { nombre: 'Tacos de carne molida con queso y guacamole.', precio: 25, descripcion: 'Comida mexicana tradicional.', image: 'https://storage.googleapis.com/avena-recipes/2019/10/1571782269579.jpeg' },
      { nombre: 'Quesadillas de pollo con crema y guacamole.', precio: 30, descripcion: 'Comida mexicana tradicional.', image: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/e3/ac/83/quesadillas-de-pollo.jpg' },
      { nombre: 'Tostadas de pollo con crema y queso fresco.', precio: 35, descripcion: 'Comida mexicana tradicional.', image: 'https://img.freepik.com/fotos-premium/tostadas-pollo-base-frijoles-lechuga-tomate-queso-crema_517131-33.jpg' },
    ]
  }
  ];

  desayunos: any[] = [];
  almuerzos: any[] = [];
  bebidas: any[] = [];
  comidas: any[] = [];
  entradas: any[] = [];
  menuInfantil: any[] = [];
  recomendados: any[] = [];

  ngOnInit() {
    this.desayunos = this.categorias.find(categoria => categoria.nombre === 'Desayunos')?.platos || [];
    this.almuerzos = this.categorias.find(categoria => categoria.nombre === 'Almuerzos')?.platos || [];
    this.bebidas = this.categorias.find(categoria => categoria.nombre === 'Bebidas')?.platos || [];
    this.comidas = this.categorias.find(categoria => categoria.nombre === 'Comidas')?.platos || [];
    this.entradas = this.categorias.find(categoria => categoria.nombre === 'Entradas')?.platos || [];
    this.menuInfantil = this.categorias.find(categoria => categoria.nombre === 'Menu infantil')?.platos || [];
    this.seleccionarPlatosRecomendados();
  }


  seleccionarPlatosRecomendados() {
    const platosSeleccionados = new Set();

    while (platosSeleccionados.size < 6) {
      const categoriaAleatoria = this.categorias[Math.floor(Math.random() * this.categorias.length)];
      const platoAleatorio = categoriaAleatoria.platos[Math.floor(Math.random() * categoriaAleatoria.platos.length)];
      platosSeleccionados.add(platoAleatorio);
    }

    this.recomendados = Array.from(platosSeleccionados);
  }
}