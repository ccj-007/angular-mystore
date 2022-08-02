import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';import { map } from 'rxjs/operators';
@Component({
  selector: 'app-router-match-profile',
  templateUrl: './router-match-profile.component.html',
  styleUrls: ['./router-match-profile.component.css']
})
export class RouterMatchProfileComponent implements OnInit {
  username$ = this.route.paramMap
  .pipe(
    map((params: ParamMap) => params.get('username'))
  );
  constructor(private route: ActivatedRoute) { 
  
  }

  ngOnInit(): void {
  }

}
