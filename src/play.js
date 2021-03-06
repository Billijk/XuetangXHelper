(function() {
	function onVideoEnded() {
		var currentChapter = document.getElementsByClassName("chapter is-open")[0];
		var pages = currentChapter.getElementsByTagName("li");
		var index;
		for (index in pages) {
			if (pages[index].className.substr(0, 6) == "active") break;
		}
		index = parseInt(index) + 1;
		if (index == pages.length) alert("This chapter has finished!");
		else {
			var addr = pages[index].getElementsByTagName("a")[0].href;
			console.log(addr);
			window.location.href = addr;
		}
	}
	function autoplay(video) {
		video.play();
		video.onended = onVideoEnded;
	}
	function init() {
		var videos = document.getElementsByClassName("xt_video_player");
		if (videos.length == 0) {
			onVideoEnded();
		}
		else {
			var video = videos[0];
			autoplay(video);
		}
	}

	init();
})()
