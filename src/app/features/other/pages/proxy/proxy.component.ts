import { Component, OnInit } from '@angular/core';
import { ProxyService } from '../../services/proxy.service';

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.scss'],
})
export class ProxyComponent implements OnInit {
  dataSource;
  constructor(private proxyService: ProxyService) {}

  ngOnInit(): void {
    this.proxyService.getTaipeiPedestrianCleaningBox().subscribe((request) => {
      this.dataSource = request;
    });
  }
}
