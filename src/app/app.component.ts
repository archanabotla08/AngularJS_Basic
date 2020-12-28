import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl="../assets/images/bridgelabzLogo.png";
  url="https://www.bridgelabz.com/";
  userString: string = "";
  ngOnInit(): void{
    this.title="Hello From Bridgelabz.";
  }

  OnClick($event){
    window.open(this.url,"_blank");
  }
}
