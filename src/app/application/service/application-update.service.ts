import {Component, Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';


@Injectable({
  providedIn: 'root'
})
export class ApplicationUpdateService {


  mutation = gql`
                  mutation updatevalues( $title: String!, $released: Int!, $img: String!, $tagline: String!){
                  updateMovie(img: $img, released: $releasedst, tagline: $tagline, title: $title)
                  }`;

  constructor(private apollo: Apollo) {}

  submitUpdateApplication( app: any ) {
    return this.apollo.mutate({
      mutation: this.mutation,
      variables: app
    });
  }
}
