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
  nameError: string = "";
  ngOnInit(): void{
    this.title="Hello From Bridgelabz.";
  }

  OnClick($event){
    window.open(this.url,"_blank");
  }
  onInput($event){
    console.log("Changed Event Occurred",$event.data);
    const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userString))
    {
      this.nameError="";
      return;
    }
    this.nameError="Invalid Name";
  }
}
