/**
 * debugValue.js
 * Print a value taken from an input message
 * Copyright 2015 Valerio Vaccaro - www.valeriovaccaro.it
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

var RED = require(process.env.NODE_RED_HOME+"/red/red");

function Debug(n) {
    RED.nodes.createNode(this,n);

    var msg = {};
    var value;
    var text = "";
    var node = this;

    // Get varables from the node
    this.value = n.value;
    
    // Status icon
    this.status({fill:"grey",shape:"dot",text:"---"});

    this.on("input", function(msg){ 
        try { 
            text = msg.payload;
            this.status({fill:"blue",shape:"dot",text:text});
        }
	    catch (err) { console.log(err); }    
    });

    this.on("close", function() {
        try { Bleacon.stopScanning(); }
        catch (err) { console.log(err); }
    });
}

// Register the node by name. This must be called before overriding any of the
// Node functions.
RED.nodes.registerType("debugValue", Debug);
