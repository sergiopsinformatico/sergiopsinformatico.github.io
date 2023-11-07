import * as _ from "lodash";

export class MyConfigModel{

    configObj: any;

    constructor(jsonData: any){
        this.configObj = jsonData;
    }

    getListTraining(){
        return _.has(this.configObj, 'listTraining') ? _.get(this.configObj, 'listTraining') : null;
    }

    getListExperiences(){
        return _.has(this.configObj, 'listExperiences') ? _.get(this.configObj, 'listExperiences') : null;
    }

}