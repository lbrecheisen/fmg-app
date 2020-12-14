import { Component } from '@angular/core';
import { Article, CategoryType } from '@fmg/domain';

@Component({
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage {
  articles: Article[] = [
    {
      key: 'blahblahblah',
      version: 'blahblahblah',
      title: 'Why Do You Need A Realtor To Buy Your New Home?',
      body: `Because it will sell faster. Less Hassle. More money in your pocket. <br> <br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/luQSQuCHtcI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      category: CategoryType.Buy,
      created: { by: 'Logan B.', on: new Date() },
      updated: { by: 'Logan B.', on: new Date() },
    },
    {
      key: 'blahblahblah',
      version: 'blahblahblah',
      title: 'Three Things You Need To Do Before You Sell Your Home',
      body: `1. Ordered list
2. Another bullet point
  - Unordered list
  - Another unordered bullet point

<a href="https://www.youtube.com/embed/luQSQuCHtcI"><img style="margin-left: 20px" height="100px" width="100px" src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="testing"/></a>
`,
      category: CategoryType.Buy,
      created: { by: 'Logan B.', on: new Date() },
      updated: { by: 'Logan B.', on: new Date() },
    },
  ];

  constructor() {}
}
