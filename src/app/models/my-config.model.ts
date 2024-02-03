import * as _ from "lodash";

export class MyConfigModel{

    configObj: any;

    constructor(jsonData: any){
        this.configObj = jsonData;
    }

    getListUniversityTraining(){
        return _.has(this.configObj, 'listUniversityTraining') ? _.get(this.configObj, 'listUniversityTraining') : null;
    }

    getListOtherTraining(){
        return _.has(this.configObj, 'listOtherTraining') ? _.get(this.configObj, 'listOtherTraining') : null;
    }

    getListExperiences(){
        return _.has(this.configObj, 'listExperiences') ? _.get(this.configObj, 'listExperiences') : null;
    }

    getListAbbilities(){
        return _.has(this.configObj, 'listAbbilities') ? _.get(this.configObj, 'listAbbilities') : null;
    }

}