import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import { Link } from '../../types';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Applicationmodal } from '../modal/applicationmodal';
import { Title } from '@angular/platform-browser';



const ASSOCIATE_QUERY = gql`
query AllMovies($title: String!, $releasedst:Int!,$releasednd:Int!,$taglinestr: String!){
  Movie(
    filter: {title_contains: $title,released_gt:$releasedst, released_lt:$releasednd, tagline_contains:$taglinestr}
  ) {
   title
   released
   tagline
   img
  }
}
`;

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  @Input()
  applicationForm: FormGroup;
  appmodal: Applicationmodal = new Applicationmodal();
  link: Link;
  application: any[] = [];
  dataCount: number;
  editAppInfo: boolean;
  searchValue: string;
  loading = false;
  visible = false;
  gqlvaraibles = {title: '',
      releasedst: 0,
      releasednd: 2022,
      taglinestr: ''};
      notMsg = '';

  private query: QueryRef<any>;
  tagSearch: any;
  toYear: any;
  titleSearch: any;
  editWindowvisible = false;
  editDrawerTitle: string;


  constructor(private apollo: Apollo,
              private notification: NzNotificationService,
              private fb: FormBuilder) {

    setTimeout(() => { this.editAppInfo = true; }, 6000);
    this.getGQLValuesonRequest();

  }

  ngOnInit() {
    this.editAppInfo = false;
    // this.applicationForm = new FormGroup({
    //   title     : new FormControl(),
    //   released  : new FormControl(),
    //   tagline   : new FormControl(),
    //   img       : new FormControl(),
    // });

    this.applicationForm = this.fb.group({
      title     : ['', [Validators.required, Validators.minLength(6)]],
      released  : ['', [Validators.required, Validators.minLength(4)]],
      tagline   : '',
      img       : ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onGetAssociates() {
  }

getHeadertext() {
    // tslint:disable-next-line: max-line-length
    if ( this.dataCount > 0 )  { return 'List of Applications Counting to - '.concat(this.dataCount as unknown as string); } else { return 'Click to Retrive the list of Associates'; }
  }

  public addItem(): void {
    // this.application.push({id: '3', value: 66, img: '../../../assets/MaleAvatar.jpg'});
    this.setPage(this.application.length);
  }

  private setPage(page): number {
    return page;
  }

  openFilterDrawyer(): void {
    this.visible = true;
  }

  closFilterDrawyer(): void {
    this.visible = false;
  }

  onSubmit(): void {
    if (this.titleSearch) {
      this.gqlvaraibles.title = this.titleSearch;
    } else {
      this.gqlvaraibles.title = '';
    }
    if (this.toYear) {
      this.gqlvaraibles.releasednd = Number(this.toYear);

    } else {
      this.gqlvaraibles.releasednd =  (new Date()).getFullYear();

    }
    if (this.tagSearch) {
      this.gqlvaraibles.taglinestr = this.tagSearch;
    } else {
      this.gqlvaraibles.taglinestr = '';

    }
    this.getGQLValuesonRequest();

  }

  getGQLValuesonRequest(): void {
    this.query = this.apollo.watchQuery({
      query: ASSOCIATE_QUERY,
      variables: this.gqlvaraibles
    });
    this.query.valueChanges.subscribe(result => {
      this.application = result.data && result.data.Movie;
      this.dataCount =  Object.keys(this.application).length;
    });

  }

  createBasicNotification(template: TemplateRef<{}>, valuepass: string): void {
    this.notification.template(template);
    this.notMsg = valuepass;
  }

  createBlankNotification() {
    this.notification.blank('Root Form Group Properties', JSON.stringify(this.applicationForm.value));
    console.log(this.applicationForm);

  }

  onClickImg(app: any) {
    this.notMsg = app.tagline;
    // this.notification.blank('Root Form Group Properties', JSON.stringify(app));
    this.applicationForm.patchValue(app);

    this.editWindowvisible = true;
    this.editDrawerTitle = 'Edit Application';
  }

  editDrawyerclose() {
    this.editWindowvisible = false;
  }

  addNewResource() {

    // this.notification.blank('Root Form Group Properties', JSON.stringify(''));

    this.editWindowvisible = true;
    this.editDrawerTitle = 'Add Application';
  }


}



