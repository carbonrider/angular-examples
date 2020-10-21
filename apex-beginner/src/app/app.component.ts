import { Component, OnInit } from '@angular/core';
import * as apex from 'ng-apexcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  series: apex.ApexAxisChartSeries;
  chart: apex.ApexChart;
  title: apex.ApexTitleSubtitle;
  legend: apex.ApexLegend;

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  private initializeChartOptions(): void {
    this.title = {
      text: 'Popular Languages'
    };

    this.series = [{
      name: 'Java',
      data: [12, 10, 19]
    }, {
      name: 'Python',
      data: [23, 18, 20]
    }];

    this.chart = {
      type: 'bar',
      width: 450
    };

    this.legend = {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      showForSingleSeries: true,
      onItemClick: {
        toggleDataSeries: false
      }
    };
  }

}
