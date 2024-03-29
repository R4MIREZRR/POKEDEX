import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  name: string;
  urlImagen: string;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  search(){
    this.pokemonService.getPokemon(this.name).subscribe((data: any) => {
      this.urlImagen = data.sprites.front_default;
    });
  }
}
