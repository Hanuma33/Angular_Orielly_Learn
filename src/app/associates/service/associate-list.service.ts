import { Injectable } from '@angular/core';
import { IAssociate } from '../modal/associate';

@Injectable({
  providedIn: 'root'
})
export class AssociateListService {


  associateListHolder: IAssociate;

  constructor() {
//    setTimeout(() => { this.editAssociateInfo = true; }, 6000);
  }

}
