import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = false;
  navButtonHidden = true;
  navLinksHidden = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 200;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    const screenWidth = event.target.innerWidth;
    if (screenWidth < 768) {
      this.navLinksHidden = true;
      this.navButtonHidden = false;
    } else {
      this.navLinksHidden = false;
      this.navButtonHidden = true;
    }
  }
}
