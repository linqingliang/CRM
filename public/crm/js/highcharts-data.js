//首页图表
$(function () {
    $('#index1').highcharts({
        title: {
            text: ' ',
        },
        subtitle: {
            text: ' ',
        },
        yAxis: {
            max: 51,
            tickInterval: 17,
            title: {
                text: ' '
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        xAxis: {
            allowDecimals: false,
             categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        },
        tooltip: {
            valueSuffix: ''
        },
        legend: {
            align: 'center',
            borderWidth: 0
        },
        series: [{
            name: '任务成功',
            data: [6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 7.2],
            color:'#23DA20'
        }, {
            name: '任务失败',
            data: [5.7, 11.3, 17.0, 22.0, 0, 24.1, 20.1, 14.1, 8.6, 2.5, 9.6,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 5.3, 13.9, 9.6,7.0, 0, 9.5, 0, 5.2, 21.5, 25.2],
            color:'#f00'
        }],
        credits: {
            enabled: false
        },
    });
});

//订单统计
$(function () {
    $('#ddtj1').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        colors: ['#52E052', '#24CBE5', '#ff0000','#FFC322'],
        title: {
            text: '<b>订单统计</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                showInLegend: true,
            }
        },
        series: [{
            type: 'pie',
            name: '订单数量',
            data: [
                {
                    name: '已成交',
                    y: 85,
                    sliced: true,
                    selected: true
                },

                ['已确认', 26],
                ['无效或已取消', 12],
                ['未确认',    8]
            ]
        }],
        credits: {
            enabled: false
        },
    });
});

//配送方式
$(function () {
    $('#peisong').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        colors: ['#52E052', '#24CBE5', '#ff0000','#FFC322'],
        title: {
            text: '<b>配送方式</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                showInLegend: true,
            }
        },
        series: [{
            type: 'pie',
            name: '订单数量',
            data: [
                {
                    name: '中通快递',
                    y: 85,
                    sliced: true,
                    selected: true
                },

                ['韵达快递', 26],
                ['圆通快递', 12],
                ['顺丰快递', 40]
            ]
        }],
        credits: {
            enabled: false
        },
    });
});
//支付方式
$(function () {
    $('#pay1').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        colors: ['#52E052', '#24CBE5', '#ff0000','#FFC322'],
        title: {
            text: '<b>支付方式</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                showInLegend: true,
            }
        },
        series: [{
            type: 'pie',
            name: '订单数量',
            data: [
                {
                    name: '微信支付',
                    y: 85,
                    sliced: true,
                    selected: true
                },

                ['支付宝支付', 26],
                ['网银支付', 12],
            ]
        }],
        credits: {
            enabled: false
        },

    });
});

//订单走势
$(function () {
    $('#ddzs1').highcharts({
        chart: {
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 0,
                viewDistance: 25,
                depth: 40
            },
        },
        legend: {
            enabled: false
        },
        title: {
            text: '<b>订单走势</b>'
        },
        xAxis: {
            categories: ['2016-06', '2016-07', '2016-08', '2016-09', '2016-10'],
            title: {
                text: '订单数(单位:个)'
            }
        },
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: ' '
            }
            
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                depth: 40
            }
        },
        credits: {
            enabled: false
        },
                exporting: {
            enabled: false
        },
        series: [{
            data: [5, 3, 4, 7, 2],
            stack: 'male',
            name: '订单数量',
        }]
    });
});

//销售额走势
$(function () {
    $('#xsezs1').highcharts({
        chart: {
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 0,
                viewDistance: 25,
                depth: 40
            },
        },
        legend: {
            enabled: false
        },
        title: {
            text: '<b>销售额走势</b>'
        },
        xAxis: {
            categories: ['2016-06', '2016-07', '2016-08', '2016-09', '2016-10'],
            title: {
                text: '营业额(单位:元)'
            }
        },
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: ' '
            }
            
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                depth: 40
            }
        },
        credits: {
            enabled: false
        },
                exporting: {
            enabled: false
        },
        series: [{
            data: [5, 3, 4, 7, 2],
            stack: 'male',
            name: '订单数量',
        }]
    });
});