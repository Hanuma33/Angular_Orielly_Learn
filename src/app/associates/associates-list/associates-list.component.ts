import { Component, Input, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import { Link } from '../../types';


const ASSOCIATE_QUERY = gql`
query {
  Person {
    _id
    empid
    name
    born
    img
  }
}
`;


@Component({
  selector: 'app-associates-list',
  templateUrl: './associates-list.component.html',
  styleUrls: ['./associates-list.component.css']
})
export class AssociatesListComponent implements OnInit {
  @Input()
  link: Link;
  associate: any[] = [];
  dataCount: number;
  editAssociateInfo: boolean;
  searchValue: string;
  responsiveOptions;

  private query: QueryRef<any>;

  constructor(private apollo: Apollo) {

    setTimeout(() => { this.editAssociateInfo = true; }, 6000);
  }

  ngOnInit() {
    this.editAssociateInfo = false;

  }

  onFilterAssociates() {

    const ASSOCIATE_QUERY_FILTERED = gql`
    query PersonBorn($yearborn: Long) {
      Person(born: $yearborn) {
        empid
        name
      }
    }
`;
    this.query = this.apollo.watchQuery({
      query: ASSOCIATE_QUERY_FILTERED,
      variables: { yearborn: Number(this.searchValue)}
    });
    console.log(this.searchValue);
    console.log(Number(this.searchValue));

    this.query.valueChanges.subscribe(result => {
      this.associate = result.data && result.data.Person;
      console.log(this.associate);
      this.dataCount =  Object.keys(this.associate).length;
    });

  }
  onGetAssociates() {
    this.query = this.apollo.watchQuery({
      query: ASSOCIATE_QUERY,
      variables: {}
    });
    this.query.valueChanges.subscribe(result => {
      this.associate = result.data && result.data.Person;
      console.log(this.associate);
      this.dataCount =  Object.keys(this.associate).length;
    });
  }

getHeadertext() {
    // tslint:disable-next-line: max-line-length
    if ( this.dataCount > 0 )  { return 'List of Associates Counting to - '.concat(this.dataCount as unknown as string); } else { return 'Click to Retrive the list of Associates'; }
  }


}
