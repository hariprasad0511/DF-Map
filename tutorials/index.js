
  
var cy = cytoscape({
  container: document.getElementById('cy'),

  elements: {
    nodes: [
      { 
        "data" : { 
          "id": "hari",
          "parent" : "user",
          "user_type": "Data Subject",
          "scope": "in_scope"
        },
        "group" : "nodes",
        // "position": {
        //   "x": -900,
        //   "y": -50
        // }
      },
      {
        "data" : {
          "id" : "user"
        },
        "group" : "nodes"
      },
      {
        "data" : {
          "id" : "guru",
          "parent" : "user",
          "user_type": "Non-SE Persona",
          "scope": "in_scope"
        },
        "group" : "nodes",
        // "position" : { 
        //   "x" : -900, 
        //   "y" : 50 
        // }
     },
      {
        "data" : {
          "id" : "mobile",
          "parent" : "device",
          "scope": "in_scope"
        },
        "group" : "nodes",
        // "position" : { 
        //   "x" : -500, 
        //   "y" : 0 
        // }
     },
     {
        "data" : {
          "id" : "device"
        },
        "group" : "nodes"
      },
     {
        "data" : {
          "id" : "Other ENV"
        },
        "group" : "nodes"
     },
     {
        "data" : {
          "id" : "icms",
          "parent" : "Other ENV",
          "scope": "out_of_scope"
        },
        "group" : "nodes",
        // "position" : { 
        //   "x" : 100, 
        //   "y" : 50 
        // }
      },
     {
        "data" : {
          "id" : "aws",
          "parent" : "SE ENV"
        },
        "group" : "nodes",
        // "position" : { 
        //   "x" : 500, 
        //   "y" : 0 
        // }
     },
     {
        "data" : {
          "id" : "SE ENV"
        },
        "group" : "nodes"
     }
    ],
    edges: [
      {
        "data" : {
          "id" : "con1",
          "source" : "hari",
          "target" : "mobile",
          "scope": "in_scope"
        },
        "group" : "edges"
      },
     {
        "data" : {
          "id" : "con2",
          "source" : "mobile",
          "target" : "guru",
          "scope": "in_scope"
        },
        "group" : "edges"
     },
     {
        "data" : {
          "id" : "con3",
          "source" : "mobile",
          "target" : "aws",
          "scope": "in_scope"
        },
        "group" : "edges"
     },
     {
        "data" : {
          "id" : "con4",
          "source" : "mobile",
          "target" : "icms",
          "scope": "out_of_scope"
        },
        "group" : "edges"
     }
    ]
  },

  style: [

  {
    selector: 'node',
    css: {               
      label: 'data(id)',
      "font-size": 8,
      'text-valign': 'bottom',
      'text-halign': 'center',
    }
  },
  {
    selector: 'edge',
    css: {               
      //label: 'data(id)',
      "font-size": 8,
      'text-valign': 'top',
      'text-halign': 'center',
      'width': 2 
    }
  },

  {
    selector: 'node[user_type="Data Subject"]',
    css: {               
      'label': 'data(id)',
      'background-color' : 'white',        
      'height': '7px',
      'width': '7px',
      'border-width': '2px',
      'border-style': 'solid',
      'border-color': 'red'
    }
  },
  {
    selector: 'node[user_type="Non-SE Persona"]',
    css: {               
      'label': 'data(id)',
      'background-color' : 'white',        
      'height': '7px',
      'width': '7px',
      'border-width': '2px',
      'border-style': 'solid',
      'border-color': 'blue'
    }
  },
  {
    selector: 'node[user_type="SE Subject"]',
    css: {               
      'label': 'data(id)',
      'background-color' : 'white',        
      'height': '7px',
      'width': '7px',
      'border-width': '2px',
      'border-style': 'solid',
      'border-color': 'green'
    }
  },
  {
    selector: 'node[parent="device"]',
    css: {               
      'label': 'data(id)',
      'background-color' : 'white',        
      'height': '7px',
      'width': '7px',
      'border-width': '2px',
      'border-style': 'solid',
      'border-color': 'green' 
    }
  },
  {
    selector: 'node[parent="Other ENV"]',
    css: {               
      'label': 'data(id)',
      'background-color' : 'white',        
      'height': '7px',
      'width': '7px',
      'border-width': '2px',
      'border-style': 'solid',
      'border-color': 'green'
    }
  },
  {
    selector: 'node[parent="SE ENV"]',
    css: {               
      'label': 'data(id)',
      'background-color' : 'white',        
      'height': '7px',
      'width': '7px',
      'border-width': '2px',
      'border-style': 'solid',
      'border-color': 'green' 
    }
  },
  {
    selector: 'node[scope="out_of_scope"]',
    css: {               
      'label': 'data(id)',
      'background-color' : 'white',        
      'height': '7px',
      'width': '7px',
      'border-width': '2px',
      'border-style': 'solid',
      'border-color': 'black'
    }
  },
  {
    selector: ':parent',
    css: {
      'text-valign': 'bottom',
      'text-halign': 'center',
    }
  },
  {
    selector: '[scope="in_scope"]',
    css: {               
      'line-color': 'blue'
    }
  },
  {
    selector: '[scope="out_of_scope"]',
    css: {               
      'line-color': 'blue',
      'line-style': 'dashed'
    }
  }
  ],

  layout: {
    name: 'grid',
    boundingBox: {
      x1: -500,
      y1: -800,
      x2: -100,
      y2: -100
    },
    fit: true,
    gravity: 1,
    //condense: true,     
  }



});

var options = {
  name: 'random',
  // Called on `layoutready`
  ready: function() {},
  // Called on `layoutstop`
  stop: function() {},
  // Whether to animate while running the layout
  animate: true,
  // The layout animates only after this many milliseconds
  // (prevents flashing on fast runs)
  animationThreshold: 250,
  // Number of iterations between consecutive screen positions update
  // (0 -> only updated on the end)
  refresh: 20,
  // Whether to fit the network view after when done
  fit: true,
  // Padding on fit
  padding: 30,
  // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  boundingBox: {
    boundingBox: {
      x1: -500,
      y1: -800,
      x2: -100,
      y2: -100
    },
  },
  avoidOverlap: true,
  // Extra spacing between components in non-compound graphs
  //componentSpacing: 100,
  // Node repulsion (non overlapping) multiplier
  // nodeRepulsion: function(node) {
  //   return 400000;
  // },
  // Node repulsion (overlapping) multiplier
  //nodeOverlap: 10,
  // Ideal edge (non nested) length
  // idealEdgeLength: function(edge) {
  //   return 10;
  // },
  // Divisor to compute edge forces
  // edgeElasticity: function(edge) {
  //   return 100;
  // },
  // Nesting factor (multiplier) to compute ideal edge length for nested edges
  //nestingFactor: 5,
  // Gravity force (constant)
  //gravity: 80,
  // Maximum number of iterations to perform
  //numIter: 1000,
  // Initial temperature (maximum node displacement)
  //initialTemp: 200,
  // Cooling factor (how the temperature is reduced between consecutive iterations
  //coolingFactor: 0.95,
  // Lower temperature threshold (below this point the layout will end)
  //minTemp: 1.0,
  // Whether to use threading to speed up the layout
  //useMultitasking: true
}; 

cy.layout(options);

cy.on('click', 'node', function(evt) {
  console.log('clicked ' + this.id());
});

var destroy = function() {
  cy.destroy();
}

var addNode = function() {
  var elem_id = document.getElementById('node_id').value;
  var from_node = document.getElementById('from_node').value;
  var parent_node = document.getElementById('parent').value;
  var user_type = document.getElementById('user_type').value;
  var scope = document.getElementById('scope').value;
  //var selColor = document.getElementById('selColor').value;
  console.log(user_type)
  if (elem_id.length === 0 || from_node.length === 0 || parent_node === 0) {
    alert("please fill both input fields");
    return;
  }

  
  if (parent_node === "user"){
    cy.add([{
      data: {
        id: elem_id,
        parent: parent_node,
        user_type: user_type  
      },
      "group" : "nodes",
        // "position" : { 
        //     "x" : -900,  
        // }
    }, {
      data: {
        id: from_node + '' + elem_id,
        source: from_node + '',
        target: elem_id + '',
        scope: scope
      }
    }
    ]);
  }

  else if (parent_node === "device"){
    cy.add([{
      data: {
        id: elem_id,
        parent: parent_node,
        scope: scope
      },
      "group" : "nodes",
        "position" : { 
            "x" : -500,  
        }
    }, {
      data: {
        id: from_node + '' + elem_id,
        source: from_node + '',
        target: elem_id + '',
        scope: scope

      }
    }
    ]);
  }

  else {
    cy.add([{
      data: {
        id: elem_id,
        parent: parent_node,
        scope: scope  
      },
      "group" : "nodes",
        "position" : { 
            "x" : 100,  
        }
    }, {
      data: {
        id: from_node + '' + elem_id,
        source: from_node + '',
        target: elem_id + '',
        scope: scope

      }
    }
    ]);
  }
  
  cy.layout(options);
}

/*
1. Red circle w/ white centre - data subject (PII) / (Data Providers) (Users of the platform/APIs/Apps)
2. Green circle w/ wite centre - SE subject (Anyone w/ sesa inclu. non.se.com / )
3. Blue color w/ white centre - Non SE Persona (3rd party/vendors/suppliers)

4. Might add one more parent

5. In-Scope blue solid circle - NW/ connections blue
6. Out-Of scope blue 
*/
