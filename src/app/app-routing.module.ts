import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// When starting with a fresh eclipse installation you, in fact, need to "install" Lombok before being able to use it.

// 1.Go where you Lombok jar is (e.g. (e.g. you can find in ~/.m2/repository/org/projectlombok/lombok/1.16.10/lombok-1.16.10.jar), run it (Example: java -jar lombok-1.16.10.jar). A window should appear, browse to your eclipse.exe location.
// 2.Click on install.
// 3.Launch Eclipse, update project configuration on all projects and voila.
// Madhu try this
// Maven local repo 
//  C:\Users\{your-username}\.m2\repository
//-javaagent:E:\Software64\sts-4.8.0.RELEASE\lombok.jar