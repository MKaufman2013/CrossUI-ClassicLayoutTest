xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_1")
                .setQueryURL("https://api.coingecko.com/api/v3/simple/price?ids=0xCC4304A31d09258b0029eA7FE63d032f52e44EFe&vs_currencies=usd&include_24hr_change=true")
                .setQueryMethod("GET")
            );
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_4")
                .setName("api_4")
            );
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout5")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":100,
                        "min":50,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":450
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":50,
                        "min":20,
                        "max":400,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    }
                ])
            );
            
            host.ctl_layout5.append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout13")
                .setItems([
                    {
                        "id":"before",
                        "pos":"before",
                        "size":150,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":true
                    },
                    {
                        "id":"main",
                        "min":10,
                        "size":530
                    },
                    {
                        "id":"after",
                        "pos":"after",
                        "size":120,
                        "min":10,
                        "locked":false,
                        "folded":false,
                        "hidden":false,
                        "cmd":false
                    }
                ])
                .setType("horizontal"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button5")
                .setLeft("13.714285714285714em")
                .setTop("6.095238095238095em")
                .setWidth("12.876190476190477em")
                .setHeight("7.390476190476191em")
                .setCaption("Button")
                .onClick([
                    {
                        "desc":"Action 1",
                        "type":"control",
                        "target":"api_1",
                        "args":[ ],
                        "method":"invoke",
                        "onOK":0,
                        "onKO":1,
                        "okFlag":"_DI_succeed",
                        "koFlag":"_DI_fail",
                        "event":1
                    },
                    "_xui_ui_button5_onclick"
                ]),
                "main"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
},
    /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
    _xui_ui_button5_onclick:function(profile, e, src, value){
        var ns = this, uictrl = profile.boxing();
    }
    }
});