import { Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/shared/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class HeaderComponent implements OnInit {
  cartLength: number = 0;
  constructor(
    private cartServ: CartService,
    config: NgbModalConfig,
    private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content: Identifiers) {
    this.modalService.open(content, { size: 'xl' });
  }
  ngOnInit(): void {
    this.cartServ.items$.subscribe((items) => {
      this.cartLength = items.length;
    });

    console.log('registered listener');
  }

}
