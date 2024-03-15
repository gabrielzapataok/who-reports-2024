const CHART_ID_1 = "exec_summary_stacked";
const KENDO_CHART_ID_1 = "#" + CHART_ID_1;
const SOURCE_LINK_1 = "";
const SOURCE_TITLE_1 = "WHO internal data: outcome of the prioritization exercise.";

$(document).ready(function () {
    $("#target").kendoPopover({
        template: "<div class='popover-container'>This chart shows the number of countries, territories and areas in which outcomes have been prioritized as high, medium or low during the prioritization process. For more info, see the explainers section.</div>",
        position: "top",
        width: 200
    });
});

function createChart() {
    $(KENDO_CHART_ID_1).kendoChart({
        title: {
            text: "Output prioritization for 2024-2025",
            align: "left",
            color: "white",
        },
        subtitle: {
            text: "By output",
            color: "white",
        },
        legend: {
            visible: true,
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
        chartArea: {
            background: "#505573"
        },
        seriesDefaults: {
            type: "bar",
            stack: true,
            gap: 1
        },
        series: [{
            name: "Low",
            data: [50, 50, 50, 47, 40, 35, 25, 25],
            color: "#E86F00"
        }, {
            name: "Medium",
            data: [50, 60, 52, 65, 50, 48, 55, 50],
            color: "#21B2BB"
        }, {
            name: "High",
            data: [100, 90, 98, 88, 110, 117, 120, 125],
            color: "#BF33B5"
        }, {
            name: "Not Aplicable",
            data: [],
            color: "#3DA132"
        }],
        valueAxis: {
            max: 200,
            labels: {
                step: 2
            },
            color: "white",
            line: {
                visible: false
            },
            majorGridLines: {
                visible: false
            },
            title: {
                text: "Number of countries, territories and areas",
                color: "#FFFFFF",
                font: "14px helvetica"
            },
            minorGridLines: {
                visible: false
            }
        },
        categoryAxis: {
            title: {
                text: "Output",
                color: "#FFFFFF",
                font: "14px helvetica"
            },
            line: {
                visible: false
            },
            color: "white",
            categories: [2.1, 1.1, 3.1, 4.1, 1.2, 4.2, 3.2, 2.2],
            majorGridLines: {
                visible: false
            },
            minorGridLines: {
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

function renderFooter(chartID, sourceLink, sourceTitle) {
    let divFooter = document.createElement("div");
    divFooter.classList.add("chart-footer");
    divFooter.innerHTML = `
        <div class="chart-footer__link">
            <p>
                <i class="fa-solid fa-link"></i> Source: <a href="${sourceLink}">${sourceTitle}</a>
            </p>
        </div>
        <div class="chart-footer__buttons">
            <span class='btn-chart' id='target'>
                <i class="fa-solid fa-info"></i>
            </span>
            <button class='btn-chart export-pdf'>
                <i class="fa-solid fa-arrow-down"></i>
            </button>
        </div>
        `;

    let chartDiv = document.getElementById(chartID);
    let chartDivFather = chartDiv.parentNode;
    chartDivFather.appendChild(divFooter);
}

renderFooter(CHART_ID_1, SOURCE_LINK_1, SOURCE_TITLE_1);

$(".export-pdf").click(function () {
    $(KENDO_CHART_ID_1).getKendoChart().saveAsPDF();
});