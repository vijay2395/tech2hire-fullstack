import { WelcomeDataService } from './../service/data/welcome-data.service';
import { ActivatedRoute,Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';//'./app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  welcomeMessageFromService:string
  name = ''


  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService,
    private router:Router) { 
     

  }

  budget=''
  email=''
  username=''
  ngOnInit(){
  
    this.name = this.route.snapshot.params['name'];
    this.email = this.route.snapshot.params['email'];

  }


  budgetAddedMessage=''
  // set your Budget
 
  setBudget()
  {
 
   this.service.executeSettingBudgetOfUser(this.budget,this.email,this.username)
   console.log(this.budget)
   if(this.budget!=null)
   {
     this.budgetAddedMessage = 'Your budget is added! please proceed '
     this.router.navigate(['todos']);

   }

}

}
