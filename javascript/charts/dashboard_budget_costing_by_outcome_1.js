const CHART_ID_13 = "dashboard_budget_costing_by_outcome_1";
const KENDO_CHART_ID_13 = "#" + CHART_ID_13;
const SOURCE_TITLE_13 = "WHO internal data: budget costing for the draft proposed Programme Budget 2024-2025.";

$(document).ready(function () {
    $("#target-13").kendoPopover({
        template: "<div class='popover-container'>This chart shows the budget costing for base segment the 2025-2025 EB draft proposed Programme Budget, compared to the 2022-2023 approved revised Programme Budget. For more info, see the explainers section.</div>",
        position: "top",
        width: 200
    });
});

function createChart() {
    $(KENDO_CHART_ID_13).kendoChart({
        title: {
            text: "Approved Budget: Historic View",
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
                format: "{0}bn",
            },
            title: {
                text: "24 - 25 HR Costs and 24 - 25 Activity Costs",
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
                text: "Global Outcome",
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
            template: "#= category #  #= series.name #: #= value #"
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);

function renderFooter13(chartID, sourceTitle) {
    let divFooter = document.createElement("div");
    divFooter.classList.add("chart-footer");
    divFooter.innerHTML = `
        <div class="chart-footer__link">
            <p>
                <i class="fa-solid fa-link"></i> Source: ${sourceTitle}
            </p>
        </div>
        <div class="chart-footer__buttons">
            <span class='btn-chart' id='target-13'>
                <i class="fa-solid fa-info"></i>
            </span>
            <button class='btn-chart export-pdf-13'>
                <i class="fa-solid fa-arrow-down"></i>
            </button>
        </div>
        `;

    let chartDiv = document.getElementById(chartID);
    let chartDivFather = chartDiv.parentNode;
    chartDivFather.appendChild(divFooter);
}

renderFooter13(CHART_ID_13, SOURCE_TITLE_13);

$(".export-pdf-13").click(function () {
    $(KENDO_CHART_ID_13).getKendoChart().saveAsPDF();
});