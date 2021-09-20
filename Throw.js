AFRAME.registerComponent('ball',{

    init:function(){
        this.throwBalls()
    },

    throwBalls:function(){
        window.addEventListener('keydown',(e)=>{
            if(e.key==='b'){
                var ball=document.createElement('a-entity')
                ball.setAttribute('geometry',{
                    primitive:'sphere',
                    radius:'2',
                })
                ball.setAttribute('material','color','black')
                ball.setAttribute('scale',{x:0.05,y:0.05,y:0.05})
                var camera=document.querySelector('#camera')
                var pos=camera.getAttribute('position')
                posY=pos.y
                ball.setAttribute('position',{x:pos.x,y:pos.y,z:pos.z})
                var cam=document.querySelector('#camera').object3D
                var dir=new THREE.Vector3()
                cam.getWorldDirection(dir)
                ball.setAttribute('velocity',dir.multiplyScalar(-10))
                ball.setAttribute('velocity',{
                    x:0,
                    y:0,
                    z:-1
                })
                var scene=document.querySelector('#scene')
                scene.appendChild(ball)
            }
        })
    }
})