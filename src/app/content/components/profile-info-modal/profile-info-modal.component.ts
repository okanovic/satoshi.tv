import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/@core/model/user-model';
import { SharedDataService } from 'src/app/@core/services/shared-data.service';
import { AppTranslationModule } from 'src/app/app.translation.module';

@Component({
  selector: 'app-profile-info-modal',
  templateUrl: './profile-info-modal.component.html',
  styleUrls: ['./profile-info-modal.component.scss']
})
export class ProfileInfoModalComponent implements OnInit {

  message?: string;
  userInfo: UserModel = new UserModel();

  form = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });
  constructor(private fb: FormBuilder, public bsModalRef: BsModalRef, private toastr: ToastrService, private translateModule: AppTranslationModule, private sharedDataService:SharedDataService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    try {
      this.userInfo.name = this.form.get('name')?.value;
      this.userInfo.surname = this.form.get('surname')?.value;
      this.userInfo.email = this.form.get('email')?.value;
      localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
      this.toastr.success(this.translateModule.getTranslatedValue("Modal.SuccessMessage"));
      this.sharedDataService.setUser(this.userInfo);
    } catch (error) {
      this.toastr.error(this.translateModule.getTranslatedValue("Modal.ErrorMessage"));
    }
    this.bsModalRef?.hide();
  }

  decline(): void {
    this.bsModalRef?.hide();
  }
}
