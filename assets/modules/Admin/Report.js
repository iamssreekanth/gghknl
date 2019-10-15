//alert('sree');

function loadData(value)
{
     //alert('sree');
    //alert(id);
    //debugger
    //$('#'+value).DataTable({destroy: true }).clear();
    //if ( ! $.fn.DataTable.isDataTable( '#'+value ) ) {
    setTimeout(function () {
        $('#'+value).DataTable({
        //$('#tbldivDistrictwise').DataTable({
          destroy: true,
          pageLength : 7,

         // dom: 'Bfrtip',
        //   buttons: [
        //       'copy', 'csv', 'excel', 'pdf', 'print'
        //   ],
        //dom: 'Bfrtip',
           buttons: [
               'excel', 'pdf', 'print'
          ],
    
          'paging'      : true,
          'lengthChange': false,
          'searching'   : true,
          'ordering'    : true,
          'info'        : true,
          'autoWidth'   : false
        });
        $('.overlay').hide();
    }
    , 10);
  //}
}


function show(value)
{
$('#'+value).show();
}
function hide()
{
  $('#'+value).hide();
}

function clearData(value)
{
  if ( ! $.fn.DataTable.isDataTable( '#'+value ) ) {
  var dataTable = $('#'+value).DataTable();
  dataTable.clear();
  }
}



function loadDONUTData(value,type)
{
  console.log('--------loadDONUTData---------');
  console.log(value);
     //alert(value[0].active);
    //alert(id);
    //debugger
    //$('#'+value).DataTable({destroy: true }).clear();
    //if ( ! $.fn.DataTable.isDataTable( '#'+value ) ) {
    setTimeout(function () {
/*
     * DONUT CHART
     * -----------
     */

    // var donutData = [
    //   { label: 'Series2', data: 30, color: '#3c8dbc' },
    //   { label: 'Series3', data: 20, color: '#0073b7' },
    //   { label: 'Series4', data: 50, color: '#00c0ef' }
    // ]
    var donutData;
    if (type == 'transaction')
    {
      donutData = [
        { label: 'Paid', data: value.paidPercentage, color: '#5cb85c' },
        { label: 'Pending at DM', data: value.pendingDMPercentage, color: '#f39c12' },
        { label: 'Pending at Bank', data: value.pendingBankPercentage, color: '#dd4b39' }
      ]
    }else {
      donutData = [
        { label: 'Active', data: value.activePercentage, color: '#00a65a' },
        { label: 'Pending', data: value.pendingPercentage, color: '#f39c12' },
        { label: 'Inactive', data: value.inactivePercentage, color: '#dd4b39' }
      ]
    }

    // var donutData = [
    //   { label: 'Active', data: value.activePercentage, color: '#00a65a' },
    //   { label: 'Pending', data: value.pendingPercentage, color: '#f39c12' },
    //   { label: 'Inactive', data: value.inactivePercentage, color: '#dd4b39' }
    // ]
    $.plot('#donut-chart', donutData, {
      series: {
        pie: {
          show       : true,
          radius     : 1,
          innerRadius: 0.5,
          label      : {
            show     : true,
            radius   : 2 / 3,
            formatter: labelFormatter,
            threshold: 0.1
          }

        }
      },
      legend: {
        show: false
      }
    })
    /*
     * END DONUT CHART
     */
  }
  , 10);
//}
}

function loadMap(value) {
//   var markers = [{lat:18.1124,lng:79.0193}
//     ,{lat:17.6466822,lng:80.8627215}
//   ,{lat:18.5427703,lng:78.2233483}
// ,{lat:17.5054565,lng:80.8163114}
// ,{lat:18.5667366,lng:77.9535287}
// ,{lat:17.1883,lng:79.2000}
// ,{lat:17.3305097,lng:80.6980136}];
// var image = {
//   url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
//   // This marker is 20 pixels wide by 32 pixels high.
//   size: new google.maps.Size(20, 32),
//   // The origin for this image is (0, 0).
//   origin: new google.maps.Point(0, 0),
//   // The anchor for this image is the base of the flagpole at (0, 32).
//   anchor: new google.maps.Point(0, 32)
// };
var shape = {
  coords: [1, 1, 1, 20, 18, 20, 18, 1],
  type: 'poly'
};
var icon = {
  url: "../res/sit_marron.png", // url
  scaledSize: new google.maps.Size(50, 50), // scaled size
  origin: new google.maps.Point(0,0), // origin
  anchor: new google.maps.Point(0, 0) // anchor
};
var markers = value;
  var mapOptions = {
      center: new google.maps.LatLng(17.3850, 78.4867),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var infoWindow = new google.maps.InfoWindow();
  var map = new google.maps.Map(document.getElementById("divMap"), mapOptions);
  for (i = 0; i < markers.length; i++) {
      var data = markers[i]
      var myLatlng = new google.maps.LatLng(data.latitude, data.longitude);
      var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          //icon: image,
          //label: 'P',
          //shape:shape,
          title: data.details,
      });
      // (function (marker, data) {
      //     google.maps.event.addListener(marker, "click", function (e) {
      //         infoWindow.setContent(data.description);
      //         infoWindow.open(map, marker);
      //     });
      // })(marker, data);
  }
}
function loadDate(value) {
   //Date picker
   $('#'+value).datepicker({
    format: 'dd/MM/yyyy',
    autoclose: true
  })
}
function loadLineChart(monthArr,registrationArr) {
  var areaChartData = {
    labels  : monthArr,
    //labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label               : 'Electronics',
        fillColor           : 'rgba(210, 214, 222, 1)',
        strokeColor         : 'rgba(210, 214, 222, 1)',
        pointColor          : 'rgba(210, 214, 222, 1)',
        pointStrokeColor    : '#f39c12',//'#c1c7d1',
        pointHighlightFill  : '#f39c12',//'#fff',
        pointHighlightStroke: '#f39c12',//'rgba(220,220,220,1)',
        data                : [65, 59, 80, 81, 56, 55, 40]
        //data                : registrationArr
      },
      {
        label               : 'Digital Goods',
        fillColor           : 'rgba(60,141,188,0.9)',
        strokeColor         : 'rgba(60,141,188,0.8)',
        pointColor          : '#3b8bba',
        pointStrokeColor    : 'rgba(60,141,188,1)',
        pointHighlightFill  : '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data                : [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  }

  var areaChartOptions = {
    //Boolean - If we should show the scale at all
    showScale               : true,
    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines      : false,
    //String - Colour of the grid lines
    scaleGridLineColor      : 'rgba(0,0,0,.05)',
    //Number - Width of the grid lines
    scaleGridLineWidth      : 1,
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines  : true,
    //Boolean - Whether the line is curved between points
    bezierCurve             : true,
    //Number - Tension of the bezier curve between points
    bezierCurveTension      : 0.3,
    //Boolean - Whether to show a dot for each point
    pointDot                : false,
    //Number - Radius of each point dot in pixels
    pointDotRadius          : 4,
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth     : 1,
    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,
    //Boolean - Whether to show a stroke for datasets
    datasetStroke           : true,
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth      : 2,
    //Boolean - Whether to fill the dataset with a color
    datasetFill             : true,
    //String - A legend template
    legendTemplate          : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio     : true,
    //Boolean - whether to make the chart responsive to window resizing
    responsive              : true
  }
    //-------------
    //- LINE CHART -
    //--------------
    var lineChartCanvas          = $('#lineChart').get(0).getContext('2d')
    var lineChart                = new Chart(lineChartCanvas)
    var lineChartOptions         = areaChartOptions
    lineChartOptions.datasetFill = false
    lineChart.Line(areaChartData, lineChartOptions)
}
function loadDONUTChart(value)
{
var color = [];
 if (value.length == 5)
 color = ["#3c8dbc", "#f56954", "#00a65a", "#00c0ef", "#f39c12"]
else if (value.length == 8)
color = ["#5bc0de", "#f0ad4e", "#5cb85c", "#337ab7", "#337ab7", "#777" , "#d9534f", "#f0ad4e"]; 
//color = ["#5bc0de", "#337ab7", "#f0ad4e", "#337ab7", "#f0ad4e", "#5cb85c" , "#d9534f", "#777"]; Code
  // color = ["#3c8dbc", "#f56954", "#00a65a", "#00c0ef", "#f39c12", "#fc0384" , "#030ffc", "#fc0303"];

  var donut = new Morris.Donut({
    element: 'sales-chart',
    resize: true,
    colors: color ,
    data:value,
    // data: [
    //   {label: "Download Sales", value: 12},
    //   {label: "In-Store Sales", value: 30},
    //   {label: "Mail-Order Sales", value: 20}
    // ],
    hideHover: 'auto'
  });
}
function loadTableau()
{
// $(document).ready(function(){
 //sReekanth
    $.getScript("https://repsvr.cgg.gov.in/javascripts/api/viz_v1.js");
// });
}

function overlay()
{
  $('.overlay').hide();
}

function overlayShow()
{
  $('.overlay').show();
}
function overlayHide()
{
  $('.overlay').hide();
}