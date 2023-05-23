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
    setTimeout(() => {
        this.metaService.updateTag({name: "twitter:card", content: "summary"});
        this.metaService.updateTag({name: "twitter:site", content: "@IPEX"});
        this.metaService.updateTag({name: "twitter:creator", content: "@IPEX"});
        this.metaService.updateTag({name: "twitter:title", content: "IPEX"});
        this.metaService.updateTag({name: "twitter:description", content: "IPEX, Interparliamentary, Exchange, National Parliaments, European Parliament, Treaty of Lisbon"});
        this.metaService.updateTag({name: "twitter:image", content: "https://ipexlpp.secure.europarl.europa.eu/IPEXL-WEB/assets/sharing-img.jpg"});
    }, 200);
  }



}
