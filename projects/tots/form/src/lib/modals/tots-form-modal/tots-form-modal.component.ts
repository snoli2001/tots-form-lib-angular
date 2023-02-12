import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { TotsActionForm, } from '../../entities/tots-action-form';
import { TotsActionModalForm } from '../../entities/tots-action-modal-form';
import { TotsModalConfig } from '../../entities/tots-modal-config';

@Component({
  selector: 'tots-form-modal',
  templateUrl: './tots-form-modal.component.html',
  styleUrls: ['./tots-form-modal.component.scss']
})
export class TotsFormModalComponent {

  actions = new Subject<TotsActionModalForm>();

  constructor(
    protected dialogRef: MatDialogRef<TotsFormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TotsModalConfig
  ) { }

  onActionForm(action: TotsActionForm) {
    let newAction = new TotsActionModalForm();
    newAction.key = action.key;
    newAction.item = action.item;
    newAction.modal = this.dialogRef;
    this.actions.next(newAction);
  }
}
