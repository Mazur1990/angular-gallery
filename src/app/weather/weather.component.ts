import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent{

  location = '';
  data= null;
  constructor() { }


  calculate(kelvin){
    return Math.ceil(kelvin - 272.15)
  }

  handleSearch() {
    // document.querySelector('input').value   nie stosowac takich zapisow we fremeworkach

    console.log(this.location)
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ this.location +'&appid=a2cb26e617cc58ac37a49b5139b69f8b')
    .then(res => res.json())
    .then(data =>{
      console.log({data});
      this.data=data;
    })
  }

    
  // https://api.openweathermap.org/data/2.5/weather?q=...&appid=a2cb26e617cc58ac37a49b5139b69f8b
  
  

}
