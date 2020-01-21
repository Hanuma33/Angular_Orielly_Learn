import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associate-detail',
  templateUrl: './associate-detail.component.html',
  styleUrls: ['./associate-detail.component.css']
})
export class AssociateDetailComponent implements OnInit {
  private ganesh: any[] = [{
    id: '1',
    value: 21,
    img: '../../../assets/MaleAvatar.jpg'
  }, {
    id: '2',
    value: 4,
    img: '../../../assets/MaleAvatar.jpg'
  }, {
    id: '3',
    value: 12,
    img: '../../../assets/MaleAvatar.jpg'
  }, {
    id: '4',
    value: 11,
    img: '../../../assets/MaleAvatar.jpg'
  }, {
    id: '5',
    value: 11,
    img: '../../../assets/MaleAvatar.jpg'
  },  {
    id: '6',
    value: 11,
    img: '../../../assets/MaleAvatar.jpg'
  }, {
    id: '7',
    value: 11,
    img: '../../../assets/MaleAvatar.jpg'
  }];
  ngOnInit() {

  }

  public addItem(): void {
    this.ganesh.push({id: '3', value: 66, img: '../../../assets/MaleAvatar.jpg'});
    console.log(this.ganesh.length);
    this.setPage(this.ganesh.length);
  }

  private setPage(page): number {
    return page;
  }
}
