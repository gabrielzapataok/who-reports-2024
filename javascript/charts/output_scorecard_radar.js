const CHART_ID_3 = "output_scorecard_radar";
const KENDO_CHART_ID_3 = "#" + CHART_ID_3;
const SOURCE_LINK_3 = "https://www.who.int/about/accountability/results/who-results-report-2020-2021";
const SOURCE_TITLE_3 = "WHO Results Report 2020-2021";


$(document).ready(function () {
    $("#target-3").kendoPopover({
        template: "<div class='popover-container'>The Scorecard shows the assessment of WHO’s performance in delivering the Programme Budget outputs agreed with Member States using six different dimensions, i.e., technical support, leadership, global public health goods, value for money, gender, equity, human rights and disability, and achieving results in ways leading to impact. The dimension score (shown as a line) is the aggregate score of the different attributes (shown as sticks). A Scorecard is reported for every output at the global level. In addition, every major office reports its Scorecard for every output.</div>",
        position: "top",
        width: 400
    });
});

function createChart() {
    $(KENDO_CHART_ID_3).kendoChart({
        title: {
            text: "Output Assessment Scores",
            color: "#FFFFFF",
        },

        chartArea: {
            height: 800,
            background: "#505573",
        },
        legend: {
            position: "top",
            visible: true,
            labels: {
                margin: 5,
                font: "14px Verdana",
                color: "#ffffff"
            },
            item: {
                visual: function (e) {
                    var color = e.options.markers.background;
                    var labelColor = e.options.labels.color;
                    var rect = new kendo.geometry.Rect([0, 0], [150, 150]);
                    var layout = new kendo.drawing.Layout(rect, {
                        spacing: 5,
                        alignItems: "center",
                        wrap: false,
                    });

                    var circleGeometry = new kendo.geometry.Circle([0, 10], 4);
                    var circle = new kendo.drawing.Circle(circleGeometry, {
                        stroke: {
                            color: "none"
                        },
                        fill: {
                            color: color
                        }
                    });
                    var marker = circle;

                    var label = new kendo.drawing.Text(e.series.name, [0, 0], {
                        fill: {
                            color: labelColor
                        }
                    });

                    layout.append(marker, label);
                    layout.reflow();

                    return layout;
                }
            }
        },
        seriesDefaults: {
            spacing: 0.2
        },
        series: [{
            type: "radarColumn",
            name: "Technical Support",
            color: "#B56CAF",
            zIndex: -100,
            data: [
                1, 2, 2, 1
            ]
        },
        {
            type: "radarColumn",
            color: "#65B7A6",
            zIndex: -100,
            name: "Value For Money",
            data: [
                2, 3, 3, 4
            ]
        }, {
            type: "radarColumn",
            color: "#84D17C",
            zIndex: -100,
            name: "Leadership",
            data: [
                4, 3, 3, 4
            ]
        },
        {
            type: "radarColumn",
            color: "#F9BB5E",
            zIndex: -100,
            name: "Gender, equality...",
            data: [
                3, 2, 2, 3
            ]
        },
        {
            type: "radarColumn",
            color: "#FF5F61",
            zIndex: -100,
            name: "Global Public Health Goods",
            data: [
                4, 3, 3, 2
            ]
        },
        {
            type: "radarColumn",
            color: "#E5E5E5",
            zIndex: -100,
            name: "Results",
            data: [{
                x: 1,
                y: 3
            }]
        },
        {
            type: "radarLine",
            color: "gray",
            name: "Dimension Averages",
            markers: {
                visible: true,
                size: 10
            },
            data: [
                3, 3, 2, 3
            ]
        }
        ],
        categoryAxis: {
            minorGridLines: {
                visible: true,
                color: "grey",
                min: 4
            },
            categories: []
        },
        valueAxis: {
            min: 0,
            max: 4,
            majorUnit: 1,
            visible: true,
            zIndex: 100,
            color: "grey",
            majorGridLines: {
                visible: true,
                color: "grey"
            },
            labels: {
                margin: 2,
                font: "16px Verdana",
                color: "#FFFFFF",
                background: "#3f4264",
            }
        },
        tooltip: {
            visible: true,
            template: "#= series.name # : #= value #",
            color: "#FFF",
            padding: 7
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);

function renderFooter3(chartID, sourceLink, sourceTitle) {
    let divFooter = document.createElement("div");
    divFooter.classList.add("chart-footer");

    divFooter.innerHTML = `
        <div class="chart-footer__link">
            <p>
                <i class="fa-solid fa-link"></i> Source: <a href="${sourceLink}">${sourceTitle}</a>
            </p>
        </div>
        <div class="chart-footer__buttons">
            <span class='btn-chart' id='target-3'>
                <i class="fa-solid fa-info"></i>
            </span>
            <button class='btn-chart export-pdf-3'>
                <i class="fa-solid fa-arrow-down"></i>
            </button>
        </div>
    `;

    let chartDiv = document.getElementById(chartID);
    let chartDivFather = chartDiv.parentNode;
    chartDivFather.appendChild(divFooter);
}

renderFooter3(CHART_ID_3, SOURCE_LINK_3, SOURCE_TITLE_3);

$(".export-pdf-3").click(function () {
    $(KENDO_CHART_ID_3).getKendoChart().saveAsPDF();
});