import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowUserNameButton = false;
  serverCreationStatus = "No server was created";
  serverName = 'TestServer';
  userName = '';
  serverCreated = false;
  servers=['TestServer','TestServer 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit(): void {
  }
  onCreateServer() {
    //this.serverCreationStatus = "Server was created";
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = this.serverCreationStatus === "No server was created" ? "Server was created" : "No server was created"+this.serverName;
  }

  onUpdateServerName(oEvent:Event) {
    this.serverName = (<HTMLInputElement>oEvent.target).value;
  }
  onUpdateUserName(oEvent:Event) {
    this.userName = (<HTMLInputElement>oEvent.target).value;
    this.allowUserNameButton = this.userName?true:false;
  }
  onResetUserName(){
    this.userName ="";
  }
}
