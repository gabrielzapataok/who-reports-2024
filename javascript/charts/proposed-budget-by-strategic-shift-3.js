const CHART_ID_12 = "proposed-budget-by-strategic-shift-3";
const KENDO_CHART_ID_12 = "#" + CHART_ID_12;
const SOURCE_TITLE_12 = "WHO internal data: budget costing for the draft proposed Programme Budget 2024-2025.";

$(document).ready(function () {
    $("#target-12").kendoPopover({
        template: "<div class='popover-container'>This chart shows the number of countries, territories and areas in which outcomes have been prioritized as high, medium or low during the prioritization process. For more info, see the explainers section.</div>",
        position: "top",
        width: 200
    });
});

$(KENDO_CHART_ID_12).kendoChart({
    title: {
        text: "Budget costing for 2024-2025, by outcome",
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
        stack: false,
        spacing: 0,
        gap: 0.5,
        labels: {
            visible: true,
            format: "{0} bn",
            position: "center",
            color: "#ffffff"
        }
    },
    series: [{
        name: "22-23 Approved",
        data: [2.1, 1.3, 0.5, 1.3],
        color: "#f055e5"
    }, {
        name: "24-25 Proposed",
        data: [3.5, 2.7, 1.7, 3.5],
        color: "#41d4dd"
    },],
    valueAxis: {
        max: 4,
        labels: {
            step: 2,
            format: "{0} bn",
            color: "#ffffff",
        },
        title: {
            text: "In US$ millions",
            font: "14px helvetica",
            color: "#ffffff",
        },
        line: {
            visible: false
        },
        majorGridLines: {
            visible: true,
            step: 2,
            dashType: "dot"
        },
        axisCrossingValue: 0
    },
    categoryAxis: {
        categories: ["1", "2", "3", "4"],
        line: {
            visible: false
        },
        majorGridLines: {
            visible: false
        },
        title: {
            text: "Strategic priority",
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

function renderFooter12(chartID, sourceTitle) {
    let divFooter = document.createElement("div");
    divFooter.classList.add("chart-footer");
    divFooter.innerHTML = `
        <div class="chart-footer__link">
            <p>
                <i class="fa-solid fa-link"></i> Source: ${sourceTitle}
            </p>
        </div>
        <div class="chart-footer__buttons">
            <span class='btn-chart' id='target-12'>
                <i class="fa-solid fa-info"></i>
            </span>
            <button class='btn-chart export-pdf-12'>
                <i class="fa-solid fa-arrow-down"></i>
            </button>
        </div>
        `;

    let chartDiv = document.getElementById(chartID);
    let chartDivFather = chartDiv.parentNode;
    chartDivFather.appendChild(divFooter);
}

renderFooter12(CHART_ID_12, SOURCE_TITLE_12);

$(".export-pdf-12").click(function () {
    $(KENDO_CHART_ID_12).getKendoChart().saveAsPDF();
});