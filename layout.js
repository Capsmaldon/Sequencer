main.appendChild(page[0]);
main.appendChild(page[1]);

panel[0].appendChild(startStopPanel);
panel[0].appendChild(indicatorPanel);
page[0].appendChild(panel[0]);

panel[1].appendChild(sequenceTypePanel);

panel[1].appendChild(stepPanel);
page[0].appendChild(panel[1]);

panel[2].appendChild(localPanel);
panel[2].appendChild(globalPanel);
page[0].appendChild(panel[2]);

page[1].appendChild(synthPanelContainer);
