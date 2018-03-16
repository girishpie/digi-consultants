import { Component, Input } from '@angular/core';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  username: string;

  ngOnInit()
  {
    this.username = localStorage.getItem('UserName');
  }


}
