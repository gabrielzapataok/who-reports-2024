
const CHART_ID_4_2 = "output_indicator_line_chart3";
const KENDO_CHART_ID_4_2 = "#" + CHART_ID_4_2;
const SOURCE_LINK_4_2 = "https://open.who.int/2022-23/indicators";
const SOURCE_TITLE_4_2 = "WHO | Programme Budget Web Portal";

$(document).ready(function () {
    $("#target-4").kendoPopover({
        template: "<div class='popover-container'>Output indicators are used to monitor the Secretariat’s progress in delivering each output, which in turn contributes to delivery of the outcome. For each output indicator, a baseline and targets are proposed for the upcoming biennium</div>",
        position: "top",
        width: 200
    });
});

function drawLegend(e) {
    var color = e.options.markers.background;
    var labelColor = e.options.labels.color;
    var rect = new kendo.geometry.Rect([0, 0], [100, 50]);
    var layout = new kendo.drawing.Layout(rect, {
        spacing: 5,
        alignItems: "center",
        wrap: false,
    });

    var circleGeometry = new kendo.geometry.Circle([0, 10], 10);
    var circle = new kendo.drawing.Circle(circleGeometry, {
        stroke: { color: "none" },
        fill: { color: color }
    });
    var marker = circle;

    var label = new kendo.drawing.Text(
        e.series.name,
        [0, 0],
        {
            fill: { color: labelColor },
            font: "bold 14px helvetica",
        }
    );

    layout.append(marker, label);
    layout.reflow();

    return layout;
}

function getMarkerCenterPoint(centerCircle, number) {
    var geom = kendo.geometry;
    var numberLength = number.toString().length;
    var offsetX = 5 * numberLength;
    var offsetY = 10;
    var centerText = new geom.Point(
        centerCircle.getX() - offsetX,
        centerCircle.getY() - offsetY,
    );
    return centerText;
}

function visualMarker(e, markerSize = 30, numberColor = "#FFFFFF") {
    return function (e) {
        var draw = kendo.drawing;
        var geom = kendo.geometry;
        var centerCircle = e.rect.center();

        var centerText = getMarkerCenterPoint(centerCircle, e.value);

        var circleGeometry = new geom.Circle(centerCircle, markerSize);
        var circle = new draw.Circle(circleGeometry, {
            stroke: {
                color: "none"
            },
            fill: {
                color: e.options.border.color
            }
        });

        var text = new draw.Text(
            e.value,
            centerText,
            {
                font: "16px helvetica",
                fill: {
                    color: numberColor
                }
            }
        );
        var group = new draw.Group();
        group.append(circle, text);

        return group;
    }
}

$(document).ready(function () {
    $(KENDO_CHART_ID_4_2).kendoChart({
        title: {
            text: "Output indicators",
            color: "#666666",
            font: "20px helvetica"
        },
        legend: {
            reverse: true,
            position: "bottom",
            labels: {
                color: "#666666",
            },
            item: {
                visual: drawLegend,
            }
        },
        chartArea: {
            background: "#ffffff",
            // width: 300,   
            height: 300,
        },
        seriesDefaults: {
            type: "line",
            style: "smooth",
            width: 7,
            markers: {
                border: {
                    width: 0
                }
            },
            highlight: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            shared: true,
            format: "{0} countries",
            font: "14px helvetica"
        },
        series: [
            {
                name: "Result",
                color: "#939393",
                dashType: "dash",
                data: [null, 7, 11],
                markers: {
                    zIndex: 0,
                    visual: visualMarker(this,
                        markerSize = 35
                    ),
                },
                line: {
                    color: "#666666"
                },
            },
            {
                name: "Target",
                color: "#008dc9",
                data: [4, 7, 9],
                markers: {
                    zIndex: 1,
                    visual: visualMarker(this,
                        markerSize = 25),
                },
            },
            {
                name: "Baseline",
                color: "#FFFFFF",
                data: [4],
                markers: {
                    visual: visualMarker(this,
                        markerSize = 20,
                        numberColor = "#008dc9"
                    ),
                },
            }
        ],
        valueAxis: {
            labels: {
                format: "{0}",
                font: "14px helvetica",
                margin: {
                    left: 15,
                    right: 11,
                    bottom: 16
                },
                color: "#666666",
            },
            title: {
                text: "Countries",
                color: "#666666"
            },
            line: {
                visible: true,
                width: 2,
                color: "#a1a1a1",
            },
            majorTicks: {
                size: 0,
            },
            majorUnit: 5,
            majorGridLines: {
                width: 2,
                color: "#a1a1a1",
            },
        },
        categoryAxis: {
            categories: [2020, 2021, 2022],
            majorGridLines: {
                visible: true,
                width: 2,
                color: "#a1a1a1",
            },
            majorTicks: {
                width: 0,
            },
            line: {
                visible: true,
                width: 2,
                color: "#a1a1a1",
            },
            title: {
                text: "Years",
                color: "#666666",
                font: "14px helvetica"
            },
            labels: {
                rotation: "auto",
                font: "14px helvetica",
                color: "#666666"
            }
        },
    });
});

function renderFooter4(chartID, sourceLink, sourceTitle) {
    let divFooter = document.createElement("div");
    divFooter.classList.add("chart-footer");
    divFooter.innerHTML = `
        <div class="chart-footer__link">
            <p>
                <i class="fa-solid fa-link"></i> Source: <a href="${sourceLink}">${sourceTitle}</a>
            </p>
        </div>
        <div class="chart-footer__buttons">
            <span class='btn-chart' id='target-4'>
                <i class="fa-solid fa-info"></i>
            </span>
            <button class='btn-chart export-pdf-4'>
                <i class="fa-solid fa-arrow-down"></i>
            </button>
        </div>
        `;

    let chartDiv = document.getElementById(chartID);
    let chartDivFather = chartDiv.parentNode;
    chartDivFather.appendChild(divFooter);
}

renderFooter4(CHART_ID_4_2, SOURCE_LINK_4_2, SOURCE_TITLE_4_2);

$(".export-pdf-4").click(function () {
    $(KENDO_CHART_ID_4_2).getKendoChart().saveAsPDF();
});