var Shark = (function(){

  var my = {};

  function Part(name, material, transition, upperTransition, lowerTransition) {
      this.material = material;
      this.transition = transition;
      this.upperTransition = upperTransition;
      this.lowerTransition = lowerTransition;
  }

  var wholeLegL = function(m) {
    M.translate(m, [-.13, .35, 0]);
    M.rotateX(m, -Math.sin(1.5*time)+.25);
    M.translate(m, [0, -.3, 0]);
  }

  var wholeLegR = function(m) {
    M.translate(m, [.13, .35, 0]);
    M.rotateX(m, Math.sin(1.5*time)+.25);
    M.translate(m, [0, -.3, 0]);
  }

  var lowerLeg = function(m) {
    M.translate(m, [0, -.5, -Math.cos(1.5*time)/12]);
  }

  var wholeArmL = function(m) {
    M.translate(m, [0, 1, 0]);
    M.rotateX(m, -Math.sin(time));
    M.translate(m, [0, -1, 0]);
  }

  var wholeArmR = function(m) {
    M.translate(m, [0, 1, 0]);
    M.rotateX(m, Math.sin(time));
    M.translate(m, [0, -1, 0]);
  }

  var lowerArm = function(m) {
    M.translate(m, [0, .6, 0]);
    M.rotateX(m, (-Math.PI/6) * Math.sin(time) - Math.PI/2);
    M.translate(m, [0, -.6, 0]);
  }

  var pieces = [
    {
      parts: new Part("legR", "legs", function(m){
        M.rotateX(m, Math.PI/2);
        M.scale(m, .35);
        M.scale(m, .25, .25, .85);
      }, wholeLegR),
      sceneObject: null
    },
    {
      parts: new Part("legL", "legs", function(m){
        M.rotateX(m, Math.PI/2);
        M.scale(m, .35);
        M.scale(m, .25, .25, .85);
      }, wholeLegL),
      sceneObject: null
    },
    {
      parts: new Part("LLegR", "legs", function(m){
        M.scale(m, .3);
        M.rotateX(m, Math.sin(time*1.5) * Math.PI/8 + Math.PI/2*1.1);
        M.translate(m, [0, 0, 0]);
        M.scale(m, .20, .20, 1.);
      }, wholeLegR, lowerLeg),
      sceneObject: null
    },
    {
      parts: new Part("LLegL", "legs", function(m){
        M.scale(m, .3);
        M.rotateX(m, Math.sin(time*1.5) * Math.PI/8 + Math.PI/2*1.1);
        M.translate(m, [0, 0, 0]);
        M.scale(m, .20, .20, 1.);
      }, wholeLegL, lowerLeg),
      sceneObject: null
    },
    {
      parts: new Part("footL", "brick", function(m){
        M.rotateX(m, Math.PI/2);
        M.scale(m, .05);
        M.translate(m, [0, 2, 5]);
      }, wholeLegL, lowerLeg),
      sceneObject: null
    },
    {
      parts: new Part("footR", "brick", function(m){
        M.rotateX(m, Math.PI/2);
        M.scale(m, .05);
        M.translate(m, [0, 2, 5]);
      }, wholeLegR, lowerLeg),
      sceneObject: null
    },
    {
      parts: new Part("armL", "arm", function(m){
        M.rotateX(m, Math.PI/2);
        M.scale(m, .35);
        M.rotateY(m, -Math.PI/10);
        M.translate(m, [-1.7, 0, -2.15]);
        M.scale(m, .25, .25, .85);
      }, wholeArmL),
      sceneObject: null
    },
    {
      parts: new Part("armR", "arm", function(m){
        M.rotateX(m, Math.PI/2);
        M.scale(m, .35);
        M.rotateY(m, Math.PI/10);
        M.scale(m, .25, .25, .85);
        M.translate(m, [6.7, 0, -2.5]);
      }, wholeArmR),
      sceneObject: null
    },
    {
      parts: new Part("LarmL", "elbow", function(m){
        M.rotateX(m, Math.PI/2);
        M.scale(m, .3);
        M.translate(m, [-1.35, 0, -1.25]);
        M.scale(m, .20, .20, 1.);
      }, wholeArmL, lowerArm),
      sceneObject: null
    },
    {
      parts: new Part("LarmR", "elbow", function(m){
        M.rotateX(m, Math.PI/2);
        M.scale(m, .3);
        M.scale(m, .20, .20, 1.);
        M.translate(m, [6.75, 0, -1.25]);
      }, wholeArmR, lowerArm),
      sceneObject: null
    },
    {
      parts: new Part("handL", "elbow", function(m){
        M.rotateX(m, Math.PI/2);
        M.scale(m, .05);
        M.translate(m, [-8.0, 0, -.4]);
      }, wholeArmL, lowerArm),
      sceneObject: null
    },
    {
      parts: new Part("handR", "elbow", function(m){
        M.rotateX(m, Math.PI/2);
        M.scale(m, .05);
        M.translate(m, [8.0, 0, -.4]);
      }, wholeArmR, lowerArm),
      sceneObject: null
    },
    {
      parts: new Part("body", "shirt", function(m){
        M.rotateX(m, Math.PI/2);
        M.scale(m, .5);
        M.scale(m, .50, .50, .85);
        M.translate(m, [0, 0, -1.9]);
        M.rotateX(m, -Math.PI/2);
        M.rotateY(m, Math.PI/2);
        M.rotateX(m, -Math.PI/2);
      }),
      sceneObject: null
    },
    {
      parts: new Part("head", "face", function(m){
        M.rotateX(m, Math.PI/2);
        M.scale(m, .22);
        M.translate(m, [0, 1.2, -6.3]);
        M.translate(m, [0, .25 * Math.sin(time), 0]);
        M.rotateX(m, Math.PI/4);
        M.rotateZ(m, Math.PI/2);
        M.rotateY(m, -Math.PI + Math.PI/4);
        M.rotateY(m, .25* Math.sin(time) + .15);
      }),
      sceneObject: null
    }
  ];

  my.init = function(scene, materials) {
    for (var i = 0; i < pieces.length; i++) {
      pieces[i].sceneObject = new SceneObject();
      pieces[i].sceneObject.setVertices(SHAPE.sphere(50));
      pieces[i].sceneObject.setMaterial(materials[pieces[i].parts.material]);
      scene.addObject(pieces[i].sceneObject);
    }
  }

  my.transition = function(m) {
    for (var i = 0; i < pieces.length; i++) {
      M.save(m);
        if(pieces[i].parts.upperTransition) {
          pieces[i].parts.upperTransition(m)
        }
        if(pieces[i].parts.lowerTransition) {
          pieces[i].parts.lowerTransition(m)
        }
        pieces[i].parts.transition(m);
        pieces[i].sceneObject.setMatrix(m);
      M.restore(m);
    }
  }

  return my;
})();
