   var launchRemoved = false;
    var loadingRemoved = false;
    
	apiready = function(){
        api.setStatusBarStyle({
            style: 'light'
        });
        api.openFrame({
            name: 'main',
            url: 'https://www.5xe88.com',
            bounces: false,
            rect: {
                w: 'auto',
                h: 'auto'
            },
            progress:{
                type:'page'
            }
        });
		api.setFrameClient({
		    frameName:'main'
		},function(ret){
		    onBrowserStateChange(ret);
		});
		removeLogic();
        api.addEventListener({
            name: 'keyback'
        }, function(ret, err){
            api.historyBack({
                frameName:'main'
            },function(ret,err){
                if(!ret.status){
                    api.closeWidget();
                }
            });
        });
		removeLogic();
    };

	function onBrowserStateChange(ret){
    	if(0 == ret.state){//¿ªÊ¼¼ÓÔØ
			if(!launchRemoved){
				launchRemoved = true;
				removeLaunch();
			}
    	}
    	if(2 == ret.state){
    		if(!loadingRemoved){
    			loadingRemoved = true;
    			document.getElementById('loading').style.display = 'none';
    		}
    	}
    }
	
	function removeLogic(){
		setTimeout(function(){
			if(!launchRemoved){
				launchRemoved = true;
				removeLaunch();
			}
		}, 3000);
	}

	function removeLaunch(){
		api.removeLaunchView({
			animation:{
				type:"fade",
				subType:"from_right",
				duration:300
			}
		});
	}