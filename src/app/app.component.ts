import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  desc='Frontend Developer(Angular) / Backend Developer(Django)'
  course ='Bachelor of Science in Computer science'

  images: Image[]  =[
    {label:"ANGULAR",src:"../assets/pictures/angular.png"},
    {label:"CSS3",src:"../assets/pictures/css31.png"},
    {label:"HTML5",src:"../assets/pictures/html.png"},
    {label:"JS",src:"../assets/pictures/javas.png"},
    {label:"NODEJS",src:"../assets/pictures/nodejs3.png"},
     {label:"PYTHON",src:"../assets/pictures/pythonlogo.png"},
     {label:"DJANGO",src:"../assets/pictures/django34.png"}
  ]
  
}
class Image {
  label!: string;
  src !:string;
}
