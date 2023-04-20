import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-club-list',
  templateUrl: './admin-club-list.component.html',
  styleUrls: ['./admin-club-list.component.css']
})
export class AdminClubListComponent implements OnInit {

  clubItems!: NodeListOf<Element>;

  ngOnInit(): void {
    this.clubItems = document.querySelectorAll('.club-item');
    this.clubItems.forEach((item) => {
      const acceptButton = item.querySelector('.accept-button');
      const refuseButton = item.querySelector('.reject-button');

      acceptButton?.addEventListener('click', () => {
        // change the text content of the item to "club accepted"
        item.innerHTML = `<div class="col">
        <h5 style="color: aliceblue;">Club Accepted</h5>
        </div>`;
      });

      refuseButton?.addEventListener('click', () => {
        // change the text content of the item to "club refused"
        item.innerHTML = `<div class="col">
        <h5 style="color: rgba(255, 0, 0, 0.478);">Club Rejected</h5>
        </div>`;
      });
    });
  }

}