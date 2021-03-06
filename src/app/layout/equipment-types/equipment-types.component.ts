import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ApiAgentService } from '../../shared/services/api-agent.service';
import { Router } from '@angular/router';



@Component({
    selector: 'app-equipment-types',
    templateUrl: './equipment-types.component.html',
    styleUrls: ['./equipment-types.component.scss'],
    animations:[routerTransition()],
    providers:[ApiAgentService]
})
export class EquipmentTypesComponent implements OnInit {
    equipmentTypes = [];
    equipCount = [];
    constructor(
        public api:ApiAgentService,
        public router: Router
    ) {}

    ngOnInit(
    ) {
        this.api.getData('/getAllEquipmentTypes').then((res)=>{
            if(res['status'] ==1){
                this.equipmentTypes = res['message'];
            }
        })
       
    }
}
