import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import _map from 'lodash/map';
import { FormattedMessage } from 'react-intl';

import Custombtn from 'src/components/customBtn/customBtn';
import CustomPopOver from 'src/components/customPopOver/customPopOver';

import 'src/common/css/mockcss/style.css';

export default class CustomOrgGridContent extends Component {
  constructor() {
    super()
    this.state = {
      popUpStyle: '',
      isChildVisible: false
    }
  }
  render() {
    var span;
    var orgUnitList = [
      {
        'id': 1,
        'description': 'LULU INTERNATIONAL EXCHANGE GLOBAL',
        'name': 'GLOBAL',
        'code': 'GLOB',
        'deleted': false,
        'riskLevel': {
          'id': 1,
          'orgUnitId': 1,
          'low': 0,
          'guarded': 19,
          'elevated': 38,
          'high': 59,
          'severe': 77,
          'overallRiskLow': 0,
          'overallRiskGuarded': 18,
          'overallRiskElevated': 37,
          'overallRiskHigh': 56,
          'overallRiskSevere': 77
        },
        'children': [
          {
            'id': 37,
            'description': 'CTP Luxembourg',
            'name': 'CTP',
            'code': 'ORG_CTP',
            'parentId': 1,
            'deleted': false,
            'associatedBIC': '',
            'associatedCurrency': '',
            'riskLevel': {
              'id': 31,
              'orgUnitId': 37,
              'low': 0,
              'guarded': 0,
              'elevated': 1,
              'high': 75,
              'yuvi': 'hi',
              'severe': 99,
              'overallRiskLow': 0,
              'overallRiskGuarded': 20,
              'overallRiskElevated': 40,
              'overallRiskHigh': 60,
              'overallRiskSevere': 80
            },
            'children': [
              {
                'id': 37,
                'description': 'CTP Luxembourg',
                'name': 'subchild 1.1',
                'code': 'ORG_CTP',
                'parentId': 1,
                'deleted': false,
                'associatedBIC': '',
                'associatedCurrency': '',
                'riskLevel': {
                  'id': 31,
                  'orgUnitId': 37,
                  'low': 0,
                  'guarded': 0,
                  'elevated': 1,
                  'high': 75,
                  'severe': 99,
                  'overallRiskLow': 0,
                  'overallRiskGuarded': 20,
                  'overallRiskElevated': 40,
                  'overallRiskHigh': 60,
                  'overallRiskSevere': 80
                },
                'children': [
                  {
                    'id': 37,
                    'description': 'CTP Luxembourg',
                    'name': 'subchild 1.1.1',
                    'code': 'ORG_CTP',
                    'parentId': 1,
                    'deleted': false,
                    'associatedBIC': '',
                    'associatedCurrency': '',
                    'riskLevel': {
                      'id': 31,
                      'orgUnitId': 37,
                      'low': 0,
                      'guarded': 0,
                      'elevated': 1,
                      'high': 75,
                      'severe': 99,
                      'overallRiskLow': 0,
                      'overallRiskGuarded': 20,
                      'overallRiskElevated': 40,
                      'overallRiskHigh': 60,
                      'overallRiskSevere': 80
                    },
                    'children': [
                      {
                        'id': 37,
                        'description': 'CTP Luxembourg',
                        'name': 'subchild1.1.1',
                        'code': 'ORG_CTP',
                        'parentId': 1,
                        'deleted': false,
                        'associatedBIC': '',
                        'associatedCurrency': '',
                        'riskLevel': {
                          'id': 31,
                          'orgUnitId': 37,
                          'low': 0,
                          'guarded': 0,
                          'elevated': 1,
                          'high': 75,
                          'severe': 99,
                          'overallRiskLow': 0,
                          'overallRiskGuarded': 20,
                          'overallRiskElevated': 40,
                          'overallRiskHigh': 60,
                          'overallRiskSevere': 80
                        },
                        'createdOn': 1429268088000,
                        'updatedOn': 1507711127000,
                        'createdBy': 'adminesch',
                        'updatedBy': 'adminesch',
                        'auditEntityType': 'ORGUNIT',
                        'auditId': '37',
                        'type': 2
                      }
                    ],
                    'createdOn': 1429268088000,
                    'updatedOn': 1507711127000,
                    'createdBy': 'adminesch',
                    'updatedBy': 'adminesch',
                    'auditEntityType': 'ORGUNIT',
                    'auditId': '37',
                    'type': 2
                  },
                  {
                    'id': 37,
                    'description': 'CTP Luxembourg',
                    'name': 'subchild 1.1.2',
                    'code': 'ORG_CTP',
                    'parentId': 1,
                    'deleted': false,
                    'associatedBIC': '',
                    'associatedCurrency': '',
                    'riskLevel': {
                      'id': 31,
                      'orgUnitId': 37,
                      'low': 0,
                      'guarded': 0,
                      'elevated': 1,
                      'high': 75,
                      'severe': 99,
                      'overallRiskLow': 0,
                      'overallRiskGuarded': 20,
                      'overallRiskElevated': 40,
                      'overallRiskHigh': 60,
                      'overallRiskSevere': 80
                    },
                    'children': [
                      {
                        'id': 37,
                        'description': 'CTP Luxembourg',
                        'name': 'subchild1.1.1',
                        'code': 'ORG_CTP',
                        'parentId': 1,
                        'deleted': false,
                        'associatedBIC': '',
                        'associatedCurrency': '',
                        'riskLevel': {
                          'id': 31,
                          'orgUnitId': 37,
                          'low': 0,
                          'guarded': 0,
                          'elevated': 1,
                          'high': 75,
                          'severe': 99,
                          'overallRiskLow': 0,
                          'overallRiskGuarded': 20,
                          'overallRiskElevated': 40,
                          'overallRiskHigh': 60,
                          'overallRiskSevere': 80
                        },
                        'createdOn': 1429268088000,
                        'updatedOn': 1507711127000,
                        'createdBy': 'adminesch',
                        'updatedBy': 'adminesch',
                        'auditEntityType': 'ORGUNIT',
                        'auditId': '37',
                        'type': 2
                      }
                    ],
                    'createdOn': 1429268088000,
                    'updatedOn': 1507711127000,
                    'createdBy': 'adminesch',
                    'updatedBy': 'adminesch',
                    'auditEntityType': 'ORGUNIT',
                    'auditId': '37',
                    'type': 2
                  }
                ],
                'createdOn': 1429268088000,
                'updatedOn': 1507711127000,
                'createdBy': 'adminesch',
                'updatedBy': 'adminesch',
                'auditEntityType': 'ORGUNIT',
                'auditId': '37',
                'type': 2
              },
              {
                'id': 37,
                'description': 'CTP Luxembourg',
                'name': 'subchild 1.2',
                'code': 'ORG_CTP',
                'parentId': 1,
                'deleted': false,
                'associatedBIC': '',
                'associatedCurrency': '',
                'riskLevel': {
                  'id': 31,
                  'orgUnitId': 37,
                  'low': 0,
                  'guarded': 0,
                  'elevated': 1,
                  'high': 75,
                  'severe': 99,
                  'overallRiskLow': 0,
                  'overallRiskGuarded': 20,
                  'overallRiskElevated': 40,
                  'overallRiskHigh': 60,
                  'overallRiskSevere': 80
                },
                'createdOn': 1429268088000,
                'updatedOn': 1507711127000,
                'createdBy': 'adminesch',
                'updatedBy': 'adminesch',
                'auditEntityType': 'ORGUNIT',
                'auditId': '37',
                'type': 2
              }
            ],
            'createdOn': 1429268088000,
            'updatedOn': 1507711127000,
            'createdBy': 'adminesch',
            'updatedBy': 'adminesch',
            'auditEntityType': 'ORGUNIT',
            'auditId': '37',
            'type': 2
          },
          {
            'id': 35,
            'description': 'European Investment Bank',
            'name': 'EIB',
            'code': 'ORG_EIB',
            'deleted': false,
            'riskLevel': {
              'id': 29,
              'orgUnitId': 35,
              'low': 0,
              'guarded': 8,
              'elevated': 33,
              'high': 55,
              'severe': 76,
              'overallRiskLow': 0,
              'overallRiskGuarded': 20,
              'overallRiskElevated': 40,
              'overallRiskHigh': 60,
              'overallRiskSevere': 80
            },
            'children': [
              {
                'id': 37,
                'description': 'CTP Luxembourg',
                'name': 'subchild 2.1',
                'code': 'ORG_CTP',
                'parentId': 1,
                'deleted': false,
                'associatedBIC': '',
                'associatedCurrency': '',
                'riskLevel': {
                  'id': 31,
                  'orgUnitId': 37,
                  'low': 0,
                  'guarded': 0,
                  'elevated': 1,
                  'high': 75,
                  'severe': 99,
                  'overallRiskLow': 0,
                  'overallRiskGuarded': 20,
                  'overallRiskElevated': 40,
                  'overallRiskHigh': 60,
                  'overallRiskSevere': 80
                },
                'createdOn': 1429268088000,
                'updatedOn': 1507711127000,
                'createdBy': 'adminesch',
                'updatedBy': 'adminesch',
                'auditEntityType': 'ORGUNIT',
                'auditId': '37',
                'type': 2
              },
              {
                'id': 37,
                'description': 'CTP Luxembourg',
                'name': 'subchild 2.2',
                'code': 'ORG_CTP',
                'parentId': 1,
                'deleted': false,
                'associatedBIC': '',
                'associatedCurrency': '',
                'riskLevel': {
                  'id': 31,
                  'orgUnitId': 37,
                  'low': 0,
                  'guarded': 0,
                  'elevated': 1,
                  'high': 75,
                  'severe': 99,
                  'overallRiskLow': 0,
                  'overallRiskGuarded': 20,
                  'overallRiskElevated': 40,
                  'overallRiskHigh': 60,
                  'overallRiskSevere': 80
                },
                'createdOn': 1429268088000,
                'updatedOn': 1507711127000,
                'createdBy': 'adminesch',
                'updatedBy': 'adminesch',
                'auditEntityType': 'ORGUNIT',
                'auditId': '37',
                'type': 2
              }
            ],
            'createdOn': 1418289690000,
            'updatedOn': 1418293055000,
            'createdBy': 'adminesch',
            'updatedBy': 'adminesch',
            'auditEntityType': 'ORGUNIT',
            'auditId': '35',
            'type': 2
          },
          {
            'id': 36,
            'description': 'Banque Transatlantique Luxembourg',
            'name': 'BTL',
            'code': 'ORG_BTL',
            'deleted': false,
            'riskLevel': {
              'id': 30,
              'orgUnitId': 36,
              'low': 0,
              'guarded': 20,
              'elevated': 40,
              'high': 60,
              'severe': 80,
              'overallRiskLow': 0,
              'overallRiskGuarded': 20,
              'overallRiskElevated': 40,
              'overallRiskHigh': 60,
              'overallRiskSevere': 80
            },
            'createdOn': 1418292612000,
            'updatedOn': 1418296689000,
            'createdBy': 'adminesch',
            'updatedBy': 'adminesch',
            'auditEntityType': 'ORGUNIT',
            'auditId': '36',
            'type': 2
          }
        ],
        'parents': [],
        'links': [
          {
            'id': 37,
            'description': 'CTP Luxembourg',
            'name': 'CTP',
            'code': 'ORG_CTP',
            'parentId': 1,
            'deleted': false,
            'associatedBIC': '',
            'associatedCurrency': '',
            'riskLevel': {
              'id': 31,
              'orgUnitId': 37,
              'low': 0,
              'guarded': 0,
              'elevated': 1,
              'high': 75,
              'severe': 99,
              'overallRiskLow': 0,
              'overallRiskGuarded': 20,
              'overallRiskElevated': 40,
              'overallRiskHigh': 60,
              'overallRiskSevere': 80
            },
            'createdOn': 1429268088000,
            'updatedOn': 1507711127000,
            'createdBy': 'adminesch',
            'updatedBy': 'adminesch',
            'auditEntityType': 'ORGUNIT',
            'auditId': '37',
            'type': 2
          },
          {
            'id': 35,
            'description': 'European Investment Bank',
            'name': 'EIB',
            'code': 'ORG_EIB',
            'deleted': false,
            'riskLevel': {
              'id': 29,
              'orgUnitId': 35,
              'low': 0,
              'guarded': 8,
              'elevated': 33,
              'high': 55,
              'severe': 76,
              'overallRiskLow': 0,
              'overallRiskGuarded': 20,
              'overallRiskElevated': 40,
              'overallRiskHigh': 60,
              'overallRiskSevere': 80
            },
            'createdOn': 1418289690000,
            'updatedOn': 1418293055000,
            'createdBy': 'adminesch',
            'updatedBy': 'adminesch',
            'auditEntityType': 'ORGUNIT',
            'auditId': '35',
            'type': 2
          },
          {
            'id': 36,
            'description': 'Banque Transatlantique Luxembourg',
            'name': 'BTL',
            'code': 'ORG_BTL',
            'deleted': false,
            'riskLevel': {
              'id': 30,
              'orgUnitId': 36,
              'low': 0,
              'guarded': 20,
              'elevated': 40,
              'high': 60,
              'severe': 80,
              'overallRiskLow': 0,
              'overallRiskGuarded': 20,
              'overallRiskElevated': 40,
              'overallRiskHigh': 60,
              'overallRiskSevere': 80
            },
            'createdOn': 1418292612000,
            'updatedOn': 1418296689000,
            'createdBy': 'adminesch',
            'updatedBy': 'adminesch',
            'auditEntityType': 'ORGUNIT',
            'auditId': '36',
            'type': 2
          }
        ],
        'updatedOn': 1399826093000,
        'updatedBy': 'adminesch',
        'auditEntityType': 'ORGUNIT',
        'auditId': '1'
      },
      {
        'id': 26,
        'description': 'LULU INTERNATIONAL EXCHANGE BAHRAIN ',
        'name': 'ORG_BH',
        'code': 'BH',
        'deleted': true,
        'riskLevel': {
          'id': 20,
          'orgUnitId': 26,
          'low': 0,
          'guarded': 18,
          'elevated': 37,
          'high': 56,
          'severe': 77,
          'overallRiskLow': 0,
          'overallRiskGuarded': 18,
          'overallRiskElevated': 37,
          'overallRiskHigh': 56,
          'overallRiskSevere': 77
        },
        'children': [],
        'parents': [],
        'links': [],
        'createdOn': 1395996072000,
        'updatedOn': 1418288506000,
        'createdBy': 'adminesch',
        'updatedBy': 'adminesch',
        'auditEntityType': 'ORGUNIT',
        'auditId': '26'
      },
      {
        'id': 27,
        'description': 'LULU INTERNATIONAL EXCHANGE KUWAIT',
        'name': 'ORG_KW',
        'code': 'KW',
        'deleted': true,
        'riskLevel': {
          'id': 21,
          'orgUnitId': 27,
          'low': 0,
          'guarded': 18,
          'elevated': 37,
          'high': 56,
          'severe': 77,
          'overallRiskLow': 0,
          'overallRiskGuarded': 18,
          'overallRiskElevated': 37,
          'overallRiskHigh': 56,
          'overallRiskSevere': 77
        },
        'children': [],
        'parents': [],
        'links': [],
        'createdOn': 1395996150000,
        'updatedOn': 1418288509000,
        'createdBy': 'adminesch',
        'updatedBy': 'adminesch',
        'auditEntityType': 'ORGUNIT',
        'auditId': '27'
      },
      {
        'id': 28,
        'description': 'LULU INTERNATIONAL EXCHANGE INDIA',
        'name': 'ORG_IN',
        'code': 'IN',
        'deleted': true,
        'riskLevel': {
          'id': 22,
          'orgUnitId': 28,
          'low': 0,
          'guarded': 18,
          'elevated': 37,
          'high': 56,
          'severe': 77,
          'overallRiskLow': 0,
          'overallRiskGuarded': 18,
          'overallRiskElevated': 37,
          'overallRiskHigh': 56,
          'overallRiskSevere': 77
        },
        'children': [],
        'parents': [],
        'links': [],
        'createdOn': 1395996977000,
        'updatedOn': 1418288511000,
        'createdBy': 'adminesch',
        'updatedBy': 'adminesch',
        'auditEntityType': 'ORGUNIT',
        'auditId': '28'
      },
      {
        'id': 29,
        'description': 'LULU INTERNATIONAL EXCHANGE OMAN',
        'name': 'ORG_OM',
        'code': 'OM',
        'deleted': true,
        'riskLevel': {
          'id': 23,
          'orgUnitId': 29,
          'low': 0,
          'guarded': 18,
          'elevated': 37,
          'high': 56,
          'severe': 77,
          'overallRiskLow': 0,
          'overallRiskGuarded': 18,
          'overallRiskElevated': 37,
          'overallRiskHigh': 56,
          'overallRiskSevere': 77
        },
        'children': [],
        'parents': [],
        'links': [],
        'createdOn': 1396001568000,
        'updatedOn': 1418288513000,
        'createdBy': 'adminesch',
        'updatedBy': 'adminesch',
        'auditEntityType': 'ORGUNIT',
        'auditId': '29'
      },
      {
        'id': 30,
        'description': 'LULU INTERNATIONAL EXCHANGE QATAR',
        'name': 'ORG_QA',
        'code': 'QA',
        'deleted': true,
        'riskLevel': {
          'id': 24,
          'orgUnitId': 30,
          'low': 0,
          'guarded': 18,
          'elevated': 37,
          'high': 56,
          'severe': 77,
          'overallRiskLow': 0,
          'overallRiskGuarded': 18,
          'overallRiskElevated': 37,
          'overallRiskHigh': 56,
          'overallRiskSevere': 77
        },
        'children': [],
        'parents': [],
        'links': [],
        'createdOn': 1396001791000,
        'updatedOn': 1418288516000,
        'createdBy': 'adminesch',
        'updatedBy': 'adminesch',
        'auditEntityType': 'ORGUNIT',
        'auditId': '30'
      },
      {
        'id': 31,
        'description': 'LULU INTERNATIONAL EXCHANGE  UNITED ARAB EMIRATES',
        'name': 'ORG_AE',
        'code': 'AE',
        'deleted': true,
        'riskLevel': {
          'id': 25,
          'orgUnitId': 31,
          'low': 0,
          'guarded': 18,
          'elevated': 37,
          'high': 56,
          'severe': 77,
          'overallRiskLow': 0,
          'overallRiskGuarded': 18,
          'overallRiskElevated': 37,
          'overallRiskHigh': 56,
          'overallRiskSevere': 77
        },
        'children': [],
        'parents': [],
        'links': [],
        'createdOn': 1396001814000,
        'updatedOn': 1418288518000,
        'createdBy': 'adminesch',
        'updatedBy': 'adminesch',
        'auditEntityType': 'ORGUNIT',
        'auditId': '31'
      },
      {
        'id': 32,
        'description': 'LULU INTERNATIONAL EXCHANGE PHILIPPINES',
        'name': 'ORG_PH',
        'code': 'PH',
        'deleted': true,
        'riskLevel': {
          'id': 26,
          'orgUnitId': 32,
          'low': 0,
          'guarded': 18,
          'elevated': 37,
          'high': 56,
          'severe': 77,
          'overallRiskLow': 0,
          'overallRiskGuarded': 18,
          'overallRiskElevated': 37,
          'overallRiskHigh': 56,
          'overallRiskSevere': 77
        },
        'children': [],
        'parents': [],
        'links': [],
        'createdOn': 1396002178000,
        'updatedOn': 1418288521000,
        'createdBy': 'adminesch',
        'updatedBy': 'adminesch',
        'auditEntityType': 'ORGUNIT',
        'auditId': '32'
      },
      {
        'id': 35,
        'description': 'European Investment Bank',
        'name': 'EIB',
        'code': 'ORG_EIB',
        'deleted': false,
        'riskLevel': {
          'id': 29,
          'orgUnitId': 35,
          'low': 0,
          'guarded': 8,
          'elevated': 33,
          'high': 55,
          'severe': 76,
          'overallRiskLow': 0,
          'overallRiskGuarded': 20,
          'overallRiskElevated': 40,
          'overallRiskHigh': 60,
          'overallRiskSevere': 80
        },
        'children': [],
        'parents': [
          {
            'id': 1,
            'description': 'LULU INTERNATIONAL EXCHANGE GLOBAL',
            'name': 'GLOBAL',
            'code': 'GLOB',
            'deleted': false,
            'riskLevel': {
              'id': 1,
              'orgUnitId': 1,
              'low': 0,
              'guarded': 19,
              'elevated': 38,
              'high': 59,
              'severe': 77,
              'overallRiskLow': 0,
              'overallRiskGuarded': 18,
              'overallRiskElevated': 37,
              'overallRiskHigh': 56,
              'overallRiskSevere': 77
            },
            'updatedOn': 1399826093000,
            'updatedBy': 'adminesch',
            'auditEntityType': 'ORGUNIT',
            'auditId': '1',
            'type': 1
          }
        ],
        'links': [
          {
            'id': 1,
            'description': 'LULU INTERNATIONAL EXCHANGE GLOBAL',
            'name': 'GLOBAL',
            'code': 'GLOB',
            'deleted': false,
            'riskLevel': {
              'id': 1,
              'orgUnitId': 1,
              'low': 0,
              'guarded': 19,
              'elevated': 38,
              'high': 59,
              'severe': 77,
              'overallRiskLow': 0,
              'overallRiskGuarded': 18,
              'overallRiskElevated': 37,
              'overallRiskHigh': 56,
              'overallRiskSevere': 77
            },
            'updatedOn': 1399826093000,
            'updatedBy': 'adminesch',
            'auditEntityType': 'ORGUNIT',
            'auditId': '1',
            'type': 1
          }
        ],
        'createdOn': 1418289690000,
        'updatedOn': 1418293055000,
        'createdBy': 'adminesch',
        'updatedBy': 'adminesch',
        'auditEntityType': 'ORGUNIT',
        'auditId': '35'
      },
      {
        'id': 36,
        'description': 'Banque Transatlantique Luxembourg',
        'name': 'BTL',
        'code': 'ORG_BTL',
        'deleted': false,
        'riskLevel': {
          'id': 30,
          'orgUnitId': 36,
          'low': 0,
          'guarded': 20,
          'elevated': 40,
          'high': 60,
          'severe': 80,
          'overallRiskLow': 0,
          'overallRiskGuarded': 20,
          'overallRiskElevated': 40,
          'overallRiskHigh': 60,
          'overallRiskSevere': 80
        },
        'children': [],
        'parents': [
          {
            'id': 1,
            'description': 'LULU INTERNATIONAL EXCHANGE GLOBAL',
            'name': 'GLOBAL',
            'code': 'GLOB',
            'deleted': false,
            'riskLevel': {
              'id': 1,
              'orgUnitId': 1,
              'low': 0,
              'guarded': 19,
              'elevated': 38,
              'high': 59,
              'severe': 77,
              'overallRiskLow': 0,
              'overallRiskGuarded': 18,
              'overallRiskElevated': 37,
              'overallRiskHigh': 56,
              'overallRiskSevere': 77
            },
            'updatedOn': 1399826093000,
            'updatedBy': 'adminesch',
            'auditEntityType': 'ORGUNIT',
            'auditId': '1',
            'type': 1
          }
        ],
        'links': [
          {
            'id': 1,
            'description': 'LULU INTERNATIONAL EXCHANGE GLOBAL',
            'name': 'GLOBAL',
            'code': 'GLOB',
            'deleted': false,
            'riskLevel': {
              'id': 1,
              'orgUnitId': 1,
              'low': 0,
              'guarded': 19,
              'elevated': 38,
              'high': 59,
              'severe': 77,
              'overallRiskLow': 0,
              'overallRiskGuarded': 18,
              'overallRiskElevated': 37,
              'overallRiskHigh': 56,
              'overallRiskSevere': 77
            },
            'updatedOn': 1399826093000,
            'updatedBy': 'adminesch',
            'auditEntityType': 'ORGUNIT',
            'auditId': '1',
            'type': 1
          }
        ],
        'createdOn': 1418292612000,
        'updatedOn': 1418296689000,
        'createdBy': 'adminesch',
        'updatedBy': 'adminesch',
        'auditEntityType': 'ORGUNIT',
        'auditId': '36'
      },
      {
        'id': 37,
        'description': 'CTP Luxembourg',
        'name': 'CTP',
        'code': 'ORG_CTP',
        'parentId': 1,
        'deleted': false,
        'associatedBIC': '',
        'associatedCurrency': '',
        'riskLevel': {
          'id': 31,
          'orgUnitId': 37,
          'low': 0,
          'guarded': 0,
          'elevated': 1,
          'high': 75,
          'severe': 99,
          'overallRiskLow': 0,
          'overallRiskGuarded': 20,
          'overallRiskElevated': 40,
          'overallRiskHigh': 60,
          'overallRiskSevere': 80
        },
        'children': [],
        'parents': [
          {
            'id': 1,
            'description': 'LULU INTERNATIONAL EXCHANGE GLOBAL',
            'name': 'GLOBAL',
            'code': 'GLOB',
            'deleted': false,
            'riskLevel': {
              'id': 1,
              'orgUnitId': 1,
              'low': 0,
              'guarded': 19,
              'elevated': 38,
              'high': 59,
              'severe': 77,
              'overallRiskLow': 0,
              'overallRiskGuarded': 18,
              'overallRiskElevated': 37,
              'overallRiskHigh': 56,
              'overallRiskSevere': 77
            },
            'updatedOn': 1399826093000,
            'updatedBy': 'adminesch',
            'auditEntityType': 'ORGUNIT',
            'auditId': '1',
            'type': 1
          }
        ],
        'links': [
          {
            'id': 1,
            'description': 'LULU INTERNATIONAL EXCHANGE GLOBAL',
            'name': 'GLOBAL',
            'code': 'GLOB',
            'deleted': false,
            'riskLevel': {
              'id': 1,
              'orgUnitId': 1,
              'low': 0,
              'guarded': 19,
              'elevated': 38,
              'high': 59,
              'severe': 77,
              'overallRiskLow': 0,
              'overallRiskGuarded': 18,
              'overallRiskElevated': 37,
              'overallRiskHigh': 56,
              'overallRiskSevere': 77
            },
            'updatedOn': 1399826093000,
            'updatedBy': 'adminesch',
            'auditEntityType': 'ORGUNIT',
            'auditId': '1',
            'type': 1
          }
        ],
        'createdOn': 1429268088000,
        'updatedOn': 1507711127000,
        'createdBy': 'adminesch',
        'updatedBy': 'adminesch',
        'auditEntityType': 'ORGUNIT',
        'auditId': '37'
      },
      {
        'id': 38,
        'description': 'Lorang Avocats',
        'name': 'LORANG',
        'code': 'ORG_LORANG',
        'deleted': false,
        'riskLevel': {
          'id': 32,
          'orgUnitId': 38,
          'low': 0,
          'guarded': 20,
          'elevated': 40,
          'high': 60,
          'severe': 80,
          'overallRiskLow': 0,
          'overallRiskGuarded': 20,
          'overallRiskElevated': 40,
          'overallRiskHigh': 60,
          'overallRiskSevere': 80
        },
        'children': [],
        'parents': [],
        'links': [],
        'createdOn': 1432629331000,
        'updatedOn': 1434964096000,
        'createdBy': 'adminesch',
        'updatedBy': 'adminesch',
        'auditEntityType': 'ORGUNIT',
        'auditId': '38'
      },
      {
        'id': 39,
        'description': 'OMAUL',
        'name': 'ORG_OM',
        'code': 'ORG_OM',
        'deleted': false,
        'riskLevel': {
          'id': 33,
          'orgUnitId': 39,
          'low': 0,
          'guarded': 20,
          'elevated': 40,
          'high': 60,
          'severe': 80,
          'overallRiskLow': 0,
          'overallRiskGuarded': 20,
          'overallRiskElevated': 40,
          'overallRiskHigh': 60,
          'overallRiskSevere': 80
        },
        'children': [],
        'parents': [],
        'links': [],
        'createdOn': 1438159206000,
        'updatedOn': 1438159206000,
        'createdBy': 'adminesch',
        'updatedBy': 'adminesch',
        'auditEntityType': 'ORGUNIT',
        'auditId': '39'
      }
    ]
    const { gridCardProperties, gridCardMenu, adminDataList } = this.props;
    const { popUpStyle, isChildVisible } = this.state;
    const isContentMenuVisible = gridCardProperties ? '' : 'is-hidden';
    const popUpSize = (i) => {
      this.setState({ popUpStyle: 90 + i * 66 });
    }
    const hidePopOver = () => {
      this.props.gridCardMenu();
    }
    const toggleChild = () => {
      this.setState({ isChildVisible: !this.state.isChildVisible });
    }

    const propertiesPopOver = () => (
      <CustomPopOver hidePopOver={hidePopOver}>
        <div className={`c-popover js-popover is-ready ${isContentMenuVisible}`} data-container=".js-content__scrollable"
          style={{ top: popUpStyle, left: '905px' }}>
          <div className="c-popover__body">
            <div className="c-actions-list">
              <ul className="c-actions-list__list">
                <li className="c-actions-list__item">
                  <button className="o-btn o-btn--inline" type="button">
                    <FormattedMessage id={ 'global.validate' } />        </button>
                </li>
                <li className="c-actions-list__item">
                  <button className="o-btn o-btn--inline" type="button">
                    <FormattedMessage id={ 'global.properties' } />        </button>
                </li>
                <li className="c-actions-list__item">
                  <button className="o-btn o-btn--inline" type="button">
                    <FormattedMessage id={ 'global.history' } />        </button>
                </li>
                <li className="c-actions-list__item">
                  <button className="o-btn o-btn--inline" type="button">
                    <FormattedMessage id={ 'global.duplicate' } />        </button>
                </li>
                <li className="c-actions-list__item">
                  <button className="o-btn o-btn--inline" type="button">
                    <FormattedMessage id={ 'global.delete' } />        </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CustomPopOver>
    )
    return (
      <div className="c-content__scrollable js-content__scrollable">
        {orgUnitList.map((item, i) =>
          <div key={i}>
            <div className={orgUnitList[i].children.length > 0 ? 'c-con' : 'c-row-card js-row-card'} onClick= { orgUnitList[i].children.length > 0 ? toggleChild : null }>
              <div className="c-row-card__toggle-wrapper">
                <fieldset className="o-toggle Array">
                  <input className="o-toggle__checkbox js-row-card__checkbox" type="checkbox" name="Alert" id="Alert" value="1" />
                  <label className="o-toggle__label" htmlFor="Alert">
                  </label>
                </fieldset>
                <div> <svg className="o-icon" width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg"><title>Combined Shape</title><path d="M6.82 14.888H1.293a.7.7 0 0 1-.7-.7V.7a.7.7 0 0 1 1.4 0v3.45h4.825V1.737a.7.7 0 0 1 .7-.7h3.112a.7.7 0 0 1 .495.206L13.2 3.318a.7.7 0 0 1 .205.494v4.15a.7.7 0 0 1-.7.7H7.52a.7.7 0 0 1-.7-.7V5.55H1.994v7.938h4.825v-2.413a.7.7 0 0 1 .7-.7h3.112a.7.7 0 0 1 .495.205l2.075 2.075a.7.7 0 0 1 .205.495v4.15a.7.7 0 0 1-.7.7H7.52a.7.7 0 0 1-.7-.7v-2.412zm5.186-10.786l-1.665-1.665H8.22v4.825h3.787v-3.16zm0 9.338l-1.665-1.665H8.22V16.6h3.787v-3.16z" /></svg>
                </div>
              </div>
              <div className="c-row-card__content">
                <p className="c-row-card__label">{item.name}</p>
                <p className="c-row-card__name">{item.description}</p>
              </div>
              {/* TODO : Enhancement */}
              {/* <span className="o-badge u-positive c-row-card__badge">
                validated
              </span> */}
              <Custombtn className="o-more-btn c-row-card__more-btn" onClick={() => {
                gridCardMenu();
                popUpSize(i)
              }
              }>
                <span className="u-visually-hidden">Actions</span>
              </Custombtn>
            </div>
            {(isChildVisible && orgUnitList[i].children.length > 0 ? <div>
              {_map(orgUnitList[i].children, (child, c) => {
                return (
                  <div key={c}>
                    <TreeNode node={child} key={c} child={child.children} gridCardProperties={gridCardProperties} gridCardMenu={gridCardMenu} />
                  </div>
                )
              }
              )}
            </div>
              : <div>
                {(orgUnitList[i].children.length > 0 && <div className="c-row-card-org">
                  {_map(orgUnitList[i].children, (child, c) => {
                    return (
                      <div key={c}>
                        { <div className="c-entity en1" onClick={() => {
                          toggleChild();
                        }}>
                          <div className="c-entity__icon">
                            <svg className="o-icon" width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                              <title> Combined Shape</title>
                              <path d="M6.82 14.888H1.293a.7.7 0 0 1-.7-.7V.7a.7.7 0 0 1 1.4 0v3.45h4.825V1.737a.7.7 0 0 1 .7-.7h3.112a.7.7 0 0 1 .495.206L13.2 3.318a.7.7 0 0 1 .205.494v4.15a.7.7 0 0 1-.7.7H7.52a.7.7 0 0 1-.7-.7V5.55H1.994v7.938h4.825v-2.413a.7.7 0 0 1 .7-.7h3.112a.7.7 0 0 1 .495.205l2.075 2.075a.7.7 0 0 1 .205.495v4.15a.7.7 0 0 1-.7.7H7.52a.7.7 0 0 1-.7-.7v-2.412zm5.186-10.786l-1.665-1.665H8.22v4.825h3.787v-3.16zm0 9.338l-1.665-1.665H8.22V16.6h3.787v-3.16z" />
                            </svg>
                          </div>
                          <p className="c-entity__label">
                            {child.name}
                          </p>
                          <button className="o-more-btn c-entity__more-btn o-more-btn--horizontal" type="button">
                            <span className="u-visually-hidden">Actions</span>
                          </button>
                        </div>}
                      </div>
                    )
                  }
                  )}
                </div>
                )}
              </div>
            )}
            {gridCardProperties && propertiesPopOver()}
          </div>
        )}
        )
      </div>
    )
  }
}
class TreeNode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }

  render() {
    const toggle = () => {
      this.setState({ isVisible: !this.state.isVisible });
    }
    var span;
    var nodes;
    span = <div className="c-row-card js-row-card" onClick={toggle}>
      <div className="c-row-card__toggle-wrapper">
        <fieldset className="o-toggle ">
          <input className="o-toggle__checkbox js-row-card__checkbox" type="checkbox" name="Alert" id="" value="1" />
          <label className="o-toggle__label" htmlFor="">
            <span className="u-visually-hidden">
            </span>
          </label>
        </fieldset>
        <svg className="o-icon" width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
          <title> Combined Shape</title>
          <path d="M6.82 14.888H1.293a.7.7 0 0 1-.7-.7V.7a.7.7 0 0 1 1.4 0v3.45h4.825V1.737a.7.7 0 0 1 .7-.7h3.112a.7.7 0 0 1 .495.206L13.2 3.318a.7.7 0 0 1 .205.494v4.15a.7.7 0 0 1-.7.7H7.52a.7.7 0 0 1-.7-.7V5.55H1.994v7.938h4.825v-2.413a.7.7 0 0 1 .7-.7h3.112a.7.7 0 0 1 .495.205l2.075 2.075a.7.7 0 0 1 .205.495v4.15a.7.7 0 0 1-.7.7H7.52a.7.7 0 0 1-.7-.7v-2.412zm5.186-10.786l-1.665-1.665H8.22v4.825h3.787v-3.16zm0 9.338l-1.665-1.665H8.22V16.6h3.787v-3.16z" />
        </svg>
      </div>
      <div className="c-row-card__content">
        <p className="c-row-card__label">
          {this.props.node.name}
        </p>
        <p className="c-row-card__name">
        </p>
      </div>
      <button className="o-more-btn c-row-card__more-btn o-more-btn--thin" type="button">
        <span className="u-visually-hidden">Actions</span>
      </button>
    </div>;
    if (this.state.isVisible && this.props.child) {
      nodes = this.props.child.map((i, index) => <TreeNode node={i} key={index} child={i.children} />);
    }
    return (
      <div className="child">
        {span}
        {this.props.node.name}
        <ul>{nodes}</ul>
      </div>
    );
  }
}
CustomOrgGridContent.propTypes = {
  toggleBtnGrp: PropTypes.func,
  gridCardProperties: PropTypes.bool,
  gridCardMenu: PropTypes.func,
  contentGridCheckBox: PropTypes.bool,
  isGrandChildVisible: PropTypes.bool
//   adminDataList: PropTypes.array.isRequired
}
CustomOrgGridContent.defaultProps = {
  toggleBtnGrp: _noop,
  gridCardProperties: false,
  gridCardMenu: _noop,
  isGrandChildVisible: false,
  contentGridCheckBox: false
}
TreeNode.propTypes = {
  toggleBtnGrp: PropTypes.func,
  gridCardProperties: PropTypes.bool,
  gridCardMenu: PropTypes.func,
  contentGridCheckBox: PropTypes.bool,
  isOrgUnit: PropTypes.bool,
  isGrandChildVisible: PropTypes.bool,
  // adminDataList: PropTypes.array.isRequired,
  child: PropTypes.array,
  node: PropTypes.object
}
TreeNode.defaultProps = {
  toggleBtnGrp: _noop,
  gridCardProperties: false,
  gridCardMenu: _noop,
  isOrgUnit: false,
  isGrandChildVisible: false,
  contentGridCheckBox: false,
  child: [],
  node: {}
}
