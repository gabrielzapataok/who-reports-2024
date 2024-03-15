const CHART_ID_6 = "grid2";
const KENDO_CHART_ID_6 = "#" + CHART_ID_6;
const SOURCE_TITLE_6 = "WHO priority setting dashboard";

$(document).ready(function () {
    $("#target-6").kendoPopover({
        template: "<div class='popover-container'>This table shows the number of countries, territories and areas in which the selected output has been prioritized as high, medium or low during the prioritization process. For more info, see the explainers section.</div>",
        position: "top",
        width: 200
    });
});

var data = [{
    Region: "Africa",
    High: "11",
    Medium: "40",
    Low: "4"
},
{
    Region: "Americas",
    High: "12",
    Medium: "2",
    Low: "3"
},
{
    Region: "Easter Mediterranean",
    High: "3",
    Medium: "24",
    Low: "1"
},
{
    Region: "Europe",
    High: "5",
    Medium: "45",
    Low: "2"
},
{
    Region: "Western Pacific",
    High: "30",
    Medium: "4",
    Low: "4"
},

];

$(document).ready(function () {
    $(KENDO_CHART_ID_6).kendoGrid({
        scrollable: false,
        dataSource: {
            data: data,
        },
        rowTemplate: '<tr data-uid="#: uid #"><td class="background_costing"><div class="gridTitle_costing">#: Region #</div></td><td class="background_costing" style=text-align:center>#: High #</td><td class="background_costing" style=text-align:center>#: Medium #</td><td class="background_costing" style=text-align:center>#: Low #</td></tr>',
        groupable: false,
        sortable: false,
        toolbar: [{
            template: "<div class='gridTitle_costing'><h2>Prioritization for 2024-2025, in number of countries, territories and areas</h2></div>",
        }],
        columns: [{
            template: "<div class='firstRow_costing'>#:Region#</div>",
            field: "Region",
            headerAttributes: {
                style: "text-align: center; font-size: 14px; white-space: normal;color: #ffffff;font-weight: bold;background-color:#486e74"
            },
            title: "Total number of countries, <br>territories, and areas",
            width: 170
        }, {
            template: "<div style='text-align:center' >#:High#</div>",
            field: "High",
            headerAttributes: {
                style: "text-align: center; font-size: 14px; white-space: normal;color: #ffffff;font-weight: bold;background-color:#486e74"
            },
            title: "<div class='pill High'>High</div> <br> 46 Countries",
            width: 170
        }, {
            template: "<div style='text-align:center'>#:Medium#</div>",
            field: "Medium",
            headerAttributes: {
                style: "text-align: center; font-size: 14px; white-space: normal;color: #ffffff;font-weight: bold;background-color:#486e74"
            },
            title: "<div class='pill Medium'>Medium</div> <br> 85 Countries",
            width: 170
        }, {
            template: "<div style='text-align:center'>#:Low#</div>",
            field: "Low",
            headerAttributes: {
                style: "text-align: center; font-size: 14px; white-space: normal;color: #ffffff;font-weight: bold;background-color:#486e74"
            },
            title: "<div class='pill Low'>Low</div> <br> 12 Countries",
            width: 170
        }]
    });
});

function renderFooter6(chartID, sourceTitle) {
    let divFooter = document.createElement("div");
    divFooter.classList.add("chart-footer");
    divFooter.innerHTML = `
        <div class="chart-footer__link">
            <p>
                <i class="fa-solid fa-link"></i> Source: ${sourceTitle}
            </p>
        </div>
        <div class="chart-footer__buttons">
            <span class='btn-chart' id='target-6'>
                <i class="fa-solid fa-info"></i>
            </span>
            <button class='btn-chart export-pdf-6'>
                <i class="fa-solid fa-arrow-down"></i>
            </button>
        </div>
        `;

    let chartDiv = document.getElementById(chartID);
    let chartDivFather = chartDiv.parentNode;
    chartDivFather.appendChild(divFooter);
}

function innerToolbarStyles6() {
    var css = '.k-toolbar.k-grid-toolbar{ background: #486e74; }',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
}

renderFooter6(CHART_ID_6, SOURCE_TITLE_6);
innerToolbarStyles6();

$(".export-pdf-6").click(function (e) {
    var grid = $(KENDO_CHART_ID_6).data("kendoGrid");
    grid.saveAsPDF();
});