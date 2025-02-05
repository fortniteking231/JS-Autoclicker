        //Var's
        const cps = prompt("CPS: ");
        let x,y;

        //CPS Prompt + Validate CPS
        if(!cps||isNaN(cps)||cps<=0){
            alert('Error, Please Try Again!');
            endAutoClicker();
        } else {
            alert(`Autoclicker activated at ${cps} CPS! Press [Ctrl + E] to stop.`);
        }

        //Event Listeners
        //mouse pos
        const mouseListener = document.addEventListener('mousemove',e=>{
            x=e.clientX;
            y=e.clientY;
        })
        //Keybind to stop autoclicker
        const keyBindListener = document.addEventListener('keydown',e=>{
            if(e.key === 'e' && e.ctrlKey){
                alert('Autoclicker Deactivated!');
                endAutoClicker();
            }
        })
        //The 'autoclicker' of the Autoclicker
        const autoClickerInterval = setInterval(()=>{
            const clicked = document.elementFromPoint(x,y);
            if(clicked) clicked.click();
        }, 1000/cps);

        //functions

        function endAutoClicker(){
            clearInterval(autoClickerInterval);
            document.removeEventListener('mousemove', mouseListener);
            document.removeEventListener('keydown', keyBindListener);
        }
