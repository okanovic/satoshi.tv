import { Component, OnInit, TemplateRef } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProfileInfoModalComponent } from './components/profile-info-modal/profile-info-modal.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) { }

  openModal() {
    localStorage.removeItem('userInfo')
    this.modalRef = this.modalService.show(ProfileInfoModalComponent, { class: 'modal-md' },);
  }

  ngOnInit(): void {

  }
}
