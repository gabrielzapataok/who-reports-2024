const CHART_ID_11 = "proposed-budget-by-strategic-shift-2";
const KENDO_CHART_ID_11 = "#" + CHART_ID_11;
const SOURCE_TITLE_11 = "WHO internal data: budget costing for the draft proposed Programme Budget 2024-2025.";

$(document).ready(function () {
    $("#target-11").kendoPopover({
        template: "<div class='popover-container'>This chart shows the budget costing for base segment the 2025-2025 EB draft proposed Programme Budget, compared to the 2022-2023 approved revised Programme Budget. For more info, see the explainers section.</div>",
        position: "top",
        width: 200
    });
});

$(KENDO_CHART_ID_11).kendoChart({
    title: {
        text: "Approved Budget: Historic View",
        align: "left",
        color: "#ffffff"
    },
    chartArea: {
        background: "#516c73",
        height: 400
    },
    legend: {
        template: "#= title # = #= items #",
        position: "top",
        align: "start",
        width: 600,
        labels: {
            color: "#ffffff"
        },
        title: {
            text: "Segment:",
            align: "left",
            margin: 10,
            color: "#ffffff",
            font: "14px helvetica"
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
        type: "column",
        stack: true,
        labels: {
            template: "#= (value > 0.5 ? value + 'bn' : '' ) # ",
            visible: true,
            format: "{0} bn",
            position: "center",
            color: "#ffffff"
        }
    },
    series: [{
        name: "Base",
        data: [3.4, 3.6, 5.0],
        color: "#5867ef"
    }, {
        name: "Emergency",
        data: [0, 1, 1],
        color: "#FFAE11"
    }, {
        name: "Polio",
        data: [0.9, 0.9, 0.6],
        color: "#50DE42"
    }, {
        name: "Special Programmes",
        data: [0.1, 0.2, 0.2],
        color: "#EA4E51"
    }],
    valueAxis: {
        max: 7,
        labels: {
            format: "{0} bn",
            color: "#ffffff",
        },
        title: {
            text: "Billions",
            font: "14px helvetica",
            color: "#ffffff",
        },
        line: {
            visible: false
        },
        majorGridLines: {
            visible: true,
            dashType: "dot"
        },
        axisCrossingValue: 0
    },
    categoryAxis: {
        categories: ["2018-19", "2020-21", "2022-23"],
        line: {
            visible: false
        },
        majorGridLines: {
            visible: false
        },
        title: {
            text: "Years",
            font: "14px helvetica",
            color: "#ffffff",
        },
        labels: {
            color: "#ffffff",
            padding: {
                top: 0
            }
        }
    },
    theme: "flat",
    tooltip: {
        visible: true,
        template: "#= series.name #: #= value # bn"
    }
});

function renderFooter11(chartID, sourceTitle) {
    let divFooter = document.createElement("div");
    divFooter.classList.add("chart-footer");
    divFooter.innerHTML = `
        <div class="chart-footer__link">
            <p>
                <i class="fa-solid fa-link"></i> Source: ${sourceTitle}
            </p>
        </div>
        <div class="chart-footer__buttons">
            <span class='btn-chart' id='target-11'>
                <i class="fa-solid fa-info"></i>
            </span>
            <button class='btn-chart export-pdf-11'>
                <i class="fa-solid fa-arrow-down"></i>
            </button>
        </div>
        `;

    let chartDiv = document.getElementById(chartID);
    let chartDivFather = chartDiv.parentNode;
    chartDivFather.appendChild(divFooter);
}

renderFooter11(CHART_ID_11, SOURCE_TITLE_11);

$(".export-pdf-11").click(function () {
    $(KENDO_CHART_ID_11).getKendoChart().saveAsPDF();
});