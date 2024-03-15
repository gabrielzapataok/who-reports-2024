const CHART_ID_9 = "grid3";
const KENDO_CHART_ID_9 = "#" + CHART_ID_9;
const SOURCE_TITLE_9 = "WHO internal data: outcome of the prioritization exercise.";

$(document).ready(function () {
    $("#target-9").kendoPopover({
        template: "<div class='popover-container'>This chart shows the number of countries, territories and areas in which outcomes have been prioritized as high, medium or low during the prioritization process. For more info, see the explainers section.</div>",
        position: "top",
        width: 200
    });
});

var data = [{
    code: "1.1.1",
    country: "ANGOLA",
    level: "Low"
},
{
    code: "1.1.1",
    country: "BENIN",
    level: "High"
},
{
    code: "1.1.1",
    country: "ZAMBIA",
    level: "Medium"
},
{
    code: "1.1.1",
    country: "UGANDA",
    level: "Low",
    template: "<div> Low </div>",
}

];

$(document).ready(function () {
    $(KENDO_CHART_ID_9).kendoGrid({
        scrollable: false,
        dataSource: {
            data: data,
        },
        rowTemplate: '<tr data-uid="#: uid #"><td class="background" style=text-align:center>#: code #</td><td class="background" style=text-align:center>#: country #</td><td class="background" style=text-align:center><div class="pill #: level #">#: level #</div></td></tr>',
        groupable: false,
        sortable: false,
        toolbar: [{
            template: "<div class='gridTitle'><h2>Outcome prioritization for 2024-2025, by countries, territories and areas</h2></div>",

        }],
        columns: [{
            template: "<div>#:code#</div>",
            field: "code",
            headerAttributes: {
                style: "text-align: center; font-size: 14px; white-space: normal;color: #ffffff;font-weight: bold;background-color:#505573"
            },
            title: "CODE",
            width: 170
        }, {
            template: "<div style='text-align:center' >#:country#</div>",
            field: "country",
            headerAttributes: {
                style: "text-align: center; font-size: 14px; white-space: normal;color: #ffffff;font-weight: bold;background-color:#505573"
            },
            title: "COUNTRY",
            width: 170
        }, {
            template: "<tr class='pill'> #:level # </tr>",
            field: "Medium",
            headerAttributes: {
                style: "text-align: center; font-size: 14px; white-space: normal;color: #ffffff;font-weight: bold;background-color:#505573"
            },
            title: "PRIORITY LEVEL",
            width: 170
        }]
    });
});

function renderFooter9(chartID, sourceTitle) {
    let divFooter = document.createElement("div");
    divFooter.classList.add("chart-footer");
    divFooter.innerHTML = `
        <div class="chart-footer__link">
            <p>
                <i class="fa-solid fa-link"></i> Source: ${sourceTitle}
            </p>
        </div>
        <div class="chart-footer__buttons">
            <span class='btn-chart' id='target-9'>
                <i class="fa-solid fa-info"></i>
            </span>
            <button class='btn-chart export-pdf-9'>
                <i class="fa-solid fa-arrow-down"></i>
            </button>
        </div>
        `;

    let chartDiv = document.getElementById(chartID);
    let chartDivFather = chartDiv.parentNode;
    chartDivFather.appendChild(divFooter);
}

function innerToolbarStyles9() {
    var css = '.k-toolbar.k-grid-toolbar { background: #505573; }',
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

renderFooter9(CHART_ID_9, SOURCE_TITLE_9);
innerToolbarStyles9();

$(".export-pdf-9").click(function (e) {
    var grid = $(KENDO_CHART_ID_9).data("kendoGrid");
    grid.saveAsPDF();
});
