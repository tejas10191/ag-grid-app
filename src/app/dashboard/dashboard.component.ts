import { Component, OnInit, OnDestroy } from '@angular/core';
import { AllModules, Module } from '@ag-grid-enterprise/all-modules';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  ngOnInit(): void {}

  ngOnDestroy(): void {
    // getColumnState returns empty array in ag-grid 24.1
    // getColumnState stays as it is in ag-grid 23.2
    const state = this.gridColumnApi.getColumnState();
  }

  public modules: Module[] = AllModules;

  public gridApi;
  public gridColumnApi;

  public columnDefs;
  public rowGroupPanelShow;
  public pivotPanelShow;
  public getRowNodeId;
  public defaultColDef;
  public autoGroupColumnDef;
  public rowData: [];
  public gridOptions;
  public sideBar;

  constructor() {
    this.columnDefs = [
      {
        headerName: 'Product',
        field: 'product',
        enableRowGroup: true,
        enablePivot: true,
        rowGroupIndex: 0,
        hide: true,
      },
      {
        headerName: 'Portfolio',
        field: 'portfolio',
        enableRowGroup: true,
        enablePivot: true,
        // rowGroupIndex: 1,
        pivotIndex: 0,
        hide: true,
      },
      {
        headerName: 'Book',
        field: 'book',
        enableRowGroup: true,
        enablePivot: true,
        rowGroupIndex: 2,
        hide: true,
      },
      {
        headerName: 'Trade',
        field: 'trade',
        width: 100,
      },
      // {
      //   headerName: 'Current',
      //   field: 'current',
      //   width: 200,
      //   aggFunc: 'sum',
      //   enableValue: true,
      //   cellClass: 'number',
      //   valueFormatter: numberCellFormatter,
      //   cellRenderer: 'agAnimateShowChangeCellRenderer',
      // },
      // {
      //   headerName: 'Previous',
      //   field: 'previous',
      //   width: 200,
      //   aggFunc: 'sum',
      //   enableValue: true,
      //   cellClass: 'number',
      //   valueFormatter: numberCellFormatter,
      //   cellRenderer: 'agAnimateShowChangeCellRenderer',
      // },
      {
        headerName: 'Deal Type',
        field: 'dealType',
        enableRowGroup: true,
        enablePivot: true,
      },
      {
        headerName: 'Bid',
        field: 'bidFlag',
        enableRowGroup: true,
        enablePivot: true,
        width: 100,
      },
      {
        headerName: 'PL 1',
        field: 'pl1',
        width: 200,
        aggFunc: 'sum',
        enableValue: true,
        cellClass: 'number',
        valueFormatter: numberCellFormatter,
        cellRenderer: 'agAnimateShowChangeCellRenderer',
      },
      {
        headerName: 'PL 2',
        field: 'pl2',
        width: 200,
        aggFunc: 'sum',
        enableValue: true,
        cellClass: 'number',
        valueFormatter: numberCellFormatter,
        cellRenderer: 'agAnimateShowChangeCellRenderer',
      },
    ];
    this.rowGroupPanelShow = 'always';
    this.pivotPanelShow = 'always';
    this.getRowNodeId = function (data) {
      return data.trade;
    };
    this.defaultColDef = {
      width: 120,
      sortable: true,
      resizable: true,
    };
    this.autoGroupColumnDef = { width: 250 };
    this.gridOptions = {
      groupIncludeFooter: true,
      groupIncludeTotalFooter: true,
      rowSelection: 'multiple',
      enableRangeSelection: true,
      rowMultiSelectWithClick: true,
      statusBar: {
        statusPanels: [
          { statusPanel: 'agTotalRowCountComponent', align: 'left' },
        ],
      },
      groupSelectsChildren: true,
      pivotMode: true,
    };
    this.defaultColDef = {
      filter: true,
      resizable: true,
    };
    this.sideBar = 'filters';
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    createRowData();
    params.api.setRowData(globalRowData);
  }

  onAsyncAdd() {
    // var startMillis = new Date().getTime();
    // setMessage('Running Async');
    // var updatedCount = 0;
    var api = this.gridApi;
    var itemsToAdd = [];
    for (var i = 0; i < ADD_COUNT; i++) {
      var trade = createRandomRowData();
      itemsToAdd.push(trade);
    }
    api.applyTransactionAsync({ add: itemsToAdd });
  }
}

var MIN_BOOK_COUNT = 10;
var MAX_BOOK_COUNT = 20;
var MIN_TRADE_COUNT = 1;
var MAX_TRADE_COUNT = 10;
var products = [
  'Palm Oil',
  'Rubber',
  'Wool',
  'Amber',
  'Copper',
  // 'Lead',
  // 'Zinc',
  // 'Tin',
  // 'Aluminium',
  // 'Aluminium Alloy',
  // 'Nickel',
  // 'Cobalt',
  // 'Molybdenum',
  // 'Recycled Steel',
  // 'Corn',
  // 'Oats',
  // 'Rough Rice',
  // 'Soybeans',
  // 'Rapeseed',
  // 'Soybean Meal',
  // 'Soybean Oil',
  // 'Wheat',
  // 'Milk',
  // 'Coca',
  // 'Coffee C',
  // 'Cotton No.2',
  // 'Sugar No.11',
  // 'Sugar No.14',
];
var portfolios = ['Aggressive', 'Defensive', 'Income', 'Speculative', 'Hybrid'];
var portfolios2 = [
  //   'A1',
  // 'A2',
  // 'A3',
  // 'A4',
  // 'A5',
  // 'A6',
  // 'A7',
  // 'A8',
  // 'A9',
  'A10',
  'A11',
  'A12',
  'A13',
  'A14',
  'A15',
  'A16',
  'A17',
  'A18',
  'A19',
  // 'A20',
  // 'A21',
  // 'A22',
  // 'A23',
  // 'A24',
  // 'A25',
  // 'A26',
  // 'A27',
  // 'A28',
  // 'A29',
  // 'A30',
  // 'A31',
  // 'A32',
  // 'A33',
  // 'A34',
  // 'A35',
  // 'A36',
  // 'A37',
  // 'A38',
  // 'A39'
];
var nextBookId = 62472;
var nextTradeId = 24287;
var UPDATE_COUNT = 4000;
var globalRowData;
function createRowData() {
  globalRowData = [];
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    for (var j = 0; j < portfolios.length; j++) {
      var portfolio = portfolios[j];
      var bookCount = randomBetween(MAX_BOOK_COUNT, MIN_BOOK_COUNT);
      for (var k = 0; k < bookCount; k++) {
        var book = createBookName();
        var tradeCount = randomBetween(MAX_TRADE_COUNT, MIN_TRADE_COUNT);
        for (var l = 0; l < tradeCount; l++) {
          var trade = createTradeRecord(product, portfolio, book);
          globalRowData.push(trade);
        }
      }
    }
  }
}

var ADD_COUNT = 10;

function createRandomRowData() {
  var product = products[randomBetween(0, products.length - 1)];
  var portfolio = portfolios2[randomBetween(0, portfolios2.length - 1)];

  var book = createBookName();
  return createTradeRecord(product, portfolio, book);
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createTradeRecord(product, portfolio, book) {
  var current = Math.floor(Math.random() * 100000) + 100;
  var previous = current + Math.floor(Math.random() * 10000) - 2000;
  var trade = {
    product: product,
    portfolio: portfolio,
    book: book,
    trade: createTradeId(),
    submitterID: randomBetween(10, 1000),
    submitterDealID: randomBetween(10, 1000),
    dealType: Math.random() < 0.2 ? 'Physical' : 'Financial',
    bidFlag: Math.random() < 0.5 ? 'Buy' : 'Sell',
    // current: current,
    // previous: previous,
    pl1: randomBetween(100, 1000),
    pl2: randomBetween(100, 1000),
    // gainDx: randomBetween(100, 1000),
    // sxPx: randomBetween(100, 1000),
    // _99Out: randomBetween(100, 1000),
  };
  return trade;
}
function numberCellFormatter(params) {
  return Math.floor(params.value)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
function createBookName() {
  nextBookId++;
  return 'GL-' + nextBookId;
}
function createTradeId() {
  nextTradeId++;
  return nextTradeId;
}
function copyObject(object) {
  var newObject = {};
  Object.keys(object).forEach(function (key) {
    newObject[key] = object[key];
  });
  return newObject;
}
