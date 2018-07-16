import * as fields from './constants/fieldConstants'

export default class Model_old1 {

    flAssetsLand = 0;
    flAssetsBuildings = 0;
    flAssetsEquipment = 0;
    flAssetsTransport = 0;
    flAssetsIntangible = 0;
    flAssetsOthers = 0;
    flAssetsCash = 0;
    flAssetsTotal = 0;

    flInvestLand = 0;
    flInvestBuildings = 0;
    flInvestEquipment = 0;
    flInvestTransport = 0;
    flInvestIntangible = 0;
    flInvestOthers = 0;
    flInvestTotal = 0;

    flInvestmentsAll = 0;
    flInvestmentsAlreadyInvested = 0;
    flInvestmentsRatio = '';

    constructor() {
        this.flAssetsLand = 0;
        this.flAssetsBuildings = 0;
        this.flAssetsEquipment = 0;
        this.flAssetsTransport = 0;
        this.flAssetsIntangible = 0;
        this.flAssetsOthers = 0;
        this.flAssetsCash = 0;
        this.flAssetsTotal = 0;

        this.flInvestLand = 0;
        this.flInvestBuildings = 0;
        this.flInvestEquipment = 0;
        this.flInvestTransport = 0;
        this.flInvestIntangible = 0;
        this.flInvestOthers = 0;
        this.flInvestTotal = 0;

        this.flInvestmentsAll = 0;
        this.flInvestmentsAlreadyInvested = 0;
        this.flInvestmentsRatio = '';

    }

    fieldUpdated(fieldId, value) {
        switch (fieldId) {
            case fields.FL_ASSETS_LAND:             this.flAssetsLand = value;
            case fields.FL_ASSETS_BUILDINGS:        this.flAssetsBuildings = value;
            case fields.FL_ASSETS_EQUIPMENT:        this.flAssetsEquipments = value;
            case fields.FL_ASSETS_TRANSPORT:        this.flAssetsTransport = value;
            case fields.FL_ASSETS_INTANGIBLE:       this.flAssetsIntangible = value;
            case fields.FL_ASSETS_OTHERS:           this.flAssetsOthers = value;
            case fields.FL_ASSETS_CASH:             this.flAssetsCash = value;

            case fields.FL_INVEST_LAND:             this.flInvestLand = value;
            case fields.FL_INVEST_BUILDINGS:        this.flInvestBuildings = value;
            case fields.FL_INVEST_EQUIPMENT:        this.flInvestEquipments = value;
            case fields.FL_INVEST_TRANSPORT:        this.flInvestTransport = value;
            case fields.FL_INVEST_INTANGIBLE:       this.flInvestIntangible = value;
            case fields.FL_INVEST_OTHERS:           this.flInvestOthers = value;
        }

        this.flAssetsTotal = this.flAssetsLand + this.flAssetsBuildings + this.flAssetsEquipments + this.flAssetsEquipments
                        + this.flAssetsTransport + this.flAssetsIntangible +  this.flAssetsOthers + this.flAssetsCash;
        this.flInvestTotal = this.flInvestLand + this.flInvestBuildings + this.flInvestEquipments + this.flInvestEquipments
                        + this.flInvestTransport + this.flInvestIntangible + this.flInvestOthers;
        this.flInvestmentsAll = this.flAssetsTotal + this.flInvestTotal;
        this.flInvestmentsAlreadyInvested = this.flAssetsTotal;
        this.flInvestmentsRatio = (this.flInvestmentsAll == 0) ? '' :
            (this.flInvestmentsAlreadyInvested / this.flInvestmentsAll * 100).toFixed(2) + '% / ' +
            ((this.flInvestmentsAll - this.flInvestmentsAlreadyInvested) / this.flInvestmentsAll * 100).toFixed(2) + '%'
    }
}



