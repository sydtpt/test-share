import { Component } from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-share';

  constructor(private metaService: Meta) {
        this.metaService.updateTag({name: "twitter:card", content: "summary"});
        this.metaService.updateTag({name: "twitter:site", content: "@IPEX"});
        this.metaService.updateTag({name: "twitter:creator", content: "@IPEX"});
        this.metaService.updateTag({name: "twitter:title", content: "IPEX"});
        this.metaService.updateTag({name: "twitter:description", content: "TEST 2 secs"});
        this.metaService.updateTag({name: "twitter:image", content: "https://ipexlpp.secure.europarl.europa.eu/IPEXL-WEB/assets/sharing-img.jpg"});
  }



}
