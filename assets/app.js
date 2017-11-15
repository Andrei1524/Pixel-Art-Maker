// AndreiKnight
// when document loaded
document.addEventListener("DOMContentLoaded", function() {
    let model = {
        height: 0,
        width: 0,
        color: "#000"
    }


    let controller = {
        init: function() {
            // let's get the current settings

            // height
            let height = document.querySelector("#height")
            
            // width
            let width  = document.querySelector("#width")

            // color
            let color  = document.querySelector("#color")

            
            // init the view
            view.init()
        },

        submit: function() {
            // on click , update our model with the input's values
            model.height = height.value
            model.width  = width.value
            model.color  = color.value

            view.render()
        },

        getSettings: function() {
            let settings = {
                height: model.height,
                width: model.width,
                color: model.color
            }

            return settings
        },

        resetSettings: function() {
            model.height = 0
            model.width = 0
            model.color = "#000"

            view.render();
        }

    }


    let view = {
        init: function() {
            // select the grid
            let grid = document.querySelector("#grid")
            
            // submit button
            let submit_btn = document.querySelector("#submit")

            // when we click run the controller.submit() function
            submit_btn.addEventListener("click", function() {
                // clear the grid
                grid.innerHTML = ""
                controller.submit()
            })

            this.render()
        },

        render: function() {

            
            // if we got these values, render the grid
            
            if (controller.getSettings()) {
                grid.style.gridTemplateColumns = "repeat("+controller.getSettings().width+", 20px)"
                grid.style.gridTemplateRows = "repeat("+controller.getSettings().height+", 20px)"
                

                let blocks = Number(controller.getSettings().height) * Number(controller.getSettings().width)
                
                for (let block = 0; block < blocks; block++) {
                   
                // create a block (pixel)
                let block_div = document.createElement("div")
                block_div.className = "block"

                grid.appendChild(block_div)

                }
            }
        }
    }


    controller.init()
});
