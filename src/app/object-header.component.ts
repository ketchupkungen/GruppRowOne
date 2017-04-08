import { Component } from '@angular/core';

@Component({
  selector: 'object-header',
  templateUrl: 'templates/object-header.html',
  styleUrls: ['app/object-header.component.css']
})
export class ObjectHeaderComponent {
    activeLink: string = 'Översikt';
    links = [
            'Översikt',
            'Fakta',
            'Bilder',
            'Planritning',
            'Kontakt'
    ];
    setActive(activeLink: string) {
        this.activeLink = activeLink;
    }
}