/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 528.0, "minX": 0.0, "maxY": 757.0, "series": [{"data": [[0.0, 528.0], [0.1, 528.0], [0.2, 528.0], [0.3, 528.0], [0.4, 528.0], [0.5, 528.0], [0.6, 528.0], [0.7, 528.0], [0.8, 528.0], [0.9, 528.0], [1.0, 528.0], [1.1, 528.0], [1.2, 528.0], [1.3, 528.0], [1.4, 528.0], [1.5, 528.0], [1.6, 528.0], [1.7, 528.0], [1.8, 528.0], [1.9, 528.0], [2.0, 528.0], [2.1, 529.0], [2.2, 529.0], [2.3, 529.0], [2.4, 529.0], [2.5, 529.0], [2.6, 529.0], [2.7, 529.0], [2.8, 529.0], [2.9, 529.0], [3.0, 529.0], [3.1, 531.0], [3.2, 531.0], [3.3, 531.0], [3.4, 531.0], [3.5, 531.0], [3.6, 531.0], [3.7, 531.0], [3.8, 531.0], [3.9, 531.0], [4.0, 531.0], [4.1, 535.0], [4.2, 535.0], [4.3, 535.0], [4.4, 535.0], [4.5, 535.0], [4.6, 535.0], [4.7, 535.0], [4.8, 535.0], [4.9, 535.0], [5.0, 535.0], [5.1, 536.0], [5.2, 536.0], [5.3, 536.0], [5.4, 536.0], [5.5, 536.0], [5.6, 536.0], [5.7, 536.0], [5.8, 536.0], [5.9, 536.0], [6.0, 536.0], [6.1, 536.0], [6.2, 536.0], [6.3, 536.0], [6.4, 536.0], [6.5, 536.0], [6.6, 536.0], [6.7, 536.0], [6.8, 536.0], [6.9, 536.0], [7.0, 536.0], [7.1, 538.0], [7.2, 538.0], [7.3, 538.0], [7.4, 538.0], [7.5, 538.0], [7.6, 538.0], [7.7, 538.0], [7.8, 538.0], [7.9, 538.0], [8.0, 538.0], [8.1, 539.0], [8.2, 539.0], [8.3, 539.0], [8.4, 539.0], [8.5, 539.0], [8.6, 539.0], [8.7, 539.0], [8.8, 539.0], [8.9, 539.0], [9.0, 539.0], [9.1, 540.0], [9.2, 540.0], [9.3, 540.0], [9.4, 540.0], [9.5, 540.0], [9.6, 540.0], [9.7, 540.0], [9.8, 540.0], [9.9, 540.0], [10.0, 540.0], [10.1, 540.0], [10.2, 543.0], [10.3, 543.0], [10.4, 543.0], [10.5, 543.0], [10.6, 543.0], [10.7, 543.0], [10.8, 543.0], [10.9, 543.0], [11.0, 543.0], [11.1, 543.0], [11.2, 543.0], [11.3, 543.0], [11.4, 543.0], [11.5, 543.0], [11.6, 543.0], [11.7, 543.0], [11.8, 543.0], [11.9, 543.0], [12.0, 543.0], [12.1, 543.0], [12.2, 543.0], [12.3, 543.0], [12.4, 543.0], [12.5, 543.0], [12.6, 543.0], [12.7, 543.0], [12.8, 543.0], [12.9, 543.0], [13.0, 543.0], [13.1, 543.0], [13.2, 544.0], [13.3, 544.0], [13.4, 544.0], [13.5, 544.0], [13.6, 544.0], [13.7, 544.0], [13.8, 544.0], [13.9, 544.0], [14.0, 544.0], [14.1, 544.0], [14.2, 545.0], [14.3, 545.0], [14.4, 545.0], [14.5, 545.0], [14.6, 545.0], [14.7, 545.0], [14.8, 545.0], [14.9, 545.0], [15.0, 545.0], [15.1, 545.0], [15.2, 546.0], [15.3, 546.0], [15.4, 546.0], [15.5, 546.0], [15.6, 546.0], [15.7, 546.0], [15.8, 546.0], [15.9, 546.0], [16.0, 546.0], [16.1, 546.0], [16.2, 547.0], [16.3, 547.0], [16.4, 547.0], [16.5, 547.0], [16.6, 547.0], [16.7, 547.0], [16.8, 547.0], [16.9, 547.0], [17.0, 547.0], [17.1, 547.0], [17.2, 548.0], [17.3, 548.0], [17.4, 548.0], [17.5, 548.0], [17.6, 548.0], [17.7, 548.0], [17.8, 548.0], [17.9, 548.0], [18.0, 548.0], [18.1, 548.0], [18.2, 548.0], [18.3, 548.0], [18.4, 548.0], [18.5, 548.0], [18.6, 548.0], [18.7, 548.0], [18.8, 548.0], [18.9, 548.0], [19.0, 548.0], [19.1, 548.0], [19.2, 548.0], [19.3, 548.0], [19.4, 548.0], [19.5, 548.0], [19.6, 548.0], [19.7, 548.0], [19.8, 548.0], [19.9, 548.0], [20.0, 548.0], [20.1, 548.0], [20.2, 548.0], [20.3, 549.0], [20.4, 549.0], [20.5, 549.0], [20.6, 549.0], [20.7, 549.0], [20.8, 549.0], [20.9, 549.0], [21.0, 549.0], [21.1, 549.0], [21.2, 549.0], [21.3, 549.0], [21.4, 549.0], [21.5, 549.0], [21.6, 549.0], [21.7, 549.0], [21.8, 549.0], [21.9, 549.0], [22.0, 549.0], [22.1, 549.0], [22.2, 549.0], [22.3, 550.0], [22.4, 550.0], [22.5, 550.0], [22.6, 550.0], [22.7, 550.0], [22.8, 550.0], [22.9, 550.0], [23.0, 550.0], [23.1, 550.0], [23.2, 550.0], [23.3, 551.0], [23.4, 551.0], [23.5, 551.0], [23.6, 551.0], [23.7, 551.0], [23.8, 551.0], [23.9, 551.0], [24.0, 551.0], [24.1, 551.0], [24.2, 551.0], [24.3, 552.0], [24.4, 552.0], [24.5, 552.0], [24.6, 552.0], [24.7, 552.0], [24.8, 552.0], [24.9, 552.0], [25.0, 552.0], [25.1, 552.0], [25.2, 552.0], [25.3, 552.0], [25.4, 552.0], [25.5, 552.0], [25.6, 552.0], [25.7, 552.0], [25.8, 552.0], [25.9, 552.0], [26.0, 552.0], [26.1, 552.0], [26.2, 552.0], [26.3, 552.0], [26.4, 552.0], [26.5, 552.0], [26.6, 552.0], [26.7, 552.0], [26.8, 552.0], [26.9, 552.0], [27.0, 552.0], [27.1, 552.0], [27.2, 552.0], [27.3, 552.0], [27.4, 552.0], [27.5, 552.0], [27.6, 552.0], [27.7, 552.0], [27.8, 552.0], [27.9, 552.0], [28.0, 552.0], [28.1, 552.0], [28.2, 552.0], [28.3, 553.0], [28.4, 553.0], [28.5, 553.0], [28.6, 553.0], [28.7, 553.0], [28.8, 553.0], [28.9, 553.0], [29.0, 553.0], [29.1, 553.0], [29.2, 553.0], [29.3, 553.0], [29.4, 553.0], [29.5, 553.0], [29.6, 553.0], [29.7, 553.0], [29.8, 553.0], [29.9, 553.0], [30.0, 553.0], [30.1, 553.0], [30.2, 553.0], [30.3, 553.0], [30.4, 554.0], [30.5, 554.0], [30.6, 554.0], [30.7, 554.0], [30.8, 554.0], [30.9, 554.0], [31.0, 554.0], [31.1, 554.0], [31.2, 554.0], [31.3, 554.0], [31.4, 554.0], [31.5, 554.0], [31.6, 554.0], [31.7, 554.0], [31.8, 554.0], [31.9, 554.0], [32.0, 554.0], [32.1, 554.0], [32.2, 554.0], [32.3, 554.0], [32.4, 554.0], [32.5, 554.0], [32.6, 554.0], [32.7, 554.0], [32.8, 554.0], [32.9, 554.0], [33.0, 554.0], [33.1, 554.0], [33.2, 554.0], [33.3, 554.0], [33.4, 555.0], [33.5, 555.0], [33.6, 555.0], [33.7, 555.0], [33.8, 555.0], [33.9, 555.0], [34.0, 555.0], [34.1, 555.0], [34.2, 555.0], [34.3, 555.0], [34.4, 555.0], [34.5, 555.0], [34.6, 555.0], [34.7, 555.0], [34.8, 555.0], [34.9, 555.0], [35.0, 555.0], [35.1, 555.0], [35.2, 555.0], [35.3, 555.0], [35.4, 555.0], [35.5, 555.0], [35.6, 555.0], [35.7, 555.0], [35.8, 555.0], [35.9, 555.0], [36.0, 555.0], [36.1, 555.0], [36.2, 555.0], [36.3, 555.0], [36.4, 556.0], [36.5, 556.0], [36.6, 556.0], [36.7, 556.0], [36.8, 556.0], [36.9, 556.0], [37.0, 556.0], [37.1, 556.0], [37.2, 556.0], [37.3, 556.0], [37.4, 556.0], [37.5, 556.0], [37.6, 556.0], [37.7, 556.0], [37.8, 556.0], [37.9, 556.0], [38.0, 556.0], [38.1, 556.0], [38.2, 556.0], [38.3, 556.0], [38.4, 556.0], [38.5, 556.0], [38.6, 556.0], [38.7, 556.0], [38.8, 556.0], [38.9, 556.0], [39.0, 556.0], [39.1, 556.0], [39.2, 556.0], [39.3, 556.0], [39.4, 559.0], [39.5, 559.0], [39.6, 559.0], [39.7, 559.0], [39.8, 559.0], [39.9, 559.0], [40.0, 559.0], [40.1, 559.0], [40.2, 559.0], [40.3, 559.0], [40.4, 559.0], [40.5, 559.0], [40.6, 559.0], [40.7, 559.0], [40.8, 559.0], [40.9, 559.0], [41.0, 559.0], [41.1, 559.0], [41.2, 559.0], [41.3, 559.0], [41.4, 559.0], [41.5, 559.0], [41.6, 559.0], [41.7, 559.0], [41.8, 559.0], [41.9, 559.0], [42.0, 559.0], [42.1, 559.0], [42.2, 559.0], [42.3, 559.0], [42.4, 559.0], [42.5, 560.0], [42.6, 560.0], [42.7, 560.0], [42.8, 560.0], [42.9, 560.0], [43.0, 560.0], [43.1, 560.0], [43.2, 560.0], [43.3, 560.0], [43.4, 560.0], [43.5, 561.0], [43.6, 561.0], [43.7, 561.0], [43.8, 561.0], [43.9, 561.0], [44.0, 561.0], [44.1, 561.0], [44.2, 561.0], [44.3, 561.0], [44.4, 561.0], [44.5, 562.0], [44.6, 562.0], [44.7, 562.0], [44.8, 562.0], [44.9, 562.0], [45.0, 562.0], [45.1, 562.0], [45.2, 562.0], [45.3, 562.0], [45.4, 562.0], [45.5, 563.0], [45.6, 563.0], [45.7, 563.0], [45.8, 563.0], [45.9, 563.0], [46.0, 563.0], [46.1, 563.0], [46.2, 563.0], [46.3, 563.0], [46.4, 563.0], [46.5, 568.0], [46.6, 568.0], [46.7, 568.0], [46.8, 568.0], [46.9, 568.0], [47.0, 568.0], [47.1, 568.0], [47.2, 568.0], [47.3, 568.0], [47.4, 568.0], [47.5, 569.0], [47.6, 569.0], [47.7, 569.0], [47.8, 569.0], [47.9, 569.0], [48.0, 569.0], [48.1, 569.0], [48.2, 569.0], [48.3, 569.0], [48.4, 569.0], [48.5, 572.0], [48.6, 572.0], [48.7, 572.0], [48.8, 572.0], [48.9, 572.0], [49.0, 572.0], [49.1, 572.0], [49.2, 572.0], [49.3, 572.0], [49.4, 572.0], [49.5, 572.0], [49.6, 572.0], [49.7, 572.0], [49.8, 572.0], [49.9, 572.0], [50.0, 572.0], [50.1, 572.0], [50.2, 572.0], [50.3, 572.0], [50.4, 572.0], [50.5, 572.0], [50.6, 572.0], [50.7, 572.0], [50.8, 572.0], [50.9, 572.0], [51.0, 572.0], [51.1, 572.0], [51.2, 572.0], [51.3, 572.0], [51.4, 572.0], [51.5, 572.0], [51.6, 579.0], [51.7, 579.0], [51.8, 579.0], [51.9, 579.0], [52.0, 579.0], [52.1, 579.0], [52.2, 579.0], [52.3, 579.0], [52.4, 579.0], [52.5, 579.0], [52.6, 580.0], [52.7, 580.0], [52.8, 580.0], [52.9, 580.0], [53.0, 580.0], [53.1, 580.0], [53.2, 580.0], [53.3, 580.0], [53.4, 580.0], [53.5, 580.0], [53.6, 581.0], [53.7, 581.0], [53.8, 581.0], [53.9, 581.0], [54.0, 581.0], [54.1, 581.0], [54.2, 581.0], [54.3, 581.0], [54.4, 581.0], [54.5, 581.0], [54.6, 584.0], [54.7, 584.0], [54.8, 584.0], [54.9, 584.0], [55.0, 584.0], [55.1, 584.0], [55.2, 584.0], [55.3, 584.0], [55.4, 584.0], [55.5, 584.0], [55.6, 585.0], [55.7, 585.0], [55.8, 585.0], [55.9, 585.0], [56.0, 585.0], [56.1, 585.0], [56.2, 585.0], [56.3, 585.0], [56.4, 585.0], [56.5, 585.0], [56.6, 588.0], [56.7, 588.0], [56.8, 588.0], [56.9, 588.0], [57.0, 588.0], [57.1, 588.0], [57.2, 588.0], [57.3, 588.0], [57.4, 588.0], [57.5, 588.0], [57.6, 589.0], [57.7, 589.0], [57.8, 589.0], [57.9, 589.0], [58.0, 589.0], [58.1, 589.0], [58.2, 589.0], [58.3, 589.0], [58.4, 589.0], [58.5, 589.0], [58.6, 589.0], [58.7, 589.0], [58.8, 589.0], [58.9, 589.0], [59.0, 589.0], [59.1, 589.0], [59.2, 589.0], [59.3, 589.0], [59.4, 589.0], [59.5, 589.0], [59.6, 590.0], [59.7, 590.0], [59.8, 590.0], [59.9, 590.0], [60.0, 590.0], [60.1, 590.0], [60.2, 590.0], [60.3, 590.0], [60.4, 590.0], [60.5, 590.0], [60.6, 590.0], [60.7, 592.0], [60.8, 592.0], [60.9, 592.0], [61.0, 592.0], [61.1, 592.0], [61.2, 592.0], [61.3, 592.0], [61.4, 592.0], [61.5, 592.0], [61.6, 592.0], [61.7, 595.0], [61.8, 595.0], [61.9, 595.0], [62.0, 595.0], [62.1, 595.0], [62.2, 595.0], [62.3, 595.0], [62.4, 595.0], [62.5, 595.0], [62.6, 595.0], [62.7, 595.0], [62.8, 595.0], [62.9, 595.0], [63.0, 595.0], [63.1, 595.0], [63.2, 595.0], [63.3, 595.0], [63.4, 595.0], [63.5, 595.0], [63.6, 595.0], [63.7, 598.0], [63.8, 598.0], [63.9, 598.0], [64.0, 598.0], [64.1, 598.0], [64.2, 598.0], [64.3, 598.0], [64.4, 598.0], [64.5, 598.0], [64.6, 598.0], [64.7, 599.0], [64.8, 599.0], [64.9, 599.0], [65.0, 599.0], [65.1, 599.0], [65.2, 599.0], [65.3, 599.0], [65.4, 599.0], [65.5, 599.0], [65.6, 599.0], [65.7, 601.0], [65.8, 601.0], [65.9, 601.0], [66.0, 601.0], [66.1, 601.0], [66.2, 601.0], [66.3, 601.0], [66.4, 601.0], [66.5, 601.0], [66.6, 601.0], [66.7, 603.0], [66.8, 603.0], [66.9, 603.0], [67.0, 603.0], [67.1, 603.0], [67.2, 603.0], [67.3, 603.0], [67.4, 603.0], [67.5, 603.0], [67.6, 603.0], [67.7, 604.0], [67.8, 604.0], [67.9, 604.0], [68.0, 604.0], [68.1, 604.0], [68.2, 604.0], [68.3, 604.0], [68.4, 604.0], [68.5, 604.0], [68.6, 604.0], [68.7, 606.0], [68.8, 606.0], [68.9, 606.0], [69.0, 606.0], [69.1, 606.0], [69.2, 606.0], [69.3, 606.0], [69.4, 606.0], [69.5, 606.0], [69.6, 606.0], [69.7, 613.0], [69.8, 613.0], [69.9, 613.0], [70.0, 613.0], [70.1, 613.0], [70.2, 613.0], [70.3, 613.0], [70.4, 613.0], [70.5, 613.0], [70.6, 613.0], [70.7, 613.0], [70.8, 614.0], [70.9, 614.0], [71.0, 614.0], [71.1, 614.0], [71.2, 614.0], [71.3, 614.0], [71.4, 614.0], [71.5, 614.0], [71.6, 614.0], [71.7, 614.0], [71.8, 614.0], [71.9, 614.0], [72.0, 614.0], [72.1, 614.0], [72.2, 614.0], [72.3, 614.0], [72.4, 614.0], [72.5, 614.0], [72.6, 614.0], [72.7, 614.0], [72.8, 614.0], [72.9, 614.0], [73.0, 614.0], [73.1, 614.0], [73.2, 614.0], [73.3, 614.0], [73.4, 614.0], [73.5, 614.0], [73.6, 614.0], [73.7, 614.0], [73.8, 614.0], [73.9, 614.0], [74.0, 614.0], [74.1, 614.0], [74.2, 614.0], [74.3, 614.0], [74.4, 614.0], [74.5, 614.0], [74.6, 614.0], [74.7, 614.0], [74.8, 615.0], [74.9, 615.0], [75.0, 615.0], [75.1, 615.0], [75.2, 615.0], [75.3, 615.0], [75.4, 615.0], [75.5, 615.0], [75.6, 615.0], [75.7, 615.0], [75.8, 616.0], [75.9, 616.0], [76.0, 616.0], [76.1, 616.0], [76.2, 616.0], [76.3, 616.0], [76.4, 616.0], [76.5, 616.0], [76.6, 616.0], [76.7, 616.0], [76.8, 622.0], [76.9, 622.0], [77.0, 622.0], [77.1, 622.0], [77.2, 622.0], [77.3, 622.0], [77.4, 622.0], [77.5, 622.0], [77.6, 622.0], [77.7, 622.0], [77.8, 623.0], [77.9, 623.0], [78.0, 623.0], [78.1, 623.0], [78.2, 623.0], [78.3, 623.0], [78.4, 623.0], [78.5, 623.0], [78.6, 623.0], [78.7, 623.0], [78.8, 625.0], [78.9, 625.0], [79.0, 625.0], [79.1, 625.0], [79.2, 625.0], [79.3, 625.0], [79.4, 625.0], [79.5, 625.0], [79.6, 625.0], [79.7, 625.0], [79.8, 625.0], [79.9, 625.0], [80.0, 625.0], [80.1, 625.0], [80.2, 625.0], [80.3, 625.0], [80.4, 625.0], [80.5, 625.0], [80.6, 625.0], [80.7, 625.0], [80.8, 625.0], [80.9, 632.0], [81.0, 632.0], [81.1, 632.0], [81.2, 632.0], [81.3, 632.0], [81.4, 632.0], [81.5, 632.0], [81.6, 632.0], [81.7, 632.0], [81.8, 632.0], [81.9, 634.0], [82.0, 634.0], [82.1, 634.0], [82.2, 634.0], [82.3, 634.0], [82.4, 634.0], [82.5, 634.0], [82.6, 634.0], [82.7, 634.0], [82.8, 634.0], [82.9, 642.0], [83.0, 642.0], [83.1, 642.0], [83.2, 642.0], [83.3, 642.0], [83.4, 642.0], [83.5, 642.0], [83.6, 642.0], [83.7, 642.0], [83.8, 642.0], [83.9, 642.0], [84.0, 642.0], [84.1, 642.0], [84.2, 642.0], [84.3, 642.0], [84.4, 642.0], [84.5, 642.0], [84.6, 642.0], [84.7, 642.0], [84.8, 642.0], [84.9, 650.0], [85.0, 650.0], [85.1, 650.0], [85.2, 650.0], [85.3, 650.0], [85.4, 650.0], [85.5, 650.0], [85.6, 650.0], [85.7, 650.0], [85.8, 650.0], [85.9, 652.0], [86.0, 652.0], [86.1, 652.0], [86.2, 652.0], [86.3, 652.0], [86.4, 652.0], [86.5, 652.0], [86.6, 652.0], [86.7, 652.0], [86.8, 652.0], [86.9, 657.0], [87.0, 657.0], [87.1, 657.0], [87.2, 657.0], [87.3, 657.0], [87.4, 657.0], [87.5, 657.0], [87.6, 657.0], [87.7, 657.0], [87.8, 657.0], [87.9, 660.0], [88.0, 660.0], [88.1, 660.0], [88.2, 660.0], [88.3, 660.0], [88.4, 660.0], [88.5, 660.0], [88.6, 660.0], [88.7, 660.0], [88.8, 660.0], [88.9, 661.0], [89.0, 661.0], [89.1, 661.0], [89.2, 661.0], [89.3, 661.0], [89.4, 661.0], [89.5, 661.0], [89.6, 661.0], [89.7, 661.0], [89.8, 661.0], [89.9, 666.0], [90.0, 666.0], [90.1, 666.0], [90.2, 666.0], [90.3, 666.0], [90.4, 666.0], [90.5, 666.0], [90.6, 666.0], [90.7, 666.0], [90.8, 666.0], [90.9, 666.0], [91.0, 667.0], [91.1, 667.0], [91.2, 667.0], [91.3, 667.0], [91.4, 667.0], [91.5, 667.0], [91.6, 667.0], [91.7, 667.0], [91.8, 667.0], [91.9, 667.0], [92.0, 669.0], [92.1, 669.0], [92.2, 669.0], [92.3, 669.0], [92.4, 669.0], [92.5, 669.0], [92.6, 669.0], [92.7, 669.0], [92.8, 669.0], [92.9, 669.0], [93.0, 672.0], [93.1, 672.0], [93.2, 672.0], [93.3, 672.0], [93.4, 672.0], [93.5, 672.0], [93.6, 672.0], [93.7, 672.0], [93.8, 672.0], [93.9, 672.0], [94.0, 685.0], [94.1, 685.0], [94.2, 685.0], [94.3, 685.0], [94.4, 685.0], [94.5, 685.0], [94.6, 685.0], [94.7, 685.0], [94.8, 685.0], [94.9, 685.0], [95.0, 687.0], [95.1, 687.0], [95.2, 687.0], [95.3, 687.0], [95.4, 687.0], [95.5, 687.0], [95.6, 687.0], [95.7, 687.0], [95.8, 687.0], [95.9, 687.0], [96.0, 688.0], [96.1, 688.0], [96.2, 688.0], [96.3, 688.0], [96.4, 688.0], [96.5, 688.0], [96.6, 688.0], [96.7, 688.0], [96.8, 688.0], [96.9, 688.0], [97.0, 696.0], [97.1, 696.0], [97.2, 696.0], [97.3, 696.0], [97.4, 696.0], [97.5, 696.0], [97.6, 696.0], [97.7, 696.0], [97.8, 696.0], [97.9, 696.0], [98.0, 756.0], [98.1, 756.0], [98.2, 756.0], [98.3, 756.0], [98.4, 756.0], [98.5, 756.0], [98.6, 756.0], [98.7, 756.0], [98.8, 756.0], [98.9, 756.0], [99.0, 757.0], [99.1, 757.0], [99.2, 757.0], [99.3, 757.0], [99.4, 757.0], [99.5, 757.0], [99.6, 757.0], [99.7, 757.0], [99.8, 757.0], [99.9, 757.0], [100.0, 757.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 500.0, "maxY": 65.0, "series": [{"data": [[600.0, 32.0], [700.0, 2.0], [500.0, 65.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 99.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 99.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 99.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 45.92929292929294, "minX": 1.66469922E12, "maxY": 45.92929292929294, "series": [{"data": [[1.66469922E12, 45.92929292929294]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66469922E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 528.0, "minX": 1.0, "maxY": 703.3333333333334, "series": [{"data": [[2.0, 544.0], [3.0, 569.0], [4.0, 561.0], [5.0, 552.0], [6.0, 555.0], [7.0, 562.0], [8.0, 536.0], [9.0, 550.0], [10.0, 552.0], [11.0, 535.0], [13.0, 569.0], [14.0, 588.0], [15.0, 538.0], [16.0, 548.0], [17.0, 529.0], [18.0, 563.0], [19.0, 528.0], [20.0, 536.0], [22.0, 549.0], [23.0, 560.0], [24.0, 554.0], [26.0, 567.0], [27.0, 601.0], [28.0, 556.0], [29.0, 603.0], [30.0, 622.0], [31.0, 540.0], [33.0, 590.0], [32.0, 552.0], [35.0, 545.0], [34.0, 555.0], [37.0, 589.0], [36.0, 553.0], [39.0, 546.0], [38.0, 552.0], [41.0, 549.0], [40.0, 548.0], [43.0, 584.0], [42.0, 551.0], [45.0, 599.0], [44.0, 592.0], [47.0, 554.0], [46.0, 549.0], [49.0, 528.0], [48.0, 556.0], [51.0, 541.0], [50.0, 531.0], [53.0, 556.0], [52.0, 553.0], [54.0, 625.0], [57.0, 568.0], [56.0, 581.5], [59.0, 564.0], [58.0, 632.0], [61.0, 606.0], [60.0, 656.0], [62.0, 553.0], [67.0, 642.0], [66.0, 661.0], [65.0, 572.0], [64.0, 694.6666666666666], [71.0, 669.0], [70.0, 684.0], [69.0, 635.6], [68.0, 703.3333333333334], [75.0, 615.5], [74.0, 620.0], [73.0, 626.0], [72.0, 623.0], [78.0, 614.0], [77.0, 595.0], [76.0, 613.0], [81.0, 595.0], [83.0, 572.0], [80.0, 593.0], [1.0, 548.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[45.92929292929294, 588.9393939393939]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 83.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 189.75, "minX": 1.66469922E12, "maxY": 12832.566666666668, "series": [{"data": [[1.66469922E12, 12832.566666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66469922E12, 189.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66469922E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 588.9393939393939, "minX": 1.66469922E12, "maxY": 588.9393939393939, "series": [{"data": [[1.66469922E12, 588.9393939393939]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66469922E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 588.818181818182, "minX": 1.66469922E12, "maxY": 588.818181818182, "series": [{"data": [[1.66469922E12, 588.818181818182]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66469922E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 270.4545454545455, "minX": 1.66469922E12, "maxY": 270.4545454545455, "series": [{"data": [[1.66469922E12, 270.4545454545455]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66469922E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 528.0, "minX": 1.66469922E12, "maxY": 757.0, "series": [{"data": [[1.66469922E12, 757.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66469922E12, 666.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66469922E12, 757.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66469922E12, 687.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66469922E12, 528.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66469922E12, 572.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66469922E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 572.0, "minX": 99.0, "maxY": 572.0, "series": [{"data": [[99.0, 572.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 99.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 572.0, "minX": 99.0, "maxY": 572.0, "series": [{"data": [[99.0, 572.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 99.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.65, "minX": 1.66469922E12, "maxY": 1.65, "series": [{"data": [[1.66469922E12, 1.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66469922E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.65, "minX": 1.66469922E12, "maxY": 1.65, "series": [{"data": [[1.66469922E12, 1.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66469922E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.65, "minX": 1.66469922E12, "maxY": 1.65, "series": [{"data": [[1.66469922E12, 1.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66469922E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.65, "minX": 1.66469922E12, "maxY": 1.65, "series": [{"data": [[1.66469922E12, 1.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66469922E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

