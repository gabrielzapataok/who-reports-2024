const CHART_ID_5 = "output_treemap";
const KENDO_CHART_ID_5 = "#" + CHART_ID_5;
const SOURCE_LINK_5 = "https://open.who.int/2022-23/home";
const SOURCE_TITLE_5 = "WHO | Programme Budget Web Portal";

$(document).ready(function () {
    $("#target-5").kendoPopover({
        template: "<div class='popover-container'>This chart shows WHO's expenditures in 2020-2021 split by types, along the expenditure categories defined in IATI standards.</div>",
        position: "top",
        width: 200
    });
});

var data = [{
    name: "Implementation by expenditure type, 2020-2021, in US$ millions",
    items: [{
        name: "Transfers And Grants To Counterparts",
        color: "#ea4e51",
        value: 30
    },
    {
        name: "Contracting Services",
        color: "#41d4dd",
        value: 20
    },
    {
        name: "Staff And Other",
        color: "#32dc43",
        value: 5
    },
    {
        name: "Transfers And Grants To Counterparts",
        color: "#5867ef",
        value: 8
    },
    {
        name: "Staff And Other",
        color: "#f055e5",
        value: 3.5
    },
    {
        name: "Contracting Services",
        color: "#ffae11",
        value: 1.4
    }]
}];

$(KENDO_CHART_ID_5).kendoTreeMap({
    dataSource: data,
    template: "<span class='leaf-name #if(dataItem.value){#leaf-title#} #'>#: text # #if(dataItem.value){# (#:dataItem.value#) #} #</span>",
    valueField: "value",
    textField: "name",
    colorField: "color",
    type: "squarified"
});

$(KENDO_CHART_ID_5).kendoTooltip({
    filter: ".k-leaf,.k-treemap-title",
    position: "top",
    content: function (e) {
        var treemap = $(KENDO_CHART_ID_5).data("kendoTreeMap");
        var item = treemap.dataItem(e.target.closest(".k-treemap-tile"));
        return item.name + ": " + item.value;
    }
});

function renderFooter5(chartID, sourceLink, sourceTitle) {
    let divFooter = document.createElement("div");
    divFooter.classList.add("chart-footer");
    divFooter.innerHTML = `
        <div class="chart-footer__link">
            <p>
                <i class="fa-solid fa-link"></i> Source: <a href="${sourceLink}">${sourceTitle}</a>
            </p>
        </div>
        <div class="chart-footer__buttons">
            <span class='btn-chart' id='target-5'>
                <i class="fa-solid fa-info"></i>
            </span>
        </div>
        `;

    let chartDiv = document.getElementById(chartID);
    let chartDivFather = chartDiv.parentNode;
    chartDivFather.appendChild(divFooter);
}

renderFooter5(CHART_ID_5, SOURCE_LINK_5, SOURCE_TITLE_5);