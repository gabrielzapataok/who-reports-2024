const CHART_ID_2 = "proposed-budget-by-strategic-shift-1";
const KENDO_CHART_ID_2 = "#" + CHART_ID_2;

$(KENDO_CHART_ID_2).kendoChart({
    title: {
        text: "TBD (pending confirmation from business)",
        align: "left",
        color: "black"
    },
    chartArea: {
    },
    legend: {
        template: "#= title # = #= items #",
        position: "top",
        align: "start",
        labels: {
            color: "black",
        },
        title: {
            text: "Segment:",
            align: "left",
            margin: 10,
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
            visible: true,
            template: "#= (value > 0.5 ? value + 'bn' : '' ) # ",
            format: "{0} bn",
            position: "center",
            color: "white"
        }
    },
    series: [{
        name: "Base",
        data: [3.4, 3.6, 5.0],
        color: "#21B2BB"
    }, {
        name: "Emergency",
        data: [0, 1, 1],
        color: "#FFAE11"
    }, {
        name: "Polio",
        data: [0.9, 0.9, 0.6],
        color: "#EA4E51"
    }, {
        name: "Special Programmes",
        data: [0.1, 0.2, 0.2],
        color: "#50DE42"
    }],
    valueAxis: {
        max: 7,
        labels: {
            format: "{0} bn",
            color: "black"
        },
        title: {
            text: "Billions",
            color: "black",
            font: "14px helvetica"
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
            color: "black"
        },
        labels: {
            color: "black",
            padding: {
                top: 0
            }
        }
    },
    theme: "flat",
    tooltip: {
        visible: true,
        format: "{0}bn",

        template: "#= series.name #: #= value #"
    }
});

function renderFooter2(chartID) {
    let divFooter = document.createElement("div");
    divFooter.classList.add("chart-footer", "chart-footer--flex-end");
    divFooter.innerHTML = `
        <div class="chart-footer__buttons">
            <button class='btn-chart export-pdf-2'>
                <i class="fa-solid fa-arrow-down"></i>
            </button>
        </div>
        `;

    let chartDiv = document.getElementById(chartID);
    let chartDivFather = chartDiv.parentNode;
    chartDivFather.appendChild(divFooter);
}

renderFooter2(CHART_ID_2);

$(".export-pdf-2").click(function () {
    $(KENDO_CHART_ID_2).getKendoChart().saveAsPDF();
});