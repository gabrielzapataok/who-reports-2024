const CHART_ID_14 = "proposed-budget-by-strategic-shift-1";
const KENDO_CHART_ID_14 = "#" + CHART_ID_14;
const SOURCE_TITLE_14 = "WHO internal data: budget costing for the draft proposed Programme Budget 2024-2025.";

$(document).ready(function () {
    $("#target-14").kendoPopover({
        template: "<div class='popover-container'>This chart shows the countries, territories and areas in which outputs have been prioritized as high, medium or low during the prioritization process. For more info, see the explainers section.</div>",
        position: "top",
        width: 200
    });
});

function createChart() {
    $(KENDO_CHART_ID_14).kendoChart({
        title: {
            text: "Budget costing for 2024-2025, by output",
            align: "left",
            color: "#FFFFFF"
        },
        subtitle: {
            text: "By Outcome",
            color: "#FFFFFF"
        },
        chartArea: {
            background: "#516c73" 
        },
        legend: {
            position: "top",
            align: "start",
            labels: {
                color: "white"
            },
            width: 600,
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
            type: "bar"
        },
        series: [{
            name: "Low",
            data: [1.3, 1.2, 1, 0.9, 0.8, 0.7, 0.4, 0.3],
            color: "#E86F00",
        }, {
            name: "Medium",
            data: [2, 1.9, 1.6, 1.4, 1, 0.7, 0.4, 0.3],
            color: "#21B2BB"
        }],
        valueAxis: {
            max: 2,
            line: {
                visible: false
            },
            minorGridLines: {
                visible: false
            },
            majorGridLines: {
                visible: false
            },
            labels: {
                rotation: "auto",
                color: "#FFFFFF",
                step: 2,
                format: "{0} bn",
            },
            title: {
                text: "In US$ millions",
                color: "#FFFFFF",
                font: "14px helvetica"
            },
        },
        categoryAxis: {
            categories: ["2.1", "1.1", "3.1", "4.1", "1.2", "4.2", "3.2", "2.2"],
            labels: {
                color: "#FFFFFF"
            },
            title: {
                text: "Output",
                color: "#FFFFFF",
                font: "14px helvetica"
            },
            majorGridLines: {
                visible: false
            },
            line: {
                visible: false
            }
        },
        theme: "flat",
        tooltip: {
            visible: true,
            template: "#= category #  #= series.name #: #= value # bn"
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);

function renderFooter14(chartID, sourceTitle) {
    let divFooter = document.createElement("div");
    divFooter.classList.add("chart-footer");
    divFooter.innerHTML = `
        <div class="chart-footer__link">
            <p>
                <i class="fa-solid fa-link"></i> Source: ${sourceTitle}
            </p>
        </div>
        <div class="chart-footer__buttons">
        		<span class='btn-chart' id='target-14'>
                <i class="fa-solid fa-info"></i>
            </span>
            <button class='btn-chart export-pdf-14'>
                <i class="fa-solid fa-arrow-down"></i>
            </button>
        </div>
        `;

    let chartDiv = document.getElementById(chartID);
    let chartDivFather = chartDiv.parentNode;
    chartDivFather.appendChild(divFooter);
}

renderFooter14(CHART_ID_14, SOURCE_TITLE_14);

$(".export-pdf-14").click(function () {
    $(KENDO_CHART_ID_14).getKendoChart().saveAsPDF();
});