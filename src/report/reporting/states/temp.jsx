useEffect(() => {
    let stateResults = {};
    stateData.forEach(function (state, i) {
        let stateName = state.name;
        let colorlistIndex = Math.floor(state.imp / 10);

        let styleObject = {
            backgroundColor: colorlist[colorlistIndex],
            group: colorlistIndex,
            label: {
                fontSize: "10px",
            },
            tooltip: {
                text:
                    `${stateNames[i] && stateNames[i][stateName]}` +
                    " has received " +
                    state.imp +
                    " impressions",
                fontSize: "12px",
                textAlign: "left",
                width: "200px",
                wrapText: true,
            },
        };
        stateResults[stateName] = styleObject;
    });

    setConfig({
        legend: {
            backgroundColor: "none",
            borderWidth: 0,
            offsetY: "-10px",
            toggleAction: "none",
            verticalAlign: "bottom",
            item: {
                fontSize: "16px",
            },
            marker: {
                type: "rectangle",
                width: "20px",
                height: "10px",
            },
        },
        series: [
            // render legend items
            {
                legendItem: {
                    text: "1% - 10%",
                },
                legendMarker: {
                    backgroundColor: "#caf0f8",
                },
            },
            {
                legendItem: {
                    text: "10% - 20%",
                },
                legendMarker: {
                    backgroundColor: "#ade8f4",
                },
            },
            {
                legendItem: {
                    text: "20% - 30%",
                },
                legendMarker: {
                    backgroundColor: "#90e0ef",
                },
            },
            {
                legendItem: {
                    text: "40% - 50%",
                },
                legendMarker: {
                    backgroundColor: "#48cae4",
                },
            },
            {
                legendItem: {
                    text: "50% - 60%",
                },
                legendMarker: {
                    backgroundColor: "#00b4d8",
                },
            },
            {
                legendItem: {
                    text: "60% - 70%",
                },
                legendMarker: {
                    backgroundColor: "#0096c7",
                },
            },
            {
                legendItem: {
                    text: "70% - 80%",
                },
                legendMarker: {
                    backgroundColor: "#0077b6",
                },
            },

            {
                legendItem: {
                    text: "80% - 90%",
                },
                legendMarker: {
                    backgroundColor: "#023e8a",
                },
            },

            {
                legendItem: {
                    text: "90% - 100%",
                },
                legendMarker: {
                    backgroundColor: "#03045e",
                },
            },
        ],
        shapes: [
            {
                type: "zingchart.maps",

                options: {
                    name: "ind",
                    zooming: false,
                    panning: false,
                    scrolling: false,
                    scale: true,
                    style: {items: stateResults},
                },
            },
            {
                type: "diamond",
                backgroundColor: "#ff0000",
                map: "ind",
                text: "Rome is the start of your tour!",
                active: false,
                borderColor: "#ff0000",
                borderWidth: "2px",
                color: "#ff0000",
                fontColor: "#ff0000",
                fontSize: "16px",
                size: 5,
                importance: 1,
                latitude: 19.07,
                longitude: 72.87,
                nights: "1",
                x: "72.87lon",
                y: "19.07lat",
                tooltip: {
                    text: "Mumbai.",
                    "background-color": "white",
                },
            },

            {
                type: "diamond",
                backgroundColor: "#ff0000",
                map: "ind",
                text: "Rome is the start of your tour!",
                active: false,
                borderColor: "#ff0000",
                borderWidth: "2px",
                color: "#4caf50",
                fontColor: "#ffffff",
                fontSize: "16px",
                size: 5,
                importance: 1,
                latitude: 18.51,
                longitude: 73.85,
                nights: "1",
                x: "73.85lon",
                y: "18.51lat",
                tooltip: {
                    text: "Pune.",
                    "background-color": "white",
                },
            },
        ],
    });
}, []);