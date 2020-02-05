import React from "react";
import Matter from "matter-js";

class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        render: null
    };
  }

  componentDidMount() {
    Matter.use(
        'matter-wrap'
    );
    
    let Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies;

    // create engine
    let engine = Engine.create(),
        world = engine.world;

    // create renderer
    let render = Render.create({
        element: document.getElementById('___gatsby'),
        engine: engine,
        options: {
            wireframes: false,
            width: window.innerWidth,
            height: window.innerHeight,
            showAngleIndicator: false,
            background: 'transparent',
            wireframeBackground: 'transparent'
        }
    });

    Render.run(render);

    // create runner
    let runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    World.add(world, [
        Bodies.rectangle(400, 600, 1200, 0.1, { isStatic: true })
    ]);

    let stack = Composites.stack(20, 0, 10, 8, 10, 10, function(x, y) {
        return Bodies.circle(x, y, Common.random(15, 30), { restitution: 0.6, friction: 0.1, fillStyle: ['#fff'] });
    });
    
    World.add(world, [
        stack,
    ]);

    // add mouse control
    let mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 600, y: 600 }
    });

    // wrapping using matter-wrap plugin
    let allBodies = Composite.allBodies(world);

    for (let i = 0; i < allBodies.length; i += 1) {
        allBodies[i].plugin.wrap = {
            min: { x: render.bounds.min.x - 100, y: render.bounds.min.y },
            max: { x: render.bounds.max.x + 100, y: render.bounds.max.y }
        };
    }

    Engine.run(engine);

    Render.run(render);

    let canvas = document.getElementsByTagName('canvas')[0]

    window.addEventListener("resize", function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // window.addEventListener("resize", function(){
    //     canvas.width = window.innerWidth;
    //     canvas.height = window.innerHeight;
    // });
    this.setState({
        render: render
    })
  }

  componentWillUnmount() {
    const world = this.state.render.engine.world
    const body = world.bodies[0]
    
    Matter.World.remove(world, body)

    document.getElementsByTagName('canvas')[0].remove()
  }

  render() {
    return <div ref="scene" />;
  }
}
export default Scene;